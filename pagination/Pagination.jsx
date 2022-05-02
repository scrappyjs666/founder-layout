import styles from './Pagination.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import  arrowleft  from './arrowleft.svg';
import  arrowright  from './arrowright.svg';
import cn from 'classnames';
import { BrowserRouter as Router, NavLink } from "react-router-dom";


const  Pagination = () => {
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('')
  const [repos, setRepos] = useState([])
  const [inputValue, setinputValue] = useState('')

  //pagination
  const [reposCount, setReposCount] = useState(0);
  const [page, setPage] = useState(1);
  const [currentRepos, setCurrentRepos] = useState([]);
  const [currentGithubPage, setcurrentGithubPage] = useState(1)
  const pageSize = 4;

  const usersUrl = 'https://api.github.com/users/';
  async function findUser() {
    setUserNickName(inputValue);
    let RespUserRepos = await (await axios.get(usersUrl + inputValue +'/repos?page='+{currentGithubPage})).data;
    let RespUser = await (await axios.get(usersUrl + inputValue)).data;
    setRepos(RespUserRepos);
    setUserProfile(RespUser);
    console.log(RespUserRepos)
    console.log(RespUser)
  }

  const handleChange = (e) => {
    setPage(Number(e.target.innerText))
    const lastReposIndex = Number(e.target.innerText) * pageSize;
    const firstReposIndex = lastReposIndex - pageSize;
    setCurrentRepos(repos.slice(firstReposIndex , lastReposIndex))
  };

  useEffect(() => {
    setReposCount(userProfile.public_repos)
    setCurrentRepos(repos.slice(0,pageSize))
  }, [userProfile]); 

  let pages = []

  for(let i = 1; i <= Math.ceil(reposCount/pageSize); i++) {
    pages.push(i);
  }
  const amount = Array.from(Array(pages.length), (_, i) => i);
  return(
    <Router>
      <input className={styles.input}
        placeholder = {'Enter GitHub username'} 
        onChange={event => setinputValue(event.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && findUser()}/>
      <button className='mem' onClick={() => findUser()} >click</button>
      <ul className={styles.pagination__list}>
        <div className= {styles.pagination__count}>
        <img style={{marginRight: '25px', transform: 'rotate(180deg)'}} src = {arrowright} alt = {arrowright}/>
        {pageSize*page<= reposCount ? pageSize*page-4 : reposCount}-{pageSize*page<= reposCount ? pageSize*page : reposCount} of {reposCount} items
        </div>  
          {amount?.map((res, key) => (
            <NavLink
              onClick={(e)=>handleChange(e)}
              to={`/user/repos/page/${res + 1}`}
              className={({ isActive }) => isActive ? cn(styles.pagination__item, styles.active) : styles.pagination__item}
              key={key}
            >
              {res + 1}
            </NavLink>
          ))}
          <img src = {arrowleft} alt = {arrowleft}/>
      </ul>
    </Router>
  )
}

export default Pagination;

