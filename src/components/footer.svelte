<script>
	import { copyToClipboard } from '../utils';
</script>

<footer class="mb-4 mt-auto flex justify-between px-8 md:mb-8">
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
		<button class="underline hover:text-gray-400" on:click={copyToClipboard}>Mail</button>
		<span id="copyMessage" class="copy_message">Email copied to clipboard!</span>
	</nav>
</footer>
