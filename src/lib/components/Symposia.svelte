<script lang="ts">
	import { Accordion, AccordionItem, TabAnchor } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';
	import Symposium from './Symposium.svelte';
	import type { Symposiums } from '$lib/types';
	import Tab from './Tab.svelte';
	import TabGroup from './TabGroup.svelte';

	const symposia: Symposiums[] = [
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
			abstracts: [
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'heeeeeey'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'heeeeeey'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'heeeeeey'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'heeeeeey'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'heeeeeey'
				}
			]
		},
		{
			number: '2-1',
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
		},
		{
			number: '2-2',
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
		},
		{
			number: '3-1',
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

	const dayOne = symposia.filter((symposium) => {
		return symposium.number[0] === '1';
	});
	const dayTwo = symposia.filter((symposium) => {
		return symposium.number[0] === '2';
	});
	const dayThree = symposia.filter((symposium) => {
		return symposium.number[0] === '3';
	});

	let day: number = 1;
	let innerHeight: number
</script>

<svelte:window bind:innerHeight />

<div class="w-full text-token grid grid-cols-1 gap-4 mt-12">
	<TabGroup>
		<Tab bind:group={day} name="day1" value={1}>Day 1</Tab>
		<Tab bind:group={day} name="day2" value={2}>Day 2</Tab>
		<Tab bind:group={day} name="day3" value={3}>Day 3</Tab>
		<svelte:fragment slot="panel">
			<div class="h-[740px] overscroll-y-auto ">
				{#if day === 1}
					{#each dayOne as symposium}
						<Symposium {symposium} />
					{/each}
				{:else if day === 2}
					{#each dayTwo as symposium}
						<Symposium {symposium} />
					{/each}
				{:else if day === 3}
					{#each dayThree as symposium}
						<Symposium {symposium} />
					{/each}
				{/if}
			</div>
		</svelte:fragment>
	</TabGroup>
	<!-- <TabGroup >
		<Tab bind:group={day} name="day1" value={1}>Day 1</Tab>
		<Tab bind:group={day} name="day2" value={2}>Day 2</Tab>
		<Tab bind:group={day} name="day3" value={3}>Day 3</Tab>
		<svelte:fragment slot="panel">
			{#if day === 1}
				{#each dayOne as symposium}
					<Symposium {symposium} />
				{/each}
			{:else if day === 2}
				{#each dayTwo as symposium}
					<Symposium {symposium} />
				{/each}
			{:else if day === 3}
				{#each dayThree as symposium}
					<Symposium {symposium} />
				{/each}
			{/if}
		</svelte:fragment>
	</TabGroup> -->
</div>
