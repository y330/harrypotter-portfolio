<script lang="ts">
	// ------- imports
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Chips from '$lib/components/helpers/chips.svelte';
	// import Fullscreen from "svelte-fullscreen/src/lib/Fullscreen.svelte"

	// ------- parameters
	export let project = {
		title: '',
		image: '',
		description: '',
		technologies: [
			{ label: 'Svelte', color: '#ff3e00' },
			{ label: 'React', color: '#00b2ff' },
			{ label: 'Redux', color: '#ff0000' }
		],
		link: '#',
		code: '#'
	};
	// -------- state
	let hovered = false;
	// -------- code
	const shadow = tweened(0, { duration: 500, easing: cubicOut });
	const handleClick = () => {
		window.location = project.link;
	};
	const handleMouseEnter = () => {
		shadow.set(1);
		hovered = true;
	};
	const handleMouseLeave = () => {
		shadow.set(0);
		hovered = false;
	};
	const randomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
	};

	const typewriter = (node, { speed = 50 }) => {
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
	};
	let mounted = false;
	onMount(() => (mounted = true));
</script>

{#if mounted}
	<!-- <Fullscreen let:onToggle> -->

	<div
		on:click={handleClick}
		on:mouseenter={handleMouseEnter}
		on:touchstart={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		on:touchend={handleMouseLeave}
		transition:slide={{ delay: randomInt(200, 500) }}
		style="box-shadow: {$shadow * 10}px {$shadow * 5}px #1FD65F, {$shadow * 20}px {$shadow *
			10}px #1FD65F99, {$shadow * 30}px {$shadow * 15}px #1FD65F33;"
		class="site dark-mode scroll__ card prose"
	>
		<h2 class="title" transition:fade={{ delay: randomInt(250, 500) }}>
			<a href={project.link}>{project.title}<br /></a>
		</h2>
		<img src={project.image} alt="A screenshot of {project.title}" />
		<div class="description" transition:fade={{ delay: randomInt(250, 1000) }}>
			{project.description}
		</div>
		<div class="code">
			<div class="technologies pr-1 scale-75"><Chips tags={project.technologies} /></div>
			{#if project.code != ''}Source: <a href={project.code}>{project.code}</a>{/if}
		</div>
	</div>
	<!-- </Fullscreen> -->
{/if}

<style>
	.site {
		flex: 1 1 450px;
		display: flex;
		flex-direction: column;
		border: 2px #1fd65f solid;
		border-radius: 15px;
		margin: 1rem;
		padding: 1rem;
		padding-top: 0;
		padding-right: 0;
		min-width: 150px;
		max-width: 700px;
		height: 450px;
		overflow-y: scroll;
		position: relative;
		cursor: pointer;
		justify-content: space-between;
	}

	.site .title {
		top: 0;
		border-radius: 0 0 7px 7px;
		/* width: 110%; */
		padding: 1rem;
		text-align: center;
		position: sticky;
		min-height: 5rem;
		background-color: transparent;
		font-weight: 400;
		transition-property: opacity, background-color;
		transition-duration: 300ms ease-in-out;
	}
	.title a {
		text-decoration: none;
	}
	.title a:hover {
		color: var(--accent-color);
	}

	.site:hover .title {
		/* border: 2px white solid; */
		color: black;

		background-color: #1fd65f;
	}
	.title a::after {
		font-size: small;
		content: '';
		transition-duration: 0.5s;
		text-decoration: none;
		opacity: 0;
	}
	.site:hover .title a::after {
		content: ' (click to view project)';
		opacity: 1;
		text-decoration: none;
	}
	.description {
		padding-top: 2rem;
		flex: 1;
		padding: 1rem;
	}

	img {
		/* margin-top: 10rem; */
		max-height: 70%;
		max-width: 100%;
		/* border-right: 20px solid black; */
		align-self: center;
		border-radius: 10px;
	}
	.code {
		flex: 1;
	}
</style>
