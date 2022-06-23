import React, { useState, useEffect } from 'react';
import prodPageStyles from './prodPage.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import ProdPageCard from './ProdPageCard';
import { SERVER_URL } from '../services/config';
import Loader from './utilities/loader';

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/dashboard', { replace: true });
  }
  return (
    <section className={prodPageStyles.homeButton}>
      <button onClick={handleClick}>{<HomeIcon />}</button>
    </section>
  );
};

const ProdPage = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  interface Prods {
    productId: number;
    productName: string;
    productCode: number;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
  }

  useEffect(() => {
    fetch(`${SERVER_URL}/products`)
      .then((response) => response.json())
      // .then(res => console.log(res))
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <div>
        <Home />
        <div className={prodPageStyles.breakLine}>
          <div className={prodPageStyles.breakLineContent}></div>
        </div>
        <section>
          {products
            .filter((prods: Prods) => {
              return prods.productId === parseInt(id!);
              products.length > 0 ? (
                <ProdPageCard key={prods.productName} prod={prods} />
              ) : (
                <Loader />
              );
            })
            .map((prods: Prods) => (
              <ProdPageCard key={prods.productId} prod={prods} />
            ))}
        </section>
      </div>
    </>
  );
};

export default ProdPage;
