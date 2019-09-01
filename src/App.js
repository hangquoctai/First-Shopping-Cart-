import React, { Component } from "react";
import Header from "./components/Header.js";
import ProductsContainer from "./container/ProductsContainer.js";
import MessageContainer from "./container/MessageContainer";
import Footer from "./components/Footer.js";
import CartContainer from "./container/CartContainer.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer />
              <MessageContainer />
              <CartContainer />
            </div>
            <Link exact to="/login">Đăng nhập</Link>
            <Route path="/login" exact component={Login} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
