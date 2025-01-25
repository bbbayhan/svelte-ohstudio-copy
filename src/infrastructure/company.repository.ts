import type { Company } from '../domain/company';

export abstract class CompanyRepository {
	abstract getAllCompanyInfo(): Promise<Company[]>;
}
