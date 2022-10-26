import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import {Data} from './components/Data'
import ModalPage from './components/Modal';
import TodoPage from './App';
import './Nav.css'
function Nav() {

  return (
  <BrowserRouter>
    <nav className='navLinks'>
      <ul className='links'>
        <li className='link-item'>
          <Link to="/todos" className='link'>Todos</Link>
        </li>
        <li className='link-item'>
          <Link to="/profile" className='link'>Profile</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/todos' element={<TodoPage/>} />
      <Route path='/profile' element={<ModalPage/>} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default Nav;
