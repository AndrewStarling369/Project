import React from 'react';
import { SERVER_URL } from '../services/config';

import prodPageCardStyles from './prodPageCard.module.css';
import ProdsType from './types/prods.types';

interface HandleProps {
  prod: ProdsType;
}

const ProdPageCard: React.FC<HandleProps> = ({ prod }) => {
  return (
    <>
      <div>
        <main className={prodPageCardStyles.containerBody}>
          <section>
            <div className={prodPageCardStyles.layout}>
              <div className={prodPageCardStyles.layoutImage}>
                <img
                  src={`${SERVER_URL}/${prod.imageUrl}`}
                  alt='equipment pic'
                ></img>
              </div>
              <div className={prodPageCardStyles.layoutText}>
                <h1>{prod.productName}</h1>
                <h3>{prod.productCode}</h3>
                <div>
                  <div
                    className={prodPageCardStyles.stars}
                    style={{ ['--rating' as any]: `${prod.starRating}` }}
                  ></div>
                </div>
                <h3>{prod.releaseDate}</h3>
                <p>{prod.description}</p>
                <h3>{prod.price} USD</h3>
                <div className={prodPageCardStyles.layoutButton}>
                  <div className={prodPageCardStyles.button}>Apply Now</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProdPageCard;
