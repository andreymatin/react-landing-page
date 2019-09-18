import React, { Component } from 'react';

export class Nav extends Component {
  render() {

    return (

        <nav className="nav-panel">
          <div className="container">
            <div className="row">
              <div className="col">

                <ul className="main-menu">
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">Home</a></li>
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">Buy</a></li>
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">News</a></li>
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">Specification</a></li>
                </ul>

              </div>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;
