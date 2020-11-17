import React from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/search.svg';
import phone from '../../assets/phone.svg';
import cart from '../../assets/cart.svg';
import user from '../../assets/user.svg';
import './styles.scss';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__top'>
          <div>
            <img className='header__phone' src={phone} alt='phone' />
            <img src={search} alt='search' />
          </div>
          <div className='header__logo'>
            <a href='' className='logo__link'>
              Shoply
            </a>
          </div>
          <div>
            <img className='header__cart' src={cart} alt='cart' />
            <img src={user} alt='user' />
          </div>
        </div>
        <div className='header__bottom'>
          <nav className='header__nav nav'>
            <ul className='nav__menu'>
              <li className='nav__item'>
                <Link to='/' className='nav__link'>
                  Home
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/products' className='nav__link'>
                  New In
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/video' className='nav__link'>
                  Women Product
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/subscribe' className='nav__link'>
                  Men Product
                </Link>
              </li>
              <li className='nav__item'>
                <Link to='/footer' className='nav__link'>
                  Top Brands
                </Link>
              </li>
              <li className='nav__item'>
                <a href='' className='nav__link'>
                  Special Offers
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
