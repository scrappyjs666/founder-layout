import { useNavigate, Routes, Route } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage';
import { StartSearchingPage } from '@pages/StartSearchPage';
import { UserNotFoundPage } from '@pages/UserNotFoundPage';

const App = ({ findUser, setinputValue }) => {
  return (
    <>
      <Header
        findUser={findUser}
        setinputValue={setinputValue}
      />
      <Routes>
        <Route path="StartSearchingPage" element={<MainPage />} />
        <Route path="/" element={<StartSearchingPage />} />
        <Route path="UserNotFoundPage" element={<UserNotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
