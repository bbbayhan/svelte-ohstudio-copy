<script>
	import {
		experiencesApium,
		experiencesBadi,
		experiencesCoverWallet
	} from '../content/experiences';

	import CompanyInfo from './companyInfo.svelte';
	import ExperienceList from './experienceList.svelte';
</script>

<section class="mx-72 my-16 flex flex-col gap-4">
	<h2 class="mx-72 mb-8 text-center text-5xl">Experience</h2>
	<CompanyInfo
		name="Apiumhub"
		location=", Barcelona"
		date="MARCH 2021 - PRESENT"
		iconUrl="./apium_hub_logo.webp"
	/>
	<ExperienceList items={experiencesApium} />
	<CompanyInfo
		name="Badi"
		location=", Barcelona"
		date="NOV 2020 - FEB 2021"
		iconUrl="./badi_logo.webp"
	/>
	<ExperienceList items={experiencesBadi} />
	<CompanyInfo
		name="CoverWallet"
		location=", Valencia"
		date="JULY 2019 - SEP 2020"
		iconUrl="./coverwallet_logo.webp"
	/>
	<ExperienceList items={experiencesCoverWallet} />
</section>
