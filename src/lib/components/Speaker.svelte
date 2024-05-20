<script lang="ts">
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
					<h2 class="h2">{speaker.name}</h2>
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

<div class="mt-12 mb-6 space-y-36">
	<!-- <article class="text-left">
		<h3 class="h3 mb-2 scroll-mt-[100px]" id="Abstract {speaker.slot}">Abstract</h3>
		<p class="text-surface-500-400-token leading-loose">
			{speaker.abstract}
		</p>
	</article> -->

	<article class="text-left">
		<!-- <h3 class="h3 mb-2 scroll-mt-[100px]" id="Bio {speaker.slot}">Bio</h3> -->
		<p class="text-surface-500-400-token lg:leading text-justify">
			<!-- {speaker.bio} -->
			{@html speaker.bio}
		</p>
	</article>
</div>
<hr class="opacity-50 pb-48" />
<!-- <footer class="p-4 flex justify-start items-center space-x-4 mb-48">
	<div class="flex-auto flex justify-between items-center">
		<p class="opacity-40" data-toc-ignore>Moderated by {speaker.moderator}</p>
	</div>
</footer> -->