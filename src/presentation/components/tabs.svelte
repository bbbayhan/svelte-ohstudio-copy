<script lang="ts">
	export let selectedTab: string;
	export let selectTab: (id: string) => void;
</script>

<div class="fixed z-10 mt-8 flex justify-around rounded-full bg-gray-200 px-1 py-1">
	<button
		class={`px-8 py-4 ${selectedTab === '0' ? 'bg-white' : ''} rounded-full`}
		on:click={() => selectTab('0')}>Profile</button
	>
</div>
