import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer id="footer">
            <div className="footer-widget">
                <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <div className="single-widget">
                        <h2>Service</h2>
                        <ul className="nav nav-pills nav-stacked">
                        <li><a href="#">Online Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Change Location</a></li>
                        <li><a href="#">FAQ’s</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="single-widget">
                        <h2>Policies</h2>
                        <ul className="nav nav-pills nav-stacked">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privecy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Billing System</a></li>
                        <li><a href="#">Ticket System</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-2">
                    <div className="single-widget">
                        <h2>About BTV</h2>
                        <ul className="nav nav-pills nav-stacked">
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Store Location</a></li>
                        <li><a href="#">Affillate Program</a></li>
                        <li><a href="#">Copyright</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-3 col-sm-offset-3">
                    <div className="single-widget">
                        <h2>Subscribe BTV</h2>
                        <form action="#" className="searchform">
                        <input type="text" placeholder="Enter your email address" />
                        <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                        <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                <div className="row">
                    <p className="pull-left">Copyright © 2021 BTV Inc. All rights reserved.</p>
                </div>
                </div>
            </div>
            </footer>
        )
    }
} export default Footer