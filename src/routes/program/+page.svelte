<script lang="ts">
	import Keynotes from '$lib/components/Keynotes.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Symposia from '$lib/components/Symposia.svelte';
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
</script>
<div class="container h-full mx-auto flex justify-center">
	<div
		class="space-y-10 text-center flex flex-col items-center mt-12 w-full sm:w-5/6 md:w-4/5 lg:w-3/4 mx-4"
	>
		<h2
			class=" md:text-4xl lg:text-5xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider"
		>
			Program details
		</h2>
		<div class="flex w-full flex-row-reverse justify-center gap-24 mr-4">
			<aside class="hidden xl:block xl:w-80 text-left">
				<TableOfContents class="sticky top-12">On the Page</TableOfContents>
			</aside>
			<div
				class="w-full overflow-hidden text-token grid grid-cols-1"
				use:tocCrawler={{ scrollTarget: '#page' }}
			>
				<Schedule />
				<Keynotes />
				<Symposia />
			</div>
		</div>
	</div>
</div>