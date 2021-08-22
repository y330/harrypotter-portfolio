<script lang="ts">
	import ChevronLeft from 'tabler-icons-svelte/icons/ChevronLeft.svelte';
	import ChevronRight from 'tabler-icons-svelte/icons/ChevronRight.svelte';
	// ------------
	export let active = false;
	export let page = 'Home';
</script>

<a
	class="btn rounded-btn capitalize font-mono hover:text-primary-focus {active == true ? 'text-primary px-2 mx-2' : 'px-10'}"
	href="/{page == 'Home' ? '' : page.toLowerCase()}"
>
	{#if active === true}
		<ChevronLeft />{page}
		<ChevronRight />
	{:else}
		{page}
	{/if}
</a>

<style>
	/* your styles go here */
</style>
