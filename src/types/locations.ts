export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export enum Category {
	BOOK_TRAVEL = "Book Travel",
	CHECK_IN = "Check in",
	FEES_POLICIES = "Fees Policies - Deprecated",
	FLIGHT_STATUS = "Flight Status",
	TICKETS = "Tickets",
	TICKETING = "Ticketing - Deprecated",
	AMENITIES = "Amenities",
	RESERVE = "Reserve - Deprecated",
	FRONT_DESK = "Front Desk - Deprecated",
	PARKING = "Parking",
	GIFT_CARD = "Gift Card",
	WAITLIST = "Waitlist",
	DELIVERY = "Delivery (Restaurant)",
	ORDER = "Order (Restaurant)",
	TAKEOUT = "Takeout - Deprecated",
	PICKUP = "Pickup (Restaurant)",
	RESERVE_REST = "Reserve (Restaurant)",
	MENU = "Menu",
	APPOINTMENT = "Appointment - Deprecated",
	PORTFOLIO = "Portfolio - Deprecated",
	QUOTE = "Quote",
	SERVICES = "Services",
	STORE_ORDERS = "Store Orders - Deprecated",
	STORE_SHOP = "Store Shop - Deprecated",
	STORE_SUPPORT = "Store Support - Deprecated",
	SCHEDULE = "Schedule",
	SHOWTIMES = "Showtimes",
	AVAILABILITY = "Availability",
	PRICING = "Pricing",
	ACTIVITIES = "Activities",
	BOOK = "Book",
	BOOK__HOTEL_ = "Book (Hotel)",
	BOOK__RIDE_ = "Book Ride",
	BOOK__TOUR_ = "Book Tour",
	CAREERS = "Careers",
	CHARGE = "Charge",
	COUPONS = "Coupons",
	DELIVERY__RETAIL_ = "Delivery (Retail)",
	DONATE = "Donate",
	EVENTS = "Events",
	ORDER__RETAIL_ = "Order (Retail)",
	OTHER_MENU = "Other Menu - Deprecated",
	PICKUP__RETAIL_ = "Pickup (Retail)",
	RESERVE__PARKING_ = "Reserve (Parking)",
	SHOWS = "Shows",
	SPORTS = "Sports",
	SUPPORT = "Support",
	TEE_TIME = "Tee Time",
	GIFT_CARD__RESTAURANT_ = "Gift Card (Restaurant) - Deprecated",
}

export interface AppleActionLinks {
	category: Category,
	appStoreUrl: string,
	quickLinkUrl: string,
	appName: string,
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

export interface FrequentlyAskedQuestions {
	question: string,
	answer?: string,
}

export enum Type {
	DEPARTMENT_IN = "Department In",
	INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
	type: Type,
	placeId: string,
}

export enum PickupAndDeliveryServices {
	IN_STORE_PICKUP = "In-Store Pickup",
	CURBSIDE_PICKUP = "Curbside Pickup",
	PICKUP_NOT_OFFERED = "Pickup Not Offered",
	DELIVERY = "Delivery",
	SAME_DAY_DELIVERY = "Same Day Delivery",
	NO_CONTACT_DELIVERY = "No-Contact Delivery",
	DELIVERY_NOT_OFFERED = "Delivery Not Offered",
}

export enum Type_1 {
	POSTAL_CODE = "Postal Code",
	REGION = "State/Region",
	COUNTY = "County",
	CITY = "City",
	SUBLOCALITY = "Sublocality",
}

export interface ServiceAreaPlaces {
	name?: string,
	type?: Type_1,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_answersCTA2 {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface C_brandsAndPartnersLogos {
	image?: Image,
	title?: string,
}

export enum C_businessUnit {
	BANKERS_LIFE = "Bankers Life",
	PMA = "PMA/WNA",
	COLONIAL_PENN = "Colonial Penn",
	MYHEALTHPOLICY = "myHealthPolicy",
}

export enum C_eTLAFSpecialtiesAutoAdd {
	RETIREMENT_INCOME = "retirement income",
	OTHER = "other",
	SELECTING_FUTURE_HEALTHCARE_COVERAGE = "selecting future healthcare coverage",
	FUNERAL_OR_BURIAL_COVERAGE = "funeral or burial coverage",
	LEAVING_A_LEGACY = "leaving a legacy",
	ILLNESS_AND_HOSPITALIZATION_EXPENSES = "illness and hospitalization expenses",
	EMERGENCY_FUNDS = "emergency funds",
	RETIREMENT_PLANS = "retirement plans",
	MEDICARE_COVERAGE = "Medicare coverage",
	RETIREMENT_INVESTMENT = "retirement investment",
	_401_K__ROLLOVER = "401(k) rollover",
}

export interface CTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_exploreMedicareAdvantage {
	sectionHeading?: string,
	image?: Image,
	headline?: string,
	description?: string,
	cTA?: CTA,
}

export interface CallToAction {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_featuredEvent {
	title?: string,
	image?: Image,
	startDate?: string,
	date?: string,
	description?: string,
	callToAction?: CallToAction,
}

export interface C_featuredFinancialProductsCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_featuredInsuranceProductsCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_featuredTeamMembers {
	agentImage?: Image,
	name?: string,
	titlePositions?: string,
	bio?: string,
	phoneNumber?: string,
	email?: string,
	servicesProvidedList?: string[],
}

export enum C_gs_gender {
	FEMALE = "Female",
	MALE = "Male",
	NON_BINARY___THIRD_GENDER = "Non-binary / third gender",
}

export enum C_gs_q1_composite {
	ALABAMA = "Alabama",
	ARKANSAS = "Arkansas",
	ARIZONA = "Arizona",
	CALIFORNIA = "California",
	COLORADO = "Colorado",
	CONNECTICUT = "Connecticut",
	DELAWARE = "Delaware",
	FLORIDA = "Florida",
	GEORGIA = "Georgia",
	HAWAII = "Hawaii",
	IDAHO = "Idaho",
	ILLINOIS = "Illinois",
	INDIANA = "Indiana",
	IOWA = "Iowa",
	KANSAS = "Kansas",
	KENTUCKY = "Kentucky",
	LOUISIANA = "Louisiana",
	MAINE = "Maine",
	MARYLAND = "Maryland",
	MASSACHUSETTS = "Massachusetts",
	MICHIGAN = "Michigan",
	MINNESOTA = "Minnesota",
	MISSISSIPPI = "Mississippi",
	MONTANA = "Montana",
	MISSOURI = "Missouri",
	NEBRASKA = "Nebraska",
	NEVADA = "Nevada",
	NEW_HAMPSHIRE = "New Hampshire",
	NEW_JERSEY = "New Jersey",
	NEW_MEXICO = "New Mexico",
	NEW_YORK = "New York",
	NORTH_CAROLINA = "North Carolina",
	NORTH_DAKOTA = "North Dakota",
	OHIO = "Ohio",
	OKLAHOMA = "Oklahoma",
	OREGON = "Oregon",
	PENNSYLVANIA = "Pennsylvania",
	RHODE_ISLAND = "Rhode Island",
	SOUTH_CAROLINA = "South Carolina",
	SOUTH_DAKOTA = "South Dakota",
	TENNESSEE = "Tennessee",
	TEXAS = "Texas",
	UTAH = "Utah",
	VERMONT = "Vermont",
	VIRGINIA = "Virginia",
	WASHINGTON = "Washington",
	WEST_VIRGINIA = "West Virginia",
	WISCONSIN = "Wisconsin",
	WYOMING = "Wyoming",
}

export enum C_gs_q2_composite {
	ENGLISH = "English",
	SPANISH = "Spanish",
	CHINESE_MANDARIN = "Chinese/Mandarin",
	KOREAN = "Korean",
	VIETNAMESE = "Vietnamese",
	FRENCH = "French",
	RUSSIAN = "Russian",
	ARABIC = "Arabic",
	GERMANIC = "German",
	TAGALOG = "Tagalog",
	HAITIAN_CREOLE = "Haitian Creole",
	HINDI = "Hindi",
	OTHER__PLEASE_SPECIFY__ = "Other (please specify):",
}

export enum C_gs_q3_composite {
	IN_PERSON = "In-person",
	VIRTUALLY = "Virtually",
}

export enum C_gs_q4_b_composite {
	MEDICARE_COVERAGE = "Medicare coverage",
	FUNERAL_OR_BURIAL_COVERAGE = "funeral or burial coverage",
	LEAVING_A_LEGACY = "leaving a legacy",
	RETIREMENT_INCOME = "retirement income",
	RETIREMENT_INVESTMENT = "retirement investment",
	SELECTING_FUTURE_HEALTHCARE_COVERAGE = "selecting future healthcare coverage",
	ILLNESS_AND_HOSPITALIZATION_EXPENSES = "illness and hospitalization expenses",
	_401_K__ROLLOVER = "401(k) rollover",
	EMERGENCY_FUNDS = "emergency funds",
	RETIREMENT_PLANS = "retirement plans",
	OTHER = "other",
}

export enum C_gs_q4_c_composite {
	MEDICARE_COVERAGE = "Medicare coverage",
	FUNERAL_OR_BURIAL_COVERAGE = "funeral or burial coverage",
	LEAVING_A_LEGACY = "leaving a legacy",
	RETIREMENT_INCOME = "retirement income",
	RETIREMENT_INVESTMENT = "retirement investment",
	SELECTING_FUTURE_HEALTHCARE_COVERAGE = "selecting future healthcare coverage",
	ILLNESS_AND_HOSPITALIZATION_EXPENSES = "illness and hospitalization expenses",
	_401_K__ROLLOVER = "401(k) rollover",
	EMERGENCY_FUNDS = "emergency funds",
	RETIREMENT_PLANS = "retirement plans",
	OTHER = "other",
}

export enum C_gs_q5_composite {
	TRANSACTIONAL_ADVISING_STYLE = "transactional advising style",
	EDUCATIONAL_ADVISING_STYLE = "educational advising style",
	CONSULTATIVE_ADVISING_STYLE = "consultative advising style",
}

export interface C_healthcarePartnerLogos {
	image?: Image,
	title?: string,
}

export interface OptionalCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_joinOurTeamSection {
	image?: Image,
	title?: string,
	description?: string,
	optionalCTA?: OptionalCTA,
}

export enum C_licensedToSellFinancialProducts {
	_401_K__ROLLOVER_AND_INVESTMENT_PRODUCTS = "401(k) rollover and investment products",
}

export interface Video {
	url: string,
}

export interface ComplexVideo {
	url: string,
	video?: string,
	description?: string,
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

export enum C_profileType {
	BRANCH = "Branch",
	AGENT = "Agent",
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface C_secondaryFeaturedEvent {
	title?: string,
	image?: Image,
	startDate?: string,
	date?: string,
	description?: string,
	callToAction?: CallToAction,
}

export enum C_spanishDuplicate {
	YES = "Yes",
	NO = "No",
}

export interface C_subEvents {
	eventName?: string,
	description?: string,
	image?: Image,
	callToAction?: CallToAction,
	startDate?: string,
	endDate?: string,
}

export interface C_wACaresEvent {
	sectionHeading?: string,
	image?: Image,
	headline?: string,
	description?: string,
	cTA?: CTA,
}

export interface Bios {
	label?: string,
	ids?: string[],
}

export interface Calendars {
	label?: string,
	ids?: string[],
}

export interface ProductLists {
	label?: string,
	ids?: string[],
}

export enum Type_2 {
	NONE = "None",
	BOOK_NOW = "Book Now",
	CALL_NOW = "Call Now",
	CONTACT_US = "Contact Us",
	SEND_MESSAGE = "Send Message",
	USE_APP = "Use App",
	PLAY_GAME = "Play Game",
	SHOP_NOW = "Shop Now",
	SIGN_UP = "Sign Up",
	WATCH_VIDEO = "Watch Video",
	SEND_EMAIL = "Send Email",
	LEARN_MORE = "Learn More",
	PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
	ORDER_NOW = "Order Now",
	FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
	type: Type_2,
	value?: string,
}

export interface FeaturedMessage {
	description?: string,
	url?: string,
}

export enum LocationType {
	LOCATION = "Location",
	HEALTHCARE_FACILITY = "Healthcare Facility",
	HEALTHCARE_PROFESSIONAL = "Healthcare Professional",
	ATM = "ATM",
	RESTAURANT = "Restaurant",
	HOTEL = "Hotel",
}

export interface MenuUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface OrderUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export enum PaymentOptions {
	AFTERPAY = "Afterpay",
	ALIPAY = "AliPay",
	AMERICANEXPRESS = "American Express",
	ANDROIDPAY = "Google Pay",
	APPLEPAY = "Apple Pay",
	ATM = "ATM",
	ATMQUICK = "ATM Quick",
	BACS = "BACS",
	BANCONTACT = "Bancontact",
	BANKDEPOSIT = "Bank Deposit",
	BANKPAY = "Bank Pay",
	BGO = "Bank/Giro Overschrijving",
	BITCOIN = "Bitcoin",
	Bar = "Bargeld",
	CARTASI = "CartaSi",
	CASH = "Cash",
	CCS = "CCS",
	CHECK = "Check",
	CONB = "Contactloos betalen",
	CONTACTLESSPAYME = "Contactless Payment",
	CVVV = "Cadeaubon/VVV bon",
	DEBITNOTE = "Debit Note",
	DINERSCLUB = "Diners Club",
	DIRECTDEBIT = "Direct Debit",
	DISCOVER = "Discover",
	ECKARTE = "Girokarte",
	ECOCHEQUE = "EcoCheque",
	EKENA = "E-kena",
	EMV = "Elektronische Maaltijdcheques",
	FINANCING = "Financing",
	GOPAY = "GoPay",
	HAYAKAKEN = "Hayakaken",
	HEBAG = "He-Bag",
	IBOD = "iBOD",
	ICCARDS = "IC Cards",
	ICOCA = "Icoca",
	ID = "iD",
	IDEAL = "iDeal",
	INCA = "Incasso",
	INVOICE = "Invoice",
	JCB = "JCB",
	JCoinPay = "J−Coin Pay",
	JKOPAY = "JKO Pay",
	KITACA = "Kitaca",
	KLA = "Klantenkaart",
	KLARNA = "Klarna",
	LINEPAY = "LINE Pay",
	MAESTRO = "Maestro",
	MANACA = "Manaca",
	MASTERCARD = "MasterCard",
	MIPAY = "Mi Pay",
	MONIZZE = "Monizze",
	MPAY = "MPay",
	Manuelle_Lastsch = "Manuelle Lastschrift",
	Merpay = "メルPay",
	NANACO = "nanaco",
	NEXI = "Nexi",
	NIMOCA = "Nimoca",
	OREM = "Onder Rembours",
	PASMO = "Pasmo",
	PAYBACKPAY = "Payback Pay",
	PAYBOX = "Paybox",
	PAYCONIQ = "Payconiq",
	PAYPAL = "PayPal",
	PAYPAY = "PayPay",
	PAYSEC = "PaySec",
	PIN = "PIN",
	POSTEPAY = "Postepay",
	QRCODE = "QR Code Payment",
	QUICPAY = "QUICPay",
	RAKUTENEDY = "Rakuten Edy",
	RakutenPay = "楽天Pay",
	SAMSUNGPAY = "Samsung Pay",
	SODEXO = "Sodexo",
	SUGOCA = "Sugoca",
	SUICA = "Suica",
	SWISH = "Swish",
	TICKETRESTAURANT = "Ticket Restaurant",
	TOICA = "Toica",
	TRAVELERSCHECK = "Traveler's Check",
	TSCUBIC = "TS CUBIC",
	TWINT = "Twint",
	UNIONPAY = "China UnionPay",
	VEV = "Via een verzekering",
	VISA = "Visa",
	VISAELECTRON = "Visa Electron",
	VOB = "Vooruit betalen",
	VOUCHER = "Voucher",
	VPAY = "V PAY",
	WAON = "WAON",
	WECHATPAY = "WeChat Pay",
	WIRETRANSFER = "Wire Transfer",
	Yucho_Pay = "ゆうちょPay",
	ZELLE = "Zelle",
	AuPay = "auPay",
	DBarai = "d払い",
	Überweisung = "Banküberweisung",
}

export enum PriceRange {
	UNSPECIFIED = "Unspecified",
	ONE = "$",
	TWO = "$$",
	THREE = "$$$",
	FOUR = "$$$$",
}

export interface RankTrackingCompetitors {
	name: string,
	website: string,
}

export enum RankTrackingFrequency {
	WEEKLY = "Weekly",
	MONTHLY = "Monthly",
	QUARTERLY = "Quarterly",
}

export enum RankTrackingKeywords {
	NAME = "Name",
	PRIMARY_CATEGORY = "Primary Category",
	SECONDARY_CATEGORY = "Secondary Category",
}

export enum RankTrackingQueryTemplates {
	KEYWORD = "Keyword",
	KEYWORD_ZIP = "Keyword Zip",
	KEYWORD_CITY = "Keyword City",
	KEYWORD_IN_CITY = "Keyword in City",
	KEYWORD_NEAR_ME = "Keyword near me",
	KEYWORD_CITY_STATE = "Keyword City State",
}

export enum RankTrackingSites {
	GOOGLE_DESKTOP = "Google Desktop",
	GOOGLE_MOBILE = "Google Mobile",
	BING_DESKTOP = "Bing Desktop",
	BING_MOBILE = "Bing Mobile",
	YAHOO_DESKTOP = "Yahoo Desktop",
	YAHOO_MOBILE = "Yahoo Mobile",
}

export interface ReservationUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export interface ServiceArea {
	places?: string[],
}

export enum Presentation {
	BUTTON = "Button",
	LINK = "Link",
}

export interface UberLink {
	text?: string,
	presentation: Presentation,
}

export interface UberTripBranding {
	text: string,
	url: string,
	description: string,
}

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export default interface Location {
	accessHours?: Hours,
	appleActionLinks?: AppleActionLinks[],
	appleBusinessDescription?: string,
	appleBusinessId?: string,
	appleBusinessIdDqe?: string,
	appleCompanyId?: string,
	appleCompanyIdDqe?: string,
	appleCoverPhoto?: Image,
	bingWebsiteOverride?: string,
	blackOwnedBusiness?: boolean,
	bookingDotComPropertyId?: string,
	brunchHours?: Hours,
	questionsAndAnswers?: boolean,
	covid19InformationUrl?: string,
	covidMessaging?: string,
	deliveryHours?: Hours,
	deliveryUrl?: string,
	dineInHours?: Hours,
	driveThroughHours?: Hours,
	facebookAbout?: string,
	facebookWebsiteOverride?: string,
	frequentlyAskedQuestions?: FrequentlyAskedQuestions[],
	fullyVaccinatedStaff?: boolean,
	geomodifier?: string,
	googleEntityRelationship?: GoogleEntityRelationship,
	googleMyBusinessLabels?: string[],
	googlePlaceId?: string,
	googleShortName?: string,
	happyHours?: Hours,
	holidayHoursConversationEnabled?: boolean,
	impressum?: string,
	kitchenHours?: Hours,
	landingPageUrl?: string,
	linkedInUrl?: string,
	neighborhood?: string,
	nudgeEnabled?: boolean,
	onlineServiceHours?: Hours,
	phoneticName?: string,
	pickupAndDeliveryServices?: PickupAndDeliveryServices[],
	pickupHours?: Hours,
	pinterestUrl?: string,
	primaryConversationContact?: any,
	proofOfVaccinationRequired?: boolean,
	reviewResponseConversationEnabled?: boolean,
	seniorHours?: Hours,
	serviceAreaPlaces?: ServiceAreaPlaces[],
	slug?: string,
	takeoutHours?: Hours,
	tikTokUrl?: string,
	what3WordsAddress?: string,
	yelpLinkedAccount?: any,
	yelpWebsiteOverride?: string,
	youTubeChannelUrl?: string,
	additionalHoursText?: string,
	address: Address,
	addressHidden?: boolean,
	alternatePhone?: any,
	androidAppUrl?: string,
	associations?: string[],
	brands?: string[],
	description?: string,
	hours?: Hours,
	logo?: ComplexImage,
	name: string,
	categories?: any,
	cityCoordinate?: Coordinate,
	closed?: boolean,
	c_2ndAddress1?: string,
	c_2ndAddress2?: string,
	c_2ndCity?: string,
	c_2ndCountryCode?: string,
	c_2ndState?: string,
	c_2ndZipCode?: string,
	c_activeInAnswers?: boolean,
	c_activeOnPages?: boolean,
	c_additionalFAOnlyRequirements?: boolean,
	c_advisoryPage?: boolean,
	c_aetnaLogo?: Image,
	c_agent?: boolean,
	c_agentCertification?: boolean,
	c_agentEducationBackground?: string,
	c_agentFinderFinsFlag?: boolean,
	c_agentFirstName?: string,
	c_agentID?: string,
	c_agentLastName?: string,
	c_agentResidenceBackground?: string,
	c_alertBannerBackgroundColor?: string,
	c_alertBannerCTAText?: string,
	c_alertBannerCTAURL?: string,
	c_alertBannerDatePosted?: string,
	c_alertBannerFontColor?: string,
	c_alertBannerText?: string,
	c_alertBannerTitle?: string,
	c_answersCTA2?: C_answersCTA2,
	c_approvedForLaunch?: boolean,
	c_aRLicenseNumber?: string,
	c_articleDates?: string[],
	c_articles?: ComplexImage[],
	c_articlesLinkURL?: string,
	c_associatedLocations?: EntityReference[],
	c_associatedProducts?: EntityReference[],
	c_bLLogo?: Image,
	c_botConversionTracking?: number,
	c_branchAgentLinkedLocation?: EntityReference[],
	c_branchEmail?: string,
	c_branchID?: string,
	c_branchManager?: string,
	c_branchManagerEmail?: string,
	c_branchName?: string,
	c_branchProductsHeader?: string,
	c_brandsAndPartnersBodyText?: string,
	c_brandsAndPartnersHeader?: string,
	c_brandsAndPartnersLogos?: C_brandsAndPartnersLogos[],
	c_businessNameField?: string,
	c_businessUnit?: C_businessUnit,
	c_cALicenseNumber?: string,
	c_cignaLogo?: Image,
	c_agentTitle2Clearing?: string,
	c_colonialPennLogo?: Image,
	c_contractDate?: string,
	c_coreCTAText?: string,
	c_coreDescription?: string,
	c_createdAt?: string,
	c_customReviewFormPageURL?: string,
	c_directDialPhoneNumber?: number,
	c_emailRating?: number,
	c_eTLAFSpecialties?: boolean,
	c_eTLAFSpecialtiesAutoAdd?: C_eTLAFSpecialtiesAutoAdd[],
	c_eTLSentPhoto?: boolean,
	c_exemptFromAgentETL?: boolean,
	c_exemptFromETL?: boolean,
	c_exploreMedicareAdvantage?: C_exploreMedicareAdvantage,
	c_exploreMedicareAdvantageOverride?: boolean,
	c_fAQAnswer4?: string,
	c_fAQAnswer5?: string,
	c_fAQAnswer6?: string,
	c_fAQAnswer7?: string,
	c_fAQAnswer8?: string,
	c_fAQQuestion4?: string,
	c_fAQQuestion5?: string,
	c_fAQQuestion6?: string,
	c_fAQQuestion7?: string,
	c_fAQQuestion8?: string,
	c_featuredAgentsSectionCTALabel?: string,
	c_featuredAgentsSectionTitle?: string,
	c_featuredEvent?: C_featuredEvent,
	c_featuredFinancialProducts?: ComplexImage[],
	c_featuredFinancialProductsCTA?: C_featuredFinancialProductsCTA,
	c_featuredFinancialProductsCTAURL?: string,
	c_featuredInsuranceProducts?: ComplexImage[],
	c_featuredInsuranceProductsCTA?: C_featuredInsuranceProductsCTA,
	c_featuredInsuranceProductsCTAURL?: string,
	c_featuredInsuranceProductsDisclaimer?: string,
	c_featuredProductsCTAText?: string,
	c_featuredProductsCTAURL?: string,
	c_featuredTeamMembers?: C_featuredTeamMembers[],
	c_featuredTeamMembersSectionHeading?: string,
	c_financialRepresentative?: boolean,
	c_financialSolutions?: ComplexImage,
	c_fLLicenseNumber?: string,
	c_footerDisclosure?: string,
	c_forgetMeNotDayBSOURL?: string,
	c_formEmail?: string,
	c_formEmails?: string[],
	c_geomodifier?: string,
	c_gMBTrackingTag?: string,
	c_gs_certs?: string[],
	c_gs_community?: string[],
	c_gs_gender?: C_gs_gender[],
	c_gs_hobbies?: string[],
	c_gs_q1_composite?: C_gs_q1_composite[],
	c_gs_q2_composite?: C_gs_q2_composite[],
	c_gs_q3_composite?: C_gs_q3_composite[],
	c_gs_q4_b_composite?: C_gs_q4_b_composite[],
	c_gs_q4_c_composite?: C_gs_q4_c_composite[],
	c_gs_q5_composite?: C_gs_q5_composite[],
	c_gs_recs_certs?: string[],
	c_guidedAgentSearch?: boolean,
	c_hawaiiAgent?: boolean,
	c_healthcarePartnerLogos?: C_healthcarePartnerLogos[],
	c_heroImage?: ComplexImage,
	c_humanaLogo?: Image,
	c_investmentAdvisor?: boolean,
	c_joinOurTeamSection?: C_joinOurTeamSection,
	c_caStateLicensedNumber?: string,
	c_californiaStateLicenseNumber?: string,
	c_licensedToSellFinancialProducts?: C_licensedToSellFinancialProducts[],
	c_linkedPricingAndTerms?: string,
	c_livingInsuranceHTML1?: string[],
	c_livingInsuranceHTML2?: string[],
	c_livingInsuranceHTML3?: string[],
	c_locationPageMetaDescription?: string,
	c_locationPageMetaTitle?: string,
	c_locationPhoto2?: ComplexImage,
	c_locatorZipCodes?: string[],
	c_mHPFeaturedAgent?: boolean,
	c_nMLicenseNumber?: string,
	c_openingCareerVideo?: Video,
	c_openingRecruitmentVideo?: string,
	c_outlookBookingURL?: string,
	c_pagesAgentAboutSectionDescription?: string,
	c_pagesAgentAboutSectionLink?: string,
	c_pagesAgentAboutSectionLinkText?: string,
	c_pagesAgentAboutSectionPhoto?: ComplexImage,
	c_pagesAgentAboutSectionTitle?: string,
	c_pagesAgentBankersLifeDesignations?: string,
	c_pagesAgentBusinessPhilosophy?: string,
	c_pagesAgentCommunityInvolvement?: string,
	c_pagesAgentCoursework?: string,
	c_pagesAgentCTA1Text?: string,
	c_pagesAgentCTA1URL?: string,
	c_pagesAgentCTA2Text?: string,
	c_pagesAgentCTA2URL?: string,
	c_pagesAgentEducation?: string,
	c_pagesAgentEventSectionTitle?: string,
	c_pagesAgentFADesignations?: string,
	c_pagesAgentFAPhilosophy?: string,
	c_pagesAgentHeadshot?: ComplexImage,
	c_pagesAgentInformationSectionHeader?: string,
	c_pagesAgentInsuranceDesignations?: string,
	c_pagesAgentLanguages?: string,
	c_pagesAgentLinkedIn?: string,
	c_pagesAgentMilitaryServices?: string,
	c_pagesAgentOtherLocations?: EntityReference[],
	c_pagesAgentPreviousWorkExperience?: string,
	c_pagesAgentProducts1Disclosures?: string,
	c_pagesAgentProducts1Header?: string,
	c_pagesAgentProducts2Disclosures?: string,
	c_pagesAgentProducts2Header?: string,
	c_pagesAgentQuoteCTAText?: string,
	c_pagesAgentQuoteCTAUrl?: string,
	c_pagesAgentQuoteDisclaimerText?: string,
	c_pagesAgentQuoteFormPhoneText?: string,
	c_pagesAgentQuoteFormTitle?: string,
	c_pagesAgentResidence?: string,
	c_pagesAgentStatesLicensed?: string,
	c_pagesAgentStatesLicensedMulti?: string,
	c_pagesAgentTitle?: string,
	c_pagesAgentTitle1?: string,
	c_pagesAgentTitle1Company?: string,
	c_pagesAgentTitle2?: string,
	c_pagesAgentTitle3?: string,
	c_pagesAgentYearFA?: string,
	c_pagesAgentYearInsuranceAgent?: string,
	c_pagesAgentYearJoined?: string,
	c_pagesFAOrIARDesignation?: string,
	c_pagesHearsay?: boolean,
	c_pagesHearsayWorkspaceIDGroupID?: string,
	c_pagesNotificationBanner?: string,
	c_pagesVideoSection?: ComplexVideo[],
	c_pagesURL?: string,
	c_phoneNumberExtension?: string,
	c_pMAAgentType?: C_pMAAgentType,
	c_primaryCTA?: C_primaryCTA,
	c_professionalHeadshot?: Image,
	c_profileType?: C_profileType[],
	c_recognitionBanner?: ComplexImage,
	c_recognitionDate?: string,
	c_recognitionText?: string,
	c_referralFormPageURL?: string,
	c_referralProgram?: boolean,
	c_reportingOffice?: string,
	c_retirementPlanningLinks?: ComplexImage[],
	c_retirementPlanningSubheading?: string,
	c_retirementPlanningTitle?: string,
	c_reviewsCTA?: string,
	c_secondaryCTA?: C_secondaryCTA,
	c_secondaryFeaturedEvent?: C_secondaryFeaturedEvent,
	c_serviceAreaCityCombined?: string,
	c_serviceAreaStateCombined?: string,
	c_showFeaturedAgentsSection?: boolean,
	c_siteURL?: string,
	c_spanishDuplicate?: C_spanishDuplicate,
	c_spanishPageEnabled?: boolean,
	c_staging?: boolean,
	c_stateLicensing0?: string,
	c_subEventSectionTitle?: string,
	c_subEvents?: C_subEvents[],
	c_territory?: string,
	c_territoryZipcodes?: string[],
	c_title2?: string,
	c_topAwardWinner?: boolean,
	c_tWFA?: boolean,
	c_unitedHealthcareLogo?: Image,
	c_virtualRating?: number,
	c_virtualStateLicenses?: string[],
	c_wACaresEvent?: C_wACaresEvent,
	firstPartyReviewPage?: any,
	reviewGenerationUrl?: any,
	defaultReviewInviteTemplate?: any,
	displayCoordinate?: Coordinate,
	dropoffCoordinate?: Coordinate,
	bios?: Bios,
	calendars?: Calendars,
	productLists?: ProductLists,
	emails?: string[],
	facebookOverrideCity?: string,
	facebookCoverPhoto?: Image,
	facebookCallToAction?: FacebookCallToAction,
	facebookDescriptor?: string,
	facebookEmail?: string,
	facebookLinkedAccount?: any,
	facebookName?: string,
	facebookPageUrl?: string,
	facebookParentPageId?: string,
	facebookProfilePhoto?: Image,
	facebookStoreId?: string,
	facebookVanityUrl?: string,
	fax?: any,
	featuredMessage?: FeaturedMessage,
	photoGallery?: ComplexImage[],
	geocodedCoordinate?: Coordinate,
	gmbLinkedAccount?: any,
	googleAccountId?: string,
	googleAttributes?: any,
	googleCoverPhoto?: Image,
	googleProfilePhoto?: Image,
	googleWebsiteOverride?: string,
	instagramHandle?: string,
	iosAppUrl?: string,
	isoRegionCode?: string,
	keywords?: string[],
	languages?: string[],
	localPhone?: any,
	locationType?: LocationType,
	mainPhone?: any,
	menuUrl?: MenuUrl,
	mobilePhone?: any,
	orderUrl?: OrderUrl,
	paymentOptions?: PaymentOptions[],
	phones?: any,
	pickupCoordinate?: Coordinate,
	priceRange?: PriceRange,
	products?: string[],
	alternateNames?: string[],
	alternateWebsites?: string[],
	rankTrackingCompetitors?: RankTrackingCompetitors[],
	customKeywords?: string[],
	rankTrackingEnabled?: boolean,
	rankTrackingFrequency?: RankTrackingFrequency,
	rankTrackingKeywords?: RankTrackingKeywords[],
	rankTrackingQueryTemplates?: RankTrackingQueryTemplates[],
	rankTrackingSites?: RankTrackingSites[],
	reservationUrl?: ReservationUrl,
	routableCoordinate?: Coordinate,
	serviceArea?: ServiceArea,
	services?: string[],
	shortName35?: string,
	shortName64?: string,
	specialities?: string[],
	id: string,
	timezone?: any,
	tollFreePhone?: any,
	ttyPhone?: any,
	twitterHandle?: string,
	uberClientId?: string,
	uberLink?: UberLink,
	uberTripBranding?: UberTripBranding,
	walkableCoordinate?: Coordinate,
	websiteUrl?: WebsiteUrl,
	yearEstablished?: number,
	yextDisplayCoordinate?: Coordinate,
	yextDropoffCoordinate?: Coordinate,
	yextPickupCoordinate?: Coordinate,
	yextRoutableCoordinate?: Coordinate,
	yextWalkableCoordinate?: Coordinate,
	videos?: ComplexVideo[],
}
