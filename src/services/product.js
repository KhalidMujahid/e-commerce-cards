import img1 from "../assets/index1.jpeg";
import img2 from "../assets/index2.jpeg";
import img3 from "../assets/index3.jpeg";
import img4 from "../assets/index4.jpeg";
import img5 from "../assets/index5.jpeg";

const products = [
  {
    id: 1,
    name: "Tomato",
    price: 300,
    image: img1,
  },
  {
    id: 2,
    name: "Orange",
    price: 230,
    image: img2,
  },
  {
    id: 3,
    name: "Lemon",
    price: 250,
    image: img3,
  },
  {
    id: 4,
    name: "Apple",
    price: 900,
    image: img4,
  },
  {
    id: 5,
    name: "Pears",
    price: 1300,
    image: img5,
  },
];

export const getSingleProduct = (id) => {
  const product = products.find((product) => product.id === id);
  if (product) {
    return product;
  } else {
    return null;
  }
};

export default products;
