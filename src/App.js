import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Record from "./pages/Record";
import MapSearch from "./pages/MapSearch";
import ExerciseList from "./pages/ExerciseList";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Start from './pages/Start';
import Login from './pages/Login';
import Main from './pages/Main';
import Record from './pages/Record';
import MapSearch from './pages/MapSearch';
import ExerciseList from './pages/ExerciseList';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';
import MyInfo from './pages/MyInfo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/Record" element={<Record />}></Route>
        <Route path="/MapSearch" element={<MapSearch />}></Route>
        <Route path="/ExerciseList" element={<ExerciseList />}></Route>
        <Route path="/Calendar" element={<Calendar />}></Route>
        <Route path="/Setting" element={<Settings />}></Route>
        <Route path='/' element={<Start />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Main' element={<Main />}></Route>
        <Route path='/Record' element={<Record />}></Route>
        <Route path='/MapSearch' element={<MapSearch />}></Route>
        <Route path='/ExerciseList' element={<ExerciseList />}></Route>
        <Route path='/Calendar' element={<Calendar />}></Route>
        <Route path='/MyInfo' element={<MyInfo />}></Route>
        <Route path='/Settings' element={<Settings />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
