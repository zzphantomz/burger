import React, { Component } from "react";
import AuxFile from "../../components/HOC/AuxFile";

export class BurgerBuilder extends Component {
  render() {
    return (
      <AuxFile>
        <div>Burger</div>
        <div>Build Controls</div>
      </AuxFile>
    );
  }
}

export default BurgerBuilder;
