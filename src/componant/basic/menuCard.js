import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const MenuCard = ({ menuData }) => {
  console.log(menuData);
  const mystyle = {
    backgroundColor: "#CFF5E7",
    color: "#0D4C92",
  };
  return (
    <>
      {menuData.map((curElem) => {
        return (
          <div className="col-lg-3 col-md-6 p-1" key={curElem.id}>
            <div className=" card p-2" style={mystyle}>
              <div className="card-number">{curElem.id}</div>
              <img
                src={curElem.image}
                alt="this is maggie"
                className="img-fluid card-img-top"
              />
              <span className="catagory">{curElem.category}</span>
              <h5 className="card-title">{curElem.name}</h5>
              <p className="card-text">
                {curElem.description}
              </p>

              <span className="price ms-auto">Price : {curElem.price}</span>
              <a href="#" className="btn">
                Buy
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
