$(".p-menu").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".p-nav").slideUp();
  } else {
    $(this).addClass("active");
    $(".p-nav").slideDown();
  }
});
