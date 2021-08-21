<script lang="ts">
	import App from '$lib/App.svelte';
	import { active_page } from '$lib/stores/stores';

	$active_page = 'Home';
</script>

{$active_page}

<App />
