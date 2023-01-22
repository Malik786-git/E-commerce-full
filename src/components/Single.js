import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import QuantityButton from "./subComponenets/QuantityButton";
import { addToCart } from "../store/action";

const Single = () => {
  const [searchParams] = useSearchParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [singleLoader, setSingleLoader] = useState(false);
  const [addCount, setAddCount] = useState(0);
  // add to card to redux
  const alreadyAdded = useSelector((state) => state.AddedProductList);
  const dispatch = useDispatch();


  
  const handleAddCart = () => {
    // check if product already exists or not
    const productExist = alreadyAdded.some(
      (data) => Number(data.id) === Number(productId)
    );

    if (productExist) {
      alert("already add");
      return;
    }
    // add new product
    dispatch(addToCart(singleProduct));
    setAddCount(addCount + 1);
  };

  const productId = searchParams.get("id");

  useEffect(() => {
    setSingleLoader(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
        setSingleLoader(false);
      });
  }, [productId]);

  // get payment token
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <div className="container">
        {singleLoader ? (
          "loading..."
        ) : (
          <div className="row mx-auto py-5">
            <div className="col-6">
              <figure>
                <img src={singleProduct?.image} alt="" width="80%" />
              </figure>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center ">
              <h1 className="display-5">{singleProduct?.title} </h1>

              <h1>$ {singleProduct?.price}</h1>

              <p>{singleProduct?.description}</p>

              <QuantityButton />
              <div className="shopping-btns-container d-flex">
                <StripeCheckout
                  name={singleProduct.title}
                  description={singleProduct.description}
                  amount={singleProduct.price * 100}
                  currency="USD"
                  token={onToken}
                  stripeKey="pk_test_51MLCsnKBW9wxTOKOGm0Oce3qiMDiXr9XS3A6LIcc5hUsmSb1MB5HJVdpB7pbfk3E9vw1yy07KCBacHHWCZVYJZ1O00FQMvzaIl"
                >
                  <button className="btn btn-dark shopping-btn me-2 ">
                    Buy Now
                  </button>
                </StripeCheckout>

                <button
                  className="btn btn-dark shopping-btn"
                  onClick={handleAddCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Single;
