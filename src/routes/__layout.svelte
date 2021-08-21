<script lang="ts">
	import TypingAnimation from '$lib/components/helpers/typingAnimation.svelte';

	import Navbar from '$lib/components/Navbar.svelte';
	import { active_page } from '$lib/stores/stores';
	import '../app.postcss';
</script>

<Navbar />
<br />
<TypingAnimation text={$active_page} delay={100} />
<slot />
