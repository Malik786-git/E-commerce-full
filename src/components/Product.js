import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Product = () => {
  const [loader, setLoader] = useState(false);
  const [product, setProduct] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setLoader(true);
    fetch(`https://fakestoreapi.com/products?limit=16`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoader(false);
      });
  }, []);

  // Pagination Functions
  const handlePagination = (e) => {
    const pageValue = parseInt(e.target.innerText);

    setStart(pageValue * 4 - 4);
    setEnd(pageValue * 4);
  };

  const previewProduct = () => {
    if (start === 0) {
      setStart(start);
      setEnd(end);
    } else {
      setStart(start - 4);
      setEnd(end - 4);
    }
  };
  const nextProduct = () => {
    if (start === product.length - 4 && end === product.length) {
      setStart(start);
      setEnd(end);
    } else {
      setStart(start + 4);
      setEnd(end + 4);
    }
  };

  return (
    <>
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
                    .slice(start, end)
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
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
        <div className="paginate mx-auto text-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li class="page-item" onClick={previewProduct}>
                <a class="page-link text-dark" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item" onClick={handlePagination}>
                <a class="page-link text-dark" href="#">
                  1
                </a>
              </li>
              <li className="page-item" onClick={handlePagination}>
                <a class="page-link text-dark" href="#">
                  2
                </a>
              </li>
              <li className="page-item" onClick={handlePagination}>
                <a class="page-link text-dark" href="#">
                  3
                </a>
              </li>
              <li className="page-item" onClick={handlePagination}>
                <a class="page-link text-dark" href="#">
                  4
                </a>
              </li>
              <li class="page-item" onClick={nextProduct}>
                <a class="page-link text-dark" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Product;
