import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Start from './pages/Start';
import Login from './pages/Login';
import Main from './pages/Main';
import ToRecord from './pages/ToRecord';
import ViewRecord from './pages/ViewRecord';
import MapSearch from './pages/MapSearch';
import Timer from './pages/Timer';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';
import MyInfo from './pages/MyInfo';
import MapContainer from './components/Map/MapContainer';
import LandingPage from './components/Map/LandingPage';
import GoogleLogin from './components/Login/GoogleLogin';
import KaKaoLogin from './components/Login/KaKaoLogin';
import Category from './components/Category';

function App() {
  // Header와 Footer가 보여질 페이지 경로 목록
  const location = useLocation();
  const showHeaderFooterPaths = ['/main', '/to-record', '/view-record', '/timer', '/mapSearch', '/calendar', '/myInfo', '/settings'];
  // 현재 경로가 showHeaderFooterPaths에 속하는지 확인하는 함수
  const showHeaderFooter = () => showHeaderFooterPaths.includes(location.pathname);

  return (
    <>

      {/* 조건부로 Header를 렌더링 */}
      {showHeaderFooter() && <Header />}
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/to-record' element={<ToRecord />}></Route>
        <Route path='/view-record' element={<ViewRecord />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/timer' element={<Timer />}></Route>
        <Route path='/mapSearch' element={<MapSearch />}></Route>
        <Route path='/myInfo' element={<MyInfo />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
      </Routes>
      {/* 조건부로 Footer를 렌더링 */}
      {showHeaderFooter() && <Footer />}
    </>
  );
}

export default App;
