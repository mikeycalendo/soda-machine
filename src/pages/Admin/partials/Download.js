import React, { useState } from "react";
import "./styles.css";
import newdata from "../../../constants/data";

export default function Download() {
  const [data] = useState({
    products: [
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
      {
        id: 2,
        name: "Pop",
        description: " An explosion of flavor that will knock your socks off!",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 100.00,
        current_quantity: 75.00,
        src: "https://optimized-soda-images.vercel.app/pop",
        stripe_link: "https://buy.stripe.com/14k8yne6qbvZ7QcdQT"
      },
      {
        id: 3,
        name: "Cola",
        description: "A basic no nonsense cola that is the perfect pick me up for any occasion.",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 200.00,
        current_quantity: 150.00,
        src: "https://optimized-soda-images.vercel.app/cola",
        stripe_link: "https://buy.stripe.com/8wMg0P1jE1Vp6M8002"
      },
      {
        id: 4,
        name: "Mega Pop",
        description: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal.",
        cost: "1.00",
        currency: "1-dollar-US",
        maximum: 50.00,
        current_quantity: 30.00,
        src: "https://optimized-soda-images.vercel.app/mega-pop",
        stripe_link: "https://buy.stripe.com/4gw29Zd2mgQjfiEaEE"
      },
    ]
  });

  console.log(data);

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
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button type="button" onClick={exportData}>
        Export Data
      </button>
    </div>
  );
}
