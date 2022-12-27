import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const ResList = () => {
  const [restuarant, setRestuarant] = useState([]);
  const [loadmore, setLoadMore] = useState(6);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${loadmore}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].id) {
          setLoading(false);
          setRestuarant(data);
        } else {
          setLoading(false);
          console.log("error");
        }
      });
  }, [loadmore]);

  console.log(restuarant);

  return (
    <div>
      <div className="search">
        <input
          className="form-control shadow-none"
          list="datalistOptions"
          id="searchid"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Type to search..."
        />
        <label htmlFor="searchid">
          <i class="fa fa-search" for="searchid" aria-hidden="true"></i>
        </label>
        {/* <button className="btn btn-success">search</button> */}
      </div>
      <h1 className="display-1 text-center">Avalaible Product's</h1>

      <div className="container">
        <div className="row">
          {restuarant !== undefined &&
          restuarant !== null &&
          restuarant !== "" &&
          restuarant.length > 0
            ? restuarant
                .filter((data) =>
                  data.title
                    .toLowerCase()
                    .includes(searchInput.toLocaleLowerCase())
                )
                .map((item) => (
                  // <p style={{color:"red"}}>{item.title}</p>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Card
                      style={{ width: "18rem" }}
                      className="product-card my-2 mx-1"
                    >
                      <Card.Img
                        variant="top"
                        src={item.image}
                        width="286"
                        height="220"
                      />
                      <Card.Body className="product-card-body overflow-auto">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-warning">
                          Price: ${item.price}
                        </Card.Subtitle>
                        <Card.Text className="product-card-desc">
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))
            : ""}
        </div>
      </div>
      {loading == true ? (
        <div className="spinner">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResList;
