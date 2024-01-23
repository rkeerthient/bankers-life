export enum EmploymentType {
	FULL_TIME = "Full Time",
	PART_TIME = "Part Time",
	CONTRACTOR = "Contractor",
	TEMPORARY = "Temporary",
	INTERN = "Intern",
	VOLUNTEER = "Volunteer",
	PER_DIEM = "Per Diem",
	OTHER = "Other",
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Location {
	existingLocation?: EntityReference,
	externalLocation?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface YextBoundingBox {
	southWest: Coordinate,
	northEast: Coordinate,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum C_businessUnit {
	BANKERS_LIFE = "Bankers Life",
	PMA = "PMA/WNA",
	COLONIAL_PENN = "Colonial Penn",
	MYHEALTHPOLICY = "myHealthPolicy",
}

export enum C_employmentTypeText {
	PART_TIME = "Part Time",
	FULL_TIME = "Full Time",
}

export default interface Job {
	applicationUrl?: string,
	datePosted?: string,
	employmentType?: EmploymentType,
	hiringOrganization?: string,
	jobLocation?: EntityReference,
	landingPageUrl?: string,
	location?: Location,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	slug?: string,
	validThrough?: any,
	workRemote?: boolean,
	yextBoundingBox?: YextBoundingBox,
	description?: string,
	logo?: ComplexImage,
	name: string,
	c_activeOnPages?: boolean,
	c_businessUnit?: C_businessUnit,
	c_department?: string,
	c_employmentTypeText?: C_employmentTypeText[],
	c_exemptFromAgentETL?: boolean,
	c_serviceAreaCityCombined?: string,
	c_serviceAreaStateCombined?: string,
	c_siteURL?: string,
	displayCoordinate?: Coordinate,
	keywords?: string[],
	id: string,
	timezone?: any,
	yextDisplayCoordinate?: Coordinate,
}
