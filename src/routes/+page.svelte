<script lang="ts">
	import Contact from '../components/contact.svelte';
	import Footer from '../components/footer.svelte';
	import Profile from '../components/profile.svelte';
	import Tabs from '../components/tabs.svelte';

	let selectedTab = $state('0');
	const selectTab = (id: string) => {
		selectedTab = id;
	};
</script>

<header class="flex justify-center">
	<Tabs {selectedTab} {selectTab} />
</header>
<main class="flex flex-col items-center">
	<div class="mt-48">
		{#if selectedTab === '0'}
			<Profile />{/if}
		{#if selectedTab === '1'}
			<Contact />{/if}
	</div>
</main>
<Footer />
