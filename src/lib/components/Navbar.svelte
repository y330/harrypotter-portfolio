<script lang="ts">
	// ------components-------
	import NavLink from '$lib/components/helpers/navLink.svelte';

	// ------icons------
	import BrandDiscord from 'tabler-icons-svelte/icons/BrandDiscord.svelte';
	import BrandGithub from 'tabler-icons-svelte/icons/BrandGithub.svelte';

	// ------utilities-----
	import { stringToArray } from '$lib/utils/toArray';
	import { active_page } from '$lib/stores/stores';
	import config from '$lib/config.Portfolio';
	// --------------------
	export let pages = 'Home,Portfolio,Services,Contact';
	$active_page = '';
	let pagesArray = stringToArray(pages);
</script>

<div class="navbar bg-neutral text-neutral-content rounded-box fixed w-full mb-2 shadow-lg">
	<div class="flex-none px-2 mx-2">
		<span class="text-lg"> {config.me.name.first} </span>
		<span class="text-lg font-bold"> {config.me.name.last} </span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="lg:flex items-stretch hidden">
			{#each pagesArray as thisPage}
				{#if thisPage == $active_page}
					<NavLink active={true} page={thisPage} />
				{:else}
					<NavLink page={thisPage} />
				{/if}
			{/each}
		</div>
	</div>
	<div class="flex-none" />
	{#each config.me.socials as thisSocial}
		<div class="flex-none">
			<a href={thisSocial.url} class="w-min">
				<button
					class="btn btn-square {thisSocial.platform == 'discord'
						? 'hover:bg-purple-500'
						: thisSocial.platform == 'github'
						? 'hover:bg-gray-500'
						: 'bg-neutral-focus'} hover:text-white"
				>
					{#if thisSocial.platform == 'discord'}
						<BrandDiscord />
					{:else if thisSocial.platform == 'github'}
						<BrandGithub />
					{/if}
				</button>
			</a>
		</div>
	{/each}
</div>

<style>
	.navbar {
		z-index: 100;
	}
</style>
