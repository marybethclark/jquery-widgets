$( function () {
  "use strict";
// code below from instructions at http://geoffmuskett.com/really-simple-jquery-character-countdown-in-textarea/

var maxLength = 25;
// for the textarea element, run the following function after a keyboard key pops back up.  the length variable is assigned the value of the length of how many characters are entered into the textarea. Change the value of length to now be the maxlength (25) minus how many characters are entered. In the chars id location in the html, add text showing the current length value.
$('textarea').keyup(function(){
  var length = $(this).val().length;

  var length = maxLength - length;
  $('#chars').text (length);
});
// holy crap!!  Adding another set of }); made the program work!  That was the problem?????
});




// unused possible code source: http://www.mkyong.com/jquery/add-maxlength-on-textarea-using-jquery/
  // $(document).ready( function () {
  	// maxLength = $("textarea#comment").attr("maxlength");
    //       $("textarea#comment").after("<div><span id='remainingLengthTempId'>"
    //                 + maxLength + "</span> remaining</div>");
    //
    //       $("textarea#comment").bind("keyup change", function(){checkMaxLength(this.id,  maxLength); } )
    //
    //   });
    //
    //   function checkMaxLength(textareaID, maxLength){
    //
    //       currentLengthInTextarea = $("#"+textareaID).val().length;
    //       $(remainingLengthTempId).text(parseInt(maxLength) - parseInt(currentLengthInTextarea));
    //
  	// 	if (currentLengthInTextarea > (maxLength)) {
    //
  	// 		// Trim the field current length over the maxlength.
  	// 		$("textarea#comment").val($("textarea#comment").val().slice(0, maxLength));
  	// 		$(remainingLengthTempId).text(0);
    //
  	// 	}
    //   }





// code below from http://that-matt.com/2008/07/05/textarea-maxlength-with-jquery.html
//   $(document).ready(function(){
//     $('textarea[maxlength]').keyup(function(){
//         var max = parseInt($(this).attr(’maxlength’));
//         // line 6 above: Uncaught SyntaxError: Invalid or unexpected token
//         if($(this).val().length > max){
//             $(this).val($(this).val().substr(0, $(this).attr('maxlength')));
//         }
//
//         $(this).parent().find('.charsRemaining').html('You have ' + (max - $(this).val().length) + ' characters remaining');
//     });
// });
