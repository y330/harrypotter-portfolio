<script lang="ts">
	// -------components
	import Projects from '$lib/components/Projects.svelte';
	// -------icons
	// -------utilities
	import { active_page } from '$lib/stores/stores';
	$active_page = 'Portfolio';
</script>

<Projects />
