<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import type { Symposiums } from '$lib/types';
	import { fly } from 'svelte/transition';

	export let symposium: Symposiums;
</script>

<div class="space-y-48">
	<div class="flex flex-col-reverse lg:flex-row lg:justify-between">
		<div class="py-4 space-y-4 flex flex-col text-left">
			<div class="flex flex-col">
				<h3 class="h3 scroll-mt-5" id={symposium.title}>{symposium.title}</h3>
			</div>
			<div>
				<!-- <h1 class="h3">{speaker.name}</h1> -->
				{#each symposium.organizers as organizer}
					<p class="h5 text-surface-600-300-token opacity-80" data-toc-ignore>
						Organized by: <b>{organizer}</b>
					</p>
				{/each}
				<p class="text-surface-500-400-token lg:leading text-justify my-4">{symposium.abstract}</p>
				{#each symposium.speakers as speaker}
					<p class="h6 text-surface-600-300-token opacity-80" data-toc-ignore>
						<b>{speaker.speaker}</b>{@html speaker.authors}
					</p>					
					<p class=" text-surface-600-300-token opacity-70 ml-4 mb-2 italic" data-toc-ignore>{speaker.title}</p>
				{/each}
			</div>
		</div>
	</div>
</div>
<hr class="opacity-50 pb-48" />