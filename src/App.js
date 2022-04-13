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
function App() {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
