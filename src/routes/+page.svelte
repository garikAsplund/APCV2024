<script lang="ts">
	import { scroll } from '$lib/stores';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};
</script>

<div class="container h-screen mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center mt-16">
		<h2
			class="h2 md:text-6xl lg:text-8xl overline decoration-0 text-3xl text-secondary-100-token leading-loose tracking-tighter"
		>
			APCV 2024 SG
		</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<picture>
				<source type="image/avif" srcset="SG.avif" />
				<source type="image/webp" srcset="SG_sm.webp 480w, SG_lg.webp 768w" />
				<source type="image/png" srcset="SG_sm.png 480w, SG_lg.png 768w" />
				<img
					src="SG_sm.png"
					srcset="SG_sm.png 480w, SG_lg.png 768w"
					sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw"
					alt="Singapore's skyline"
					class="skyline"
					height="170"
					width="1024"
					loading="lazy"
				/>
			</picture>
		</figure>
		<div class="space-y-6">
			<p class="font-bold md:text-4xl text-2xl text-secondary-50-token">July 10-12</p>
			<p>
				<code class="code md:text-xl text-lg">National University of Singapore</code>
			</p>
			<div class="md:text-lg lg:text-xl space-y-4">
				<div class="card p-6 md:w-3/4 lg:w-7/12 xl:w-1/2 space-y-3 text-left" data-popup="popupClick">
					<p>
						We welcome original research work on all aspects of vision, multisensory perception,
						decision and action, and related topics.
					</p>
					<p>
						Symposia should be 90-120 minutes in length. Number of speakers and lenghth of each talk
						is not limited but 20-30 minutes per talk with 5 minutes for discussion is preferred.
					</p>
					<p>
						Please send proposals to <code class="code text-lg"> apcv2024@gmail.com</code> along with:
					</p>
					<ul class="text-base mx-24">
						<li>Title of the symposium</li>
						<li>Organizers and communication addresses</li>
						<li>Symposium abstract — 200-300 words</li>
						<li>Speakers and titles — CV, reference lists</li>
						<li>Program details — Individual talk abstracts</li>
						<li>Financial supports, if needed</li>
						<li>Any additional information or requests</li>
					</ul>
				</div>
				<button class="btn hover:variant-outline-primary" use:popup={popupClick}
					><p class="text-xl">
						Call for symposia <code class="code text-lg">December 15</code>
					</p></button
				>
				<p>Call for abstracts <code class="code text-lg">January 15</code></p>
			</div>
			<p>More information soon</p>
		</div>
		<span style="opacity: {1 - Math.max(0, $scroll / 400)}">
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
<div class="flex justify-center">
	<div class="w-5/6 text-lg md:text-xl md:w-2/3 lg: w-7/12 xl:w-5/12 space-y-4">
		<h3 class="h3 text-center">The Asia Pacific Conference on Vision is returning soon!</h3>
		<hr />
		<p>
			The conference aims to facilitate discussion on vision research in Asia and the Pacific,
			though participants from all over the world are also welcome.
		</p>
		<p>The program consists of invited lectures, symposia, and contributed papers.</p>
		<p>Original works on all aspects of vision research are invited to present.</p>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}

	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute rounded-full blur-[100px] transition-all;
		animation:
			pulse 15s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 15s linear infinite;
	}

	.skyline {
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
			filter: hue-rotate(-60deg);
		}
		100% {
			filter: hue-rotate(0deg);
		}
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/40;
		}
		33% {
			@apply bg-secondary-400/40;
		}
		66% {
			@apply bg-tertiary-400/40;
		}
		100% {
			@apply bg-primary-400/40;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(2.5);
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
