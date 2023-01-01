import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import QuantityButton from "./subComponenets/QuantityButton";


const Single = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [singleLoader, setSingleLoader] = useState(false);

  const productId = searchParams.get("id");

  useEffect(() => {
    setSingleLoader(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
        setSingleLoader(false);
      });
  }, []);

  // get payment token
  const onToken = (token) => {
    console.log(token);
  };
  // stripeKey={process.env.REAC                                                                                                                                          T_APP_STRIPE_KEY}
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

              <p>
                {singleProduct?.description}
               
              </p>
              
              <QuantityButton/>
              <div className="shopping-btns-container d-flex">
              <StripeCheckout
                  name={singleProduct.title}
                  description={singleProduct.description}
                  amount={singleProduct.price*100}
                  currency="USD"
                  token={onToken}
                  stripeKey="pk_test_51MLCsnKBW9wxTOKOGm0Oce3qiMDiXr9XS3A6LIcc5hUsmSb1MB5HJVdpB7pbfk3E9vw1yy07KCBacHHWCZVYJZ1O00FQMvzaIl"
                  >
                  <button className="btn btn-dark shopping-btn me-2 ">Buy Now</button>
                </StripeCheckout>
                
                  <button className="btn btn-dark shopping-btn">Add to Cart</button>
                
                  </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Single;
