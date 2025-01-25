<script>
	import { onMount } from 'svelte';
	import { DI } from '../../di';
	import CompanyInfo from './companyInfo.svelte';

	let companyInfo = [];

	onMount(async () => {
		companyInfo = await DI.companyService.getAllCompanyInfo();
	});
</script>

<section id="experience" class="mx-auto my-16 flex flex-col gap-4 md:px-48">
	<h2 class="mb-8 text-center text-sm font-bold md:text-5xl md:font-normal">Experience</h2>
	{#each companyInfo as info}
		<CompanyInfo
			name={info.name}
			location={info.location}
			date={info.date}
			iconUrl={info.iconUrl}
			experiences={info.experiences}
		/>
	{/each}
</section>
