import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkout, removeItem } from '../../redux/Cart/CartAction';
import "./Cart.css";
import emptyCart from "./emptyCart.png"



const Cart = ({ Item, removeItem, checkout }) => {
  const [cartItems, setCartItems] = useState(Item);


  useEffect(() => {
    // Update cartItems whenever Item prop changes
    setCartItems(Item);
  }, [Item]);


  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);
  };


  if (Item.length == 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-wrapper">
          <div className="emptyImg">
            <img src={emptyCart} alt="emptycart" className='cartImg' />
          </div>
          <div className="emptycart-info">
            <h1> Your cart Is empty </h1>
            <Link to={"/collection"}>
              Browse gallery
            </Link>

          </div>
        </div>

      </div>
    )

  }


  else {



    return (
      <div className="Cart">
        <h1 className='cart-title'>Your Shopping Cart</h1>
        <div className="cartItems">
          {cartItems.map((item, index) => (
            <div className="item" key={item.Id}>
              <div className="item-detail">
                <Link to={`/collection/${item.Category}/${item.Id}`}>

                  <h3>{item.Title}</h3>
                  <p>Price: ${item.Price}</p>

                </Link>
              </div>
              <div className="item-increment">
                <button className='btnhandler' onClick={() => handleDecrement(index)}>-</button>
                <p className='counter'>{item.quantity}</p>
                <button className='btnhandler' onClick={() => handleIncrement(index)}>+</button>
              </div>
              <button className='remove' onClick={() => removeItem(item)}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVR4nO3azQ3CUAwDYJ8YqoX1+FkLVimsYVQVLlEQWEnpo+Q7WkWRkxt6QFkpkhuSJ5I3vncleRh/g9aQPFK3R2s4bXnUffBt/7wMWsOHub7/mqaLkLywHZe1FDlnXGZRyFJFkqAuYvzbRTqSWzHvmyuCF9+quaeKWMrWorkHWZRh0dxTRSxla9HcgyzKsGjuqSKWsrVo7kEWZVg091QRS9laNPcgizIsmnuqiKVsLZp7kEUZFs09VcRSthbNPciiDIvmnipiKVuL5h5kUYZFc08VsZStRXMPsijDfr4Ip38Nd2K+bbHIbFBFjPl2XRcJPwZYwpBZZHw3spR99oOZw5cvM4wlmnx4U/DeHQP6ygQyk2fWAAAAAElFTkSuQmCC" className='trash-can' />
              </button>
            </div>
          ))}
        </div>
        <div className="total">
          <p>Total: ${getTotal()}</p>
          <button
            className="checkout"
            onClick={checkout}
          >Checkout</button>
        </div>
      </div>
    );
  }



};

const mapStateToProps = state => {
  return {
    Item: state.cart.Item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (item) => dispatch(removeItem(item)),
    checkout: () => dispatch(checkout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
