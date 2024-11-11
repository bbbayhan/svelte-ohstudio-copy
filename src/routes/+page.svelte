<script lang="ts">
	import Home from '../components/home.svelte';
	import Tabs from '../components/tabs.svelte';

	let selectedTab = $state('0');
	function selectTab(id: string) {
		selectedTab = id;
		return;
	}
</script>

<div class="flex flex-col items-center">
	<Tabs {selectedTab} {selectTab} />
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
