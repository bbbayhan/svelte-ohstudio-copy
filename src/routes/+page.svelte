<script lang="ts">
	import CategoryTabs from '../presentation/components/categoryTabs.svelte';
	import Footer from '../presentation/components/footer.svelte';
	import Profile from '../presentation/components/profile.svelte';
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
