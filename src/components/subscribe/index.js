import React from 'react';
import Atabek from '../../assets/atabek.jpg'
import leaf7 from '../../assets/leaf-7.png'
import './style.scss';

const subscribe = () => {
  return (
    <section className='subscribe'>
      <div className='container'>
        <div className='subscribe__content row'>
          <div className='col-6'>
            <h2 className='subscribe__title title'>Subscribe to our newsletter</h2>
            <p className='subscribe__subtitle subtitle'>Send me your email address</p>
            <p className='subscribe__description description'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
            <input placeholder='Your email' type='text' className='subscribe__input' />
          </div>
          <div className='col-6 subscribe__item'>
						<img src={Atabek} alt="" className="subscribe__atabek"/>
						<img src={leaf7} alt="" className="subscribe__leaf"/>
					</div>
        </div>
      </div>
    </section>
  );
};

export default subscribe;
