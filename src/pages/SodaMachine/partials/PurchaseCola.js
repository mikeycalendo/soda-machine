import React, { useState } from "react";
import PropTypes from "prop-types";

export default class PurchaseCola extends React.Component {
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
                <h1>Purchase Cola</h1>
                <DownloadColaPurchase />
            </div>
        )
    }
}

function DownloadColaPurchase() {
  const [data] = useState({
    cola: [
      {
        id: 3,
        name: "Cola",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 100.00,
        current_quantity: 33.00,
        src: "https://optimized-soda-images.vercel.app/cola",
        download_link: "https://soda-machine.vercel.app/soda-machine/purchase-cola"
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
    <div className="cola-download-button">
      <button type="button" onClick={exportData}>
        Purchase Cola
      </button>
    </div>
  );
}
