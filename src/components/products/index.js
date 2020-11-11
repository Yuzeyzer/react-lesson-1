import React from 'react';
import productImg from '../../assets/productflower.png'

const Products = () => {
  return (
    <section className='products'>
      <div className='container'>
        <div className='products__row row'>
          <div className='col-6 products__item products__item-img'>
          </div>
          <div className='col-6 products__item'>
            <img src={productImg} alt='' className='products__item__img' />
            <h2 className='products__item__title title'>
              All Tresemme Naturals Product Used By Professionas
            </h2>
            <h3 className='products__item__subtitle subtitle'>Used By Professionas</h3>
            <p className='products__item__description description'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, illo?
            </p>
            <a href='' className='products__item__btn btn'>
              View All
            </a>
          </div>
          <div className='col-6 products__item '>
            <img src={productImg} alt='' className='products__item__img' />
            <h2 className='products__item__title title'>All Avena Orgin Naturals Product</h2>
            <h3 className='products__item__subtitle subtitle'>Electric c Capsules</h3>
            <p className='products__item__description description'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quidem!</p>
            <a href='' className='products__item__btn btn'>View All</a>
          </div>
          <div className='col-6 products__item products__item-img'></div>
          <div className='col-6 products__item products__item-img'></div>
          <div className='col-6 products__item'>
            <img src={productImg} alt='' className='products__item__img' />
            <h2 className='products__item__title title'>All soda pura Naturals Product</h2>
            <h3 className='products__item__subtitle subtitle'>Grown up soda refesment</h3>
            <p className='products__item__description description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, odit!</p>
            <a href='' className='products__item__btn btn'>View All</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
