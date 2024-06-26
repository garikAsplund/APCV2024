<script lang="ts">
	import N1 from './N1.svelte';
	import NUS from './NUS.svelte';
	import YaleNUS from './YaleNUS.svelte';
</script>

<div class="w-2/3 text-center space-y-12 md:space-y-0 py-36">
	<div>
		<h2 class="h2 mb-4">Thank you to our hosting institutions</h2>
		<hr class="h-0.5 bg-surface-800-100-token" />
	</div>
	<div class="flex flex-col md:flex-row md:justify-around items-center ">
		<a href="https://www.yale-nus.edu.sg/" aria-label="Link to Yale NUS College"><YaleNUS /></a>
		<a href="https://nus.edu.sg/" aria-label="Link to National University of Singapore"><NUS /></a>
		<a href="https://n1labs.org/" aria-label="Link to N One Institute for Health"><N1 /></a>
	</div>
</div>
