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

export type TimetableEntry = {
	id: number;
	entry: {
		id: number;
		startTime: number;
		endTime: number;
		day: number;
		idCourseOfStudiesType: string;
		semester: number;
		idSemester: number;
		interval: string;
		lectureName: string;
		internalName: string;
		idLecture: number;
		examinationRegulationsNumber: number;
		specialization: number;
		group: string;
		subgroup: number;
		duration: string;
		comment: string;
		cancellation: string;
		contactHours: number;
		specialContactHours: number;
		creditPoints: number;
		lecturerNames: string[];
		elective: boolean;
		idLectureType: number;
		firstDate: string;
		lastDate: string;
		published: boolean;
		idLecturerSemester: number;
		onlineLink: string;
		onlineHint: string;
		videoDownloadLink: string;
		online: boolean;
		specializationName: string | null;
		locations: string[];
		lastChange: string;
		title: string;
		onlineInformation: string[];
		idLocations: number[];
		idLecturers: number[];
	};
};

export type TimetableEntries = TimetableEntry[];
