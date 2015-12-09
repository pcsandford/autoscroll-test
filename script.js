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
          "speed": "slow",
          "pause": 5,
          "click": false,
          "minimumMovement": 0
        });
  },500);

  function play() {
    var $scroll = _getScrollEl();
    if ($scroll) {
      $scroll.play();
    }
  }

  play();



});

