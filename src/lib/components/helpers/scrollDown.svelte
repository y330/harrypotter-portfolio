<script lang="ts">
	/* -------------------------------------------------------------------------
     begin Scroll Down Button
   * ------------------------------------------------------------------------- */
	const scrollFunction = () => {
		var btnScrollDown = document.querySelector('#scroll_down');

		function scrollDown() {
			var windowCoords = document.documentElement.clientHeight;
			(function scroll() {
				if (window.pageYOffset < windowCoords) {
					window.scrollBy(0, 10);
					setTimeout(scroll, 0);
				}
				if (window.pageYOffset > windowCoords) {
					window.scrollTo(0, windowCoords);
				}
			})();
		}

		btnScrollDown.addEventListener('click', scrollDown);
	};

	/* -------------------------------------------------------------------------
     end Scroll Down Button
   * ------------------------------------------------------------------------- */
	scrollFunction;
</script>

<div>
	<!-- begin Scroll Down Button -->
	<button type="button" class="scroll_down border-transparent" id="scroll_down" />
	<!-- end Scroll Down Button -->
</div>

<!-- test -->
<style>
	/* -------------------------------------------------------------------------
   begin Scroll Down Button
 * ------------------------------------------------------------------------- */
	button.scroll_down {
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		height: 50px;
		width: 30px;
		bottom: 60px;
		background-color: transparent;
		border: 2px solid #ccc;
		border-radius: 20px;
		cursor: pointer;
		outline: none;
	}
	button.scroll_down:before {
		position: absolute;
		top: 10px;
		left: 50%;
		content: '';
		width: 6px;
		height: 6px;
		margin-left: -3px;
		background-color: #fff;
		border-radius: 100%;
		-webkit-animation: scroll_down_btn-animation 2s infinite;
		animation: scroll_down_btn-animation 2s infinite;
		box-sizing: border-box;
	}

	@keyframes scroll_down_btn-animation {
		0% {
			transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@-webkit-keyframes scroll_down_btn-animation {
		0% {
			-webkit-transform: translate(0, 0);
			transform: translate(0, 0);
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
		80% {
			-webkit-transform: translate(0, 20px);
			transform: translate(0, 20px);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	/* -------------------------------------------------------------------------
   end Scroll Down Button
 * ------------------------------------------------------------------------- */
</style>
