import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.scss';
const Navbar = () =>{
  return <nav>
      <Link to='/'>Home</Link>
      <Link to='/mdpreview'>Markdown Previewer</Link>
    </nav>
}
export default Navbar;