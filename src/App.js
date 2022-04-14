import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceDetails from './Components/Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
function App() {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className='scroll-smooth'>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
