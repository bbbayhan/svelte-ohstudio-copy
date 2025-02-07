import { Company } from '../domain/company';
import type { CompanyRepository } from './company.repository';

export class CompanyFakeRepository implements CompanyRepository {
	async getAllCompanyInfo(): Promise<Company[]> {
		return [
			Company.create({
				name: 'Apiumhub',
				location: 'Barcelona',
				date: 'MARCH 2021 - PRESENT',
				iconUrl: './apium_hub_logo.webp',
				experiences: [
					'Created projects from scratch for Nestle’s supplier platform to enable suppliers to track and reduce greenhouse gas emissions based on their material origin.',
					'Enhanced design consistency and component reliability by developing and documenting UI components with Storybook, applying Atomic Design principles for scalable design.',
					'Reduced production bugs by increasing test coverage through unit, and E2E testing with Vitest, Testing Library, and Cypress.',
					'Enhanced code stability by updating project libraries and minimizing deprecated code.'
				]
			}),
			Company.create({
				name: 'Badi',
				location: 'Barcelona',
				date: 'NOV 2020 - FEB 2021',
				iconUrl: './badi_logo.webp',
				experiences: [
					'Increased testing coverage and reliability through the unit and E2E testing with Jest and Cypress.',
					'Enhanced design consistency and component reliability by developing and documenting UI components with Storybook, applying Atomic Design principles for scalable design.'
				]
			}),
			Company.create({
				name: 'CoverWallet',
				location: 'Valencia',
				date: 'JULY 2019 - SEP 2020',
				iconUrl: './coverwallet_logo.webp',
				experiences: [
					'Collaborated with an international team to develop Zurich Insurance’s platform, serving Spanish and Swiss markets, one of the industry’s largest companies.',
					'Developed UI components with ReactJS and Redux and integrated with Node.js backend.',
					'Increased test coverage with Jest, writing unit, and integration tests to maintain code reliability.'
				]
			})
		];
	}
}
