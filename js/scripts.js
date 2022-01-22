$(document).on("change",".switch",function() {
  $("body").toggleClass("dark");
});

$(document).ready(function() {
  $(".clickable-b, .clickable-w, .clickable-r").click(function() {
    $("#toggle-bear").toggle();
    $("#toggle-wolf").toggle();
    $("#toggle-raven").toggle();
     });
    });
