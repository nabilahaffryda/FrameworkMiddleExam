import React, {Component} from 'react';
import util from '../util';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [], 
            insertProduct: {
                userID: props.id,
                id: 1,
                nama: this.props.nama,
                price: this.props.price,
                total_qty: 0,
                total_price: 0
            }
        };
      }
    componentWillMount(){
        fetch("http://localhost:3001/products").then(res => res.json())
        .then(data => this.setState({
          products: data,
        }));
    }

    handleTotal = () => {
        this.setState({
            totalPrice: this.state.insertProduct.total_price = 
            this.props.price * this.state.insertProduct.total_qty,
            id: this.state.insertProduct["id"] = new Date().getTime()
        })
    }

    handleSave = (product) => {
        const insert = {
            'userID': product.userID,
            'productID': product.id,
            'nama': product.nama,
            'price': product.price,
            'total_qty': 1,
            'total_price': product.price
        }
        fetch("http://localhost:3002/cart", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(insert)
        }).then(response => {
            if (response.ok) {
                alert("Product Was Added Successfully To Cart")
                this.setState({
                    total_qty: this.state.insertProduct["total_qty"] = 0
                })
                this.handleTotal()
                return response.json()
            } else {
                alert(response.statusText)
            }
        })
    }
    render(){
        const productItems = this.state.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <a
                                href={`#${product.id}`}
                                onClick={this.state.handleAddToCart}>
                            <img src={`/products/${product.img}`} />
                            <h2>{util.formatCurrency(product.price)}</h2>
                            <p> {product.nama} </p>
                            </a>
                            <div className="order">
                                <button className="btn btn-primary" type="submit" onClick={()=>this.handleSave(product)}>Add to Cart</button>
                            </div><br></br>
                        </div>
                    </div>
                </div>
            </div>
        ))
        return(
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="features_items">
                                    <h2 className="title text-center">Features Items</h2>
                                    {productItems}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} export default Product