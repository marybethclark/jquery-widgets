"use strict";
$("#button").on("click",function() {
  $(".modal").addClass("showing");
});

$("#background").on("click",function(){
  $(".modal").removeClass("showing");
});
