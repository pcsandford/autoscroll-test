$(document).ready(function(){

  var $scrollContainer = $("#scroll-container");


  function _getScrollEl() {
    if (typeof $scrollContainer.data("plugin_autoScroll") !== "undefined") {
      return  $scrollContainer.data("plugin_autoScroll");
    }

    return null;
  }

  setTimeout(function(){
    $scrollContainer.autoScroll({
          "by": "continuous",
          "speed": "medium",
          "pause": 5,
          "click": true,
          "minimumMovement": 10
        });
  },500);

  function play() {
    var $scroll = _getScrollEl();

    if ($scroll) {
      console.log('play');
      $scroll.play();
    }
  }

  play();



});

