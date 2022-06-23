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

export default class PurchasePop extends React.Component {
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
                <h1>PurchasePop</h1>
                <DownloadPopPurchase />
            </div>
        )
    }
}

function DownloadPopPurchase() {
  const [data] = useState({
    pop: [
      {
        id: 2,
        name: "Pop",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 100.00,
        current_quantity: 33.00,
        src: "https://optimized-soda-images.vercel.app/fizz",
        download_link: "https://soda-machine.vercel.app/soda-machine/purchase-pop"
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
    <div className="pop-download-button">
      <button type="button" onClick={exportData}>
        Purchase Pop
      </button>
    </div>
  );
}
