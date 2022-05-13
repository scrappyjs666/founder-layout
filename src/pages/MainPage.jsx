import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';
import { Card } from '@components/Card/Card';
import { UserRepositories } from '@components/UserRepositories/UserRepositories';
import { UserProfile } from '@components/UserProfile/UserProfile';
import { RepositoryEmpty } from '@components/RepositoryEmpty/RepositoryEmpty';
import { StartSearching } from '@components/StartSearching/StartSearching';
import Pagination from '@components/Pagination/Pagination';
import {
  useState, useEffect, useCallback, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { usersUrl } from '@constants/api.jsx';
import { getApiResource } from '@utils/network';
import Prealoder from '@components/UI/Preloader/Preloader';

export const MainPage = () => {
  const githubPageref = useRef(1);
  const reposRef = useRef([]);
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [repos, setRepos] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const pageSize = 4;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [eror, setEror] = useState(null);

  const findUser = async () => {
    setLoading(true);
    setUserNickName(inputValue);
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}`;
    const profileUrl = usersUrl + inputValue;
    await getApiResource(reposUrl)
      .then((data) => {
        if (!data) { navigate('UserNotFoundPage'); }
        setRepos([...data, ...repos]);
        reposRef.current = ([...repos, ...data]);
      });
    await getApiResource(profileUrl)
      .then((data) => {
        setUserProfile(data);
        setLoading(false);
      });
  };

  // eslint-disable-next-line no-shadow
  const handleChange = useCallback((page) => {
    const numberOfPage = Math.ceil(reposCount / 30);
    setPage(page);
    if (page === Math.ceil(repos.length / pageSize) && repos.length < reposCount) {
      githubPageref.current += 1;
      findUser();
    }
  }, [page]);

  const findReposInex = () => {
    const lastReposIndex = page * pageSize;
    const firstReposIndex = lastReposIndex - pageSize;
    setCurrentRepos(reposRef.current.slice(firstReposIndex, lastReposIndex));
  };

  const handleClickPrev = () => {
    if (page > 1) {
      setPage((prevValue) => {
        return prevValue - 1;
      });
    }
  };

  const handleClickNext = () => {
    if (page + 1 === Math.ceil(repos.length / pageSize) && repos.length < reposCount) {
      githubPageref.current += 1;
      findUser();
    }
    // eslint-disable-next-line no-use-before-define
    if (page < amount.length) {
      setPage((prevValue) => {
        return prevValue + 1;
      });
    }
  };

  useEffect(() => {
    findReposInex();
  }, [handleChange, handleClickNext, repos.length]);

  useEffect(() => {
    setReposCount(userProfile.public_repos);
  }, [userProfile]);

  const pages = [];

  for (let i = 1; i <= Math.ceil(reposCount / pageSize); i += 1) {
    pages.push(i);
  }

  const amount = Array.from(Array(pages.length), (_, i) => i);
  return (
    <Main>
      <>
        {loading ? <Prealoder /> : null}
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
              <ul
                className="card__list"
              >
                {currentRepos.map((el) => (
                  <Card
                    name={el.name}
                    link={el.html_url}
                    description={el.description
                      ? el.description
                      : '!-------The author has not written a description yet---------!'}
                    key={el.html_url}
                  />
                ))}
              </ul>
              <Pagination
                setinputValue={setinputValue}
                handleClickPrev={handleClickPrev}
                pageSize={pageSize}
                page={page}
                reposCount={reposCount}
                amount={amount}
                handleChange={handleChange}
                currentRepos={currentRepos}
                handleClickNext={handleClickNext}
              />
            </UserRepositories>
          )
          : <RepositoryEmpty />}
      </>
    </Main>
  );
};
