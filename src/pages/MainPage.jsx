import { Main } from '@components/Main/Main';
import { Card } from '@components/Card/Card';
import { CardList } from '@components/CardList/CardList';
import { UserRepositories } from '@components/UserRepositories/UserRepositories';
import { UserProfile } from '@components/UserProfile/UserProfile';
import { RepositoryEmpty } from '@components/RepositoryEmpty/RepositoryEmpty';
import Pagination from '@components/Pagination/Pagination';
import {
  useState, useEffect, useCallback,
} from 'react';
import Prealoder from '@components/UI/Preloader/Preloader';

export const MainPage = ({
  repos, userProfile, loading, reposRef, setinputValue, githubPageref, findUser,
}) => {
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const pageSize = 4;
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
              {loading ? <Prealoder />
                : (
                  <CardList>
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
                  </CardList>
                )}
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
