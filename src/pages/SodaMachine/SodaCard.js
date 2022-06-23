import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import DownloadPurchase from "pages/Admin/partials/DownloadPurchase";

class SodaCard extends React.Component {
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
        stripe_link: PropTypes.url,
        download_link: PropTypes.url
    };
    render() {
        return (
            <div>
                <Card>
                    <h5 className="text-center pt-4 text">Available</h5>
                    <CardImg
                        top
                        width="100%"
                        src={this.props.soda.src}
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle>{this.props.soda.name}</CardTitle>
                        <CardText>Price: {this.props.soda.cost}</CardText>
                        <CardSubtitle>{this.props.soda.company}</CardSubtitle>
                        <CardText>{this.props.soda.description}</CardText>
                        <Link to={this.props.soda.download_link}>
                            <Button>Purchase </Button>
                        </Link>
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

export default SodaCard;