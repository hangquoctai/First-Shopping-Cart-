import React, { Component } from "react";
import Header from "./components/Header.js";
import ProductsContainer from "./container/ProductsContainer.js";
import MessageContainer from "./container/MessageContainer";
import Footer from "./components/Footer.js";
import CartContainer from "./container/CartContainer.js";

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer />
              <MessageContainer />
              <CartContainer />
            </div>
          </main>
          <Footer />
        </div>
    );
  }
}
export default App;
