/**
 * CSS wireframe documentation
 */
jQuery(function ($) {

	// init tooltips on all elements with a title in the overview
	$('#overview [title]').tipsy({opacity: 0.8});

	// Init sticky menu
	$("#menu").stick_in_parent({
		offset_top: 32
	});

});
