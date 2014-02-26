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

    //var s = skrollr.init();
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
    $("nav").on("click", function(e){
        //$(".nav").stop().slideToggle();
    });
//change the moon icon
//var currentSection = $("section");
var distance = $("#clientele").offset().top;

var $window = $ (window);

$window.scroll(function() {
    if($window.scrollTop() >= distance ){
        $(".nav a").css({
            color: '#000000'
        });
    }
    else{
         $(".nav a").css({
            color: '#ffffff'
        });
    }
});


//--------------------------------------------------------

});



   var tomCS = {};

$(document).ready(function() {
    // Check the width of the screen
    tomCS.winW = $(window).width();
    // Check if it's a touch screen (based on Modernizr) - Remove if it if you want    
    tomCS.isTouch = false;
    if($('.touch')[0]){
        tomCS.isTouch = true;
    }
    // If the size of the screen is lower or equal to 767, we are on a mobile device
    tomCS.isMobile = false;
    if(tomCS.winW <= 767){
        tomCS.isMobile = true;
        //alert("true");
    }
    // If we are not on a mobile device, initiate skrollr
    if (!tomCS.isMobile){
        tomCS.s = skrollr.init();
        //alert("yo");
    }
});
/*
// Disable or enable skrollr on window resize
$(window).resize(function(){
    console.log("RESIZE");
    tomCS.winW = $(window).width();
    if(tomCS.winW <= 767){
        console.log("MOBILE");
        tomCS.isMobile = true;
        if($('.skrollable')[0]){
        tomCS.s.destroy();
        }
    } else {
        console.log("NOT MOBILE");
        if(!$('.skrollable')[0]){
        tomCS.s = skrollr.init({forceHeight: true});
        }
    }
});
*/


