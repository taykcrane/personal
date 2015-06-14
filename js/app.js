$(document).ready(function () {
	$(".email-link").on("click", function (e) {
		e.preventDefault();
		if($(".email-box").hasClass("email-box-animation")) {
			closeEmailBox();
		} else {
			openEmailBox();
		}
	})

	$(document).on("click", function (e) {
		if ($(e.target).hasClass("email-link")) {
			return false;
		}	else if ($(e.target).hasClass("email-box")) {
			return false;
		}	else if ($(e.target).hasClass("email-text")) {
			return false;
		}	else {
			if ($(".email-box").hasClass("email-box-animation")) {
				closeEmailBox();
			}
		}
		// if($(e.target).closest(".email-link").length === 0) {
		// 	console.log("was just clicked");
		// 	closeEmailBox();
		// }
	})


})

function openEmailBox () {
	$(".email-box").css("display", "inline-block");
	setTimeout(function () {
		$(".email-box").addClass("email-box-animation");
		$(".email-li").animate({
			"margin": "0 4em"
		}, 1000, "easeInOutQuad")
	}, 10);
}

function closeEmailBox () {
	$(".email-box").removeClass("email-box-animation");
	$(".email-li").animate({
		"margin": "0 0em"
	}, 1000, "easeInOutQuad")
	setTimeout(function () {
		if ($(".email-box").hasClass("email-box-animation")) {
			return false;
		} else {
			$(".email-box").css("display", "none");
		}
	}, 1000)
}