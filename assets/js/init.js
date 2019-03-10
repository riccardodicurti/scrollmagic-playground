// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Create Animation for 0.5s
  var tween = TweenMax.to('#animation', 0.5, {
    /* backgroundColor: 'rgb(255, 39, 46)', */
    scale: 5,
    /* rotation: 360 */
  });

  var tween2 = TweenMax.to('#animation2', 0.5, {
    /* backgroundColor: 'rgb(255, 39, 46)', */
    scale: 2,
    rotation: 360
  });


  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene',
    offset: 150, /* offset the trigger 150px below #scene's top */
    duration: 100
  })
  .setTween(tween)
  .setPin("#animation")
  .addTo(scrollMagicController)
  .addIndicators();

  // Create the Scene and trigger when visible
  var scena0 = new ScrollMagic.Scene({
    triggerElement: '#scena0',
    offset: 150, /* offset the trigger 150px below #scene's top */
    duration: 5000
  })
  .setTween(tween)
  .setPin("#faccia")
  .addTo(scrollMagicController)
  .addIndicators();

  var scene2 = new ScrollMagic.Scene({
    triggerElement: '#scene2',
    offset: 50, /* offset the trigger 150px below #scene's top */
    duration: 500
  })
  .setTween(tween2)
  .addTo(scrollMagicController)
  .addIndicators();

  var images = [
    "assets/images/01.png",
    "assets/images/02.png",
    "assets/images/03.png",
    "assets/images/04.png",
    "assets/images/05.png"
  ];

  // TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};

// create tween
var tween3 = TweenMax.to(obj, 0.5,{
    curImg: images.length - 1,	// animate propery curImg to number of images
    roundProps: "curImg",				// only integers so it can be used as an array index
    repeat: 6,									// repeat 3 times
    immediateRender: true,			// load first image automatically
    ease: Linear.easeNone,			// show every image the same ammount of time
    onUpdate: function () {
      $("#myimg").attr("src", images[obj.curImg]); // set the image source
    }
  }
);

// build scene
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#scene3",
  offset: 150, /* offset the trigger 150px below #scene's top */
  duration: 600
})
        .setTween(tween3)
        .addIndicators() // add indicators (requires plugin)
        .addTo(scrollMagicController)
        .addIndicators();

// handle form change
$("form.move input[name=duration]:radio").change(function () {
  scene.duration($(this).val());
});

});
