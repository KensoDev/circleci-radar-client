import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  getPathClassName(path) {
    if (this.props.location.pathname === path) {
      return "active";
    }
    return ""
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">CI Dashboard</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={this.getPathClassName('/')}><Link to="/">Builds</Link></li>
              <li className={this.getPathClassName('/env')}><Link to="/env">Env Var updates</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
