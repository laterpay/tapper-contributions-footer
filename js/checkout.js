
// This function is called when the tab is full/time to pay and charge
// a credit card
function stripe(tab,status) {
  alert("Great! Contribution created and it's time to pay!\n\nStripe Payment Intent:\n" + tab.responseJSON.client_secret +"\n" + "Stripe Merchant ID:\n" + tab.responseJSON.publishable_key);

}

// The main function when the user clicks on the "contribute" button.
function contribute() {
  var purchaseItem;

  //Get our bearer token
  $.ajax({
    url: "https://auth.sbx.laterpay.net/oauth2/token",
    type: "POST",
    data: { grant_type: "client_credentials", scope: "read write" },
    accepts: { customtype: "application/json, text/plain, */*" },
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(client + ":" + secret));
    }
  })
    .done(function (data) { //Once we have our token, proceed with the purchase
      JSON.data;
      var authorization = 'Bearer ' + data.access_token;

      $.ajax({
        url: "https://tapi.sbx.laterpay.net/v1/purchase",
        type: "POST",
        data: JSON.stringify(contributionPayload),
        dataType: "application/json",
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", authorization);
        },
        error: function (xhr, status, error) { // have to use the error handler because when buying something a 402 Payment Required return code is sent.
          purchaseItem = JSON.parse(xhr.responseText);
          $.ajax({
            url: "https://tapi.sbx.laterpay.net/v1/payment/start/" + purchaseItem.tab.id,
            complete: stripe, // Function to handle credit card processing
            beforeSend: function (xhr) {
              xhr.setRequestHeader("Authorization", authorization);
            }
          });
        }
      });
    });
};



