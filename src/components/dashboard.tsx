import React, { useState, useEffect } from 'react';
import dashboardStyles from './dashboard.module.css';

import { SERVER_URL } from '../services/config';

import Prod from './prodCard';
import Loader from './utilities/loader';
import Layout from './layout';
import ScrollToTop from './scrollToTopButton';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

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
      .then((res) => setProducts(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <div>
        <main className={dashboardStyles.layoutPanel}>
          <section className={dashboardStyles.layoutPanelHeader}>
            <div className={dashboardStyles.title}>
              <h1>Quality Equipment</h1>
            </div>

            <div className={dashboardStyles.breakLine}>
              <div className={dashboardStyles.breakLineContent}></div>
            </div>

            <div className={dashboardStyles.description}>
              <p>
                explore agricultural, construction, forestry machinery,
                technology, services and more
              </p>
            </div>

            <div className={dashboardStyles.image}>
              <img
                src={require('./images/image_3.jpg')}
                alt='equipment img'
              ></img>
            </div>

            <div className={dashboardStyles.logo}></div>
          </section>

          <section className={dashboardStyles.layoutPanelBody}>
            <>
              <div className={dashboardStyles.container}>
                <div className={dashboardStyles.searchInputContainer}>
                  <input
                    className={dashboardStyles.searchInput}
                    type='text'
                    placeholder='search...'
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  ></input>
                </div>
                <div className={dashboardStyles.containerDataContents}>
                  <div className={dashboardStyles.container}>
                    <div className={dashboardStyles.containerContentFlow}>
                      {products
                        .filter((prods: Prods) => {
                          if (searchTerm === '') {
                            return products.length > 0 ? (
                              <Prod key={prods.productId} prod={prods} />
                            ) : (
                              <Loader />
                            );
                          } else if (
                            prods.productName
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            prods.description
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return products.length > 0 ? (
                              <Prod key={prods.productId} prod={prods} />
                            ) : (
                              <Loader />
                            );
                          }
                        })
                        .map((prods: Prods) => (
                          <Prod key={prods.productName} prod={prods} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          </section>
        </main>
        <Layout />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Dashboard;
