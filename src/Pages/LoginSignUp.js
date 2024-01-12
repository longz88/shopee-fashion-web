import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignUp = () => {
  const [action, setAction] = useState("Đăng ký");

  const toggleAction = () => {
    setAction("Đăng nhập");
    if (action === "Đăng nhập") {
      setAction("Đăng ký");
    }
  };

  return (
    <div className="loginsSignup">
      <div className="loginSignup-container">
        <h1>{action}</h1>

        <div className="loginSignup-fields">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            className={action === "Đăng nhập" ? "active" : ""}
          />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
        </div>

        <button>{action}</button>

        <p className="loginSignup-login">
          {action === "Đăng nhập"
            ? "Bạn mới biết đến ShopeeFashion? "
            : "Bạn đã có tài khoản? "}{" "}
          <span onClick={toggleAction}>
            {action === "Đăng nhập" ? "Đăng ký" : "Đăng nhập"}
          </span>
        </p>

        <div className="loginSignup-agree">
          <p>
            Bằng việc đăng kí, bạn đã đồng ý với Shopee về{" "}
            <span>Điều khoản dịch vụ</span> & <span>Chính sách bảo mật</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
