import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-container">
        <div className="offers-left">
          <h1>Duy nhất</h1>
          <h1>Ưu Đãi Dành Cho Bạn</h1>
          <p>CHỈ CÓ TRÊN SẢN PHẨM BÁN CHẠY NHẤT</p>
          <button>Kiểm tra ngay</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
