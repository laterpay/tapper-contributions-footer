
//Laterpay Tapper Client Key and Secret
var client = 'client.1d0fe819-b6f8-4aed-8661-99d599b08836';
var secret = '2ubszmnkt81ET_dLPjRwmFm_0A';


// Contribution Defaults This is the payload that will be sent
// to /v1/purchase. The price will be populated by user choice.
// user_id can be email address (if collected). It's random now.

var contributionPayload = {
	"user_id": Math.floor(Math.random() * (1000000 - 0) ),
	"offering_id": "contribution_1",
	"summary": "Your contribution",
	"price" : {"currency": "USD", "amount":""},
	"payment_model": "pay_now",
	"sales_model": "contribution"
}


var footerOptions = {
	"lpid": "",
	"ctaHeader": "We Need Your Support!",
	"ctaText": "You might want to open the Network Console to see what's goign on. (ctrl+option+J)",
	"otherText": "OTHER",
	"buttonText": "CONTRIBUTE",
	"amounts": ["4","8","10","12"]
}