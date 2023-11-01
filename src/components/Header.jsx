import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { Link, NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../slices/cartSlice";

const Header = () => {
  const {cart , totalQuantity } = useSelector(
    (state) => state.allcart);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3 fs-4">
            {" "}
            Add to cart{" "}
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="text-decoration-none text-light fs-4"
              href="#home"
            >
              Home
            </NavLink>
          </Nav>
          <Link to="/cartpage">
          <Badge
            badgeContent={totalQuantity ? totalQuantity : "0"}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 24 }}
            ></i>
          </Badge>
          </Link>
        </Container>
      </Navbar>  
    </>
  );
};
export default Header;