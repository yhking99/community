import './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import Main from './pages/main';
import Mypage from './pages/mypage';



function App(){
  let navigate = useNavigate()
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={ <Main/> }></Route>
      <Route path="/mypage" element={ <Mypage/> }></Route>
      <Route path='*' element={<div>not found</div>}></Route>
    </Routes>


  </div>
  );
}

export default App;
