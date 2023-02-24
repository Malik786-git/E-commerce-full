import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
// import TopNavbar from './components/TopNavbar';
// import Home from './components/Home';
// import Welcome from './components/Welcome';
// import Product from './components/Product';
// import Single from './components/Single';
// import More from './components/More';
// import Login from './components/Login';
// import Protected from './components/routes/Protected';
// import AddToCard from './components/AddToCard';
// import SearchPage from './components/SearchPage';
import AppRoutes from './components/routes/routes';


function App() {

  let appRoutes = useRoutes(AppRoutes)

  return (
   <>

   {/* <BrowserRouter> */}
        {/* <TopNavbar/>
      <Routes>
        <Route path='/'  element={<Home/>}   />
        <Route path='/login'  element={<Login/>}   />
        <Route path='/product'  element={<Product/>}   />
        <Route path='/product/single' element={<Single/>}   />
        <Route path='/addtocard' element={<AddToCard/>}   />
        <Route path='/search' element={<SearchPage/>}   />
        <Route path='/search/single' element={<Single/>}   />
        <Route path='/welcome/'  element={<Protected Component={Welcome} />}   >
          <Route path='more'  element={<More/>} />
        </Route>
      </Routes> */}
      {appRoutes}
   {/* </BrowserRouter> */}
   </>
  );
}


export default App;
