import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import '../css/mypage.module.css'
import Header from '../components/header';

function Mypage() {
  let navigate = useNavigate()
  return (
  <div className="Mypage">
    <Header></Header>
  </div>
  );
}

export default Mypage;


