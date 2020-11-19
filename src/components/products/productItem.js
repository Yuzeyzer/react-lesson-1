import React from 'react';
import productImg from '../../assets/productflower.png';

function ProductItem({ title, subtitle, description, img, boolean }) {
  if (boolean) {
    return (
      <div className='col-6 products__item'>
        <img src={img} />
      </div>
    );
  } else {
    return (
      <div className='col-6 products__item'>
        <img src={productImg} alt='' className='products__item__img' />
        <h2 className='products__item__title title'>{title}</h2>
        <h3 className='products__item__subtitle subtitle'>{subtitle}</h3>
        <p className='products__item__description description'>{description}</p>
        <a href='' className='products__item__btn btn'>
          View All
        </a>
      </div>
    );
  }
}

export default ProductItem;