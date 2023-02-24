import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delCartItem } from "../store/action";
import QuantityButton from "./subComponenets/QuantityButton";

const AddToCard = () => {

  const navigate = useNavigate();
  
  const {AddedProductList} = useSelector((state) => state);
  
  const totalBill = AddedProductList.reduce((acc, data) => acc + data.price, 0);
  // delete item 
  const dispatch = useDispatch();

  // for cart is empty
  if(totalBill <= 0){
    return <>
       <div className="container emptycart  ">
          <div className="d-flex flex-column text-center">
          <i class="fa fa-frown-o sad-icon" aria-hidden="true"></i>
            <i class="fa fa-shopping-cart emptycart_img" aria-hidden="true"></i>
            <h1 className="display-5">Your cart is empty</h1>
            <button className="btn btn-dark shopping-btn mx-auto"
             onClick={()=>navigate('/product')}
            >
                  Explore Product
                </button>
          </div>
       </div>
    </>
  }


  return (
    <div>
      <div className="container">
        <h1 className="text-center display-3 mt-5 mb-3 fw-bold">Your Shopping</h1>
        <div className="row">
          <div className="col">
            <ul>
              {AddedProductList?.map((data, i) => (
                
                <li
                   key={data?.id}
                   className="my-3 cart-item-list text-dark d-flex justify-content-between"
                 > 
                   <figure>
                    <img src={data?.image} alt=""  width='40px' height='50px' />
                   </figure>
                  <span>{data?.title.slice(0, 20)}...</span>
                  <span>$ {data?.price}</span>
                  <div className="cart-item-options">
                    <QuantityButton />
                    <span className="del-cart-btn ms-3" title="delete product">
                      <i className="fa fa-trash" aria-hidden="true"
                      onClick={()=>dispatch(delCartItem(data.id))}
                      ></i>
                    </span>
                  </div>
                </li>
              ))}
              
            </ul>
        </div>
        </div>
        <div className="row mx-auto">
        <div className="col">
        <div className="total_bill text-end">
            <h1 className="display-5">Total Amount: $ {totalBill.toFixed(2)}</h1>
           </div>
           </div>
           </div>
      </div>
    </div>
  );
};

export default AddToCard;
