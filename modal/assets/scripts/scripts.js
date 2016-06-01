"use strict";
$("#button").on("click",function() {
  $(".modal").addClass("showing");
});

$("#background").on("click",function(){
  $(".modal").removeClass("showing");
});
// /I'm trying to get the modal not to hide when it's clicked/
// $(".modal").on("click",function() {
//   $(".modal").addClass("showing");
// });

// $(".modal").on("click",function() {
//   $(".modal").show();
// });
