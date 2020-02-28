let img = $('#res_img')
img.attr("src","https://img.icons8.com/color/50/000000/happy--v1.png")
function dontClick(){
	$('.res').val()
	img.attr("src","https://img.icons8.com/ios/50/000000/sad.png")
	$('.res_text').text("Ups, U Lose")
	for (var i = 0; i <= 10; i++) {
		alert("Dont Click Again")
	}
	setTimeout(function(){ location.reload() }, 8000);
}

function crach(){
	for (var i = 0; i <= 10; i++) {
		alert("Unknown")
	}
}