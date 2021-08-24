<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { active_page } from '$lib/stores/stores';
	import '../app.postcss';
</script>

<svelte:head>
	<title>{$active_page}</title>
</svelte:head>
<main>
	<Navbar />
	<slot />
</main>
