<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { inview } from 'svelte-inview';
	import Venue from '$lib/components/Venue.svelte';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { time, title } from '$lib/stores';

	let isInView: boolean;

	const options: Options = {
		rootMargin: '-50%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		$title = detail.node.id;
		$time = detail.node.className;
		console.log({ $time });
	};
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-10 text-center flex flex-col items-center mt-12">
		<h2
			class=" md:text-4xl lg:text-5xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider"
		>
			Venue and transportation details
		</h2>
		<div class="flex w-5/6 flex-row-reverse justify-center gap-24 mr-4">
			<!-- <aside class="hidden lg:block w-48"> -->
				<!-- Table of Contents -->
				<!-- <TableOfContents class="sticky top-12">On the Page</TableOfContents> -->
			<!-- </aside> -->
			<div
				class="w-full overflow-hidden  text-token grid grid-cols-1"
				use:tocCrawler={{ scrollTarget: '#page' }}
			>
				<Venue />
			</div>
		</div>
		
	</div>
</div>

