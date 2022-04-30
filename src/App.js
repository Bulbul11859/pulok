
import { BrowserRouter as Router, Switch, Route, NavLink,Routes } from 'react-router-dom';

import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import About from './pages/About';

import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/product' element ={<Products/>}/>
      </Routes>
       
      
      </Router>
   
      </>
  );
}

export default App;
