import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let type = "button";
    if (this.props.isDanger) {
      type += " is-danger ";
    }
    if (this.props.isSmall) {
      type += " is-small ";
    }
    if (this.props.isLarge) {
      type += " is-large ";
    }
    if (this.props.isSuccess) {
      type += " is-success ";
    }
    if (this.props.isPrimary) {
      type += " is-primary ";
    }
    if (this.props.isWarning) {
      type += " is-warning ";
    }
    if (this.props.isInfo) {
      type += " is-info ";
    }
    if (this.props.className) {
      type += this.props.className;
    }

    return (
      <div className="CoolButton">
        <button className={type}>{this.props.children}</button>
      </div>
    );
  }
}

export default Button;
