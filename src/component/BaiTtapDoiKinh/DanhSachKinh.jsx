import React, { Component } from "react";

export default class DanhSachKinh extends Component {
  renderListGlasses() {
    return this.props.data.map((element) => {
      return (
        <div className="col-4">
           <img  style={{
        }}
          key={element.id}
          onClick={() => {
            this.props.getGlassDetail(element);
          }}
          className="w-25"
          src={element.url}
          alt=""
        />
        </div>

       
      );
    });
  }
  render() {
    return (
      <div className="row">
        {this.renderListGlasses()}
      </div>
    );
  }
}
