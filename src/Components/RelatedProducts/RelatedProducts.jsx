import React from 'react';
import './RelatedProducts.css';
import data_products from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
   return (
      <div className="relatedProducts">
         <h1>Related Products</h1>
         <hr />
         <div className="relatedProducts-item">
            {data_products.map((item, index) => {
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
            })}
         </div>
      </div>
   );
};

export default RelatedProducts;
