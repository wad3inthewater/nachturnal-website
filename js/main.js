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
    var s = skrollr.init();
    $('ul.nav a').smoothScroll({
        speed:1000
    });

    function handleResize(){
        $("section").height($(window).height());
        //s.refresh();
        //skrollr.init();
    }
    function fixSkrollr(){

    }
    handleResize();
    $(window).bind('resize', handleResize);


});



