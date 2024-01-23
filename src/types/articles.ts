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

export interface C_coreCTA1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
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

export default interface Ce_article {
	landingPageUrl?: string,
	description?: string,
	name: string,
	c_activeInAnswers?: boolean,
	c_approvedForLaunch?: boolean,
	c_articleContent?: string,
	c_articleDate?: string,
	c_articleImage?: Image,
	c_author?: string,
	c_blogCategory?: string,
	c_businessUnit?: C_businessUnit,
	c_coreCTA1?: C_coreCTA1,
	c_pagesAgentAboutSectionPhoto?: ComplexImage,
	c_primaryCTA?: C_primaryCTA,
	c_secondaryCTA?: C_secondaryCTA,
	c_serviceAreaCityCombined?: string,
	c_serviceAreaStateCombined?: string,
	c_siteURL?: string,
	keywords?: string[],
	id: string,
}
