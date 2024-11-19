<script>
	import CompanyInfo from './companyInfo.svelte';
</script>

<section id="education" class="mx-72 my-16 flex flex-col gap-4 px-48">
	<h2 class="mx-72 mb-8 text-center text-5xl">Education</h2>
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
