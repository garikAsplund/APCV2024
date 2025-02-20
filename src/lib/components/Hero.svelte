<script lang="ts">
	import { scroll } from '$lib/stores';
	import { imageNumber } from '$lib/stores';

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
		class="space-y-10 w-screen text-secondary-50 backdrop-blur-xl bg-slate-700/50 text-center flex flex-col items-center mt-24"
	>
		<h2
			class="h2 mt-12 md:text-6xl lg:text-8xl overline decoration-0 text-3xl text-secondary-100 leading-loose tracking-tighter"
		>
			APCV 2024 SG
		</h2>
		<h3 class="h3">The 16th Asia Pacific Conference on Vision</h3>
		<div class="space-y-3 md:space-y-6 mx-4">
			<p class="font-bold md:text-4xl text-2xl">10-12 July</p>
			<p class="dark"><code class="code md:text-xl text-lg">Yale-NUS College</code></p>
			<p class="dark">
				<code class="code md:text-xl text-lg">National University of Singapore</code>
			</p>
			<div class="flex flex-col md:text-lg lg:text-xl space-y-1">
				<div>
					<a href="https://easychair.org/smart-program/APCV2024/" target="_blank">
						<p class="mt-4 text-xl dark">
							<span class="underline hover:no-underline">Online program</span>
							<code class="code text-lg">available now</code>
							<!-- through 31 May (early)
						and 30 June (normal) -->
						</p>
					</a>
				</div>
					<div>
					<!-- <a href="https://easychair.org/conferences/?conf=apcv2024" target="_blank"> -->
						<p class="mt-4 text-xl dark">
							<span>Conference registration</span>
							<code class="code text-lg">closed</code>
							<!-- through 31 May (early)
						and 30 June (normal) -->
						</p>
					<!-- </a> -->
					<!-- <p class="text-base mt-4 opacity-80">
						Standard registration until 30 June
					</p> -->
				</div>
				<div>
					<p class="mt-4 text-xl dark">
						<!-- <a href="/abstract submission"> -->
							Call for abstracts
							<code class=" code text-lg">closed</code>
						<!-- </a> -->
					</p>

					<!-- <p class="text-base mt-4 opacity-80">
						Thank you for your submissions.
					</p> -->
				</div>

				<!-- <div>
					<p class="mt-4 text-xl dark"><code class="code text-lg">apcv2024@gmail.com</code></p>
				</div> -->
			</div>
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
