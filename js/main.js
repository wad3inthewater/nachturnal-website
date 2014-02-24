/*$(function(){
    var windowH = $(window).height();
    var wrapperH = $('#wrapper').height();
    if(windowH > wrapperH) {
        $('#wrapper').css({'height':($(window).height())+'px'});
    }
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#wrapper').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#truecontent').height();
        if(windowH > truecontentH) {
            $('#wrapper').css('height', (newH)+'px');
        }

    })
});*/

$(document).ready(function() {

    soundcloud.addEventListener('onPlayerReady', function(player, data) {
        player.api_play();

    var flashvars = {
      enable_api: true,
      object_id: "myPlayer",
      url: "https://soundcloud.com/snowmine/rome"
    };
    var params = {
      allowscriptaccess: "always"
    };
    var attributes = {
      id: "myPlayer",
      name: "myPlayer"
    };
    swfobject.embedSWF("http://player.soundcloud.com/player.swf", "myContent", "81", "100%", "9.0.0","expressInstall.swf", flashvars, params, attributes);

                //
    });

    var s = skrollr.init();
    Shadowbox.init({
        language:'en',
        players:['img','swf']
    });

    $('ul.nav a').smoothScroll({
        speed:1000
    });

    function handleResize(){
        //$("section").height($(window).height());
        //s.refresh();
        //skrollr.init();
    }
    handleResize();
    $(window).bind('resize', handleResize);

// menu show hide
    $(".nav").hide();
    $("nav").on("hover",function(e) {
        $(".nav").stop().slideToggle();
    });
//change the moon icon
var currentSection = $("section");
var distance = $("#about").offset().top;

var $window = $ (window);

$window.scroll(function() {
    if($window.scrollTop() >= distance ){
        
    }   
});


//--------------------------------------------------------



});



