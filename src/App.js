import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import bgImg from './field.jpg';

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  let sectionStyle = {
    backgroundImage: `url(${bgImg})`

  };

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");

  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            {/*<button onClick={openMenu}>
              &#9776;
  </button>*/}
            <Link to="/">Goalaso Store</Link><i class="fab fa-500px"></i>
          </div>
          {/*<nav className="menu-links">
            <ul className="links-list">
              <li><a href="#">Store</a></li>
              <li><a href="#">Sale</a></li>
              <li><a href="#">Sizes</a></li>
              <li><a href="#">About</a></li>
  <li><a href="#">Feedback</a></li>
            </ul>
          </nav>*/}
          <div className="menu-icons">
            <div className="user-icon">{
              userInfo ? (<Link to="/profile"><PersonIcon color="action" style={{ fontSize: 30, color: 'white' }} /></Link>) : (<Link to="/signin"><PersonIcon style={{ fontSize: 30, color: 'white' }} /></Link>)
            }</div>
            {/*<div className="cart-icon"><a href="cart.html"><ShoppingCartIcon style={{ fontSize: 30, color: 'white' }} /></a></div>*/}
          </div>
        </header>
        {/*<aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Goals</a>
            </li>
          </ul>
          </aside>*/}
      </div>
      <div>
        <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        {/*<footer className="footer">
          All right reserved.
        </footer>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
