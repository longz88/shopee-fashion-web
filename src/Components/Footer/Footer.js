import React from "react";
import "./Footer.css";
import logo_footer from "../Assets/logo-orange-1.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={logo_footer} alt="" />

        <ul className="footer-links">
          <li>Công ty</li>
          <li>Sản phẩm</li>
          <li>Thông tin</li>
          <li>Liên hệ</li>
        </ul>

        <div className="footer-socials">
          <div className="footer-socials-icon">
            <img src={instagram_icon} alt="" />
          </div>

          <div className="footer-socials-icon">
            <img src={pintester_icon} alt="" />
          </div>

          <div className="footer-socials-icon">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>

        <div className="footer-copyright">
          <hr />
          <p>
            Edit by <span>Chu Long</span> - 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
