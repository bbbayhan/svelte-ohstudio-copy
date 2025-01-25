import { CompanyService } from './application/company.service';
import { CompanyFakeRepository } from './infrastructure/company.fakeRepository';

export const DI = {
	companyService: new CompanyService(new CompanyFakeRepository())
};
