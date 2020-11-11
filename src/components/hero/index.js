import './styles.scss';
import shampoo from '../../assets/shampoon.png';
import leaf1 from '../../assets/leaf-1.png';
import leaf2 from '../../assets/leaf-2.png';
import leaf3 from '../../assets/leaf-3.png';
import leaf4 from '../../assets/leaf-4.png';
import leaf5 from '../../assets/leaf-5.png';
import leaf6 from '../../assets/leaf-6.png';
import natural from '../../assets/natural.png';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__content'>
          <img src={shampoo} alt='' className='hero__shampoo' />
          <ul className='hero__leafs'>
            <li className="hero__leaf leaf--1">
              <img src={leaf1} alt='' />
            </li>
            <li className="hero__leaf leaf--2">
              <img src={leaf2} alt='' />
            </li>
            <li className="hero__leaf leaf--3">
              <img src={leaf3} alt='' />
            </li>
            <li className="hero__leaf leaf--4">
              <img src={leaf4} alt='' />
            </li>
            <li className="hero__leaf leaf--5">
              <img src={leaf5} alt='' />
            </li>
            <li className="hero__leaf leaf--6">
              <img src={leaf6} alt='' />
            </li>
          </ul>
          <img src={natural} alt="" className="hero__natural"/>
          <div className='hero__product'>
            <h1 className='hero__title title'>Tresemme Conditioner</h1>
            <h3 className='hero__suptitle'>Naturals Nourishing Moisture 740 ml</h3>
            <p className='hero__description'>
              leafs hair looking shinier and feeling 10X stronger after just one use.
            </p>
            <span className='hero__price'>US$ 124.0</span>
            <a href='' className='hero__btn btn'>
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
