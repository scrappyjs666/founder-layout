
import axios from 'axios';
import '../App.scss';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Card } from '../components/Card';
import { ReposInfo } from '../components/ReposInfo';
import { Profile } from '../components/Profile';
import { PaginateBar } from '../components/PaginateBar';
import { BasePagination } from '../components/BasePagination';
import Pagination from '@mui/material/Pagination';
import { RepositoryEmpty } from '../components/RepositoryEmpty';
import { StartSearching } from '../components/StartSearching';

export const MainPage = () => {
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('')
  const [repos, setRepos] = useState([])
  const [inputValue, setinputValue] = useState('')
  
  //pagination
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const pageSize = 4;
  //loading
  const [loading, setLoading] = useState(false);
  const usersUrl = 'https://api.github.com/users/';
  async function findUser() {
    setLoading(true);
    setUserNickName(inputValue);
    let RespUserRepos = await (await axios.get(usersUrl + inputValue+'/repos')).data;
    let RespUser = await (await axios.get(usersUrl + inputValue)).data;
    setRepos(RespUserRepos);
    setUserProfile(RespUser);
    setLoading(false);
    console.log(RespUserRepos)
    console.log(RespUser)
  }
  
  
  const handleChange = (e, value) => {
    setPage(value);
    const lastReposIndex = value * pageSize;
    const firstReposIndex = lastReposIndex - pageSize;
    setCurrentRepos(repos.slice(firstReposIndex , lastReposIndex))
    console.log(reposCount, 'reposCOunt')
  };

  
  useEffect(() => {
    setReposCount(userProfile.public_repos)
    setCurrentRepos(repos.slice(0,4))
  }, [userProfile]); 
  return (
    <>
      <Header findUser={findUser} setinputValue= {setinputValue}  urlLink={inputValue}/>
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
        <ReposInfo title = {'Repositories'} reposCount = {reposCount}>
        {currentRepos.map((card) =>
          <Card name={card.name} link={card.html_url} description={card.description} key = {card.name}/>)}
          <PaginateBar firstReposIndex = {pageSize*page<= reposCount ? pageSize*page-4 : reposCount} lastReposIndex = {pageSize*page<= reposCount ? pageSize*page : reposCount} reposCount ={reposCount}>
            <Pagination  
            page={page} 
            onChange={handleChange} 
            count={Math.ceil(reposCount/pageSize)} 
            size="small" 
            color ='primary' 
            shape="rounded"/>
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