<script>
	import CompanyInfo from './companyInfo.svelte';
	import Experience from './experience.svelte';
</script>

<section class="home_title">
	<h1 class="mx-72 text-center text-7xl">Hey 👋🏼 I'm Beste</h1>
</section>
<section class="mx-12 my-32 grid grid-cols-2 gap-4">
	<img class="profile h-96 w-full rounded-xl object-cover" alt="coffee" src="./img1.jpg" />
	<img class="profile h-96 w-full rounded-xl object-cover" alt="flower" src="./img2.jpg" />
</section>
<section class="mx-12 my-16 flex flex-col gap-4">
	<h2 class="mx-72 mb-8 text-center text-5xl">About</h2>
	<p class="mx-72 text-center text-2xl font-light">
		Frontend developer with over 5 years of experience. Passionate about writing articles,
		participating in hackathons and conferences, and continuous learning.
	</p>
</section>
<Experience />

<section class="mx-72 my-16 flex flex-col gap-4">
	<h2 class="mx-72 mb-8 text-center text-5xl">Education</h2>
	<CompanyInfo
		name="Istanbul Technical University"
		location=", Turkey / Bachelor's Degree Computer Science"
		date="2012-2018"
		iconUrl="./apium_hub_logo.webp"
	/>
	<CompanyInfo
		name="Universitat Politècnica de València "
		location=", Spain / Master's Degree Visual Arts and Multimedia"
		date="2018-2021"
		iconUrl="./apium_hub_logo.webp"
	/>
</section>

<section class="mx-72 my-16 flex flex-col gap-4">
	<h2 class="mx-36 mb-8 text-center text-5xl">Projects and Articles</h2>
	<CompanyInfo
		name="Istanbul Technical University"
		location=", Turkey / Bachelor's Degree Computer Science"
		date="2012-2018"
		iconUrl="./apium_hub_logo.webp"
	/>
</section>
