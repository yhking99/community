import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import {Link, Route, Routes, useNavigate, Outlet} from 'react-router-dom';
import Header from '../components/header';

function Main() {
  let navigate = useNavigate()
  return (
  <div className="Main">
    <Header></Header>
  </div>
  );
}

export default Main;