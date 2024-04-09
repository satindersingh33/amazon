import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CartIcon from "../cart/Carticon";
import { useSelector } from "react-redux";

function Header() {
  const cartData=useSelector((state)=>state.cart.cartItems)
  console.log(cartData)
  return (
    <div className="header">
     
     <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header-location">
        <LocationOnIcon className="header-locationIcon" />
        <span className="header-locationText">Update Location</span>
      </div>
      <div className="header-search">
        <Select
          className="header-dropdown"
          defaultValue="All"
          disableUnderline
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Books">Books</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          {/* Add more options as needed */}
        </Select>
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
        <p className="EN"> EN</p>
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello, Guest</span>
          <a className="href" href="/signup">
            SignIn
          </a>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <Link to="/cart" className="header-cartLink"> {/* Use Link to navigate to /cart */}
        <div className="header-optionBasket">
          {/* <AddShoppingCartIcon /> */}
          <CartIcon/>
          <span className="header-optionLineTwo header-basketCount">
            {cartData.length}
          </span>
        </div>
      </Link>
      </div>
    </div>
  );
}

export default Header;

