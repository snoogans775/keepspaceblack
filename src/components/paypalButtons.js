import * as React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

export function PaypalButtons(props) {
    return (<>

    <PayPalButton
        amount="2.00"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: process.env.GATSBY_PAYPAL_CLIENT_ID,
          currency: "USD",
        }}
      />
  </>);
}