import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header id="header">
            <div className="header_top">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <div className="contactinfo">
                        <ul className="nav nav-pills">
                        <li><a href="#"><i className="donwload" />Download</a></li>
                        <li><a href="#"><i className="follows" />Follow us in</a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    <div className="logo pull-left">
                        <a href="/"><img src="assets/btv.png" alt /></a>
                    </div>
                    </div>
                    <div className="col-sm-8">
                    <div className="shop-menu pull-right">
                        <ul className="nav navbar-nav">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/product" >Product</a></li>
                        <li><a href="/about" >About</a></li>
                        <li><a href="/cart">Cart</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        )
    }
} export default Header