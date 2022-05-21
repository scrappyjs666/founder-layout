import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';
import { Card } from '@components/Card/Card';
import { CardList } from '@components/CardList/CardList';
import { UserRepositories } from '@components/UserRepositories/UserRepositories';
import { UserProfile } from '@components/UserProfile/UserProfile';
import { RepositoryEmpty } from '@components/RepositoryEmpty/RepositoryEmpty';
import Pagination from '@components/Pagination/Pagination';
import Prealoder from '@components/UI/Preloader/Preloader';
import { useState, useRef, useEffect } from 'react';
import { StartSearching } from '@components/StartSearching/StartSearching';
import { UserNotFound } from '@components/UserNotFound/UserNotFound';
import { useNavigate } from 'react-router-dom';
import { usersUrl } from '@api/constant';
import { getApiResource } from '@api/network';
import TopBarProgress from 'react-topbar-progress-indicator';

export const StartPage = () => {
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const elementsCount = 4;
  const githubPageref = useRef(1);
  const [repos, setRepos] = useState([]);
  const [userProfile, setUserProfile] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  TopBarProgress.config({
    barColors: {
      0: '#fff',
      '1.0': '#00ff00',
    },
    shadowBlur: 5,
  });

  const clearState = () => {
    setPage(1);
    setError(false);
    setRepos([]);
    setLoading(true);
    githubPageref.current = 1;
  };

  const findUser = () => {
    clearState();
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}&per_page=${elementsCount}`;
    const profileUrl = usersUrl + inputValue;
    getApiResource(reposUrl)
      .then((data) => {
        setRepos(data);
      });
    getApiResource(profileUrl)
      .then((data) => {
        if (!data) { setError(true); }
        setUserProfile(data);
        setTimeout(() => { setLoading(false); }, 2500);
      });
  };

  const getMoreRepos = () => {
    setLoadingPage(true);
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}&per_page=${elementsCount}`;
    getApiResource(reposUrl)
      .then((data) => {
        setRepos(data);
        setLoadingPage(false);
      });
  };

  const pages = Array.from({ length: Math.ceil(reposCount / elementsCount) }, (_, i) => i + 1);

  const amount = Array.from(Array(pages.length), (_, i) => i);

  const handleChange = (page) => {
    setPage(page);
    githubPageref.current = page;
    getMoreRepos();
  };

  const handleClickNext = () => {
    githubPageref.current = page + 1;
    getMoreRepos();
    if (page < amount.length) {
      setPage((prevValue) => {
        return prevValue + 1;
      });
    }
  };

  const handleClickPrev = () => {
    githubPageref.current = page - 1;
    getMoreRepos();
    if (page > 1) {
      setPage((prevValue) => {
        return prevValue - 1;
      });
    }
  };

  useEffect(() => {
    if (repos.length > 1) {
      repos.slice(0, elementsCount);
    }
  }, [repos.length, page]);

  useEffect(() => {
    setReposCount(userProfile.public_repos);
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      navigate(`user/${userProfile.login}/page/${page}`);
    }
    if (error || userProfile.length < 1) { navigate('/*'); }
  }, [userProfile, page]);

  return (
    <>
      <Header
        findUser={findUser}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {loadingPage ? <TopBarProgress /> : null}
      {!loading ? (
        <>
          {!userProfile && !error ? <StartSearching /> : null}
          {error ? <UserNotFound /> : null}
          {userProfile
            ? (
              <Main>
                <>
                  <UserProfile
                    avatar={userProfile.avatar_url}
                    name={userProfile.name}
                    userName={userProfile.login}
                    link={userProfile.html_url}
                    followers={userProfile.followers}
                    following={userProfile.following}
                  />
                  {reposCount
                    ? (
                      <UserRepositories
                        title="Repositories"
                        reposCount={reposCount}
                      >
                        <CardList>
                          {repos.map((el) => (
                            <Card
                              name={el.name}
                              link={el.html_url}
                              description={el.description || '!-------The author has not written a description yet---------!'}
                              key={el.html_url}
                            />
                          ))}
                        </CardList>
                        <Pagination
                          setInputValue={setInputValue}
                          handleClickPrev={handleClickPrev}
                          elementsCount={elementsCount}
                          page={page}
                          reposCount={reposCount}
                          amount={amount}
                          handleChange={handleChange}
                          currentRepos={repos}
                          handleClickNext={handleClickNext}
                          inputValue={inputValue}
                        />
                      </UserRepositories>
                    )
                    : <RepositoryEmpty />}
                </>
              </Main>
            ) : null}
        </>
      ) : <Prealoder />}
    </>
  );
};
