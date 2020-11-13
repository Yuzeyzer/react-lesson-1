import React from 'react';
import ProductItem from './productItem';
import { obj } from './backend';

const Products = () => {
  return (
    <section className='products'>
      <div className='container'>
        <div className='products__row row'>
          {obj.map((item) => {
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
