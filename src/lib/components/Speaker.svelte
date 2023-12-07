<script lang="ts">
    import { inview } from "svelte-inview";
    import { fade, fly } from "svelte/transition";
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

    interface Speaker {
		slot: number;
		time: string;
		name: string;
		affiliation: string;
		title: string;
		abstract: string;
		bio: string;
		moderator: string;
		photo: string;
	}

    let isInView: boolean;
    let isInViewAbstract: boolean;


    export let speaker: Speaker;
</script>

<div
	class="h-screen"
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade={{ duration: 1800 }} class="">
			<header
				class="sticky flex justify-between top-32 py-12 px-6 z-10 h-32 bg-surface-100-800-token mb-36"
			>
				<h2 class="h2" data-toc-ignore>Keynote {speaker.slot}</h2>
				<h4 class="h4">{speaker.time}</h4>
			</header>
			<div class="h-screen">
				<div class="card variant-glass overflow-hidden">
					<div class="flex flex-col lg:flex-row">
						<div class="p-4 space-y-4 flex flex-col text-left">
							<div class="flex flex-col">
								<h2 class="h2" data-toc-ignore>{speaker.title}</h2>
							</div>
							<div>
								<h1 class="h3">{speaker.name}</h1>
								<h5 class="h5 text-surface-600-300-token opacity-80">
									{speaker.affiliation}
								</h5>
							</div>
						</div>
						<picture class="hidden lg:block">
							<img
								src={speaker.photo}
								class="overflow-hidden object-top object-cover"
								width="200"
								height="auto"
								alt={`Keynote speaker ${speaker.name}`}
							/>
						</picture>
					</div>
                    <div
                    class="h-screen"
                    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
                    on:inview_change={({ detail }) => {
                        isInViewAbstract = detail.inView;
                    }}
                >
                    {#if isInView}
                    <article class="text-left">
                        <p>
                            {speaker.abstract}
                        </p>
                    </article>
                    {/if}
                    </div>

                    <article class="text-left">
                        <p>
                            {speaker.bio}
                        </p>
                    </article>

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
							<svelte:fragment slot="summary"><h4 class="h4">Abstract</h4></svelte:fragment>
							<svelte:fragment slot="content">
								<div in:fly={{ duration: 200, y: -20 }}>
									<article class="text-left">
										<p>
											{speaker.abstract}
										</p>
									</article>
								</div>
							</svelte:fragment>
						</AccordionItem>
						<AccordionItem>
							<svelte:fragment slot="lead"
								><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M21 5v2H3V5h18M3 17h9v-2H3v2m0-5h18v-2H3v2m15 2a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m-4 8v-1c0-1.1 1.79-2 4-2s4 .9 4 2v1h-8Z"
									/></svg
								></svelte:fragment
							>
							<svelte:fragment slot="summary"><h4 class="h4">Bio</h4></svelte:fragment>
							<svelte:fragment slot="content">
								<div in:fly={{ duration: 200, y: -20 }}>
									<article class="text-left">
										<p>
											{speaker.bio}
										</p>
									</article>
								</div>
							</svelte:fragment>
						</AccordionItem>
					</Accordion> -->
					<hr class="opacity-50" />
					<footer class="p-4 flex justify-start items-center space-x-4">
						<div class="flex-auto flex justify-between items-center">
							<p class="" data-toc-ignore>Moderated by {speaker.moderator}</p>
						</div>
					</footer>
				</div>
			</div>
		</div>
	{/if}
</div>