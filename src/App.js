import axios from 'axios';
import './App.scss';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Card } from './components/Card';


// const REPOS = 'https://api.github.com/users/USERNAME/repos';
// const OriginName = 'scrappyjs666'
// const USERS = 'https://api.github.com/users/'+OriginName;

//  useEffect(() => {
//     const findUser = axios.get('https://api.github.com/users/'+OriginName).then(({ data }) => console.log(data));
//     const findRepoUser = axios.get('https://api.github.com/users/'+OriginName+'/repos').then(({ data }) => console.log(data));
//   }, [name]);

// axios.get('https://api.github.com/users/'+OriginName).then(({ data }) => console.log(data));
// axios.get('https://api.github.com/users/'+OriginName+'/repos').then(({ data }) => console.log(data));

let RespUserRepos;
let RespUser;
async function inputValue() {
  console.log()
  let OriginName = document.querySelector('.inpq').value;
  console.log(OriginName)
  RespUserRepos = await (await axios.get('https://api.github.com/users/'+OriginName+'/repos')).data;
  RespUser = await (await axios.get('https://api.github.com/users/'+OriginName)).data;
  console.log(RespUserRepos)
  console.log(RespUser);
}

// {cards.map((card) => 
//       <Card nameRepo ={card.obj} description = {'mem'}/>)}
function App({children}) {
  const [cards, setCards] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get('https://api.github.com/users/'+'scrappyjs666'+'/repos').then(({ data }) => setCards(data));
    axios.get('https://api.github.com/users/'+'scrappyjs666').then(({ data }) => setUser(data));
    console.log(setCards)
    console.log(cards)
    console.log(user)
  }, []);
  return (
    <div>
      <button onClick={inputValue} className='click'>click me</button>
      <input className='inpq'></input>
      <Header/>
      <Main repoNumber = {cards.length} ProfileImage = {user.avatar_url}>
      {cards.map((card) => <Card nameRepo ={card.name} description = {card.description} key = {card.name}/>)}
      </Main>
    </div>
  );      
}


export default App;
