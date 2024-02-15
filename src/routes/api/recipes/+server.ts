import { json } from '@sveltejs/kit';

type Recipe = {
	title: string;
	slug: string;
};

const slugify = (path: string) => path.split('/').at(-1)?.replace('.md', '');

const getRecipes = async () => {
	console.info('getting recipes');
	const paths = import.meta.glob('/src/markdown/recipes/*.md', { eager: true });
	console.info('paths', paths);
	let recipes = new Set<Recipe>();
	for (const path in paths) {
		const file: any = paths[path];
		const slug = slugify(path);
		console.info('slug', slug);

		if (!file || typeof file !== 'object' || !slug) {
			return;
		}

		const metadata = file.metadata as Omit<Recipe, 'slug'>;
		console.info('metadata', metadata);
		const recipe = { ...metadata, slug } satisfies Recipe;
		console.info('recipe', recipe);
		recipes.add(recipe);
	}
	return recipes;
};

export async function GET() {
	const recipes = (await getRecipes()) || new Set();
	console.info('recipes', recipes);
	return json([...recipes]);
}
