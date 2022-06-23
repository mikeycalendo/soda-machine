import React, { useState } from "react";
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

export default class PurchaseMegaPop extends React.Component {
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
    };
    render() {
        return (
            <div>
                <h1>Mega Pop</h1>
                <DownloadMegaPopPurchase />
            </div>
        )
    }
}

function DownloadMegaPopPurchase() {
  const [data] = useState({
    megapop: [
      {
        id: 4,
        name: "MegaPop",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 100.00,
        current_quantity: 33.00,
        src: "https://optimized-soda-images.vercel.app/mega-pop",
        download_link: "https://soda-machine.vercel.app/soda-machine/purchase-mega-pop"
      },
    ]
  });

  console.log(data);

  console.log(data.name)

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <div className="mega-pop-download-button">
      <button type="button" onClick={exportData}>
        Purchase Mega Pop
      </button>
    </div>
  );
}
