import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Single = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [singleLoader, setSingleLoader] = useState(false);

  const productId = searchParams.get("id");

  
  useEffect(()=>{
    setSingleLoader(true)
    fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>{
              setSingleProduct(data)
              setSingleLoader(false)
            })
  }, [])

  
  return (
    <>
      <div className="container">

        {
          singleLoader? 'loading...'  : 
          <div className="row mx-auto py-5">
          <div className="col-6">
            <figure>
                <img src={singleProduct?.image} alt="" width='80%' />
            </figure>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center ">
            <h1 className="display-5">{singleProduct?.title} </h1>
            <h1>$ {singleProduct?.price}</h1>
            <p>
              {singleProduct?.description}
            </p>
          </div>
        </div>
        }
        </div>
       
    </>
  );
};

export default Single;
