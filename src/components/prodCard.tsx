import React from 'react';
import { SERVER_URL } from '../services/config';
import { useNavigate } from 'react-router-dom';

import ProdsType from './types/prods.types';
import prodStyles from './prodCard.module.css';

interface HandleProps {
  prod: ProdsType;
}

const Prod: React.FC<HandleProps> = ({ prod }) => {
  const ProductPage = () => {
    const navigate = useNavigate();

    function handleClick() {
      navigate(`/productpage/product/${prod.productId}`, { replace: true });
      // <Link to={`/productpage/product/${prod.productId}`}>See Details</Link>;
    }
    return (
      <div className={prodStyles.productDetails} onClick={handleClick}>
        See Details
        {/* <Link to={`/productpage/product/${prod.productId}`}>See Details</Link> */}
      </div>
    );
  };

  return (
    <>
      <div className={prodStyles.card}>
        <div className={prodStyles.cardHeader}>
          <div className={prodStyles.productName}>{prod.productName}</div>
        </div>
        <div className={prodStyles.cardBody}>
          <div className={prodStyles.productDescription}>
            {prod.description}
          </div>
          <div className={prodStyles.productImage}>
            <img
              src={`${SERVER_URL}/${prod.imageUrl}`}
              alt='equipment pic'
            ></img>
          </div>
          <div className={prodStyles.productPrice}>
            Starting from {prod.price} USD
          </div>
          <ProductPage />
        </div>
        <div className={prodStyles.cardFooter}></div>
      </div>
    </>
  );
};

export default Prod;
