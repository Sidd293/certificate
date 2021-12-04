import React, { useState, useEffect } from "react";

const ReactPayPal = ({ description, amount, currency_code }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description,
                amount: {
                  // currency_code,
                  value: `${amount}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.{error}</div>;
  }

  // Default Render
  return (
    <div>
      {/* <h4>Total Amount in Rs. : {amount} /-</h4> */}
      <div ref={paypalRef} />
    </div>
  );
}

export default ReactPayPal;
