$(document).ready(function () {
// Putting jquery effects on the portfolio cards to appear when mouse cursor is on the card and disappear after

$('#icon1').mouseenter(function () {
    $('.icon-heading0').filter('#icon1-title').show(1000);
}).mouseleave(function () {
    $('#icon1-title').hide("slow");
});
$('#icon2').mouseenter(function () {
    $('.icon-heading1').filter('#icon2-title').show(1000);
}).mouseleave(function () {
    $('#icon2-title').hide("slow");
});
$('#icon3').mouseenter(function () {
    $('.icon-heading2').filter('#icon3-title').show("slow");
}).mouseleave(function () {
    $('#icon3-title').hide("slow");
});
$('#icon4').mouseenter(function () {
    $('.icon3-heading').filter('#icon4-title').show("slow");
}).mouseleave(function () {
    $('#icon4-title').hide("slow");
});
$('#icon5').mouseenter(function () {
    $('.icon-heading4').filter('#icon5-title').show("slow");
}).mouseleave(function () {
    $('#icon5-title').hide("slow");
});
$('#icon6').mouseenter(function () {
    $('.icon-heading5').filter('#icon6-title').show("slow");
}).mouseleave(function () {
    $('#icon6-title').hide("slow");
});
$('#icon7').mouseenter(function () {
    $('.icon-heading6').filter('#icon7-title').show("slow");
}).mouseleave(function () {
    $('#icon7-title').hide("slow");
});
$('#icon8').mouseenter(function () {
    $('.icon-heading7').filter('#icon8-title').show("slow");
}).mouseleave(function () {
    $('#icon8-title').hide("slow");
});


  // togle effects JQuery; effects
$('#design').click(function () {
    $('#design2').show(function () {
        $('#design').hide('slow');
    });
});
$('#design2').click(function () {
    $('#design').show(function () {
        $('#design2').hide('slow');
    });
});
$('#devlpmt').click(function () {
      $('#development2').show(function () {
          $('#devlpmt').hide('slow');
      });
  });
  $('#development2').click(function () {
      $('#devlpmt').show(function () {
          $('#development2').hide('slow');
      });
  });

  $('#product').click(function () {
      $('#product2').show(function () {
          $('#product').hide('slow');
      });
  });
  $('#product2').click(function () {
      $('#product').show(function () {
          $('#product2').hide('slow');
      });
  });

  // $(document).ready(function() {
  //     $("form#contact-button").submit(function(event) {
  //         var name = $("input#name").val();
  //         var email = $("input#email").val();
  //         var message = $("textarea#message").val();
  //         if name && email){
  //           alert (name + ", we have received your message.");
  //         } else {
  //         alert ("Hi there. No data entered");
  //       };
  //         // $("#name").text(nameInput);
  //         // $("#email").text(emailInput);
  //         // $("#message").text(messageInput);
  //
  //         alert("Email well received");
  //
  //         event.preventDefault();
  //     });
});
