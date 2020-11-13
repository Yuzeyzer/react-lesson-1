import { Route, Router } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';
import Example from './components/footer';
import './base.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      {/* <Header />
      <Hero />
      <Products /> */}
      <Route exact path='/' component={Hero} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/aiza' component={Example} />
    </div>
  );
};

export default App;
