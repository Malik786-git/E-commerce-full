import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Single from './components/Single';
import More from './components/More';
import Login from './components/Login';
import Protected from './components/routes/Protected';

function App() {

  return (
   <>

   <BrowserRouter>
        <TopNavbar/>
      <Routes>
        <Route path='/'  element={<Home/>}   />
        <Route path='/login'  element={<Login/>}   />
        <Route path='/product'  element={<Product/>}   />
        <Route path='/product/single' element={<Single/>}   />
        <Route path='/welcome/'  element={<Protected Component={Welcome} />}   >
          <Route path='more'  element={<More/>} />
        </Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}


export default App;
