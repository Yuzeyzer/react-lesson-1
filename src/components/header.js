import search from '../assets/search.svg';
import phone from '../assets/phone.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__top'>
          <div>
            <img src={phone} alt='phone' />
            <img src={search} alt='search' />
          </div>
					<div className="header__logo">
						<a href="" className="logo__link">
							Shoply
						</a>
					</div>
        </div>
        <div className='header__bottom'>
          <nav className='header__nav nav'>
            <ul className='nav__menu'>
              <li className='nav__item'>
                <a href='' className='nav__link'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <a href='' className='nav__link'>
                  New In
                </a>
              </li>
              <li className='nav__item'>
                <a href='' className='nav__link'>
                  Women Product
                </a>
              </li>
              <li className='nav__item'>
                <a href='' className='nav__link'>
                  Men Product
                </a>
              </li>
              <li className='nav__item'>
                <a href='' className='nav__link'>
                  Top Brands
                </a>
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
