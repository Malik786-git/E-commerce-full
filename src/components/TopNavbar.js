import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchModel from "./subComponenets/SearchModel";

function TopNavbar() {
  const [userLogin, setUserLogin] = useState("");
  const [searchModel, setSearchModel] = useState(false);
  const bucketQuantity = useSelector(state => state.quantity);


  useEffect(() => {
    setUserLogin(localStorage.getItem("userName"));
  }, []);

  const searchToggle = ()=> {
    setSearchModel(!searchModel);
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <strong>
            {" "}
            <em className="brandLogo"> Shopping.pk </em>
          </strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className="navbar-content" to="/">
                {" "}
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar-content" to="/product">
                Product
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="navbar-content" to="/welcome">
                Welcome
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav className="text-light">
            <Nav.Link className="me-4">
                
             <div className='navbar-search-btn'
              onClick={searchToggle}
             >

              <i
                className="fa fa-search text-light me-2"
                aria-hidden="true"
                ></i>
                Search Category... 
              </div>
             
              
            </Nav.Link>
            <Nav.Link className="me-4">
              <NavLink className="navbar-content" to="/addtocard">
              <i
                className="fa fa-shopping-bag text-light me-2"
                aria-hidden="true"
              ></i>
                {bucketQuantity}
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <i
                className="fa fa-user-o text-light me-2"
                aria-hidden="true"
                ></i>
              {userLogin !== "" &&
              userLogin !== undefined &&
              userLogin !== null &&
              userLogin.length > 0 ? (
                <NavLink className="navbar-content">{userLogin}</NavLink>
                ) : (
                  <NavLink className="navbar-content" to="/login">
                  Login
                </NavLink>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <SearchModel searchModel={searchModel} searchToggle={searchToggle}  />
    </>
  );
}

export default TopNavbar;
