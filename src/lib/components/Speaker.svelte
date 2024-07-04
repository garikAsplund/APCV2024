<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	interface Speaker {
		slot: number;
		time: string;
		name: string;
		affiliation: string;
		school: string;
		title: string;
		abstract: string;
		bio: string;
		moderator: string;
		photo: string;
		link: string;
	}

	export let speaker: Speaker;
</script>

<!-- <header
	class="flex w-full justify-between items-baseline mt-24 h-24 mb-12"
>
	<h2 class="h2 scroll-mt-24" id="Keynote {speaker.slot}">{'Keynote ' + speaker.slot}</h2>
	<h4 class="h4" data-toc-ignore>{speaker.time}</h4>
</header> -->

<div class="space-y-48">
	<div class="flex flex-col-reverse lg:flex-row lg:justify-between">
		<a href={speaker.link} target="_blank"
			><div class="py-4 space-y-4 flex flex-col text-left">
				<div class="flex flex-col">
					<h3 class="h3 scroll-mt-5" id={speaker.name}>{speaker.name}</h3>
				</div>
				<div>
					<!-- <h1 class="h3">{speaker.name}</h1> -->
					<h5 class="h5 text-surface-600-300-token opacity-80" data-toc-ignore>
						{speaker.school}
					</h5>
					<h5 class="h6 text-surface-600-300-token opacity-50" data-toc-ignore>
						{speaker.affiliation}
					</h5>
				</div>
				<div>
					<!-- <h1 class="h3">{speaker.name}</h1> -->
					<p class=" text-surface-600-300-token opacity-80 italic" data-toc-ignore>
						{speaker.title}
					</p>
				</div>
				{#if speaker.name === 'Jeremy Wolfe'}
				<p class="text-surface-600-300-token opacity-80">Professor Wolfe is also giving a public lecture. <a href="https://www.yale-nus.edu.sg/events/the-gist-of-cancer-and-other-adventures-in-use-inspired-basic-research/" class="underline hover:no-underline">Learn more here.</a>
</p>
				{/if}
			</div></a
		>
		<!-- <picture class=""> -->
		<enhanced:img
			src={speaker.photo}
			class="overflow-hidden object-top object-cover"
			style:width="200px"
			style:height="auto"
			alt={`Keynote speaker ${speaker.name}`}
		/>
		<!-- </picture> -->
	</div>
</div>

<div class="my-4 space-y-36">
	<Accordion>
		<AccordionItem>
			<svelte:fragment slot="lead"
				><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
					<path fill="currentColor" d="M 28.90625 1.96875 C 28.863281 1.976563 28.820313 1.988281 28.78125 2 L 11.5 2 C 9.585938 2 8 3.558594 8 5.46875 L 8 43.90625 C 8 46.160156 9.867188 48 12.125 48 L 37.875 48 C 40.132813 48 42 46.160156 42 43.90625 L 42 15.1875 C 42.027344 15.054688 42.027344 14.914063 42 14.78125 L 42 14.5 C 42.007813 14.234375 41.90625 13.972656 41.71875 13.78125 L 30.21875 2.28125 C 30.027344 2.09375 29.765625 1.992188 29.5 2 L 29.1875 2 C 29.097656 1.976563 29 1.964844 28.90625 1.96875 Z M 11.5 4 L 28 4 L 28 12.34375 C 28 14.355469 29.644531 16 31.65625 16 L 40 16 L 40 43.90625 C 40 45.074219 39.054688 46 37.875 46 L 12.125 46 C 10.945313 46 10 45.074219 10 43.90625 L 10 5.46875 C 10 4.644531 10.660156 4 11.5 4 Z M 30 4.9375 L 39.0625 14 L 31.65625 14 C 30.722656 14 30 13.277344 30 12.34375 Z M 17 24 L 17 26 L 33 26 L 33 24 Z M 17 28 L 17 30 L 33 30 L 33 28 Z M 17 32 L 17 34 L 33 34 L 33 32 Z M 17 36 L 17 38 L 26 38 L 26 36 Z"></path>
					</svg>
			</svelte:fragment>
			<svelte:fragment slot="summary"><h6 class="h6 text-surface-600-300-token justify-start" data-toc-ignore>Abstract</h6></svelte:fragment>
			<svelte:fragment slot="content">
				<div in:fly={{ duration: 500, y: -50 }}>
					<article class="text-left">
						<!-- <h3 class="h3 mb-2 scroll-mt-[100px]" id="Abstract {speaker.slot}">Abstract</h3> -->
						<p class="text-surface-500-400-token lg:leading text-justify">
							{@html speaker.abstract}
						</p>
					</article>
				</div>
			</svelte:fragment>
		</AccordionItem>

		<AccordionItem>
			<svelte:fragment slot="lead"
				><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
					<path fill="currentColor" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
					</svg>
			</svelte:fragment>
			<svelte:fragment slot="summary"><h6 class="h6 text-surface-600-300-token" data-toc-ignore>Bio</h6></svelte:fragment>
			<svelte:fragment slot="content">
				<div in:fly={{ duration: 500, y: -50 }}>
					<article class="text-left">
						<!-- <h3 class="h3 mb-2 scroll-mt-[100px]" id="Bio {speaker.slot}">Bio</h3> -->
						<p class="text-surface-500-400-token lg:leading text-justify">
							<!-- {speaker.bio} -->
							{@html speaker.bio}
						</p>
					</article>
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
<hr class="opacity-50 pb-48" />
<!-- <footer class="p-4 flex justify-start items-center space-x-4 mb-48">
	<div class="flex-auto flex justify-between items-center">
		<p class="opacity-40" data-toc-ignore>Moderated by {speaker.moderator}</p>
	</div>
</footer> -->
