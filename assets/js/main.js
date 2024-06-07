$(function(){
  $('.announce-toggle').on('click', function() {
    $('.toolboard').slideToggle('.open');
  })

  //条件抽出のポップアップ表示
  $('.search-extract-btn').on('click', function() {
    $('.popup').toggle('.open');
    $('.popup-content').removeClass('hidden');
    $('.popup-extract-logo').removeClass('open');
  })

  $('.popup-content-close-box').on('click', function() {
    $('.popup').toggle('open');
  })

  //条件抽出中のロードポップアップ表示
  $('.popup-content-result-btn').on('click', function() {
    $('.popup-content').addClass('hidden');
    $('.popup-extract-logo').addClass('open');
    $('.popup').fadeOut(4000);
  })
});