<script lang="ts">
	// ------components-------
	import NavLink from '$lib/components/helpers/navLink.svelte';

	// ------icons------
	import BrandLinkedin from 'tabler-icons-svelte/icons/BrandLinkedin.svelte';
	import BrandGithub from 'tabler-icons-svelte/icons/BrandGithub.svelte';

	// ------utilities-----
	import { stringToArray } from '$lib/utils/toArray';
	import { active_page } from '$lib/stores/stores';
	import config from '$lib/config.Portfolio';
	// --------------------
	export let pages = 'Home,Portfolio,Resume,Contact';
	$active_page = '';
	let pagesArray = stringToArray(pages);
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
	<div class="flex-none px-2 mx-2">
		<span class="text-lg font-bold"> {config.me.name} </span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
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
					class="btn btn-block hover:{thisSocial.platform == 'linkedin'
						? 'bg-blue-500'
						: thisSocial.platform == 'github'
						? 'bg-gray-400'
						: ''} hover:text-white"
				>
					{#if thisSocial.platform == 'linkedin'}
						<BrandLinkedin />
					{:else if thisSocial.platform == 'github'}
						<BrandGithub />
					{/if}
				</button>
			</a>
		</div>
	{/each}
</div>
