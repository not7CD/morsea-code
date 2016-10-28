//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 750;  //time in ms, 5 second for example
var $input = $('#input').children('textarea');
var $output = $('#output').children('textarea');

//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
  $output.addClass("busy");
});

//user is "finished typing," do something
function doneTyping () {
  buttonCrypt();
  
}

function buttonCrypt() {
	$output.addClass("busy");
	if(!document.getElementById('mode').checked) {
	    $output.val(encrypt( $input.val() ));
	} else {
	    $output.val(decrypt( $input.val() ));
	}
	$output.removeClass("busy");
}

function modeCrypt (){
	if(!document.getElementById('mode').checked) {
	    $("#buttonCrypt").html('Encrypt');
	} else {
	    $("#buttonCrypt").html('Decrypt');
	}
}
