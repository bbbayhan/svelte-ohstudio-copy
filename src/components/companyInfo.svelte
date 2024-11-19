<script>
	export let name,
		date,
		location,
		iconUrl = '';
</script>

<div class="flex items-center justify-between">
	<div class="flex items-center">
		<img class="h-10 w-10" alt="company-logo" src={iconUrl} />
		<strong class="ml-2">{name}</strong><span>{location}</span>
	</div>
	<span class="font-light text-gray-400">{date}</span>
</div>
