
//lib
import axios from 'axios';
//components
import { Header } from '@components/Header/Header'
import { Main } from '@components/Main/Main';
import { Card } from '@components/Card/Card'
import { ReposInfo } from '@components/ReposInfo/ReposInfo';
import { Profile } from '@components/Profile/Profile';
import { PaginateBar } from '@components/PaginateBar/PaginateBar';
import { RepositoryEmpty } from '@components/RepositoryEmpty/RepositoryEmpty';
import { StartSearching } from '@components/StartSearching/StartSearching';
import Pagination from '@components/Pagination/Pagination';
//hooks
import { useState, useEffect, useCallback } from 'react';
//constants
import {usersUrl } from '../constants/api.js'

import  { getApiResource } from '../utils/network';

export const MainPage = () => {
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('')
  const [repos, setRepos] = useState([])
  const [inputValue, setinputValue] = useState('')
  
  //pagination
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const [githubPage, setGithubPage] = useState(1);
  const pageSize = 4;
  //loading
  const [loading, setLoading] = useState(false);

  const  findUser =  useCallback(() => {
  setUserNickName(inputValue);
  const reposUrl = usersUrl + inputValue + "/repos?page=" +  githubPage ;
  const profileUrl = usersUrl + inputValue;
  getApiResource(reposUrl)
    .then(data => {
    setRepos([...data, ...repos]);
    console.log(repos)
  });
  getApiResource(profileUrl)
    .then(data => {
    setUserProfile(data);
    console.log(userProfile)
  });
}, [inputValue])

    
  const handleChange = useCallback((page) => {
    setPage(page);
    if(page === Math.ceil((repos.length/pageSize)+1))  {
      setGithubPage((prevValue) => {
        return prevValue + 1
    })
      console.log(githubPage, 'githubpage')
      findUser();
    }
  },[page]);

  useEffect(() => {
    setPage(page);
    const lastReposIndex = page * pageSize;
    const firstReposIndex = lastReposIndex - pageSize;
    setCurrentRepos(repos.slice(firstReposIndex, lastReposIndex));
  }, [handleChange]);

  const handleClickPrev = () => {
    if (page > 1) {
      setPage((prevValue) => {
        return prevValue - 1;
      });
    }
  };

  const handleClickNext = () => {
    if (page < amount.length) {
      setPage((prevValue) => {
        return prevValue + 1;
      });
    }
  };

  useEffect(() => {
    setReposCount(userProfile.public_repos);
    setCurrentRepos(repos.slice(0, pageSize));
  }, [userProfile]);

  let pages = [];

  for (let i = 1; i <= Math.ceil(reposCount / pageSize); i++) {
    pages.push(i);
  }

  const amount = Array.from(Array(pages.length), (_, i) => i);
  return (
    <>
      <Header findUser={findUser} setinputValue={setinputValue} />
      <Main>
      {userProfile?   
        <>
          <Profile
          avatar={userProfile.avatar_url}
          name={userProfile.name} 
          userName={userProfile.login} 
          link = {userProfile.html_url}
          followers={userProfile.followers}
          following={userProfile.following}
        />
        {reposCount ? 
        <ReposInfo 
        title = {'Repositories'}
        reposCount = {reposCount}>
        {currentRepos.map((card) =>
          <Card 
            name={card.name} 
            link={card.html_url} 
            description={card.description 
            ? card.description 
            : '!-------The author has not written a description yet---------!'} 
            key = {card.name}/>)}
          <PaginateBar>
          <Pagination 
            setinputValue = {setinputValue}
            handleClickPrev = {handleClickPrev}
            pageSize = {pageSize}
            page = {page}
            reposCount = {reposCount}
            amount = {amount}
            handleChange = {handleChange}
            currentRepos = {currentRepos}
            handleClickNext = {handleClickNext}
          />
          </PaginateBar>
        </ReposInfo>
          : 
        <RepositoryEmpty/>}
        </>
      : <StartSearching/>}
      </Main>
      </>
  );
};