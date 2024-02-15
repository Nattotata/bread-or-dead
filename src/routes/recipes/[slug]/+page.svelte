<script lang="ts">
	export let data: any;
</script>

<article>
	<hgroup>
		<h1 class="h1">{data?.meta?.title || 'foo'}</h1>
	</hgroup>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
