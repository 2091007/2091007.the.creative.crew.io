$(function () {
  $(".m1-img").on("mouseenter", function () {
    $('.m1-img')
    .addClass("animate__bounce")
    .one("animationed", function () {
      $(".m1-img").removeClass("animate__bounce");
    });
  });
});

$(function () {
  $(".f1-img").on("mouseenter", function () {
    $('.f1-img')
    .addClass("animate__heartBeat")
    .one("animationed", function () {
      $(".f1-img").removeClass("animate__heartBeat");
    });
  });
});

$(function () {
  $(".m2-img").on("mouseenter", function () {
    $('.m2-img')
    .addClass("animate__tada")
    .one("animationed", function () {
      $(".m2-img").removeClass("animate__tada");
    });
  });
});

$(function () {
  $(".f2-img").on("mouseenter", function () {
    $('.f2-img')
    .addClass("animate__flipInX")
    .one("animationed", function () {
      $(".f2-img").removeClass("animate__flipInX");
    });
  });
});

$(function () {
  $(".m3-img").on("mouseenter", function () {
    $('.m3-img')
    .addClass("animate__shakeX")
    .one("animationed", function () {
      $(".m3-img").removeClass("animate__shakeX");
    });
  });
});

$(function () {
  $(".m4-img").on("mouseenter", function () {
    $('.m4-img')
    .addClass("animate__jello")
    .one("animationed", function () {
      $(".m4-img").removeClass("animate__jello");
    });
  });
});