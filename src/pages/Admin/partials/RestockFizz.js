import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "reactstrap";

export default class RestockFizz extends React.Component {
    static propTypes = {
        src: PropTypes.src,
        soda: PropTypes.object,
        jsonObject: PropTypes.jsonObject,
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        cost: PropTypes.decimal,
        currency: PropTypes.string,
        maximum: PropTypes.decimal,
        current_quantity: PropTypes.decimal,
        new_quanity: PropTypes.decimal,
    };
    render() {
        return (
          <div>
            <Container>
                  <Col>
                    <Row>
                      <div>
                        <br />
                          <h5>Adjust Soda Inventory. </h5>
                      </div>
                    </Row>
                  </Col>
                  <FizzQuanityCap />
                  <h1>Add more Fizz</h1>
                  <h3>Can't exceed 100 Sodas</h3>
                  <Button>Submit</Button>
            </Container>
          </div>
        )
    }
}

const FizzQuanityCap = () => {
  const MAX_VAL = 100;
  const withFizzCap = (inputObj) => {
  const { value } = inputObj;
  if (value <= MAX_VAL) return true;
    return false;
  };
  return (
    <>
      <label> Field with value limit to 100 </label> <br />
      <NumberFormat value={12} isAllowed={withFizzCap} />
    </>
  );
}