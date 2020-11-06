import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default/Default';
import ProductList from './Components/ProductList/ProductList';
import Details from './Components/Details/Details';
import Modal from './Components/Modal/Modal';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
      <footer>
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </>
  );
}

export default App;
