import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineSearch,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import "./Header.css";
const Header = () => {
  const [heart, setHeart] = useState(false);
  return (
    <div className="main">
      <h1>McDonald's</h1>
      <p>
        <AiFillStar color="#fff" /> 4.3 | 35mins | ₹400 for two
      </p>
      <div className="inp-veg-fav">
        <div className="input-main">
          <AiOutlineSearch color="rgb(12, 21, 47)" size={25} />
          <input
            style={{ border: "none", paddingLeft: 20 }}
            color="rgb(12, 21, 47)"
            placeholder="Search for dishes.."
            type="text"
          />
        </div>
        <div className="veg">
          <input type="checkbox" color="#000" name="Veg" id="" />{" "}
          <span
            style={{
              marginLeft: 15,
              fontWeight: "bold",
              color: "rgb(12, 21, 47)",
            }}
          >
            Veg Only
          </span>
        </div>
        <div
          className="fav"
          onClick={() => {
            setHeart(!heart);
            console.log(heart);
          }}
        >
          {heart ? (
            <AiFillHeart color="red" size={25} />
          ) : (
            <AiOutlineHeart color="#000" size={25} />
          )}

          <span
            style={{
              marginLeft: 15,
              fontWeight: "bold",
              color: "rgb(12, 21, 47)",
            }}
          >
            favourite
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
