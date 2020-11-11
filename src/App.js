import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';
import './base.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
