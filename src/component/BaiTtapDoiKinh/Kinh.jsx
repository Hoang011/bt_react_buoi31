import React, { Component } from "react";

export default class Kinh extends Component {
  render() {
    return (
      <div className="col-6">
        <img
          style={{ position: "relative" }}
          src="./glassesImage/model.jpg"
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: "150px",
            right: "565px",
            width: "250px",
          }}
          src={this.props.glassDetail.url}
          alt=""
        />
        <div>
          <p
            style={{
              position: "absolute",
              top: "400px",
              fontSize: "30px",
            }}
          >
            {this.props.glassDetail.name}
          </p>
          <p style={{
              position: "absolute",
              top: "500px",
              fontSize: "30px",
            }} >{this.props.glassDetail.desc}</p>
        </div>
      </div>
    );
  }
}
