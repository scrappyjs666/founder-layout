import { Main } from '@components/Main/Main';
import { Card } from '@components/Card/Card';
import { CardList } from '@components/CardList/CardList';
import { UserRepositories } from '@components/UserRepositories/UserRepositories';
import { UserProfile } from '@components/UserProfile/UserProfile';
import { RepositoryEmpty } from '@components/RepositoryEmpty/RepositoryEmpty';
import Pagination from '@components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import Prealoder from '@components/UI/Preloader/Preloader';

export const MainPage = ({
  userProfile, loading, reposRef, setinputValue, githubPageref, getMoreRepos,
}) => {
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const pageSize = 4;
  // eslint-disable-next-line no-shadow
  const handleChange = (page) => {
    setPage(page);
    githubPageref.current = page;
    getMoreRepos();
  };

  const findReposInex = () => {
    if (reposRef.current.length > 1) {
      setCurrentRepos(reposRef.current.slice(0.4));
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
    findReposInex();
  }, [handleChange, handleClickNext, reposRef.current.length]);

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
