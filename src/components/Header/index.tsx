import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

import logo from '../../assets/images/logo-white.svg'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img height={30} src={logo} alt='welcome to vizzuality' />
      </div>
      <ul className='header_menu'>
        <li className='header_menu_item'>
          <Link className='header_menu_item_link' to="/charts">Charts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
