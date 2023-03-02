import { fail } from '@sveltejs/kit';
import type {
	AllTimetables,
	BulletinResponse,
	StudentCouncilNewsResponse,
	TimetableEntries
} from './apiResponseTypes';

const BASE_URI = 'https://www.iwi.hs-karlsruhe.de/iwii/REST';

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
		})
		.catch((error: any) => console.log(error));
};

export const loginUser = async (
	fetch: (url: string, body?: any) => any,
	login: string,
	password: string
) => {
	return fetch(`https://www.iwi.hs-karlsruhe.de/iwii/REST/credential/authentication`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			login,
			password
		})
	})
		.then(async (response: Response) => await response.json())
		.catch((error: any) => console.log('error', error));
};

export const getUserInfo = async (fetch: (url: string, body?: any) => any, jwt: string) =>
	fetch(`${BASE_URI}/credential/v2/info`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	})
		.then((response: any) => response.json())
		.catch((error: any) => fail(401, error));

export const getPersonalTimetable = async (
	fetch: (url: string, body?: any) => any,
	basic: string
): Promise<TimetableEntries> =>
	fetch(`${BASE_URI}/studenttimetable/timetable/v2`, {
		method: 'GET',
		headers: {
			Authorization: `Basic ${basic}`
		},
		redirect: 'follow'
	})
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
		})
		.catch((error: any) => console.log(error));

export const getAllTimetables = async (
	fetch: (url: string, body?: any) => any
): Promise<AllTimetables> =>
	fetch(`${BASE_URI}/timetable/all`, {
		method: 'GET',
		redirect: 'follow'
	})
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
		})
		.catch((error: any) => console.log(error));
