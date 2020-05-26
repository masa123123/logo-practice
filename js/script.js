
//スライド画像
$('.slick01').slick({
    autoplay: true, //「オプション名: 値」の形式で書く
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear',
    arrows: false,
});


//バーガーボタン
$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.header-wrapper').toggleClass('slide-in');
});


//スクロールしたらフェードイン
$(window).scroll(function () {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 10;
    
    // eachでliを順番に処理
    $(".handling-search").each(function (i) {
        if(effectPos > $(this).offset().top + 200){
            var that = this;

            // 0.3s毎にずれて表示
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 300 * i);
        }
    });
});

//ページトップボタン
$(function(){
    $('#pagetop').click(function () {
        //id名#pagetopがクリックされたら、以下の処理を実行
        $("html,body").animate({scrollTop:0},1000);
    });
    $('#pagetop').hide();
    $(window).scroll(function () {
        if($(window).scrollTop() > 2000) {
            $('#pagetop').slideDown(600);
        } else {
            $('#pagetop').slideUp(600);
        }
    });
});