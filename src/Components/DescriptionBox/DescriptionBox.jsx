import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
   return (
      <div className="descriptionbox">
         <div className="descriptionbox-nav">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
         </div>

         <div className="descriptionbox-description">
            <p>
               ✔️ Real product images, similar to posted pictures <br />
               ✔️ Products are available, shipped immediately after receiving
               the order <br />
               ✔️ Enthusiastic consultation, careful product packaging.
               <br />
            </p>
            <p>
               RETURN & REFUND REGULATIONS:
               <br />
               1. Conditions apply (within 3 days of receiving product): <br />
               - The goods are still new and unused <br />
               - Damaged goods (loose fabric, seam errors) due to transportation
               or the manufacturer.
               <br />- The product is not the right size or style as you ordered
               <br />
               - Not enough quantity, not enough sets as in the order <br /> 2.
               In case of not meeting the conditions to apply the policy: <br />
               - More than 3 days from when you receive the goods <br />
               - Send back goods that are not of the correct design and are not
               products from the shop <br />- Ordered the wrong product, type,
               didn't like it, didn't fit it,
            </p>
         </div>
      </div>
   );
};

export default DescriptionBox;
