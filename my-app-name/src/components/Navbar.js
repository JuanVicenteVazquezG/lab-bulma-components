import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        classNameName="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div classNameName="navbar-brand">
            <a classNameName="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="A bulma Logo"
              />
            </a>
          </div>
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
