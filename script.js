$(document).ready(function () {
  $("input").each(function () {
    $(".js--focus").addClass("blur");
    $("input").focus(function () {
      $(".js--focus").removeClass("blur").addClass("focus");
    });
    $("input").blur(function () {
      $(".js--focus").removeClass("focus").addClass("blur");
    });
  });
});


