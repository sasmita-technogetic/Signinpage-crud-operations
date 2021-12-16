import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'
import SigninPage from './components/SigninPage';
import SignupPage from './components/SignupPage';
import { Fragment } from 'react';
import PostdataApi from './components1/PostdataApi';
function App() {
  return (
   
    <>

     <PostdataApi/>

      {/* <BrowserRouter>
      <Navbar/>
      <Fragment>
      <Routes>
      <Route exact path='/' element={< HomePage />}></Route>
      <Route exact path='/login' element={< SigninPage />}></Route>
      <Route exact path='/signup' element={< SignupPage />}></Route>
      </Routes>
      </Fragment>         
    </BrowserRouter>      */}
   
    </>
  );
}

export default App;
