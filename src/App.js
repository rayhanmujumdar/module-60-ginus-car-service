import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
