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

export interface C_aboutSectionRTF {
	title?: string,
	description?: string,
	image?: Image,
	areasWeServeTitle?: string,
	areasWeServeList?: string[],
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_annuitiesOffered {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_articlesSection {
	image?: Image,
	title?: string,
	date?: string,
	description?: string,
	cTAText?: string,
	cTALink?: string,
}

export interface C_benefitsList {
	sectionTitle?: string,
	image?: Image,
	bullets?: string,
}

export enum C_businessUnit {
	BANKERS_LIFE = "Bankers Life",
	PMA = "PMA/WNA",
	COLONIAL_PENN = "Colonial Penn",
	MYHEALTHPOLICY = "myHealthPolicy",
}

export interface C_comparisonList {
	subtitle?: string,
	description?: string,
}

export interface C_coreCTA1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_coreCTA2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Option1Cta {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Option2Cta {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Option3CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_coverageOptions {
	sectionTitle?: string,
	sectionDescription?: string,
	option1?: string,
	option1Description?: string,
	option1Cta?: Option1Cta,
	option2?: string,
	option2Description?: string,
	option2Cta?: Option2Cta,
	option3?: string,
	option3Description?: string,
	option3CTA?: Option3CTA,
}

export interface LeftSectionPhone {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface LeftSectionLink {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface RightSectionCta {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_ctaSection {
	sectionTitle?: string,
	sectionSubdescription?: string,
	leftSectionTitle?: string,
	leftSectionPhone?: LeftSectionPhone,
	leftSectionLink?: LeftSectionLink,
	rightSectionTitle?: string,
	rightSectionSubdescription?: string,
	rightSectionCta?: RightSectionCta,
	rightSectionText?: string,
}

export interface C_fAQs {
	question?: string,
	answer?: string,
}

export interface C_fAQsCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface OptionalCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_feature3BulletPointSection {
	image?: Image,
	title?: string,
	description?: string,
	optionalCTA?: OptionalCTA,
}

export interface C_feature4BulletPointSection {
	image?: Image,
	title?: string,
	description?: string,
	optionalCTA?: OptionalCTA,
}

export interface C_featureWithFourBuckets {
	sectionTitle?: string,
	sectionDescription?: string,
	bucket1?: string,
	bucket2?: string,
	bucket3?: string,
	bucket4?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface C_featuredProductBanner {
	title?: string,
	optionalTitleLogoInsteadOfTitle?: Image,
	description?: string,
	cTAText?: string,
	cTAURL?: string,
	image?: Image,
	bannerText?: string,
	bannerPhone?: string,
}

export interface C_featuredProductBannerIntro {
	title?: string,
	description?: string,
	cTAText?: string,
	cTAURL?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Feature1CTA1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Feature1CTA2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Feature2CTA1 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface Feature2CTA2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface CTAs {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface FeaturesCallToAction {
	key?: string,
	cTAs?: CTAs[],
}

export interface C_features {
	sectionTitle?: string,
	sectionDescription?: string,
	sectionCTAText?: string,
	sectionCTAURL?: string,
	feature?: ComplexImage[],
	disclosure?: string,
	hideIcons?: boolean,
	feature1CTA1?: Feature1CTA1,
	feature1CTA2?: Feature1CTA2,
	feature2CTA1?: Feature2CTA1,
	feature2CTA2?: Feature2CTA2,
	featuresCallToAction?: FeaturesCallToAction[],
}

export interface C_featuresSection1CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_featuresSection1SecondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_featuresSection2 {
	sectionTitle?: string,
	sectionDescription?: string,
	sectionCTAText?: string,
	sectionCTAURL?: string,
	feature?: ComplexImage[],
	disclosure?: string,
	hideIcons?: boolean,
	feature1CTA1?: Feature1CTA1,
	feature1CTA2?: Feature1CTA2,
	feature2CTA1?: Feature2CTA1,
	feature2CTA2?: Feature2CTA2,
	featuresCallToAction?: FeaturesCallToAction[],
}

export interface C_featuresSection2RTF {
	heading?: string,
	image1?: Image,
	description1?: string,
	image2?: Image,
	description2?: string,
}

export interface C_featuresSection2CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_getAQuoteBanner {
	title?: string,
	description?: string,
	cTAText?: string,
	cTAURL?: string,
}

export interface C_iconPopoutSectionItems {
	icon?: Image,
	title?: string,
	description?: string,
	subIcon?: Image,
}

export interface C_lifeInsurancesOffered {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_lTCInsurancesOffered {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_medicareAdvantagePlans {
	sectionTitle?: string,
	sectionDescription?: string,
	option1?: string,
	option1Description?: string,
	option1Cta?: Option1Cta,
	option2?: string,
	option2Description?: string,
	option2Cta?: Option2Cta,
	option3?: string,
	option3Description?: string,
	option3CTA?: Option3CTA,
}

export interface Cta {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_partsOfMedicare {
	sectionHeading?: string,
	description?: string,
	copy?: string[],
	imageAndText?: ComplexImage[],
	cta?: Cta,
}

export enum C_pMAAgentType {
	CMD = "CMD",
	WMD = "WMD",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_productPricingAndTerms {
	title?: string,
	description?: string,
	isHTML?: string,
}

export enum C_productType {
	MEDICARE_SUPPLEMENT_INSURANCE = "Medicare Supplement insurance",
	LONG_TERM_CARE = "Long-Term Care Insurance",
	MEDICARE_INSURANCE = "Medicare Insurance",
	LIFE_INSURANCE = "Life Insurance",
	TERM_LIFE_INSURANCE = "Term Life Insurance",
	WHOLE_LIFE_INSURANCE = "Whole Life Insurance",
	UNIVERSAL_LIFE_INSURANCE = "Universal Life Insurance",
	JUVENILE_WHOLE_LIFE_INSURANCE = "Juvenile Whole Life Insurance",
	CRITICAL_ILLNESS = "Critical Illness Insurance",
	HOSPITAL_INDEMNITY = "Hospital Indemnity Insurance",
	ANNUITIES = "Annuities",
	TRADITIONAL_FIXED_ANNUITIES = "Traditional Fixed Annuities",
	IMMEDIATE_ANNUITIES = "Immediate Annuities",
	FIXED_INDEXED_ANNUITIES = "Fixed Indexed Annuities",
	WEALTH_MANAGEMENT_SOLUTIONS = "Wealth Management Solutions",
	ACCIDENT_INSURANCE_FOR_FAMILIES___INDIVIDUALS = "Accident Insurance for Families & Individuals",
	HOSPITAL_INSURANCE_FOR_FAMILIES___INDIVIDUALS = "Hospital Insurance for Families & Individuals",
	CANCER_INSURANCE_FOR_FAMILIES___INDIVIDUALS = "Cancer Insurance for Families & Individuals",
	CRITICAL_ILLNESS_INSURANCE_FOR_FAMILIES___INDIVIDUALS = "Critical Illness Insurance for Families & Individuals",
	HEART_AND_STROKE_INSURANCE_INSUANCE_FOR_FAMILIES___INDIVIDUALS = "Heart and Stroke Insurance for Families & Individuals",
	GUARANTEED_ACCEPTANCE = "Guaranteed Acceptance Life Insurance",
	PERMANENT_WHOLE_LIFE_INSURANCE = "Permanent Whole Life Insurance",
	RENEWABLE_TERM_LIFE_INSURANCE = "Renewable Term Life Insurance",
	ACCIDENT___DISABILITY_INSURANCE = "Accident Insurance for Business Owners",
	LIFE_INSURANCE_FOR_BUSINESS_OWNERS = "Life Insurance for Business Owners",
	HOSPITALIZATION___ICU_INSURANCE_FOR_BUSINESS_OWNERS = "Hospitalization & ICU Insurance for Business Owners",
	CANCER___CRITICAL_ILLNESS_INSURANCE_FOR_BUSINESS_OWNERS = "Cancer & Critical Illness Insurance for Business Owners",
	LIFE_INSURANCE_FOR_FAMILIES___INDIVIDUALS = "Life Insurance for Families & Individuals",
	LIVING_INSURANCE = "Living Insurance",
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export enum C_serviceAreaPage {
	BANKERS_LIFE = "Bankers Life",
	MYHEALTHPOLICY = "myHealthPolicy",
}

export interface C_supplementalInsurancesOffered {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_videos {
	videoUrl?: string,
	videoDescription?: string,
	videoDisclaimer?: string,
	videoDisclaimerNormalSizeText?: string,
	textUnderVideo?: boolean,
	videoProviderIsYouTube?: boolean,
}

export default interface Ce_product {
	landingPageUrl?: string,
	description?: string,
	name: string,
	c_aboutDescription?: string,
	c_aboutSectionRTF?: C_aboutSectionRTF,
	c_activeInAnswers?: boolean,
	c_alertBanner?: string,
	c_annuitiesOffered?: C_annuitiesOffered[],
	c_approvedForLaunch?: boolean,
	c_articlesSection?: C_articlesSection[],
	c_availableBenefitsSectionTitle?: string,
	c_benefitsList?: C_benefitsList[],
	c_benefitsSectionFootnotes?: string,
	c_businessUnit?: C_businessUnit,
	c_comparisonList?: C_comparisonList[],
	c_comparisonSectionTitle?: string,
	c_coreCTA1?: C_coreCTA1,
	c_coreCTA1HeadingText?: string,
	c_coreCTA2?: C_coreCTA2,
	c_coreCTA2HeadingText?: string,
	c_coreDisclaimer1?: string,
	c_coreDisclaimer2?: string,
	c_coreDisclaimerLarge?: boolean,
	c_coverageOptions?: C_coverageOptions,
	c_ctaSection?: C_ctaSection,
	c_exemptFromETL?: boolean,
	c_fAQDisclosure?: string,
	c_fAQs?: C_fAQs[],
	c_fAQsCTA?: C_fAQsCTA,
	c_fAQsDescription?: string,
	c_faqsTitleSection?: string,
	c_feature3BulletPointSection?: C_feature3BulletPointSection,
	c_feature4BulletPointSection?: C_feature4BulletPointSection,
	c_featureWithFourBuckets?: C_featureWithFourBuckets,
	c_featuredAgentsLinked?: EntityReference[],
	c_featuredProductBanner?: C_featuredProductBanner,
	c_featuredProductBannerIntro?: C_featuredProductBannerIntro,
	c_features?: C_features[],
	c_featuresSection1CTA?: C_featuresSection1CTA,
	c_featuresSection1SecondaryCTA?: C_featuresSection1SecondaryCTA,
	c_featuresSection2?: C_featuresSection2[],
	c_featuresSection2RTF?: C_featuresSection2RTF,
	c_featuresSection2CTA?: C_featuresSection2CTA,
	c_footerLargeText?: string,
	c_footerText?: string,
	c_formEmail?: string,
	c_formNumber?: string,
	c_formPhone?: string,
	c_formPhoneText?: string,
	c_getAQuoteBanner?: C_getAQuoteBanner,
	c_heroImageSAP?: Image,
	c_heroSubheading?: string,
	c_heroText?: string,
	c_heroTitleOverride?: string,
	c_iconPopoutSectionFootnote?: string,
	c_iconPopoutSectionItems?: C_iconPopoutSectionItems[],
	c_iconPopoutSectionSubtitle?: string,
	c_iconPopoutSectionTitle?: string,
	c_insurancesOfferedTitle?: string,
	c_lifeInsurancesOffered?: C_lifeInsurancesOffered[],
	c_linkedEntities?: EntityReference[],
	c_linkedProductPages?: EntityReference[],
	c_livingInsuranceHTML1?: string[],
	c_livingInsuranceHTML2?: string[],
	c_livingInsuranceHTML3?: string[],
	c_lTCInsurancesOffered?: C_lTCInsurancesOffered[],
	c_medicareAdvantagePlans?: C_medicareAdvantagePlans,
	c_medicareDescription?: ComplexImage[],
	c_metaDescription?: string,
	c_metaTitle?: string,
	c_pagesURL?: string,
	c_partsOfMedicare?: C_partsOfMedicare,
	c_photo?: Image,
	c_pMAAgentType?: C_pMAAgentType,
	c_price?: string,
	c_primaryCTA?: C_primaryCTA,
	c_productPricingAndTerms?: C_productPricingAndTerms[],
	c_productType?: C_productType[],
	c_secondaryCTA?: C_secondaryCTA,
	c_serviceAreaCity?: string,
	c_serviceAreaCityCombined?: string,
	c_serviceAreaPage?: C_serviceAreaPage,
	c_serviceAreaState?: string,
	c_serviceAreaStateCombined?: string,
	c_siteURL?: string,
	c_supplementalInsurancesOffered?: C_supplementalInsurancesOffered[],
	c_videoSectionTitle?: string,
	c_videos?: C_videos[],
	keywords?: string[],
	id: string,
}
