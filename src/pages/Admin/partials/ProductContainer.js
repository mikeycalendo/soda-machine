import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import {
    Card,
    Form,
    Label,
    FormFeedback,
    Input,
    CardBody,
    Button
} from "reactstrap";

class ProductContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "Fizz",
          cost: "1.00",
          currency: "1-dollar-US",
          maximum: 100.00,
          current_quantity: 33.00,
          src: "https://optimized-soda-images.vercel.app/fizz",
          restock_link: "/admin/restock-fizz",
          stripe_link: "https://buy.stripe.com/8wMbKz8M6eIb3zWfZ2"
        },
        {
          id: 2,
          name: "Pop",
          description: " An explosion of flavor that will knock your socks off!",
          cost: "1.00",
          currency: "1-dollar-US",
          maximum: 100.00,
          current_quantity: 75.00,
          src: "https://optimized-soda-images.vercel.app/pop",
          restock_link: "/admin/restock-pop",
          stripe_link: "https://buy.stripe.com/14k8yne6qbvZ7QcdQT"
        },
        {
          id: 3,
          name: "Cola",
          description: "A basic no nonsense cola that is the perfect pick me up for any occasion.",
          cost: "1.00",
          currency: "1-dollar-US",
          maximum: 200.00,
          current_quantity: 150.00,
          src: "https://optimized-soda-images.vercel.app/cola",
          restock_link: "/admin/restock-cola",
          stripe_link: "https://buy.stripe.com/8wMg0P1jE1Vp6M8002"
        },
        {
          id: 4,
          name: "Mega Pop",
          description: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal.",
          cost: "1.00",
          currency: "1-dollar-US",
          maximum: 50.00,
          current_quantity: 30.00,
          src: "https://optimized-soda-images.vercel.app/mega-pop",
          restock_link: "/admin/restock-mega-pop",
          stripe_link: "https://buy.stripe.com/4gw29Zd2mgQjfiEaEE"
        },
      ]
    };
  }
  render() {
    let productCard = this.state.products.map((product, index) => {
        return (
          <Col sm="4" key={`${product.id}+${index}`}>
            <ProductCard key={product.id} soda={product} />
          </Col>
       );
    });
    return (
        <Container fluid>
          <Row>{productCard}</Row>
        </Container>
    );
  }
}

export default ProductContainer;