<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Hexadecimal to RGBA</title>
	<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet">
	<link rel="stylesheet" href="css/stylesheet.css">
</head>

<body>

	<div class="modal">
			
		<div class="modalHeader">
			Digite a cor em hexadecimal:
		</div>

		<input type="text" id="hexadecimal" placeholder="#000000" maxlength="7">
		<input type="text" id="opacity" placeholder="0 a 1" maxlength="3">

		<button type="button" id="buttonCalculate">
			Converter
		</button>

		<div class="result"></div>

	</div>
	
</body>

<script src="js/jquery.min.js"></script>
<script src="js/jquery.mask.min.js"></script>
<script src="js/main.js"></script>

</html>