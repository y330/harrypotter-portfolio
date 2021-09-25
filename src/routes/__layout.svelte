<script lang="ts">
	import NavLink from "$lib/components/helpers/navLink.svelte";
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

	<footer>
		Copyright (c) 2021 <NavLink isAuthor={true}/>
	</footer>
</main>
