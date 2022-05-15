import { useNavigate, Routes, Route } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage';
import { StartSearchingPage } from '@pages/StartSearchPage';
import { UserNotFoundPage } from '@pages/UserNotFoundPage';
import { useState, useRef } from 'react';
import { usersUrl } from '@constants/api.jsx';
import { getApiResource } from '@utils/network';

const App = () => {
  const githubPageref = useRef(1);
  const reposRef = useRef([]);
  const [userNickName, setUserNickName] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [inputValue, setinputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const findUser = async () => {
    if (reposRef.current.length > 1) {
      reposRef.current = ([]);
    }
    setLoading(true);
    setUserNickName(inputValue);
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}`;
    const profileUrl = usersUrl + inputValue;
    await getApiResource(reposUrl)
      .then((data) => {
        if (data) { navigate('MainPage'); }
        if (data < 1) { navigate('UserNotFoundPage'); }
        reposRef.current = ([...reposRef.current, ...data]);
      });
    await getApiResource(profileUrl)
      .then((data) => {
        setUserProfile(data);
        setTimeout(() => { setLoading(false); }, 2000);
      });
  };

  const getMoreRepos = async () => {
    setLoading(true);
    setUserNickName(inputValue);
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}`;
    await getApiResource(reposUrl)
      .then((data) => {
        reposRef.current = ([...reposRef.current, ...data]);
        setTimeout(() => { setLoading(false); }, 2000);
      });
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
              userProfile={userProfile}
              loading={loading}
              reposRef={reposRef}
              setinputValue={setinputValue}
              githubPageref={githubPageref}
              findUser={findUser}
              getMoreRepos={getMoreRepos}
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
