import React, { useState } from "react";

export default function DownloadPurchase() {
  const [data] = useState({
    fizz: [
      {
        id: 1,
        name: "Fizz",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 100.00,
        current_quantity: 33.00,
        src: "https://optimized-soda-images.vercel.app/fizz",
        stripe_link: "https://buy.stripe.com/8wMbKz8M6eIb3zWfZ2"
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
    <div className="fizz-download-button">
      <button type="button" onClick={exportData}>
        Export Data
      </button>
    </div>
  );
}
