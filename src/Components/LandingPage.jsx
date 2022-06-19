import React from "react";
import {
  FaCartPlus,
  FaUserCircle,
  FaSearch,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="cont">
      <div className="name">
        <h1>KITCHEN WARE</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <div>
            <Link to="/kitchentools">
              <img
                src="https://www.uboric.com/wp-content/uploads/2020/12/kithchen-tools.jpg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/airtightcontainers">
              <img
                src="https://www.uboric.com/wp-content/uploads/2020/12/Air-Tight-Containers.jpg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/gaslighters">
              <img
                src="https://www.uboric.com/wp-content/uploads/2020/12/Gas-Lighter-1024x1024.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="support">
        <div>
          <img
            src="https://www.uboric.com/wp-content/uploads/2020/08/Uboric-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="name">
        <h1>OTHER CATEGORIES</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <div>
            <Link to="/electricappliance">
              <img
                src="https://www.uboric.com/wp-content/uploads/2021/12/banner1-1-1.jpg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link to="/bathroomaccessories">
              <img
                src="https://www.uboric.com/wp-content/uploads/2021/12/banner2-1.jpg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2021/02/Headphone.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2021/12/banner3-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2021/12/banner4-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="name">
        <h1>SPICES</h1>
      </div>
      <br />
      <br />
      <div className="fives">
        <div className="five">
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Spices-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="name">
        <h1>FOOT WEAR</h1>
      </div>
      <br />
      <br />
      <div className="support">
        <div>
          <img
            src="https://www.uboric.com/wp-content/uploads/elementor/thumbs/men-fashion-pf2rgkwglk7z47uh031vpxcshl64adc389ivxapmss.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="fives">
        <div className="five">
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/12/Foot-Wear-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="message">
        <div className="childmessage">
          <h1>
            The Ultimate Domestic Online Shopping Experience Platform in India
          </h1>
          <br />
          <p>
            Online shopping with Uboric is quick, convenient and trouble-free.
            You can shop for the desired product right from the comfort of your
            home and get them delivered straight to your doorstep. Uboric offers
            you the chance to choose top branded products sitting in the comfort
            of your homes and just clicking on your requirements to get it
            delivered at your doorstep. Your search for the latest trending
            variety of unique products ends right here. A wide range of
            international products from global brands are available at your
            fingertips. We provide you with a world-class online shopping
            experience, along with superior service, to suit all your specific
            requirements. Our products are very reasonably priced and are not
            easily available elsewhere. Our high-end technology-based systems,
            combined with a human approach, ensure that you have an amazing and
            blissful online shopping experience with us. Our emphasis on
            customer delight drives every activity we undertake to provide you
            an ultimate, hassle-free and pleasant shopping experience. Our
            diverse categories of products comprise of fashion & jewellery,
            mobiles and tablets, home and furniture, electronics, health care
            and supplements, sports and fitness, beauty and perfumes. We offer
            almost every variety of product that your heart desires. Just Go
            Ahead and Explore the magical world of online shopping with Uboric!
            24×7 Customer Care: For all your queries and concerns regarding your
            shopping orders.
          </p>
          <br />
          <h1>Benefits of shopping on Uboric :</h1>
        </div>
      </div>
      <div className="tick">
        <div className="childtick">
          <div>
            <TiTick color="#1e516c" className="TiTIck" size="2rem" />
            <p>User-Friendly</p>
          </div>
          <div>
            <TiTick color="#1e516c" className="TiTIck" size="2rem" />
            <p>Safe & Secure Shopping</p>
          </div>
          <div>
            <TiTick color="#1e516c" className="TiTIck" size="2rem" />
            <p>Check Out Closely</p>
          </div>
          <div>
            <TiTick color="#1e516c" className="TiTIck" size="2rem" />
            <p>Multiple Payment Options</p>
          </div>
          <div>
            <TiTick color="#1e516c" className="TiTIck" size="2rem" />
            <p>Order History</p>
          </div>
        </div>
      </div>
      <div className="boxesp">
        <br />
        <h1>What Our Customer Says</h1>
        <br />
        <br />
        <div className="boxp">
          <div>
            <p>Best Quality Products</p>
          </div>
          <div>
            <p>Best Collection</p>
          </div>
          <div>
            <p>
              Nice shop for specific shoes. Variety is large.. and quality is
              also good. Price is average matched to other shoppers.
            </p>
          </div>
        </div>
        <br />
        <br />
        <button className="review">Add Your Review</button>
      </div>
      <div className="footer">
        <div className="childfooter">
          <div>
            <img
              src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png"
              alt=""
            />
          </div>
        </div>
        <div className="menur">
          <div>
            <p>About Us</p>
            <p>Contact</p>
            <p>Shipping & Returns</p>
            <p>My Account</p>
            <p>Privacy Policy</p>
            <p>Become A Seller</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="reserved">
          <p>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="social">
          <div className="childsocial">
            <div>
              <FaFacebookF size="1.4rem" />
            </div>
            <div>
              <FaInstagram size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
