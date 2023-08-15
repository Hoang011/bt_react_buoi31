import React, { Component } from "react";
import DanhSachKinh from "./DanhSachKinh";
import Kinh from "./Kinh";
import data from "../../data/dataGlasses.json";

export default class BaiTapDoiKinh extends Component {
  state = {
    glassDetail: data[0],
  };
  getGlassDetail = (glass) => {
    this.setState({
      glassDetail: glass,
    });
  };
  render() {
    return (
      <div className="card bg-dark">
        <div className="card-img-overlay">
          <h5 className="card-title">
            <h3 className=" text-dark p-5">Bài tập đổi kính</h3>
          </h5>
          <div className="row">
            <Kinh glassDetail={this.state.glassDetail} />
          
          </div>
          <DanhSachKinh
            data={data}
            getGlassDetail={this.getGlassDetail}
          />
        </div>
      </div>
    );
  }
}
