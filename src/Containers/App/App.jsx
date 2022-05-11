import { useNavigate, Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage';
import { StartSearchingPage } from '../../pages/StartSearchPage';
import { Page404 } from '../../pages/Page404';
import { UserNotFoundPage } from '../../pages/UserNotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="StartSearchingPage" element={<StartSearchingPage />} />
      <Route path="UserNotFoundPage" element={<UserNotFoundPage />} />
      <Route path="404" element={<Page404 />} />
    </Routes>
  );
};

export default App;
