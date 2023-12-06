<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { Keynotes, Symposia } from '$lib/components/components';
	import type { ComponentType } from 'svelte';

	interface Section {
		title: string;
		content: string;
	}

	const sections: Section[] = [
		{ title: 'Schedule', content: 'This is the schedule content' },
		{ title: 'Keynotes', content: 'This is the keynotes content' },
		{ title: 'Symposia', content: 'This is the symposia content' },
		{ title: 'Talks and Posters', content: 'This is the talks and posters content' },
		{ title: 'Another thing', content: 'This is the another thing content' },
		{ title: 'Scroll test', content: 'This is the scroll test content' },
		{ title: 'More stuff', content: 'This is the more stuff content' },
		{ title: 'Even more stuff', content: 'This is the even more stuff content' },
		{ title: 'One last item', content: 'This is the one last item content' }
	];

	const components: ComponentType[] = [
		Keynotes,
		Symposia,
	]

</script>

<div class="container mx-auto flex lg:space-x-8">
	<div class="flex-1 mt-12">
		<div class="space-y-10 text-center">
			<h2
				class="md:text-6xl lg:text-8xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider"
			>
				Program
			</h2>

			<div class="space-y-6 text-xl" use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }}>
				<p><code class="code md:text-xl text-lg">Check back soon for more details</code></p>
				
			</div>
		</div>
	</div>
</div>
