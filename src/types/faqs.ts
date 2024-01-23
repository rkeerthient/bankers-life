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

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_tertiaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Faq {
	answer?: string,
	answerV2?: any,
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	question: string,
	slug?: string,
	logo?: ComplexImage,
	name: string,
	c_activeInAnswers?: boolean,
	c_activeOnPages?: boolean,
	c_brand?: string,
	c_businessUnit?: C_businessUnit,
	c_exemptFromAgentETL?: boolean,
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	c_serviceAreaCityCombined?: string,
	c_serviceAreaStateCombined?: string,
	c_siteURL?: string,
	c_tertiaryCTA?: C_tertiaryCTA,
	keywords?: string[],
	id: string,
	timezone?: any,
}
