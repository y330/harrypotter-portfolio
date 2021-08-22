<script lang="ts">
	import TypingAnimation from '$lib/components/helpers/typingAnimation.svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import { active_page } from '$lib/stores/stores';
	import '../app.postcss';
</script>

<main >
	<Navbar />
	<slot />
</main>
