function toggler(divId) {
	$("#poemsTab").children().hide();
    $("#" + divId).fadeToggle();
}