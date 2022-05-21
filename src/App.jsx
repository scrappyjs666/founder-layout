import { Routes, Route } from 'react-router-dom';
import { StartPage } from '@components/StartPage/StartPage';

const App = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={(<StartPage />)}
      />
    </Routes>
  );
};

export default App;
