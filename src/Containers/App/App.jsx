import { useNavigate, Routes, Route } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage';
import { StartSearchingPage } from '@pages/StartSearchPage';
import { UserNotFoundPage } from '@pages/UserNotFoundPage';
import { useState, useRef, useEffect } from 'react';
import { usersUrl } from '@constants/api.jsx';
import { getApiResource } from '@utils/network';

const App = () => {
  const githubPageref = useRef(1);
  const reposRef = useRef([]);
  const userNickNameRef = useRef('');
  const [userProfile, setUserProfile] = useState('');
  const [inputValue, setinputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const pageSize = 4;

  useEffect(() => {
    if (localStorage.getItem('reposUrl')) {
      reposRef.current = JSON.parse(localStorage.getItem('reposUrl'));
      setUserProfile(JSON.parse(localStorage.getItem('profileUrl')));
      setinputValue(JSON.parse(localStorage.getItem('profileUrl')).login);
      userNickNameRef.current = userProfile.login;
    }
  }, []);

  const findUser = async () => {
    if (reposRef.current.length > 1) {
      reposRef.current = ([]);
    }
    setLoading(true);
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}&per_page=${pageSize}`;
    const profileUrl = usersUrl + inputValue;
    await getApiResource(reposUrl)
      .then((data) => {
        reposRef.current = data;
        localStorage.setItem('reposUrl', JSON.stringify(data));
      });
    await getApiResource(profileUrl)
      .then((data) => {
        setUserProfile(data);
        localStorage.setItem('profileUrl', JSON.stringify(data));
        setTimeout(() => { setLoading(false); }, 2000);
        userNickNameRef.current = data.login;
        if (data) { navigate(`MainPage/repos/users:${userNickNameRef.current}/page/`); }
        if (!data) { navigate('UserNotFoundPage'); }
      });
  };
  const getMoreRepos = async () => {
    const reposUrl = `${usersUrl + inputValue}/repos?page=${githubPageref.current}&per_page=${pageSize}`;
    await getApiResource(reposUrl)
      .then((data) => {
        reposRef.current = data;
      });
  };

  return (
    <>
      <Header
        findUser={findUser}
        setinputValue={setinputValue}
        inputValue={inputValue}
      />
      <Routes>
        <Route
          path={`MainPage/repos/users:${userNickNameRef.current}/page/*`}
          element={(
            <MainPage
              userProfile={userProfile}
              loading={loading}
              reposRef={reposRef}
              setinputValue={setinputValue}
              githubPageref={githubPageref}
              findUser={findUser}
              getMoreRepos={getMoreRepos}
              pageSize={pageSize}
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
