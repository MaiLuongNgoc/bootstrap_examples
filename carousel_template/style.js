function goToElement(id) {
	var offset = $("#" + id).offset().top;
	$("html, body").animate({ scrollTop: offset });
}