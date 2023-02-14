import type { BulletinResponse, StudentCouncilNewsResponse } from './apiResponseTypes';

const BASE_URI = 'http://www.iwi.hs-karlsruhe.de/iwii/REST';

export const getBulletinBoard = async (fetch: (url: string) => any): Promise<BulletinResponse> => {
	return fetch(`${BASE_URI}/newsbulletinboard`)
		.then((response: Response) => response.body)
		.then((rb: any) => {
			const reader = rb?.getReader();
			return new ReadableStream({
				start(controller) {
					// The following function handles each data chunk
					function push() {
						// "done" is a Boolean and value a "Uint8Array"
						reader?.read().then(({ done, value }: { done: boolean; value: any }) => {
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
		.then((stream: ReadableStream) =>
			// Respond with our stream
			new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
		)
		.then((result: string) => {
			return JSON.parse(result);
		});
};

export const getStudentCouncilNews = async (
	fetch: (url: string) => any
): Promise<StudentCouncilNewsResponse> => {
	return fetch(`${BASE_URI}/studentcouncil/news`)
		.then((response: Response) => response.body)
		.then((rb: any) => {
			const reader = rb?.getReader();
			return new ReadableStream({
				start(controller) {
					// The following function handles each data chunk
					function push() {
						// "done" is a Boolean and value a "Uint8Array"
						reader?.read().then(({ done, value }: { done: boolean; value: any }) => {
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
		.then((stream: ReadableStream) =>
			// Respond with our stream
			new Response(stream, { headers: { 'Content-Type': 'text/html' } }).text()
		)
		.then((result: string) => {
			return JSON.parse(result);
		});
};

export {};
