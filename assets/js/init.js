// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Create Animation for 0.5s
  var tween = TweenMax.to('#animation', 0.5, {
    backgroundColor: 'rgb(255, 39, 46)',
    scale: 5,
    rotation: 360
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene',
    offset: 150, /* offset the trigger 150px below #scene's top */
    duration: 500
  })
  .setTween(tween)
  .addTo(scrollMagicController);

  // Add debug indicators fixed on right side
   scene.addIndicators();

});
