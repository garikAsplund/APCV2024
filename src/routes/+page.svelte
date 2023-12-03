<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center -translate-y-12">
		<h2 class="h2 md:text-6xl text-3xl text-secondary-100">APCV 2024 SG</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<img src="SG.png" alt="Singapore's skyline" class="skyline">
		</figure>
		<div class="space-y-6">
			<p class="font-bold md:text-4xl text-2xl text-secondary-50">July 10-12</p>
			<p><code class="code md:text-xl text-lg">National University of Singapore</code></p>
			<p>Call for abstracts <code class="code text-lg">January 15</code></p>
			<p>More information soon</p>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[100px] transition-all;
		animation: pulse 15s cubic-bezier(0, 0, 0, 0.5) infinite,
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
