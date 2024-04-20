import React from 'react';
import styles from './Main.module.css';
import pizza from '../../images/pizza 2 1.svg'
import burger from '../../images/Burgerking Burger 1.svg'
import tastenowimg from '../../images/Taste now 1.svg'
import vector from '../../images/Vector.svg'

function Main() {
  return (
    <main>
      <div className={styles.products}>
        <div className={styles.text}>
          <h2>Our Popular <span>Categories</span></h2>
        </div>
        <div className={styles.sections}>
          <section>
            <div className={styles.title}><p>Pizzas</p></div>
            <div className={styles.section}>
              <div className={styles.texts}>
                <img src={pizza} alt="" />
                <p className={styles.name}>Pepperoni Pizza</p>
                <p>Di napoles</p>
                <p>$11,99</p>
                <button>
                  Add to cart
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.title}><p>Pizzas</p></div>
            <div className={styles.section}>
              <div className={styles.texts}>
                <img src={pizza} alt="" />
                <p className={styles.name}>Pepperoni Pizza</p>
                <p>Di napoles</p>
                <p>$11,99</p>
                <button>
                  Add to cart
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.title}><p>Pizzas</p></div>
            <div className={styles.section}>
              <div className={styles.texts}>
                <img src={pizza} alt="" />
                <p className={styles.name}>Pepperoni Pizza</p>
                <p>Di napoles</p>
                <p>$11,99</p>
                <button>
                  Add to cart
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.title}><p>Pizzas</p></div>
            <div className={styles.section}>
              <div className={styles.texts}>
                <img src={pizza} alt="" />
                <p className={styles.name}>Pepperoni Pizza</p>
                <p>Di napoles</p>
                <p>$11,99</p>
                <button>
                  Add to cart
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.ad}>
        <div className={styles.container}>
          <div className={styles.img}>
            <img className={styles.container_img} src={burger} alt="burger" />
          </div>
          <div className={styles.adtext}>
            <p className={styles.dontmiss}>
            Don’t miss out on your favourite food
            </p>
            <p className={styles.dontmisschilder}>Sign up now to enjoy your favourite food anywhere, anytime. It is quick, easy and accessible to anyone of any age. Free of charge, taste now is the solution to your every day foods.</p>
          </div>
        </div> 
      </div>
      <div className={styles.tastenowad}>
        <div className={styles.tastenowtext}>
          <p className={styles.delivery}>Food <span>delivery</span> within 45 minutes</p>
          <p className={styles.deliverydesc}>
          If your food takes more than 45 minutes, it’s on us. We are proud to say we take delivery very seriously, so that you don’t have to worry about how or when the food gets to you. 
          </p>
          <button>Order now</button>
        </div>
        <div className={styles.tastenowimg}>
          <img src={tastenowimg} alt="taste" />
        </div>
      </div>
      <div className={styles.want}>
        <img src={vector} alt="wtf" />
        <div className={styles.work}>
          <p className={styles.worktext}>Work <span>whenever</span> you want, <span>wherever</span> you are</p>
          <p className={styles.workdesc}>Work with us and accomodate your schedule as you like. Our work rates have never been higher, this is because we give our empoyees several benefits that they enjoy throughout their journey.</p>
          <button>Join Us</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
