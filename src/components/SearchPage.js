import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link, useSearchParams } from "react-router-dom";
//available category
//   [
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
//   ]

const SearchPage = () => {

  const [searchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [product, setProduct] = useState([]);  
  const [searchInput, setSearchInput] = useState("");

  const productCategory = searchParams.get("category");
  console.log(productCategory)
  useEffect(()=>{
    setLoader(true);

   const SearchProducts = async ()=> {
      const res = await fetch(`https://fakestoreapi.com/products/category/${productCategory}`);
       const data = await res.json();
       setProduct(data);
       setLoader(false);
       console.log(data)
   }
    SearchProducts();

  }, [productCategory])  

  return (
     <div className="container-fluid">
      <div className="search">
        <input
          type="search"
          name="search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          id="searchId"
          placeholder="Search Product"
        />
        <label htmlFor="searchId">
          <i class="fa fa-search" aria-hidden="true"></i>
        </label>
      </div>

      <div className="product-container">
        <div className="container p-5">
          <div className="row">
            {loader ? (
              <div class="spinner-grow mx-auto" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              ""
            )}
            {product !== "" &&
            product !== undefined &&
            product !== null &&
            product.length > 0
              ? product
                  .filter((item) =>
                    item.title.toLowerCase().includes(searchInput.toLowerCase())
                  )
                  .map((data) => (
                    <>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 ">
                      <Card
                            className="product-card text-center"
                            
                          >
                            <Link
                              to={`single?id=${data?.id}`}
                            >
                              <Card.Img
                                variant="top"
                                src={data?.image}
                                className="product-card-img"
                              />
                            </Link>

                            <Card.Body className="product-desc">
                              <Card.Title >
                                {data?.title.substring(0, 15)}
                              </Card.Title>
                              <Card.Subtitle className="mb-2">
                                $ {data?.price}
                              </Card.Subtitle>
                              <button className="btn btn-dark shopping-btn mx-auto">
                                Add to cart
                              </button>
                            </Card.Body>
                          </Card>
                      </div>
                    </>
                  ))
              : ""}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default SearchPage
