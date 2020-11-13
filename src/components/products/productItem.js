import productImg from '../../assets/productflower.png';

function ProductItem(props) {
  if (props.boolean) {
    return (
      <div className='col-6 products__item'>
        <img src={props.img} />
      </div>
    );
  } else {
    return (
      <div className='col-6 products__item'>
        <img src={productImg} alt='' className='products__item__img' />
        <h2 className='products__item__title title'>{props.title}</h2>
        <h3 className='products__item__subtitle subtitle'>{props.subtitle}</h3>
        <p className='products__item__description description'>{props.description}</p>
        <a href='' className='products__item__btn btn'>
          View All
        </a>
      </div>
    );
  }
}

export default ProductItem;
