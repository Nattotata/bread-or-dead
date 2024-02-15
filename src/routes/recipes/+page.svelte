<script lang="ts">
	export let data: any;
	console.info(data);
</script>

<ul class="recipes">
	{#each data.recipes as recipe}
		<li class="recipe">
			<a class="title" href="/recipes/{recipe.slug}">{recipe.title}</a>
		</li>
	{/each}
</ul>

<style>
	.recipes {
		display: grid;
		gap: 2rem;
	}

	.recipe {
		max-inline-size: var(--size-content-3);
	}
	.recipe:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font--size-fluid-3);
		text-transform: capitalize;
		color: var(--text-1);
	}
	.title:hover {
		color: var(--text-2);
		text-decoration: none;
	}
</style>
