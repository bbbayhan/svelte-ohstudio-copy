export class Company {
	constructor(
		public name: string,
		public location: string,
		public date: string,
		public iconUrl: string,
		public experiences: string[]
	) {}

	static create(json: any): Company {
		return new Company(json.name, json.location, json.date, json.iconUrl, json.experiences);
	}
}
