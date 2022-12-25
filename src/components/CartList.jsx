import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Context } from "../context/ProductProvider";

const CartList = ({ id, sn, image, name, price, qua }) => {
  const { removeFromCart, increaseQuatity, decreaseQuatity } =
    useContext(Context);

  return (
    <tr>
      <td>{sn + 1}</td>
      <td>
        <Image width={50} height={50} src={image} alt={name} />
        <p className="lead">{name}</p>
        <p className="lead">${price}.00</p>
      </td>
      <td>{qua}</td>
      <td>
        <Button onClick={() => removeFromCart(id)} variant="danger">
          Delete <FaTrash />
        </Button>
      </td>
      <td>
        <Button onClick={() => increaseQuatity(id)} variant="outline-primary">
          +
        </Button>
        <Button onClick={() => decreaseQuatity(id)} variant="outline-primary">
          -
        </Button>
      </td>
    </tr>
  );
};

export default CartList;
