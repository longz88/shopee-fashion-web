import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
// import ReactPaginate from "react-paginate";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <div className="shop-category-container">
        <img className="shopCategory-banner" src={props.banner} alt="" />

        <div className="shopCategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of {all_product.length} products
          </p>
          <div className="shopCategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>

        <div className="shopCategory-products">
          {all_product.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="shopCategory-loadMore">
          <button>Load More</button>
        </div>
        {/* <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={10}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        /> */}
      </div>
    </div>
  );
};

export default ShopCategory;
