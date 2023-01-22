import React from "react";
import { useSelector } from "react-redux";

const AddToCard = () => {
  const addedProductList = useSelector((state) => state.AddedProductList);
  // console.log(addedProductList);

  return (
    <div>
      <div className="container">
        <h1 className="text-center display-3 mt-5 mb-3">Product List </h1>
        <div className="row">
          <div className="col">
            <ul>
              {addedProductList?.map((data) => (
                <li key={data?.id} className="my-3 text-dark d-flex justify-content-between">
                  <span>{data?.title}</span> <button className="btn btn-danger">delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
