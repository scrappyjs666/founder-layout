import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';
import { Card } from '@components/Card/Card';
import { CardList } from '@components/CardList/CardList';
import { UserRepositories } from '@components/UserRepositories/UserRepositories';
import { UserProfile } from '@components/UserProfile/UserProfile';
import { RepositoryEmpty } from '@components/RepositoryEmpty/RepositoryEmpty';
import Pagination from '@components/Pagination/Pagination';
import Prealoder from '@components/UI/Preloader/Preloader';
import { useState, useRef, useEffect, useCallback } from 'react';
import { StartSearching } from '@components/StartSearching/StartSearching';
import { UserNotFound } from '@components/UserNotFound/UserNotFound';
import { usersUrl } from '../../api/constant';
import { getApiResource } from '../../api/network';

export const StartPage = () => {
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const elementsCount = 4;
  const githubPageref = useRef(1);
  const [repos, setRepos] = useState([]);
  const [userProfile, setUserProfile] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const findUser = () => {
    setError(false);
    setRepos([]);
    setLoading(true);
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

  const getMoreRepos = async () => {
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}&per_page=${elementsCount}`;
    await getApiResource(reposUrl)
      .then((data) => {
        setRepos(data);
      });
  };

  // eslint-disable-next-line no-shadow
  const handleChange = (page) => {
    setPage(page);
    githubPageref.current = page;
    getMoreRepos();
  };

  const findReposInex = () => {
    if (repos.length > 1) {
      setCurrentRepos(repos.slice(0, elementsCount));
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

  const handleClickNext = () => {
    githubPageref.current = page + 1;
    getMoreRepos();
    // eslint-disable-next-line no-use-before-define
    if (page < amount.length) {
      setPage((prevValue) => {
        return prevValue + 1;
      });
    }
  };

  useEffect(() => {
    console.log('1')
    findReposInex();
  }, [repos.length]);

  useEffect(() => {
    console.log('2')
    setReposCount(userProfile.public_repos);
  }, [userProfile]);

  const pages = [];

  for (let i = 1; i <= Math.ceil(reposCount / elementsCount); i += 1) {
    pages.push(i);
  }

  // [...Array(Math.ceil(reposCount / elementsCount)).keys()].forEach(x => pages.push(x))

  const amount = Array.from(Array(pages.length), (_, i) => i);
  return (
    <>
      <Header
        findUser={findUser}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      {!loading ? (
        <>
          {repos.length < 1 ? <StartSearching /> : null}
          {error === true ? <UserNotFound /> : null}
          {repos.length > 1
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
                          {currentRepos.map((el) => (
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
                          currentRepos={currentRepos}
                          handleClickNext={handleClickNext}
                          inputValue={inputValue}
                        />
                      </UserRepositories>
                    )
                    : <RepositoryEmpty />}
                </>
              </Main>
            ) : <StartSearching />}
        </>
      ) : <Prealoder />}
    </>
  );
};
