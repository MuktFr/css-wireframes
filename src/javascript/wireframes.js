/**
 * CSS wireframes
 */
window.onload = css_wireframes_init;
function css_wireframes_init(){
	( function( document, window ) {
		"use strict";

		/**
		 * Insert the toolbar at the end of the document
		 *
		 * [TODO] For the moment we add a single button,
		 * but it could contain several ones in the future.
		 * So the populating should be expendable.
		 */
		var insert_toolbar = function(){
			var body = document.getElementsByTagName('body')[0];
			var toolbar = '<nav class="wf-toolbar" id="wf-toolbar">'
				+'<ul class="wf-toolbar__btn-group">'
					+'<li class="wf-toolbar__btn">'
						+'<a class="wf-toolbar__link wf-toolbar__link--disabled" title="Show hidden elements" data-btn="show-elements" id="show-elements">Show hidden elements</a>'
					+'</li>'
				+'</ul>'
			+'</nav>';
			body.insertAdjacentHTML('beforeEnd', toolbar);
		}
		insert_toolbar();

		/**
		 * Manage optional elements
		 *
		 * Add closing buttons to each .wf-optional and hide it on press
		 */
		var manage_optional_elements = function(){

			// Declare an empty hidden elements list
			var hidden_elements = [];

			// Make all notes optional
			var notes = document.getElementsByClassName('wf-note');
			for (var i = 0; i < notes.length; i++) {
				notes[i].classList.add('wf-optional');
			}

			// Add the close button to each optional element
			var optional_elements = document.getElementsByClassName('wf-optional');
			for (var i = 0; i < optional_elements.length; i++) {
				optional_elements[i].insertAdjacentHTML('beforeEnd', '<a class="wf-optional__close" data-btn="hide-element" title="Hide this element">&times;</a>');
			}

			// Button : hide optional elements
			var btns_hide_elements = document.getElementsByClassName('wf-optional__close');
			for (var i = 0; i < btns_hide_elements.length; i++) {
				btns_hide_elements[i].addEventListener("click", function(e){
					e.preventDefault();
					// Hide the element
					this.parentElement.classList.add('wf-hidden');
					hidden_elements.push(this.parentElement);
					// Update the toolbar
					update_btn_show_elements();
				});
			}

			// Button : show all hidden elements
			var btn_show_elements = document.getElementById('show-elements');
			if (btn_show_elements){
				btn_show_elements.addEventListener("click", function(e){
					e.preventDefault();
					// Show the elements
					for (var i = 0; i < hidden_elements.length; i++) {
						hidden_elements[i].classList.remove('wf-hidden');
					}
					hidden_elements = []; // We empty the hidden list
					// Update the toolbar
					update_btn_show_elements();
				});
			}

			/**
			 * Update the show elements button in the toolbar (disable/enable)
			 * @return bool
			 *    false if toolbar is disabled, true otherwise
			 */
			var update_btn_show_elements = function(){
				var disabled;
				if (hidden_elements.length > 0){
					btn_show_elements.classList.remove('wf-toolbar__link--disabled');
					disabled = false;
				} else {
					btn_show_elements.classList.add('wf-toolbar__link--disabled');
					disabled = true;
				}
				return disabled;
			}

		}
		manage_optional_elements();

	} )( document, window );
}
