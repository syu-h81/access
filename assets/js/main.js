$(function(){
  $('.announce-toggle').on('click', function() {
    $('.toolboard').slideToggle('.open');
  })

  //条件抽出のポップアップ表示
  $('.search-extract-btn').on('click', function() {
    $('.popup').toggle('.open');
  })

  $('.popup-content-close-box').on('click', function() {
    $('.popup').toggle('oepn');
  })
});