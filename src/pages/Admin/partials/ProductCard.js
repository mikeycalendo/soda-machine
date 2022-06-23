import React, { useState } from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Button,
    FormText
} from "reactstrap";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom"
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
    static propTypes = {
        src: PropTypes.src,
        soda: PropTypes.object,
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        cost: PropTypes.decimal,
        currency: PropTypes.string,
        maximum: PropTypes.decimal,
        current_quantity: PropTypes.decimal,
        new_quanity: PropTypes.decimal,
        stripe_link: PropTypes.url,
        product_cap: PropTypes.decimal,
        restock_link: PropTypes.url
    };
    render() {
        
        return (
            <div>
                <Card>
                   
                    <CardBody>
                        <h1>{this.props.soda.name}</h1>
                        <FormText>Maximum quanity: {this.props.soda.maximum}</FormText>
                        <br />
                        <FormText>Available: {this.props.soda.maximum}</FormText>
                        <br />
                        <FormText>Current Price:
                          <PriceCount />
                        </FormText>
                        
                        <div className="pt-2">
                            <Link to={this.props.soda.restock_link}>
                                <Button>Restock </Button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ProductCard;

export const PriceCount = () => {
    const MAX_VAL = 100;
    const withValueCap = (inputObj) => {
      const { value } = inputObj;
      if (value <= MAX_VAL) return true;
      return false;
    };
    const [priceCount, setPriceCount] = useState(1.00); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
  
    function increment() {
      //setCount(prevCount => prevCount+=1);
      setPriceCount(function (prevPriceCount) {
        return (prevPriceCount += 1);
      });
    }
  
    function decrement() {
        setPriceCount(function (prevPriceCount) {
        if (prevPriceCount > 0) {
          return (prevPriceCount -= 1); 
        } else {
          return (prevPriceCount = 0);
        }
      });
    }
  
    return (
      <div className="Price Count ">
        <h5 className="pt-1 pb-1 mxy-4">$ {priceCount}</h5>
            <div className="flex flex-row justify-center ">
              <Button onClick={increment}> + </Button>
            </div>
            <div className="flex flex-row justify-center pt-2">
              <Button onClick={decrement}> - </Button>
            </div>
      </div>
    );
}

// Product Caps
// Fizz

export function FizzAmountCap() {
    const MAX_VAL = 100;
    const withValueCap = (inputObj) => {
      const { value } = inputObj;
      if (value <= MAX_VAL) return true;
      return false;
    };
    return (
      <>
        <label> Add up to 100 Sodas</label> <br />
        <NumberFormat value={33} isAllowed={withValueCap} />
      </>
    );
  }
  