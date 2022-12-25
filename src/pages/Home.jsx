import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Card";
import Header from "../components/Header";
import products from "../services/product";

const Home = () => {
  return (
    <div>
      <Container className="my-5">
        <Header />
        <div className="mt-5">
          <Row md={3} className="g-3">
            {products.map((product) => (
              <Col key={product.id}>
                <Card
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
