import { Carousel } from "bootstrap";
import React, { useState } from "react";
import ECarousel from "./subComponenets/ECarousel";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, Link, useNavigate } from "react-router-dom";
// import { soapBuy, soapSell } from "../store/action";

const Home = () => {

  




  // const soap = useSelector((state) => state);
  // const dispatch = useDispatch();

  // const sellHandler = () => {
  //   dispatch(soapSell());
  // };

  // const buyHandler = () => {
  //   dispatch(soapBuy(10));

  // };


  return (
    <>
    <ECarousel/>
    {/* <div className="text-center">
      <h1>Soap Quantity : {soap.soap}</h1>
      <button className="btn btn-dark" onClick={sellHandler}>
        Sell item
      </button>
      <button className="btn btn-dark" onClick={buyHandler}>
        Buy item
      </button>
    </div>
  */}
  </> 
  );
};

export default Home;
