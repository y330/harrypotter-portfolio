<script lang="ts">
	// ------components
	import App from '$lib/App.svelte';
	// ------icons
	// ------utilities
	import { active_page } from '$lib/stores/stores';

	$active_page = 'Home';
</script>

<!-- {$active_page} -->

<App />
