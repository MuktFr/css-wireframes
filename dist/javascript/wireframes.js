/**
 * CSS wireframes
 */
window.onload = css_wireframes_init;
function css_wireframes_init(){
	( function( document, window ) {
		"use strict";

		/**
		 * Manage optional elements
		 *
		 * Add closing buttons to each .wf-optional and hide it on press
		 */
		var manage_optional_elements = function(){

			// Add the close button to each optional element
			var elements = document.getElementsByClassName('wf-optional');
			for (var i = 0; i < elements.length; i++) {
				elements[i].insertAdjacentHTML('beforeEnd', '<a class="wf-optional__close" data-btn="hide-element">&times;</a>');
			}

			// Hide optional elements on click
			var btns = document.getElementsByClassName('wf-optional__close');
			for (var i = 0; i < btns.length; i++) {
				btns[i].addEventListener("click", function(e){
					e.preventDefault();
					this.parentElement.classList.add('wf-hidden');
				});
			}

			// Show all hidden elements on click
			var btn_show = document.getElementById('show-elements');
			var hidden = document.getElementsByClassName('wf-hidden');
			btn_show.addEventListener("click", function(e){
				e.preventDefault();
				for (var i = 0; i < hidden.length; i++) {
					hidden[i].classList.remove('wf-hidden');
				}
			});

		}
		manage_optional_elements();

	} )( document, window );
}
