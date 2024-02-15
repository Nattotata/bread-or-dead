<script lang="ts">
	type Tag =
		| 'stehna'
		| 'prsa'
		| 'bricho'
		| 'zada'
		| 'biceps'
		| 'triceps'
		| 'ramena'
		| 'lytka'
		| 'hyzde'
		| 'all'
		| null;
	type Exercise = {
		name: string;
		description: string;
		type: 'cardio' | 'strength' | 'stretch';
		step: 'cardio' | 'stretch' | 'hss_a_lopatky' | 'nadstavba' | 'cooldown';
		focus: Tag | Tag[];
	};

	export let data;
	console.info(data);
	const exercises: Exercise[] = [
		{
			name: 'Panák',
			description: ``,
			type: 'cardio',
			step: 'cardio',
			focus: 'all'
		},
		{
			name: 'Chůze / běh na místě',
			description: ``,
			type: 'cardio',
			step: 'cardio',
			focus: 'all'
		},
		{
			name: 'Vytáčení dlaň na dlaň',
			description: ``,
			type: 'cardio',
			step: 'cardio',
			focus: 'all'
		},
		{
			name: 'Loket - koleno',
			description: ``,
			type: 'cardio',
			step: 'cardio',
			focus: 'all'
		},
		{
			name: 'Kloubní rotace',
			description: `Postupujeme od hlavy až ke kotníkům.
            Na obě strany uděláme minimálně 5 kroužků do každé ze stran
            - hlava, ramenný kloub, předloktí, zápěstí, kyčel jako celek, kolena, kotníky.
            V závěru rozhýbeme prsty na rukou a na nohou.`,
			type: 'stretch',
			step: 'stretch',
			focus: 'all'
		},

		{
			name: 'Střídavé předpažování horních končetin',
			description: `Střídavé předpažování horních končetin ze 6 měsíční polohy
            - možné stížení - nadzvednutí kolen / přidávání zvedání noh`,
			type: 'stretch',
			step: 'hss_a_lopatky',
			focus: 'all'
		},
		{
			name: 'Chipsy-cola',
			description: ``,
			type: 'stretch',
			step: 'hss_a_lopatky',
			focus: 'all'
		},
		{
			name: 'Sumo dřepy',
			description: `Sumo drep - špičky von! (double, pridať prácu rúk)`,
			type: 'strength',
			step: 'nadstavba',
			focus: 'hyzde'
		},
		{
			name: 'Dámský klik',
			description: ``,
			type: 'strength',
			step: 'nadstavba',
			focus: 'biceps'
		},
		{
			name: 'Meditace',
			description: ``,
			type: 'stretch',
			step: 'cooldown',
			focus: null
		}
	];
	const createRegime = () => {
		const warmup = exercises.filter((exercise) => exercise.step === 'cardio');
		const kloubniRotace = exercises.filter((exercise) => exercise.step === 'stretch');
		const hssALopatky = exercises.filter((exercise) => exercise.step === 'hss_a_lopatky');
		const nadstavba = exercises.filter((exercise) => exercise.step === 'nadstavba');
		const cooldown = exercises.filter((exercise) => exercise.step === 'cooldown');

		const selectRandomExercise = (array: Exercise[]) => {
			return array[Math.floor(Math.random() * array.length)];
		};

		const regime = new Set<Exercise>();
		regime.add(selectRandomExercise(warmup));
		regime.add(selectRandomExercise(kloubniRotace));
		regime.add(selectRandomExercise(hssALopatky));
		regime.add(selectRandomExercise(hssALopatky));
		regime.add(selectRandomExercise(hssALopatky));
		regime.add(selectRandomExercise(nadstavba));
		regime.add(selectRandomExercise(nadstavba));
		regime.add(selectRandomExercise(nadstavba));
		regime.add(selectRandomExercise(cooldown));
		console.info(regime);
		return Array.from(regime);
	};
	let regime = createRegime();
	const updateRegime = () => {
		regime = createRegime();
	};
</script>

<pre>
	1. hluboky stabilizacni system (stretch i strength)
    2. lopatky (stretch i strength)
    3. nadstavba (stretch i strength)
        + velke svalove partie
            + stehna, prsa, zada
	    + male svalove partie
            + ruce (biceps, triceps), ramena, lytka, hyzde

    1. warmup
    2. kloubni rotace
    3. hss a lopatky
    4. nadstavba
</pre>
<pre>
    1. warmup
    2. kloubni rotace
    3. hss a lopatky
    4. hss a lopatky
    5. hss a lopatky
    6. nadstavba (nohy)
    7. nadstavba (ruce)
    8. nadstavba (zadek)
    9. cooldown
</pre>

<button class="btn btn-primary" on:click={updateRegime}>Vytvořit trénink</button>

<div style="margin-top: 5vh;">
	{#each regime as exercise, i}
		<div>
			<h4 class="h4">Round {i}: {exercise.name}</h4>
			<p>{exercise.description}</p>
			<p>Step: {exercise.step}</p>
			<p>Focus: {exercise.focus}</p>
			<p>Type: {exercise.type}</p>
			<hr style="margin-bottom: 2vh; margin-top: 2vh;" class="!border-t-2" />
		</div>
	{/each}
</div>
