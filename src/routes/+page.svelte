<div class="container h-full mx-auto flex justify-center items-center">
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
</style>
