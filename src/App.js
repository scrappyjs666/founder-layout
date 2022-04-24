import axios from 'axios';
import './App.scss';
// const REPOS = 'https://api.github.com/users/USERNAME/repos';
// const OriginName = 'scrappyjs666'
// const USERS = 'https://api.github.com/users/'+OriginName;

//  useEffect(() => {
//     const findUser = axios.get('https://api.github.com/users/'+OriginName).then(({ data }) => console.log(data));
//     const findRepoUser = axios.get('https://api.github.com/users/'+OriginName+'/repos').then(({ data }) => console.log(data));
//   }, [name]);

// axios.get('https://api.github.com/users/'+OriginName).then(({ data }) => console.log(data));
// axios.get('https://api.github.com/users/'+OriginName+'/repos').then(({ data }) => console.log(data));


async function inputValue() {
  let OriginName = document.querySelector('.Mem').value;
  console.log(OriginName)
  const RespUserRepos = await fetch('https://api.github.com/users/'+OriginName+'/repos');
  const RespUser = await fetch('https://api.github.com/users/'+OriginName);
  const user = await RespUser.json();
  const UserRepos = await RespUserRepos.json();
  console.log(UserRepos)
  console.log(user);
}

function App() {
  return (
    <div>
      <button onClick={inputValue} className='click'>click me</button>
      <input className='Mem'></input>
    </div>
  );      
}


export default App;
