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
  
  //pagination
  const [reposNumber, setReposNumber] = useState(0);
  const [pageNumber, setPageNumber] = useState(0)


  
  const usersUrl = 'https://api.github.com/users/';
  async function findUser() {
    setUserNickName(inputValue);
    let RespUserRepos = await (await axios.get(usersUrl + inputValue+'/repos')).data;
    let RespUser = await (await axios.get(usersUrl + inputValue)).data;
    setRepos(RespUserRepos);
    setUserProfile(RespUser)
  }


  useEffect(() => {
    setReposNumber(repos.length)
    setPageNumber(Math.round(reposNumber/4))
    console.log(pageNumber)
    console.log(reposNumber)
  }, [userProfile]);


  return (
    <div>
      <Header findUser={findUser} setinputValue={setinputValue} />
      <Main>
        <Profile
          avatar={userProfile.avatar_url}
          name={userProfile.name}
          userNamel={userProfile.userName}
          followers={userProfile.followers}
          following={userProfile.following}
        />
        <ReposInfo title = {'Repositories'} reposNumber = {reposNumber}>
        {repos.map((card ) => <Card name={card.name} description={card.description} key = {card.name}/>)}
        </ReposInfo>
      </Main>
    </div>
  );      
}


export default App;
