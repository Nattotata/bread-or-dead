<script lang="ts">
	// reactive things
	let totalMass: Number;
	let starter: number = 100;
	let flour: number = 500;
	let water: number = 300;
    const capitalize = (s:string) => s[0].toUpperCase() + s.slice(1);
    type ingredient = { name: string, value: number };
	let ingredients: ingredient[] = [
		{ name: 'starter', value: starter },
		{ name: 'flour', value: flour },
		{ name: 'water', value: water }
	];
	$: hydration =
		Math.round((ingredients.find((obj) => obj.name === 'water')?.value || 0) /
		(ingredients.find((obj) => obj.name === 'flour')?.value || 1) *
        100);

</script>

<h1 class="h1">Bread or dead</h1>

<h2 class="h2">Bread calculator</h2>

{#each ingredients as { name, value }}
	<label>
		<h3 class="h3">{capitalize(name)}</h3>
		<input type="number" class="input" bind:value />
		<input type="range" bind:value max="500" />
	</label>
{/each}

<p>Total mass: {ingredients.reduce((acc, i) => acc + i.value, 0)}</p>
<p>Bread hydration: {hydration} %</p>

{#if hydration >= 70}
    <p>The dough is gonna be very sticky.</p>
    {:else if hydration > 65 && hydration < 70}
    <p>The dough is gonna be sticky.</p>
    {:else if hydration < 60 && hydration > 50}
    <p>The dough is gonna be firm.</p>
{:else if hydration < 50}
    <p>The dough is gonna be very firm.</p>
{:else}
    <p>The dough is neither sticky or firm.</p>
{/if}
