import './styles.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__content'>
          <div className='hero__product'>
            <h1 className='hero__title'>Tresemme Conditioner</h1>
            <h3 className='hero__suptitle'>Naturals Nourishing Moisture 740 ml</h3>
            <p className='hero__description'>
              Leaves hair looking shinier and feeling 10X stronger after just one use.
            </p>
            <span className='hero__price'>US$ 124.0</span>
            <a href='' className='hero__btn'>
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
