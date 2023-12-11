<script lang="ts">
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Welcome from '$lib/components/Welcome.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Committees from '$lib/components/Committees.svelte';
</script>

<Hero />

<div class="flex flex-col justify-center items-center space-y-12">
	<Welcome />
	<Sponsors />
	<!-- <Committees /> -->
</div>
