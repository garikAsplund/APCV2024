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
			<div class="text-xl space-y-4">
				<p>Call for symposia <code class="code text-lg">December 15</code></p>
				<p>Call for abstracts <code class="code text-lg">January 15</code></p>
			</div>
			<p>More information soon</p>
		</div>
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
		</svg>
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
