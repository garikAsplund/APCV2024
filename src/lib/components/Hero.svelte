<script lang="ts">
	import { scroll } from '$lib/stores';
	// import { popup } from '@skeletonlabs/skeleton';
	// import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { imageNumber } from '$lib/stores';

	// const popupSymposia: PopupSettings = {
	// 	event: 'click',
	// 	target: 'popupSymposia',
	// 	// placement: 'bottom',
	// 	middleware: {
	// 		// 	// flip: {
	// 		// 	// 	mainAxis: true,
	// 		// 	// },
	// 		autoPlacement: {
	// 			allowedPlacements: ['bottom']
	// 		}
	// 		// 	// shift: {
	// 		// 	// 	mainAxis: true,
	// 		// 	// },
	// 	}
	// };

	// const popupAbstracts: PopupSettings = {
	// 	event: 'click',
	// 	target: 'popupAbstracts',
	// 	// placement: 'bottom',
	// 	middleware: {
	// 		// flip: {
	// 		// 	mainAxis: true,
	// 		// },
	// 		autoPlacement: {
	// 			allowedPlacements: ['bottom']
	// 		}
	// 		// shift: {
	// 		// 	mainAxis: true,
	// 		// },
	// 	}
	// };

	function scrollToElement(element: string) {
		document.getElementById(element)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
	}

	$imageNumber === 0 ? ($imageNumber = Math.floor(Math.random() * 4) + 1) : $imageNumber;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />
<div
	class="eye w-screen relative overflow-hidden bg-center bg-fixed h-[calc(100vh+240px)] rounded-lg bg-cover bg-no-repeat text-center"
	style="background-image: url({innerWidth > 1024
		? `/sgEye${$imageNumber}Large.webp`
		: `/sgEye${$imageNumber}Medium.webp`})"
>
	<div
		class="space-y-10 w-screen text-secondary-50 backdrop-blur-xl bg-slate-500/20 text-center flex flex-col items-center mt-24"
	>
		<h2
			class="h2 mt-12 md:text-6xl lg:text-8xl overline decoration-0 text-3xl text-secondary-100 leading-loose tracking-tighter"
		>
			APCV 2024 SG
		</h2>
		<h3 class="h3">The 16th Asia Pacific Conference on Vision</h3>
		<div class="space-y-3 md:space-y-6">
			<p class="font-bold md:text-4xl text-2xl">July 10-12</p>
			<p class="dark">
				<code class="code md:text-xl text-lg">National University of Singapore</code>
			</p>
			<div class="flex flex-col md:text-lg lg:text-xl space-y-1">
				<!-- <div
					class="card z-10 p-6 md:w-3/4 lg:w-7/12 xl:w-1/2 space-y-3 text-left text-primary-900-50-token"
					data-popup="popupSymposia"
				>
					<div class="arrow bg-surface-100-800-token" />
					<p>
						We welcome original research work on all aspects of vision, multisensory perception,
						decision and action, and related topics.
					</p>
					<p>
						Symposia should be 90-120 minutes in length. Number of speakers and length of each talk
						is not limited but 20-30 minute talks with 5 minute discussions is preferred.
					</p>
					<p>
						Please send proposals to <code class="code text-lg">apcv2024@gmail.com</code> along with:
					</p>
					<ul class="text-base md:mx-24">
						<li>Title of the symposium</li>
						<li>Organizers and communication addresses</li>
						<li>Symposium abstract — 200-300 words</li>
						<li>Speakers and titles — CV, reference lists</li>
						<li>Program details — Individual talk abstracts</li>
						<li>Any additional information or requests</li>
					</ul>
					<p>
						Final date for symposium proposals is <code class="code text-lg">February 29</code>.
					</p>
				</div> -->
				<!-- <button
					class="btn variant-outline-secondary hover:variant-outline-primary"
					use:popup={popupSymposia}> -->
					<a href={'#'} on:click|preventDefault={() => scrollToElement('symposia')}>
					<p class="text-xl dark">
						Call for symposia <code class="code text-lg">open now</code>
					</p>
				</a>
					<!-- </button> -->
				<!-- <div
					class="card z-10 p-6 md:w-3/4 lg:w-7/12 xl:w-1/2 space-y-3 text-left text-primary-900-50-token"
					data-popup="popupAbstracts"
				>
					<div class="arrow bg-surface-100-800-token" />
					<p>
						We welcome original research work on all aspects of vision. We invite contributions as
						talks or posters.
					</p>
					<p>
						Abstracts are limited to 200 words — no images, no references. Abstracts will be
						published online in <code class="code text-lg"
							><a href="https://journals.sagepub.com/home/ipe" target="_blank">i-Perception</a
							></code
						>.
					</p>
					<p>Before submitting an abstract, participants must complete conference registration.</p>
					<p>
						Final date for abstract submission is <code class="code text-lg">March 31</code>.
					</p>
				</div> -->
				<!-- <button class="btn hover:variant-outline-primary" use:popup={popupAbstracts}> -->
					<div>
					<p class="mt-4 text-xl dark">
						Call for abstracts <code class="code text-lg">coming soon</code>
					</p>
					</div>
					<!-- </button
				> -->
					<div>
						<p class="mt-4 text-xl dark">
							Conference registration <code class="code text-lg">coming soon</code>
						</p>
					</div>
				<!-- </button> -->
			</div>
			<!-- <p>More information soon</p> -->
			<!-- <button class="btn btn-lg variant-outline-primary hover:variant-outline-tertiary text-2xl">Register now!</button> -->
		</div>
		<span style="opacity: {1 - Math.max(0, $scroll / 400)}" class=" -translate-y-6">
			<svg
				class="scroll-down"
				fill="#b6d6f2"
				height="75"
				viewBox="0 0 24 24"
				width="75"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
				<path d="M0-.75h24v24H0z" fill="none" />
			</svg></span
		>
	</div>
</div>

<style lang="postcss">
	.eye {
		animation: city 90s linear infinite;
	}

	.scroll-down {
		margin: 0 auto;
		position: relative;
		top: 50%;
		animation-name: bounce;
		animation-duration: 1s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	@keyframes city {
		0% {
			filter: hue-rotate(0deg);
		}
		50% {
			filter: hue-rotate(20deg);
		}
		100% {
			filter: hue-rotate(0deg);
		}
	}

	@keyframes bounce {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(10px);
		}
	}
</style>
