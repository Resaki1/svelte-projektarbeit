export type BulletinResponse = {
	title: string;
	subTitle: string;
	courseOfStudies: string[];
	publicationDate: string;
	expirationDate: string;
	content: string;
	studentCouncil: boolean;
	type: string;
	deleteOnExpiration: boolean;
	publicationTimestamp: string;
	id: number;
	idOwner: number;
	nameOwner: string;
	emailOwner: string;
}[];

export type StudentCouncilNewsResponse = {
	date: string;
	description: string;
	link: string;
	messages: {
		date: string;
		description: string;
		link: string;
		subTitle: string;
		title: string;
	}[];
	title: string;
};
