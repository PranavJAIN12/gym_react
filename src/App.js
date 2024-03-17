// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/excercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
