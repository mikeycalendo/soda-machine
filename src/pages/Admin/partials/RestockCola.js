import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import React, {} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "reactstrap";

export default class RestockCola extends React.Component {
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
                  <ColaQuanityCap />
                  <h1>Add more Cola</h1>
                  <h3>Can't exceed 200 Sodas</h3>
                  <Button>Submit</Button>
            </Container>
          </div>
        )
    }
}

const ColaQuanityCap = () => {
  const MAX_VAL = 200;
  const withColaCap = (inputObj) => {
  const { value } = inputObj;
  if (value <= MAX_VAL) return true;
    return false;
  };
  return (
    <>
      <label> Field with value limit to 200 </label> <br />
      <NumberFormat value={12} isAllowed={withColaCap} />
    </>
  );
}