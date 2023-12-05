<script lang="ts">
	const sections: string[] = [
		'Schedule',
		'Keynotes',
		'Symposia',
		'Talks and Posters',
	];
</script>

<div class="container mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center mt-12">
		<h2
			class=" md:text-6xl lg:text-8xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider"
		>
			Program
		</h2>

		<div class="space-y-6 text-xl">
			<p><code class="code md:text-xl text-lg">Check back soon for more details</code></p>
			<hr />
			{#each sections as section}
				<h2 class="h2">{section}</h2>
				<p>Lorem ipsum.</p>
				<hr />
			{/each}
		</div>
	</div>
</div>
