<script lang="ts">
	import ChevronLeft from 'tabler-icons-svelte/icons/ChevronLeft.svelte';
	import ChevronRight from 'tabler-icons-svelte/icons/ChevronRight.svelte';
	// ------------
	export let active = false;
	export let page = 'Home';
</script>

<a
	class="btn btn-sm rounded-btn hover:text-primary-focus {active == true ? 'text-primary px-0' : 'px-5'}"
	href="/{page == 'Home' ? '' : page.toLowerCase()}"
>
	{#if active === true}
		<b>{'<'}</b>{page}<b> {'/>'}</b>
	{:else}
		{page}
	{/if}
</a>

<style>
	/* your styles go here */
</style>
