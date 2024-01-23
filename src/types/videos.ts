export interface ComplexVideo {
	url: string,
	video?: string,
	description?: string,
}

export default interface Ce_video {
	name: string,
	id: string,
	videos?: ComplexVideo[],
}
