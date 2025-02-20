<script lang="ts">
	import N1 from './N1.svelte';
	import NUS from './NUS.svelte';
	import YaleNUS from './YaleNUS.svelte';
	import NTU from './NTU.svelte';
	import ASTAR from './ASTAR.svelte';
	import LeeFoundation from './LeeFoundation.svelte';
</script>

<div class="w-full flex flex-col mx-auto text-center px-4 md:px-0 justify-center">
	<!-- First Section -->
	<div class="py-12 md:py-24 w-full flex flex-col items-center">
		<div class="mb-24 lg:mb-8 md:w-2/3">
			<h2 class="h2 mb-4">Thank you to our hosting institutions</h2>
			<hr class="h-0.5 bg-surface-800-100-token" />
		</div>
		<div class="flex flex-col lg:flex-row w-full lg:justify-center items-center gap-16 xl:gap-36">
			<a href="https://www.yale-nus.edu.sg/" aria-label="Link to Yale NUS College"><YaleNUS /></a>
			<a href="https://nus.edu.sg/" aria-label="Link to National University of Singapore">
				<NUS />
			</a>
			<a href="https://n1labs.org/" aria-label="Link to N One Institute for Health"><N1 /></a>
		</div>
	</div>

	<!-- Second Section -->
	<div class="py-12 md:py-24 w-full flex flex-col items-center">
		<div class="mb-24 lg:mb-8 md:w-2/3">
			<h2 class="h2 mb-4">Additional thanks to our academic sponsors</h2>
			<hr class="h-0.5 bg-surface-800-100-token" />
		</div>
		<div
			class="flex flex-col lg:flex-row w-full lg:justify-center items-center gap-16 xl:gap-36"
		>
			<a
				href="https://www.ntu.edu.sg/"
				aria-label="Link to Nanyang Technological University"
				class=""><NTU /></a
			>
			<div class="w-64 h-30 flex-shrink-0">
				<!-- Fixed container for ASTAR -->
				<a href="https://www.a-star.edu.sg/" aria-label="Link to A STAR" class="block h-full mb-8">
					<ASTAR />
				</a>
			</div>
			<LeeFoundation />
		</div>
	</div>
</div>
