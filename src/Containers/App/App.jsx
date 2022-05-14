import { useNavigate, Routes, Route } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage';
import { StartSearchingPage } from '@pages/StartSearchPage';
import { UserNotFoundPage } from '@pages/UserNotFoundPage';
import { useState, useRef } from 'react';
import { usersUrl } from '@constants/api.jsx';
import { getApiResource } from '@utils/network';
import { resetAll } from '@utils/resetAll';

const App = () => {
  const githubPageref = useRef(1);
  const reposRef = useRef([]);
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [repos, setRepos] = useState([]);
  const [inputValue, setinputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const findUser = async () => {
    setLoading(true);
    setUserNickName(inputValue);
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}`;
    const profileUrl = usersUrl + inputValue;
    await getApiResource(reposUrl)
      .then((data) => {
        if (data) { navigate('MainPage'); }
        if (data < 1) { navigate('UserNotFoundPage'); }
        setRepos([...data, ...repos]);
        reposRef.current = ([...repos, ...data]);
        console.log(repos)
        console.log(reposRef.current)
        console.log( githubPageref.current, ' githubPageref')
      });
    await getApiResource(profileUrl)
      .then((data) => {
        setUserProfile(data);
        setTimeout(() => { setLoading(false); }, 2000);
      });
      resetAll();
      console.log('11111111111111111111111111')
       console.log(repos)
        console.log(reposRef.current)
  };
  return (
    <>
      <Header
        findUser={findUser}
        setinputValue={setinputValue}
      />
      <Routes>
        <Route
          path="MainPage"
          element={(
            <MainPage
              repos={repos}
              userProfile={userProfile}
              loading={loading}
              reposRef={reposRef}
              setinputValue={setinputValue}
              githubPageref={githubPageref}
              findUser={findUser}
            />
          )}
        />
        <Route path="/" element={<StartSearchingPage />} />
        <Route path="UserNotFoundPage" element={<UserNotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
