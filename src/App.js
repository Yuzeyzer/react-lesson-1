import { Route, Router } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Products from './components/products';
import video from './components/video';
import subscribe from './components/subscribe';
import footer from './components/footer';
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
      <Route exact path='/video' component={video} />
      <Route exact path='/subscribe' component={subscribe} />
      <Route exact path='/footer' component={footer} />

    </div>
  );
};

export default App;
