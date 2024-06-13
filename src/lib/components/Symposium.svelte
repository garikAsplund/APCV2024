<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import type { Symposiums } from '$lib/types';
	import { fly } from 'svelte/transition';

	export let symposium: Symposiums;
</script>

	<!-- <div class=" overflow-hidden text-left w-full">
				<div class="flex flex-col items-baseline space-y-3">
					<h3 class="h3" id={symposium.number}>{symposium.title}</h3>
					<div>
					<h4 class="h4" data-toc-ignore>Abstract:</h4>
					<p class="text-token mx-2">{symposium.abstract}</p>
				</div>
					<div class="">
						<h4 class="h4 mb-3" data-toc-ignore>Organizers:</h4>
						{#each symposium.organizers as organizer}
							<h5 class="h5 mx-2 text-surface-600-300-token opacity-80" data-toc-ignore>{organizer}</h5>
						{/each}
					</div>
				</div>
				<hr class="opacity-50" />
				<div>
					<h4 class="h4 mb-3" data-toc-ignore>Speakers:</h4>
					{#each symposium.speakers as speaker}
						<h5 class="h5 mx-2 text-surface-600-300-token opacity-80" data-toc-ignore>{speaker}</h5>
					{/each}
				</div>
				<hr class="opacity-50" />
				
	</div>
	<hr class="opacity-50 pb-48" /> -->

	<div class="space-y-48">
		<div class="flex flex-col-reverse lg:flex-row lg:justify-between">
			<div class="py-4 space-y-4 flex flex-col text-left">
					<div class="flex flex-col">
						<h3 class="h3 scroll-mt-5" id={symposium.title}>{symposium.title}</h3>
					</div>
					<div>
						<!-- <h1 class="h3">{speaker.name}</h1> -->
						{#each symposium.organizers as organizer}
						<h5 class="h5 text-surface-600-300-token opacity-80" data-toc-ignore>
							{organizer}
						</h5>
						{/each}
						{#each symposium.speakers as speaker}
						<h5 class="h6 text-surface-600-300-token opacity-50" data-toc-ignore>
							{speaker}
						</h5>
						{/each}
					</div>
					<p class="text-surface-500-400-token lg:leading text-justify">{symposium.abstract}</p>

				</div>
		</div>
	</div>
	<hr class="opacity-50 pb-48" />



		<!-- <Accordion>
			<AccordionItem>
				<svelte:fragment slot="lead"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6m4 16H5V5h9v5h5m-2 4H7v-2h10m-3 5H7v-2h7"
						/></svg
					>
				</svelte:fragment>
				<svelte:fragment slot="summary"><h4 class="h4" data-toc-ignore>Abstracts</h4></svelte:fragment>
				<svelte:fragment slot="content">
					<div in:fly={{ duration: 200, y: -20 }}>
						{#each symposium.abstracts as abstract}
							<article class="text-left space-y-2 mb-12">
								<h3 class="h3" data-toc-ignore>{abstract.title}</h3>
								<h5 class="h5 mx-2 text-surface-600-300-token" data-toc-ignore>{abstract.authors}</h5>
								<h6 class="h6 mx-2 text-surface-600-300-token" data-toc-ignore>{abstract.affiliation}</h6>
								<p class=" mx-4 text-token leading-loose">
									{abstract.abstract}
								</p>
							</article>
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion> -->


<!-- <div class="space-y-48">
	<div class="flex flex-col-reverse lg:flex-row lg:justify-between">
		<a href={symposium.title} target="_blank"
			><div class="py-4 space-y-4 flex flex-col text-left">
				<div class="flex flex-col">
					<h3 class="h3 scroll-mt-5" id={symposium.number}>{symposium.title}</h3>
				</div>
				<div>
					<h5 class="h5 text-surface-600-300-token opacity-80" data-toc-ignore>
						{speaker.school}
					</h5>
					<h5 class="h6 text-surface-600-300-token opacity-50" data-toc-ignore>
						{speaker.affiliation}
					</h5>
				</div>
			</div>
	</div>
</div>

<div class="mt-12 mb-6 space-y-36">
	<article class="text-left">
		<p class="text-surface-500-400-token lg:leading text-justify">
			{@html speaker.bio}
		</p>
	</article>
</div>
<hr class="opacity-50 pb-48" /> -->