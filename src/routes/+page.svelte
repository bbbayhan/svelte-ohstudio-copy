<script lang="ts">
	import CategoryTabs from '../components/categoryTabs.svelte';
	import Footer from '../components/footer.svelte';
	import Profile from '../components/profile.svelte';
</script>

<header class="flex justify-center">
	<CategoryTabs />
</header>
<main class="flex flex-col items-center">
	<div class="mt-48">
		<Profile />
	</div>
</main>
<Footer />
