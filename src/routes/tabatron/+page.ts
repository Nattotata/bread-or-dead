// make a GET request to https://script.google.com/macros/s/AKfycby-YtyEpWo5K3229XiC-cXzc89Ww_uL4BOi555clwHhE8IVMs8DIAhJMxbQ0DKf9qF2/exec
// use fetch to make the request

import type { PageLoad } from './$types';

const params = {
	headers: { 'Access-Control-Allow-Origin': '*', Accept: 'application/json', method: 'GET' }
};
const url =
	'https://script.google.com/macros/s/AKfycbzN6gKm0R5ZfVVzH5foWV3i7txXGVV5Udjfcj9WokWg-DrZ7y8Vg_iCTmaY5h-7yxyP/exec';
// add Access-Control-Allow-Origin header
// const res = await fetch(url, {
// 	headers: {

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(url, { mode: 'no-cors' });
	const item = await res.json();
	console.info('item', item);

	return item;
};
