import axios from 'axios';
import './App.scss';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Card } from './components/Card';
import { ReposInfo } from './components/ReposInfo';
import { Profile } from './components/Profile';

function App() {
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('')
  const [repos, setRepos] = useState([])
  const [inputValue, setinputValue] = useState('')
  
  
  async function findUser() {
    setUserNickName(inputValue);
    let RespUserRepos = await (await axios.get('https://api.github.com/users/'+inputValue+'/repos')).data;
    let RespUser = await (await axios.get('https://api.github.com/users/'+inputValue)).data;
    setRepos(RespUserRepos);
    setUserProfile(RespUser)
    console.log(RespUserRepos)
    console.log(RespUser);
    console.log(userProfile.avatar_url)
  }
  
  useEffect(() => {
    console.log('repos')
  }, [userNickName]);
  
  return (
    <div>
      <Header>
        <button onClick={() => findUser()}>click me</button>
        <input  onChange={event => setinputValue(event.target.value)} />
      </Header>
      <Main>
        <Profile ProfileImage = {userProfile.avatar_url} ProfileName = {userProfile.name} ProfileUserName = {userProfile.login}  ProfileFollowers = {userProfile.followers}   ProfileFollowing = {userProfile.following}>
        </Profile>
        <ReposInfo Title = {'Repositories'} ReposNumber = {repos.length}>
        {repos.map((card) => <Card nameRepo ={card.name} description = {card.description} key = {card.name}/>)}
        </ReposInfo>
      </Main>
    </div>
  );      
}


export default App;
