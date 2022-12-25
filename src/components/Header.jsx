import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/ProductProvider";

const Header = () => {
  const { pathname } = useLocation();
  const { cart, clearCart } = useContext(Context);

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand>Shopping</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {pathname === "/" ? (
              <Link to={"cart"}>
                <Button>
                  <FaCartPlus />
                  Cart ({cart.length})
                </Button>
              </Link>
            ) : (
              <div>
                <Button
                  onClick={() => clearCart()}
                  className="me-3"
                  variant="danger"
                >
                  Remove all
                </Button>
                <Link to={"/"}>
                  <Button>
                    Home <FaHome />
                  </Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
