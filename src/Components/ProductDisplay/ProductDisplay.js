import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-container">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>

          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>

        <div className="productdisplay-right">
          <h1>{product.name}</h1>

          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>

          <div className="productdisplay-right-price">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>

          <div className="productdisplay-right-description">
            Quần JEANS với chất vải THOÁNG MÁT, VẬN ĐỘNG THOẢI MÁI cho mùa hè
            nắng nóng. Bề mặt đanh, mịn, mặc thoả mái và vẫn giữ nguyên form
            quần sau nhiều lần giặt. Đặc biệt form dáng rộng mát HOT nhất hè năm
            2023.
          </div>

          <div className="productdisplay-right-size">
            <h1>Select Size :</h1>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>

          <button
            className="productdisplay-right-btn"
            onClick={() => addToCart(product.id)}
          >
            ADD TO CART
          </button>

          <p className="productdisplay-right-category">
            <span>Category :</span> Women , T-short, CropTop
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span> Modern , Latest, CropTop
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
