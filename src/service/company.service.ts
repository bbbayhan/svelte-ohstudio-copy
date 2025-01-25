import type { Company } from '../domain/company';
import type { CompanyRepository } from '../infrastructure/company.repository';

export class CompanyService {
	constructor(private companyRepository: CompanyRepository) {}
	async getAllCompanyInfo(): Promise<Company[]> {
		return await this.companyRepository.getAllCompanyInfo();
	}
}
