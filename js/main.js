// forçando a inserir um valor
$('#buttonCalculate').click(function(){

	if($('#hexadecimal').val() == ""){
		alert('Preencha o campo por favor.');
		$('#hexadecimal').focus();
		$('.result').html('');
		return false;
	}

	function hexToRGB(hex, alpha) {
	    var r = parseInt(hex.slice(1, 3), 16),
	        g = parseInt(hex.slice(3, 5), 16),
	        b = parseInt(hex.slice(5, 7), 16);

	    if (alpha) {
	        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	    } 
	    else {
	        return "rgb(" + r + ", " + g + ", " + b + ")";
	    } 
	}

	$('.result').html(hexToRGB($('#hexadecimal').val(), $('#opacity').val()));

});

$(document).keypress(function(e) {
    if(e.which == 13) $('#buttonCalculate').click();
});
