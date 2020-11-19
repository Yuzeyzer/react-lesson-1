import React from 'react';
import ProductItem from './productItem';
import { obj } from './backend';

const Products = () => {
  const array = ['hatam', 'ajara', 'aiza', 'zhumadil'];
  const arr = array.map((item, index) => {
    return array[item][0].toUpperCase();
  })

  console.log(arr);
  return (
    <section className='products'>
      <div className='container'>
        <div className='products__row row'>
          {obj.forEach((item) => {
            return (
              <ProductItem
                boolean={item.bool}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                img={item.img}
              />
              
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
