<script>
	export let name = '';
	export let date = '';
	export let location = '';
	export let iconUrl = '';
</script>

<div class="flex justify-between">
	<div class="flex items-center">
		<img class="icon" alt="company-logo" src={iconUrl} />
		<strong class="ml-2">{name}</strong><span>{location}</span>
	</div>
	<span class="font-light text-gray-400">{date}</span>
</div>
