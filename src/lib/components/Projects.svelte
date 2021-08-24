<script lang="ts">
	// ------components
	import Project from '$lib/components/helpers/project.svelte';
	// ------utilities
	import config from '$lib/config.Portfolio';
</script>

<div class="grid pt-20">
	{#each config.portfolio.projects as project}
		<Project
			project={{
				title: project.title,
				image: project.image,
				description: project.description,
				technologies: project.technologies,
				link: project.link,
				code: project.code
			}}
			class="module"
		/>
	{/each}
</div>

<style>
	.grid {
		/* Grid Fallback */
		display: flex;
		flex-wrap: wrap;

		/* Supports Grid */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-auto-rows: minmax(150px, auto);
		grid-gap: 10px;
	}

	.module {
		/* Flex Fallback */
		margin-left: 5px;
		margin-right: 5px;
		flex: 1 1 200px;
	}

	/* If Grid is supported, remove the margin we set for the fallback */
	@supports (display: grid) {
		.module {
			margin: 0;
		}
	}
</style>
