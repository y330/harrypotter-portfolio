<script lang="ts">
	export let name: string = 'Hello World';
	const spread = [...name];
</script>

<div class="preloader">
	<div class="preloader-content">
		<div class="preloader-logo">
			{#each spread as letter}
				<span class="preloader-logo__letter red">{letter}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.preloader {
	}
	.preloader-content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.preloader-logo {
		font-family: sans-serif;
		font-weight: 400;
		font-size: 4.125rem;
		color: #484848;
		letter-spacing: 0.25em;
	}
	.preloader-logo .preloader-logo__letter {
		display: inline-block;
		animation-name: logoAnim;
		animation-duration: 0.5s;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
		opacity: 0;
		transform: translate3d(0, 10px, 0);
	}
	.preloader-logo .preloader-logo__letter.red {
		color: #1FD65F;
	}
	.preloader-logo .preloader-logo__letter:first-child {
		animation-delay: 1s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(2) {
		animation-delay: 1.1s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(3) {
		animation-delay: 1.2s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(4) {
		animation-delay: 1.3s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(5) {
		animation-delay: 1.4s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(6) {
		animation-delay: 1.5s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(7) {
		animation-delay: 1.6s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(8) {
		animation-delay: 1.7s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(9) {
		animation-delay: 1.8s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(10) {
		animation-delay: 1.9s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(11) {
		animation-delay: 2s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(12) {
		animation-delay: 2.1s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(13) {
		animation-delay: 2.2s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(14) {
		animation-delay: 2.3s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(15) {
		animation-delay: 2.4s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(16) {
		animation-delay: 2.5s;
	}
	.preloader-logo .preloader-logo__letter:nth-child(17) {
		animation-delay: 2.5s;
	}

	@keyframes logoAnim {
		80% {
			opacity: 0.8;
			transform: translate3d(0, 2px, 0);
		}
		to {
			opacity: 1;
			transform: translateZ(0);
		}
	}
	@media screen and (min-width: 600px) {
		.preloader-logo {
			font-size: 1.75rem;
		}
	}
</style>
