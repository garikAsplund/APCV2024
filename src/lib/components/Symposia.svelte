<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { fly } from 'svelte/transition';

	// Symposium 1-1
	// Physiological, psychological, and computational foundations of scene understanding
	// Organizers:
	// Yukako Yamane  (Osaka University, Okinawa Institute of Science and Technology)
	// Ko Sakai  (University of Tsukuba)

	// Speakers:
	// Charles Ed Connor  (Johns Hopkins University)
	// Mark Lescroart  (University of Nevada, Reno)
	// Ernst Niebur  (Johns Hopkins University)
	// Steven W. Zucker  (Yale University)

	interface Symposium {
		number: string;
		title: string;
		organizers: string[];
		speakers: string[];
		abstracts: Abstracts[];
	}

	interface Abstracts {
		title: string;
		authors: string;
		affiliation: string;
		abstract: string;
	}

	const symposia: Symposium[] = [
		{
			number: '1-1',
			title: 'Physiological, psychological, and computational foundations of scene understanding',
			organizers: [
				'Yukako Yamane  (Osaka University, Okinawa Institute of Science and Technology)',
				'Ko Sakai  (University of Tsukuba)'
			],
			speakers: [
				'Charles Ed Connor  (Johns Hopkins University)',
				'Mark Lescroart  (University of Nevada, Reno)',
				'Ernst Niebur  (Johns Hopkins University)',
				'Steven W. Zucker  (Yale University)'
			],
			abstracts: []
		}
	];
</script>

<div class="w-full text-token grid grid-cols-1 gap-4 mt-12">
	{#each symposia as symposium}
		<div class="card variant-glass overflow-hidden text-left">
			<header class="h3 p-3">Symposium {symposium.number}</header>
			<div class="flex flex-col lg:flex-row">
				<div class="px-4 space-y-4 flex flex-col text-left">
					<div class="flex flex-col items-baseline">
						<h2 class="h2" data-toc-ignore>{symposium.title}</h2>
                        <hr class="opacity-50" />
                        Organizers:
						{#each symposium.organizers as organizer}
							<h5 class="h5 text-surface-600-300-token opacity-80">{organizer}</h5>
						{/each}
					</div>
					<hr class="opacity-50" />
					<div>
                        <h4 class="h4">Speakers:</h4>
						{#each symposium.speakers as speaker}
							<h5 class="h5 mx-2 text-surface-600-300-token opacity-80">{speaker}</h5>
						{/each}
					</div>
				</div>
			</div>
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6m4 16H5V5h9v5h5m-2 4H7v-2h10m-3 5H7v-2h7"
							/></svg
						>
					</svelte:fragment>
					<svelte:fragment slot="summary"><h4 class="h4">Abstracts</h4></svelte:fragment>
					<svelte:fragment slot="content">
						<div in:fly={{ duration: 200, y: -20 }}>
							<article class="text-left">
								<p>
									<!-- cspell:disable -->
									{symposium.abstracts}
									<!-- cspell:enable -->
								</p>
							</article>
						</div>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	{/each}
</div>
