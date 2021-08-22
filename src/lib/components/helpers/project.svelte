<script lang="ts">
	// ------- imports
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { randomInt } from 'd3-random';

	// ------- parameters
	export let project = {
		title: 'Svelte',
		description: 'A Svelte project',
		technologies: ['Svelte', 'React', 'D3'],
		code: 'print(3)',
		url: '#',
		image: 'image.png'
	};
	// -------- state
	let hovered = false;
	// -------- code
	const shadow = tweened(0, { duration: 500, easing: cubicOut });
	function handleClick() {
		window.location = project.url;
	}
	function handleMouseEnter() {
		shadow.set(1);
		hovered = true;
	}
	function handleMouseLeave() {
		shadow.set(0);
		hovered = false;
	}
	function typewriter(node, { speed = 50 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}
		const text = node.textContent;
		const duration = text.length * speed;
		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
	let mounted = false;
	onMount(() => (mounted = true));
</script>

{#if mounted}
	<div
		on:click={handleClick}
		on:mouseenter={handleMouseEnter}
		on:touchstart={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		on:touchend={handleMouseLeave}
		transition:slide={{ delay: randomInt(200, 500)() }}
		style="box-shadow: {$shadow * 15}px {$shadow * 7.5}px #1FD65F, {$shadow * 30}px
  {$shadow * 15}px #1FD65F99, {$shadow * 40}px {$shadow * 20}px #1FD65F33;"
		class="site bg-base-300"
	>
		<h2
			class="title"
			transition:fade={{ delay: randomInt(250, 500)() }}
			style="text-decoration: {hovered ? 'underline' : 'none'};"
		>
			<a href={project.url}>{project.title}</a>
		</h2>
		<img src={project.image} alt="A screenshot of {project.title}" />
		<div class="description" transition:fade={{ delay: randomInt(250, 1000)() }}>
			{project.description}
		</div>
		<div class="code">
			<ul>
				{#each project.technologies as technology}
					<li in:typewriter={{ speed: randomInt(150, 300)() }}>{technology}</li>
				{/each}
			</ul>
			{#if project.code != ''}<a href={project.code}>Source project.code</a>{/if}
		</div>
	</div>
{/if}

<style>
	.site {
		flex: 1 1 450px;
		display: flex;
		flex-direction: column;
		border-radius: 15px;
		margin: 1rem;
		padding: 1rem;
		min-width: 250px;
		max-width: 450px;
		height: 450px;
		position: relative;
		cursor: pointer;
		justify-content: space-around;
	}
	.title {
		flex: 0;
		font-family: 'Inter';
		font-weight: 400;
		padding-bottom: 2rem;
	}
	.title a {
		color: black;
	}
	.description {
		padding-top: 2rem;
		flex: 1;
		padding: 1rem;
	}
	ul {
		padding-bottom: 3px;
		list-style: none;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
	}
	li {
		display: inline-block;
	}
	li + li {
		padding-left: 1rem;
	}
	img {
		max-height: 200px;
		max-width: 100%;
	}
	.code {
		flex: 1;
	}
</style>
