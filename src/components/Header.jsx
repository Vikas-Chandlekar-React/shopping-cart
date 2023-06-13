import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles.css";
import { CartState } from "../context/Context";
import { ACTIONS } from "../context/Reducers";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: "500px" }}
            placeholder="Search a product..."
            className="m-auto"
            aria-label="Search"
            onChange={(e) => {
              productDispatch({
                type: ACTIONS.FILTER_BY_SEARCH,
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: "370px" }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch({
                            type: ACTIONS.REMOVE_FROM_CART,
                            payload: prod,
                          });
                        }}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: "10px" }}>Cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
