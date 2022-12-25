import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import CartList from "../components/CartList";
import Header from "../components/Header";
import { Context } from "../context/ProductProvider";

const Cart = () => {
  const { cart } = useContext(Context);

  return (
    <div>
      <Container className="my-5">
        <Header />
        <div className="my-5">
          <Table responsive bordered className="text-center">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Product</th>
                <th>Quatity</th>
                <th>Action</th>
                <th>Inc/Dec</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <CartList
                  key={product.id}
                  sn={index}
                  id={product.id}
                  qua={product.qua}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
