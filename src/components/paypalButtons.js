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
          clientId: "ATUNKpnpWvUJtgyc_rm06BN7ApzfT2WmUyzvgGZAQK4uh_Q7dgdo_IR7vc4WxuS6dkG5MlX7BO9_hESv",
          currency: "USD",
        }}
      />
  </>);
}