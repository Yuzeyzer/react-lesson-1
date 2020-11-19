import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import dribbble from '../../assets/dribbble.svg';
import behance from '../../assets/behance.svg';
import posts from '../../assets/Placeholder.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='row'>
          <div className='col-2'>
            <h2 className='footer__exile__title'>SHOP</h2>
            <ul href='#' className='footer__exile__btn'>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  new in
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  women product
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  men product
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  harbal oil
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  natural product
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  top brands
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  special offers
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  lookbook
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <h2 className='footer__exile__title'>INFORMATION</h2>
            <ul href='#' className='footer__exile__btn'>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  about us
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  customers
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  sevice
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  colection
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  best
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  sellers
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <h2 className='footer__exile__title'>LEGAL</h2>
            <ul href='#' className='footer__exile__btn'>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  Manufacturers
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  Privacy Policy
                </Link>
              </li>
              <li className='footer__exile__item'>
                <Link to='' className='footer__exile__link'>
                  terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-4'>
            <div className='footer__social__followUs'>
              <h2 className='footer__social__title'>FOLLOW US</h2>
              <div className='footer__social__content'>
                <a href='#' className='footer__social__icon'>
                  <img src={facebook} alt='' className='footer__social__item' />
                </a>
                <a href='#' className='footer__social__icon'>
                  <img src={twitter} alt='' className='footer__social__item' />
                </a>
                <a href='#' className='footer__social__icon'>
                  <img src={dribbble} alt='' className='footer__social__item' />
                </a>
                <a href='#' className='footer__social__icon'>
                  <img src={behance} alt='' className='footer__social__item' />
                </a>
              </div>
            </div>
            <div className='footer__social__instagram'>
              <h2 className='footer__social__title'>INSTAGRAM</h2>
              <div className='footer__social__images'>
                <img src={posts} alt='' className='footer__social__posts' />

                <img src={posts} alt='' className='footer__social__posts' />

                <img src={posts} alt='' className='footer__social__posts' />

                <img src={posts} alt='' className='footer__social__posts' />

                <img src={posts} alt='' className='footer__social__posts' />

                <img src={posts} alt='' className='footer__social__posts' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__awto'>
        <h3 className='footer__design'>
          Design By <span className='footer__abdula'>Abdullah Un Noman</span>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
