$(function () {
    // ハンバーガーボタンクリックで実行
    $(".drawer_button").click(function () {
      $(this).toggleClass("active");
      $(".drawer_nav").toggleClass("active");
    });
    // function
  });