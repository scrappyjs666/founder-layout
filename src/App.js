import { MainPage } from './pages/MainPage';
import { useNavigate } from 'react-router-dom';
import { StartSearchingPage } from './pages/StartSearchPage';
import { Routes, Route } from "react-router-dom";
import { Page404 } from './pages/Page404';


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="about" element={<MainPage/>} />
      <Route path="*" element={<Page404/>} />
    </Routes>
    </div>
  );      
}


export default App;
