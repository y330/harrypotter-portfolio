<script lang="ts">
	export let firstname: string = 'Yonah';
	let name = "I'm" + firstname;
	const spread = [...name];
	const greeting = `Hey, `;
</script>

<div class="preloader ">
	<div class="preloader-content">
		<div class="preloader-logo">
			<p>
				{#each [...greeting] as letter}
					<span class="preloader-logo__letter">{letter}</span>
				{/each}
			</p>
			<p>
				{#each spread as letter}
					<span class="preloader-logo__letter green">
						{letter}
						{#if letter == 'm'}
							&nbsp;
						{/if}</span
					>
				{/each}
			</p>
		</div>
	</div>
</div>

<style>
	.preloader {
		width: 100%;
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
		font-size: 3.125rem;
		color: #484848;
		letter-spacing: 0.05em;
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
	.preloader-logo .preloader-logo__letter.green {
		color: #1fd65f;
		animation-delay: 3s;
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
		animation-delay: 2.6s;
	}
	/* Green preloader */
	.preloader-logo .preloader-logo__letter.green:first-child {
		animation-delay: 3s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(2) {
		animation-delay: 3.1s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(3) {
		animation-delay: 3.2s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(4) {
		animation-delay: 3.3s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(5) {
		animation-delay: 3.4s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(6) {
		animation-delay: 3.5s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(7) {
		animation-delay: 3.6s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(8) {
		animation-delay: 3.7s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(9) {
		animation-delay: 3.8s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(10) {
		animation-delay: 3.9s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(11) {
		animation-delay: 4s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(12) {
		animation-delay: 4.1s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(13) {
		animation-delay: 4.2s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(14) {
		animation-delay: 4.3s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(15) {
		animation-delay: 4.4s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(16) {
		animation-delay: 4.5s;
	}
	.preloader-logo .preloader-logo__letter.green:nth-child(17) {
		animation-delay: 4.6s;
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
			font-size: 3.75rem;
		}
	}
	@media screen and (max-width: 600px) {
		.preloader-logo {
			font-size: 2.75rem;
		}
	}
</style>
