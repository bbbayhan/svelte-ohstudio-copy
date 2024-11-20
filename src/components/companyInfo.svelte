<script>
	export let name,
		date,
		location,
		iconUrl = '';
</script>

<div
	class="flex flex-col items-center gap-4 text-sm md:flex-row md:items-center md:justify-between md:text-lg"
>
	<div class="flex items-center">
		<img class="h-4 w-4 md:h-10 md:w-10" alt="company-logo" src={iconUrl} />
		<strong class="ml-2">{name}</strong><span>{location}</span>
	</div>
	<span class="font-light text-gray-400">{date}</span>
</div>
