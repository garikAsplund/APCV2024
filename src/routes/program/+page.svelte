<script lang="ts">
	import Keynotes from "$lib/components/Keynotes.svelte";

</script>

<div class="container mx-auto flex lg:space-x-8">
	<div class="flex-1 mt-12">
		<div class="space-y-10 text-center">
			<h2
				class="md:text-4xl lg:text-5xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider"
			>
				Keynote speakers
			</h2>

			<div class="space-y-6 text-xl mx-6">
				<!-- <p class=" md:text-xl text-lg">Check back soon for more details.</p> -->
				<Keynotes />
			</div>
		</div>
	</div>
</div>
