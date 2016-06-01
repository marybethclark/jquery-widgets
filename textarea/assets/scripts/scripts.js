// when a key is pressed in the text box, run this function
// I TYPED IN THE (COMMENTED OUT) CODE BELOW,copying it from http://stackoverflow.com/questions/5292235/max-characters-in-textarea-with-jquery,
// BUT I MUST HAVE A TYPO, BECAUSE IT DOESN'T WORK.
// LINE 16 IS WHAT I COPIIED/PASTED SO IT WOULD WORK.
// $("textarea").keypress(function(e) {
//   var tval = $("textarea").val(),
//     tlength = tval.length,
//     set = 10,
//     remain = parseInt(set - tlength);
//   $("p").text(remain);
//   if (remain <= 0 && e.which !== 0 && e.charCode !== 0){
//     $("textarea").val((tval).substring(0,tlength - 1))
//   }
// })
// Run the following function when a user types in the textbox.
$('textarea').keypress(function(e) {
  // set the value of tval to be the value of textarea
    var tval = $('textarea').val(),
    // set the value of tlength to be the length of tval(which is textarea)
        tlength = tval.length,
        // this 10 has to do with the parseInt function, but I don't understand yet.
        set = 10,
        remain = parseInt(set - tlength);
        // look at the paragraph and return the text from inside it
    $('p').text(remain);
    // if the charaters remaining(?) are less than or equal to zero and e.which(??) is
    // equal to zero and e.charCode (??)is equal to zero then do the following
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
      // look at the textbox and ??? subtract 1 from the tlength (see line 20)
        $('textarea').val((tval).substring(0, tlength - 1))
    }
})

// THIS LOOKS POTENTIALLY PROMISING, BUT I HAVE TO SLEEP NOW.
// $('textarea').keypress(function(){
//
//     if(this.value.length > 10){
//         return false;
//     }
//     $("#remainingC").html("Remaining characters : " +(10 - this.value.length));
// });​
