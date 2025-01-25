import { Company } from '../../domain/company';

export class CompanyMother {
	static create(): Company {
		return Company.create({
			name: 'Apiumhub',
			location: 'Barcelona',
			date: 'MARCH 2021 - PRESENT',
			iconUrl: './apium_hub_logo.webp',
			experiences: []
		});
	}
}
