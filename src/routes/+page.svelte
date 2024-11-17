<script lang="ts">
	import Contact from '../components/contact.svelte';
	import Profile from '../components/profile.svelte';
	import Tabs from '../components/tabs.svelte';

	let selectedTab = $state('0');
	function selectTab(id: string) {
		selectedTab = id;
		return;
	}
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
<footer class="mb-8 flex justify-between px-8">
	© Oli Harris 2023
	<nav class="text-sm">
		<a class="underline hover:text-gray-400" href="https://github.com/bbbayhan" target="_blank"
			>Github</a
		>
		<a
			class="underline hover:text-gray-400"
			href="https://www.linkedin.com/in/beste-burcu-bayhan/"
			target="_blank">Linkedin</a
		>
		<a class="underline hover:text-gray-400" href="mailto:bestebbayhan@gmail.com">Mail</a>
	</nav>
</footer>
