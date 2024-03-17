// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import ExcerciseDetail from './components/Pages/ExcerciseDetail';
import Home from './components/Pages/Home';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/excercise/:id' element={<ExcerciseDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
