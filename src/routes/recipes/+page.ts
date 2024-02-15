export const load = async ({ fetch }: { fetch: any }) => {
	console.info('calling api');
	const response = await fetch('../api/recipes');
	const recipes: any = await response.json();
	return { recipes };
};
