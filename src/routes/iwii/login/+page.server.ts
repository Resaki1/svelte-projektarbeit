/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }: any) => {
		console.log(await request.formData());
	}
};
