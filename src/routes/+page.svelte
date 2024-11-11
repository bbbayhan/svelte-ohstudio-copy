<script lang="ts">
	import Home from '../components/home.svelte';

	let selectedTab = $state('0');
	function selectTab(id: string) {
		selectedTab = id;
		return;
	}
</script>

<div class="flex flex-col items-center">
	<div class="mt-8 flex justify-around rounded-full bg-gray-200 px-1 py-1">
		<button
			class={`px-8 py-4 ${selectedTab === '0' ? 'bg-white' : ''} rounded-full`}
			onclick={() => selectTab('0')}>Home</button
		>
		<button
			class={`px-8 py-4 ${selectedTab === '1' ? 'bg-white' : ''} rounded-full`}
			onclick={() => selectTab('1')}>Profile</button
		>
		<button
			class={`px-8 py-4 ${selectedTab === '2' ? 'bg-white' : ''} rounded-full`}
			onclick={() => selectTab('2')}>Contact</button
		>
	</div>

	<div class="mt-16">
		{#if selectedTab === '0'}
			<Home />
		{/if}
		{#if selectedTab === '1'}
			<div>ProfileContent</div>{/if}
		{#if selectedTab === '2'}
			<div>ContactContent</div>{/if}
	</div>
</div>
