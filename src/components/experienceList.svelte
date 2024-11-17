<script>
	export let items = [];
</script>

<ul class="mx-4 my-6 list-inside list-disc space-y-2">
	{#each items as item}
		<li class="text-md font-light">{item}</li>
	{/each}
</ul>
