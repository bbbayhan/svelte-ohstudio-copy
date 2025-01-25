import { CompanyFakeRepository } from './infrastructure/company.fakeRepository';
import { CompanyService } from './service/company.service';

export const DI = {
	companyService: new CompanyService(new CompanyFakeRepository())
};
