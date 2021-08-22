<script>
	/**
	 * @author = 2705srinivas on github
	 * @returns {TypingAnimated}
	 * note - Any text wrapped inside <reverse></reverse> will be typed and then removed. Try the code snippet given above to see that effect.
	 */
	import { onMount } from 'svelte';
	/**
	 * @param {string} text - String that you want to render with typing animation.
	 */
	export let text = '';
	/**
	 * @param {number} delay - delay in milli seconds between each letter typing animation
	 */
	export let delay = 250;
	let state = '';
	let traverseWords = [];
	const formTraverseArray = () => {
		let traverse_index = 0;
		while (traverse_index < text.length) {
			let findReverse = text.indexOf('<reverse>');
			if (findReverse > -1) {
				traverseWords.push({
					direction: 'type',
					word: text.substr(traverse_index, findReverse - traverse_index)
				});
				text = text.substr(findReverse);
				let findReverseEnd = text.indexOf('</reverse>');
				traverseWords.push({
					direction: 'type&delete',
					word: text.substr(9, findReverseEnd - 9)
				});
				text = text.substr(findReverseEnd + 10);
				traverse_index = 0;
				continue;
			}
			traverseWords.push({
				direction: 'type',
				word: text.substr(traverse_index)
			});
			traverse_index = text.length;
		}
	};
	onMount(() => {
		let typing_delay = 100;
		formTraverseArray();
		traverseWords.forEach(({ direction, word }) => {
			for (let i = 0; i < word.length; i++) {
				setTimeout(() => {
					state = state + word[i];
				}, typing_delay);
				typing_delay = typing_delay + delay;
			}
			if (direction === 'type&delete') {
				for (let i = 0; i < word.length; i++) {
					setTimeout(() => {
						state = state.substr(0, state.length - 1);
					}, typing_delay);
					typing_delay = typing_delay + delay;
				}
			}
		});
	});
</script>

<div class="typing-animated">
	{state}<span class="blinker">|</span>
</div>

<style>
	.blinker {
		animation: blinking 500ms infinite;
	}
	@keyframes blinking {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
