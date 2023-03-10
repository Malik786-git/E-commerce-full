import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchModel = ({ searchModel, searchToggle }) => {

  const [search, setSearch] = useState("");
  const modalRef= useRef("");
  const navigation = useNavigate();

  console.log(modalRef.current);


  window.addEventListener("click", function(event) {
    if (event.target === modalRef.current) {
      searchToggle()
    }
  });
  

  const searchProductNavigate = () => {
    searchToggle();
    navigation(`/search?category=${search}`);
  };
 
  return (
    <>
      {searchModel ? (
        <div className="Search_Model" ref={modalRef} >
          <span
            className="display-1 text-light closeSearchModel"
            onClick={() => searchToggle()}
          >
            X
          </span>
          <div className="search-input-model">
            <img className="searchIcon" src="./assets/img/search.png" alt="" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Your Insterest"
            />
            <button onClick={searchProductNavigate}>Search</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchModel;
