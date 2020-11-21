import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import "./Header.css";
import { auth } from "./firebase";

function Header() {
  //const [{basket,user}, dispatch] = useStateValue();

  //const [state, dispatch] = useStateValue();initially
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  // let userName = (user?.email).split('@'); //for saying hello user

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          {/*if no user then push to login page  */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne"> Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket"></div>
          <ShoppingBasketIcon className="basketIcon" />
          <span className="header__optionLineTwo header_basketCount">
            {basket.length}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
//basket.length can be replaced by basket?.length so in case basket is undefined
//we gracefully handle the error
