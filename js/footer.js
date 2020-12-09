// This code handles the UI/UX experience

//Set up the footer based on the footerOptions object.
$('#label-1').text('$' + footerOptions.amounts[0]);
$('#label-2').text('$' + footerOptions.amounts[1]);
$('#label-3').text('$' + footerOptions.amounts[2]);
$('#label-4').text('$' + footerOptions.amounts[3]);
$('.lp-footer-text-header').text(footerOptions.ctaHeader);
$('.lp-footer-text').text(footerOptions.ctaText);
$('#amount-other').val(footerOptions.otherText);
$('#submit').text(footerOptions.buttonText);


// Close the footer if the user clicks on the X
$(".lp-footer-close").click(function() {
    document.cookie = "laterpayFooter";
    $("#lp-footer").css("display","none");
});

// What happens when a user clicks on the "contirbute" button
$( "#submit" ).click(function() {
    // Insert the chosen amont into the JSON to send to tapper
    contributionPayload.price.amount = $('input[name="amount"]:checked').val();
    contribute(); //located in checkout.js
  });