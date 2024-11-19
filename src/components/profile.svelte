<script>
	import { copyToClipboard } from '../utils';
	import About from './about.svelte';
	import CategoryTabs from './categoryTabs.svelte';
	import Education from './education.svelte';
	import Experience from './experience.svelte';
</script>

<h1 class="home_title mx-72 text-center text-7xl">Hey 👋🏼 I'm Beste</h1>
<CategoryTabs />
<div class="navigationTabs mt-12 flex justify-center gap-4">
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
</div>

<About />
<Experience />
<Education />
