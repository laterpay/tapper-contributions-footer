# tapper-contributions-footer
A simple template for using tapper to handle contributions via a floating html footer.

This project present the user with a set of pre-defined contirbution amounts. The user can select one, then click on the "contribute" button.
A call will be made to Tapper to record the contribution to a tab. It will return a Stripe payment intent for you to process a credit card.

This example does not include a form to solicit credit card information or process the transaction (to limit scope and complexity)

*Note: There is no user feedback while the browser makes the (slow) calls to Tapper, so keep an eye on the network tab in Chrome to see activity*

You will need to update `js/footeroptions.js` with your Tapper credentials.


