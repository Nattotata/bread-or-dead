import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const recipe = await import(`../../../markdown/recipes/${params.slug}.md`);
		return {
			content: recipe.default,
			meta: recipe.metadata
		};
	} catch (err) {
		console.error(err);
		return error(404, `Could not find ${params.slug}.`);
	}
};
