$(document).ready(function () {
$('#design').click(function () {
    $('#design2').show(function () {
        $('#design').hide('fast');
    });
});
$('#design2').click(function () {
    $('#design').show(function () {
        $('#design2').hide('fast');
    });
});

// Putting jquery effects on the portfolio cards to appear when mouse cursor is on the card and disappear after

$('#icon1').mouseenter(function () {
    $('.icon-heading0').filter('#icon1-title').show("slow");
}).mouseleave(function () {
    $('#icon1-title').hide("slow");
});
$('#icon2').mouseenter(function () {
    $('.icon-heading1').filter('#icon2-title').show("slow");
}).mouseleave(function () {
    $('#icon2-title').hide("slow");
});

$('#icon3').mouseenter(function () {
    $('.icon-heading2').filter('#icon3-title').show("slow");
}).mouseleave(function () {
    $('#icon3-title').hide("slow");
});

$('#icon4').mouseenter(function () {
    $('.icon-heading3').filter('#icon4-title').show("slow");
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
