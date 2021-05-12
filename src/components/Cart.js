import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <>
            <div>
                {cartItems.length === 0 ? <div className="cart cart-header"> Cart is empty </div> 
                : 
                <div className="cart cart-header"> You have {cartItems.length} in the cart {" "}</div>
                }
            </div>
            <div className="">
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div className="">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="">
                                    <div className="">{item.title}</div>
                                    <div className="right">
                                        {formatCurrency(item.price)} * {item.count}{" "}
                                        <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart">
                    <div className="total">
                        <div className="">
                            Total:{" "}
                            {formatCurrency(cartItems.reduce((a,c) => a + (c.price*c.count), 0))}
                        </div>
                        <button className="button primary">Proceed</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
