import { Company } from '../domain/company';
import { CompanyMother } from './objectMothers/company';

describe('Company', () => {
	it('should create a Company instance correctly', () => {
		const company = CompanyMother.create();

		expect(company).toBeInstanceOf(Company);
		// expect(company.name).toBe('Apiumhub');
		// expect(company.location).toBe('Barcelona');
		// expect(company.date).toBe('MARCH 2021 - PRESENT');
		// expect(company.iconUrl).toBe('./apium_hub_logo.webp');
		// expect(company.experiences).toBe([]);
	});
});
