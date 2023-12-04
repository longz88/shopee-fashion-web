import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/img-hero-bc-removebg.png";
import arrow_icon from "../Assets/arrow.png";
import hero_imae from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h2>CHỈ CÓ MẶT HÀNG MỚI</h2>

          <div>
            <div className="hero-hand-icon">
              <p>Tiên Phong</p>
              <img src={hand_icon} alt="hand_icon" />
            </div>
            <p>Dự Báo Thời Trang</p>
          </div>

          <div className="hero-latest-btn">
            <div>Bộ sưu tập mới nhất</div>
            <img src={arrow_icon} alt="arr-icon" />
          </div>
        </div>

        <div className="hero-right">
          <img src={hero_imae} alt="hero_ima" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
