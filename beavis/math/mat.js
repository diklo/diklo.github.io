var things = ["bpa.jpg", "lo.jpg"];
var randomThing = things[Math.floor(Math.random()*things.length)];
console.log(randomThing);
$("body").append("<img src='" + randomThing + "'>");


// var words = ["hello","world","lorem","ipsum"];

// for (var increment = 0; increment < 100; increment++) {
//   $("body").append('<div class="button"></div>');
// }

// var randomThing = things[Math.floor(Math.random()*4)];

// $("body").append("<img src='img/" + randomThing + "'>");


// function makePattern() {
//     $(".button").each(function() {
//   var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
//   var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
//   $(this).css("top",topPosition).css("left",leftPosition);
//   var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//   $(this).css("background-color",newColor);
//   var newSize = Math.floor(Math.random()*300) + "px";
//   $(this).css("width",newSize).css("height",newSize);

// });

// }

// $(window).resize(function() {
//   makePattern();
// });

// $(".activate").click(function(){
//   makePattern();
// })


// for (var myPoem = 0; myPoem < 5; myPoem++) {
//   $(".poem").append(words[Math.floor(Math.random()*words.length)]  + " ");
  
// }
