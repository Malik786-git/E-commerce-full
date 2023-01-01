import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function TopNavbar() {


  const [userLogin, setUserLogin] = useState('');

 useEffect(()=>{
    setUserLogin(localStorage.getItem('userName'))
  }, []);

  return (
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
              <i
                className="fa fa-shopping-bag text-light me-2"
                aria-hidden="true"
              ></i>
              <NavLink className="navbar-content" to="/login">
                0
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <i
                className="fa fa-user-o text-light me-2"
                aria-hidden="true"
              ></i>
              {
                userLogin !== '' && userLogin !== undefined && 
                userLogin !== null &&  userLogin.length> 0 
                ? 
                <NavLink className="navbar-content">
                 {userLogin}
               </NavLink>
                : 
                <NavLink className="navbar-content" to="/login">
                Login
              </NavLink>
              }
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
