<script lang="ts">
	import ChevronLeft from 'tabler-icons-svelte/icons/ChevronLeft.svelte';
	import ChevronRight from 'tabler-icons-svelte/icons/ChevronRight.svelte';
	// ------------
	export let active: boolean = false;
	export let page: string = 'Home';
	export let isAuthor: boolean = false;
</script>

<a
	class="btn rounded-btn capitalize font-mono hover:text-primary-focus {active == true
		? 'text-primary px-2 mx-2'
		: 'px-10'}"
	href="{() => {if (isAuthor === true) {return 'https://yonah.ml'}else if (page == 'Home') {return '/'} else {return '/' + page.toLowerCase()}}"
>
	{#if isAuthor === true}
		<ChevronLeft />
			Yonah Aviv
		<ChevronRight />
	{:else if active === true}
		<ChevronLeft />{page}
		<ChevronRight />
	{:else}
		{page}
	{/if}
</a>

<style>
	/* your styles go here */
</style>
