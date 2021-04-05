import React, { Component } from 'react'

export default class Cart extends Component {
    state = {
        listCart: [],
        totalPrice: 0,
        numb: 0
    }
    getDataFromAPI = () => {
        fetch("http://localhost:3002/cart")
        .then(response => response.json())
        .then(jsonGetDataAPI => {
            this.setState({
                listCart: jsonGetDataAPI
            })
        })
    }
    componentDidMount(){
        this.getDataFromAPI();
    }
    render() {
        const PostCart = (props) => {
            return(
                <tr>
                    <td>{props.numb}</td>
                    <td>{props.id}</td>
                    <td>{props.nama}</td>
                    <td>IDR {props.price}</td>
                    <td>{props.total_qty}</td>
                    <td>IDR {props.total_price}</td>
                </tr>
            )
        }
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="cart_items">
                                    <h2 className="title text-center">Cart</h2>
                                    <div id="gmap" className="contact-map">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="single-blog-post">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Number</th>
                                                                <th>Product ID</th>
                                                                <th>Product Name</th>
                                                                <th>Price</th>
                                                                <th>Qty</th>
                                                                <th>Sub Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.state.listCart.map(cart => {
                                                                return(this.state.numb += 1,
                                                                    <PostCart key={cart.userID} id={cart.productID} nama={cart.nama} numb={this.state.numb}
                                                                    price={cart.price} total_qty={cart.total_qty} total_price={cart.total_price}/>
                                                                )
                                                            })}
                                                            {this.state.listCart.map(cart => {
                                                                this.state.totalPrice += cart.total_price
                                                            })}
                                                            <tr>
                                                                <td colSpan="5" style={{textAlign: "right"}}><b>Total</b></td>
                                                                <td>IDR {this.state.totalPrice}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
