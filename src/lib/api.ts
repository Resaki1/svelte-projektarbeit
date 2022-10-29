const BASE_URI = 'http://www.iwi.hs-karlsruhe.de/iwii/REST';

export const getBulletinBoard = async () => {
	return fetch(`${BASE_URI}/newsbulletinboard`)
		.then((response) => response.body)
		.then((rb) => {
			const reader = rb?.getReader();
			return new ReadableStream({
				start(controller) {
					// The following function handles each data chunk
					function push() {
						// "done" is a Boolean and value a "Uint8Array"
						reader?.read().then(({ done, value }) => {
							// If there is no more data to read
							if (done) {
								controller.close();
								return;
							}
							// Get the data and send it to the browser via the controller
							controller.enqueue(value);
							push();
						});
					}

					push();
				}
			});
		})
		.then((stream) =>
			// Respond with our stream
			new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
		)
		.then((result) => {
			// Do things with result
			return JSON.parse(result);
		});
};

export {};
