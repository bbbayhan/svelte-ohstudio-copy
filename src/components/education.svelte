<script>
	import CompanyInfo from './companyInfo.svelte';
</script>

<section id="education" class="mx-auto my-16 flex flex-col gap-4 md:px-48">
	<h2 class="text-center text-sm font-bold md:text-5xl md:font-normal">Education</h2>
	<CompanyInfo
		name="Universitat Politècnica de València "
		location=", Spain / Master's Degree Visual Arts and Multimedia"
		date="2018-2021"
		iconUrl="./upv_logo.webp"
	/>
	<CompanyInfo
		name="Istanbul Technical University"
		location=", Turkey / Bachelor's Degree Computer Science"
		date="2012-2018"
		iconUrl="./itu_logo.webp"
	/>
</section>
