import React from "react"
import {
  Container,
} from "reactstrap"
import Header from "../../components/HorizontalLayout/Header";
import SodaContainer from "./SodaContainer";

const SodaMachine = () => {
  document.title="Soda Machine | By Mike Calendo";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <Header />
        <h4>Soda Machine</h4>
        <SodaContainer />
      </Container>
    </div>
  </React.Fragment>
  );
}

export default SodaMachine;
