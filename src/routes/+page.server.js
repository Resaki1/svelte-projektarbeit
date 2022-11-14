// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
	throw redirect(307, '/iwii/info/bulletinboard');
}
