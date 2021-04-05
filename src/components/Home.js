import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <section id="slider">{/*slider*/}
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                        <li data-target="#slider-carousel" data-slide-to={1} />
                        <li data-target="#slider-carousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                        <div className="col-sm-6">
                            <h1><span>BTV</span></h1>
                            <h2>Enjoy Your New Way of Life</h2>
                            <p>Life is beautiful if you live it well</p>
                            <button type="button" className="btn btn-default get" href="/product">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                            <img src="assets/tv1.png" className="girl img-responsive" alt />
                        </div>
                        </div>
                        <div className="item">
                        <div className="col-sm-6">
                            <h1><span>BTV</span></h1>
                            <h2>Enjoy Your New Way of Life</h2>
                            <p>Make health a way of life with Smart TV solutions</p>
                            <button type="button" className="btn btn-default get" href="/product">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                            <img src="assets/tv2.png" className="girl img-responsive" alt />
                        </div>
                        </div>
                        <div className="item">
                        <div className="col-sm-6">
                            <h1><span>BTV</span></h1>
                            <h2>Enjoy Your New Way of Life</h2>
                            <p>Watch what you want</p>
                            <button type="button" className="btn btn-default get" href="/product">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                            <img src="assets/tv3.png" className="girl img-responsive" alt />
                        </div>
                        </div>
                    </div>
                    <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                        <i className="fa fa-angle-left" />
                    </a>
                    <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                        <i className="fa fa-angle-right" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>

        )
    }
} export default Home