import React, { Component } from "react";
import CartColumns from "./CartColumns";
import Title from '../Title';
import ProductList from '../ProductList';
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from './CartList';
import CartTotals from './cartTotals';
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                <Title name="Shopping" title="cart" />
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value} history={this.props.history}/>
                 
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}


// I made tri components Title, columns,
// and empty cart and also function with will 
//show empty cart is cart.length is 0 other way you see Title and columns.
