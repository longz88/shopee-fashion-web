import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <h1>Nhận Ưu Đãi Độc Quyền Tại Email Của Bạn</h1>
        <p>Đăng ký để thông báo và những ưu đãi</p>
        <div className="news-letter-email">
          <input type="email" placeholder="Điền email taị đây" />
          <button>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
