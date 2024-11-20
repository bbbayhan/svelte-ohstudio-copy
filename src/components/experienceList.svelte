<script>
	export let items = [];
</script>

<ul class="mx-4 my-6 list-inside list-disc space-y-2">
	{#each items as item}
		<li class="text-sm font-light md:text-lg">{item}</li>
	{/each}
</ul>
