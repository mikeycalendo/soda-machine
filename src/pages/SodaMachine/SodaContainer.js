import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import SodaCard from "./SodaCard";

class SodaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      sodas: [
        {
          id: 1,
          name: "Fizz",
          description: "An effervescent fruity experience with hints of grape and coriander.",
          cost: "1.00",
          currency: "1-dollar-US",
          maxiumum_quanity: 100,
          current_quanity: 100,
          src: "https://optimized-soda-images.vercel.app/fizz",
          restock_link: "/admin/restock-fizz",
          download_link: "/soda-machine/purchase-fizz"
        },
        {
          id: 2,
          name: "Pop",
          description: " An explosion of flavor that will knock your socks off!",
          cost: "1.00",
          currency: "1-dollar-US",
          maxiumum_quanity: 100,
          current_quanity: 100,
          src: "https://optimized-soda-images.vercel.app/pop",
          restock_link: "/admin/restock-pop",
          download_link: "/soda-machine/purchase-pop"
        },
        {
          id: 3,
          name: "Cola",
          description: "A basic no nonsense cola that is the perfect pick me up for any occasion.",
          cost: "1.00",
          currency: "1-dollar-US",
          maxiumum_quanity: 200,
          current_quanity: 200,
          src: "https://optimized-soda-images.vercel.app/cola",
          restock_link: "/admin/restock-cola",
          download_link: "/soda-machine/purchase-cola"
        },
        {
          id: 4,
          name: "Mega Pop",
          description: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal.",
          cost: "1.00",
          currency: "1-dollar-US",
          maxiumum_quanity: 50,
          current_quanity: 50,
          src: "https://optimized-soda-images.vercel.app/mega-pop",
          restock_link: "/admin/restock-mega-pop",
          download_link: "/soda-machine/purchase-mega-pop"
        },
      ]
    };
  }
  render() {
    let sodaCard = this.state.sodas.map((soda, index) => {
        return (
          <Col sm="4" key={`${soda.id}+${index}`}>
            <SodaCard key={soda.id} soda={soda} />
          </Col>
          
       );
    });

    let sodaCheckout = this.state.sodas.map((soda, index) => {
      return (
        <Col sm="4" key={`${soda.download_link}+${index}`}>
            <Link to={soda.download_link} soda={soda}>
              <sodaCheckout key={soda.download_link} soda={soda} />
            </Link>
        </Col>
        );
    });

    let sodaPurchase = this.state.sodas.map((soda, index) => {
      return (
        <Col sm="4" key={`${soda.restock_link}+${index}`}>
            <Link to={soda.restock_link} soda={soda}>
              <sodaPurchase key={soda.restock_link} soda={soda} />
            </Link>
        </Col>
        );
    });

    return (
        <Container fluid>
          <Row>{sodaCard}</Row>
        </Container>
    );
  }
}

export default SodaContainer;