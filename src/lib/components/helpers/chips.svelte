<script lang="ts">
	type Tags = Array<{ label: string; color: string }>;

	export let tags: Tags = [
		{ label: 'JavaScript', color: '#efd81d' },
		{ label: 'Vue', color: '#41b883' },
		{ label: 'Svelte', color: '#ff3e00' }
	];
</script>

<ul class="tags mt-10">
	{#each tags as tag}
		<li class="tag" style="--color: {tag.color};">
			<a href="#">{tag.label}</a>
		</li>
	{/each}
</ul>

<style>
	.tags {
		--light-color: hsla(var(--nc) / var(--tw-bg-opacity, 0.5));
		--dark-color: hsla(var(--nc) / var(--tw-bg-opacity, 1));

		padding: 0;
		position: relative;
		height: auto;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: baseline;
		gap: 0.8em;
	}

	.tag {
		font-size: 1rem;

		border-radius: 100rem;
		box-shadow: 0 0 0 2px var(--light-color);
		background-color: transparent;
		color: var(--dark-color);
		font-weight: bold;
		transition: background-color 250ms ease, box-shadow 250ms ease;
	}

	.tag > a {
		display: inline-block;
		position: relative;
		color: var(--light-color);

		text-decoration: none;
		padding: 0.5rem 1rem 0.5rem 2rem;
	}

	.tag > a::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 1rem;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 100%;
		background-color: var(--color);
		transform: translateY(-50%);
	}

	.tag:hover {
		background-color: var(--color);
		box-shadow: 0 0 0 calc(2px + 0.25rem) var(--color);
	}
	.tag:hover > a {
		color: var(--dark-color);
	}
	.tag:hover > a::before {
		background-color: var(--dark-color);
	}
</style>
