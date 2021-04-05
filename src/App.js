import './App.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import { BrowserRouter, Switch, Route, Redirect, withRouter} from "react-router-dom";
import React, { Component } from 'react';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <AuthButton />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product" component={Product}/>
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <PrivateRoute path="/about" component={About} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
  },
  signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
  }
}

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <div className="col-sm-11">
      <div className="shop-menu pull-right">
          <p id="logout">
            <button className="btn btn-submit" onClick={() => { 
              fakeAuth.signout(() => history.push("/home")); }}>
              Sign out
            </button>
          </p>
      </div>
    </div>   
  ) : (
          <p id="warning-log" >
              {/* You are not log in! */}
          </p>
      )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
      <Route
          {...rest}
          render={props =>
              fakeAuth.isAuthenticated ? (
                  <Component {...props} />
              ) : (
                      <Redirect
                          to={{
                              pathname: "/login",
                              state: { from: props.location }
                          }}
                      />
                  )
          }
      />
  );
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
      fakeAuth.authenticate(() => {
          this.setState({ redirectToReferrer: true });
      });
  };

  render() {
      const { from } = this.props.location.state || { from: { pathname: "/home" } };
      const { redirectToReferrer } = this.state;

      if (redirectToReferrer) {
          return <Redirect to={from} />
      }

      return (
        <div id="contact-page" className="container">
          <div className="bg">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="title text-center">You must log in to view the page<strong></strong></h2>
                <div id="gmap" className="contact-map">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-blog-post">
                        <center>
                          <button className="btn btn-primary" onClick={this.login}>Login</button>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default App
