<script lang="ts">
	export let src: string;
	const extractId = (url: string) => {
		const id = url.split('v=')[1];
		return `https://www.youtube.com/embed/${id}` || '';
	};
</script>

<iframe
	width="560"
	height="315"
	src={extractId(src)}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
></iframe>
