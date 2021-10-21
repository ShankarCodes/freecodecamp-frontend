import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
const Navbar = () => {
  return <nav>
    <Link to='/'>Home</Link>
    <Link to='/quotes'>Quotes</Link>
    <Link to='/mdpreview'>Markdown</Link>
    <Link to='/pomodoro'>Pomodoro</Link>
    <Link to='text-info'>Text Info</Link>
    <Link to='/calculator'>Calculator</Link>
  </nav>
}
export default Navbar;