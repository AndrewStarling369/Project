import React from 'react';
import layoutStyles from './layout.module.css';

const Layout = () => {
  return (
    <div>
      <main className={layoutStyles.containerBody}>
        <section>
          <div className={layoutStyles.layout}>
            <div className={layoutStyles.layoutImage}>
              <img src={require('./images/image_1.jpg')}></img>
            </div>
            <div className={layoutStyles.layoutText}>
              <h3>See our latest products</h3>
              <p>
                Gain ground in your operation and discover new products while at
                Commodity Classic. Find out what makes the electric variable
                transmissions run, how See Spray Ultimate uses technology to
                help lower your input costs, and why the new StarFire™ 7000
                receiver guarantees five-year repeatability.
              </p>
              <div className={layoutStyles.layoutButton}>
                <div className={layoutStyles.button}>Click Here</div>
              </div>
            </div>
          </div>
        </section>
        <section className={layoutStyles.sectionLayout}>
          <div className={layoutStyles.layout}>
            <div className={layoutStyles.layoutText}>
              <h3>Autonomy is here.</h3>
              <p>
                It’s not a concept. It’s real. Our autonomous technology takes
                everything you love about an 8R tractor and gives you the option
                to run it with or without an operator.
              </p>
              <div className={layoutStyles.layoutButton}>
                <div className={layoutStyles.button}>Learn More</div>
              </div>
            </div>
            <div className={layoutStyles.layoutImage}>
              <img src={require('./images/image_2.jpg')}></img>
            </div>
          </div>
        </section>
      </main>
      <aside className={layoutStyles.containerFooter}>
        <section>
          <div className={layoutStyles.layout}>
            <div className={layoutStyles.layout1}>
              <h3>Shop and Buy</h3>
              <br></br>
              <p>Find a Dealer</p>
            </div>
            <div className={layoutStyles.layout2}>
              <h3>Maintanance and Support</h3>
              <br></br>
              <p>Product Safety</p>
            </div>
            <div className={layoutStyles.layout3}>
              <h3>You May Be Also Interested In</h3>
              <br></br>
              <p>Find Used Equipment</p>
            </div>
          </div>
          <div className={layoutStyles.end}>
            <p>Copyright © 2022 This.Company. All Rights Reserved.</p>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default Layout;
