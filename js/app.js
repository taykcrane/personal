$(document).ready(function () {





})

function openEmailBox () {
	$(".email-box").css("display", "inline-block");
	setTimeout(function () {
		$(".email-box").toggleClass("email-box-animation");
	}, 10);
}