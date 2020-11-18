import React from "react";
import "./Header.css";
// import AmazonLogo from "./assets/amazonLogo.jpg";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne"> Hello Guest</span>
          <span className="header__optionLineTwo"> Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>

        <div className="header__option">
        <span className="header__optionLineOne"> Your</span>
        <span className="header__optionLineTwo"> Prime</span>
        </div>

        <div className="header__optionBasket"></div>
            <ShoppingBasketIcon className="basketIcon"/>
            <span className="header__optionLineTwo header_basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
