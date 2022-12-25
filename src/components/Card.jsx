import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Context } from "../context/ProductProvider";

const Card = ({ id, name, image, price }) => {
  const { addToCart, cart } = useContext(Context);

  return (
    <div className="text-center border p-4 rounded">
      <Image height={100} src={image} alt={name} width={100} />
      <p className="my-4 lead">{name}</p>
      <h4 className="my-3 lead">${price}.00</h4>
      <Button onClick={() => addToCart(id)}>
        Add to cart <FaPlus />
      </Button>
    </div>
  );
};

export default Card;
