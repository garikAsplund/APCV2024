<script lang="ts">
	import Symposium from './Symposium.svelte';
	import type { Symposiums } from '$lib/types';
	import Tab from './Tab.svelte';
	import TabGroup from './TabGroup.svelte';

	const symposia: Symposiums[] = [
		{
			number: '1',
			title: 'Mechanisms of face perception',
			organizers: [
				'Colin Palmer'
			],
			speakers: [
				{
					speaker: 'Qian Wang',
					authors: ', Yingying Wang, Guanpeng Chen, Ruolin Yang and Fang Fang',
					title: `Unveiling subcortical and cortical mechanisms of face perception via intracranial recordings in the human brain.`,
				},
				{
					speaker: 'Jessica Taubert',
					authors: ', Shruti Japee, Amanda K. Robinson, Houqiu Long, Tijl Grootswagers, Charles Zheng, Francisco Pereira and Chris Baker',
					title: `Uncovering the multidimensional representation underlying human dissimilarity judgements of expressive faces.`,
				},
				{
					speaker: '',
					authors: 'Anqi Mao, Runnan Cao, Sai Sun, Shuo Wang and <b>Dongwon Oh</b>',
					title: `Implicit encoding of social trait perceptions: Modeling eye-gaze patterns, pupillary responses, and neuronal activity.`,
				},
				{
					speaker: 'Yong Zhi Foo',
					authors: '',
					title: `The evolutionary basis of preferences for male facial masculinity.`,
				},
				{
					speaker: 'Colin Palmer',
					authors: ' and Gwenisha Liaw',
					title: `Eye glint as a perceptual cue in human vision.`,
				},
			],
			abstract: `The human face has special significance as a visual cue, helping
us to track the emotional reactions and attentional focus of others,
shaping social trait impressions (e.g., attractiveness and
trustworthiness), and helping us to identify those people familiar
to us. While face processing has received much attention in
vision science, the mechanisms that shape the everyday
experience of faces are still only partially understood. What are
the core dimensions of facial information represented in the
visual system? How is this information extracted from the visual
signals relayed to the brain from the retina? How do implicit
processes, such as physiological responses or evolutionary
pressures, align with our perceptual experience of faces? This
symposium showcases recent discoveries and novel approaches
to understanding the visual processing of faces in the human
brain. Talks range from the use of intracranial neural recordings
to uncover cortical and subcortical responses underlying face
perception, data-driven approaches to defining the social
dimensions observers perceive in faces, characterisation of the
link between face features, perception and physiology using
psychophysics and computational models, and analysis of the
biological and evolutionary factors that shape face impressions.
Together this provides a snapshot of exciting developments
occurring at a key interface between vision science and social
behaviour.`,
			abstracts: [],
		},
		{
			number: '2',
			title: 'The impact of recent technologies on studies of multisensory integration',
			organizers: [
				'Hiroaki Kiyokawa and Juno Kim',
			],
			speakers: [
				{
					speaker: 'Hideki Tamura',
					authors: '',
					title: `Forward and backward steps in virtual reality affect facial expression recognition.`,
				},
				{
					speaker: 'Michiteru Kitazaki',
					authors: '',
					title: `Multimodal information for virtual walking.`,
				},
				{
					speaker: 'Stephen Palmisano',
					authors: '',
					title: `Can we measure sensory conflict during virtual reality? And if we can, then what can we do with this information?`,
				},	
			],
			abstract: `Multisensory integration is one of the key functions to obtain stable
visual and non-visual perception in our daily life. However, it is still a
challenging problem to comprehensively understand how our brain
integrates different types of modal information. How does our visual
system extract meaningful visual information from retinal images and
integrate those with information from other sensory modalities? Recent
technologies, such as virtual reality (VR) and/or augmented reality
(AR), can provide scalable interactive and immersive environments to
test the effects of external stimulation on our subjective experiences.
What do those technologies bring to our research? We invite world-
leading scientists in human perception and performance to discuss the
psychological, physiological, and computational foundations of
multisensory integration, and methodologies that provide insight into
how non-visual sensory information enhances our visual experiences of
the world.`,
			abstracts: [],	
		},
		{
			number: '3',
			title: 'Regularity and (un)certainty: extracting implicit sensory information in perception and action',
			organizers: [
				'Shao-Min Hung and Hsin-I Iris Liao',
			],
			speakers: [
				{
					speaker: 'Shao-Min Hung',
					authors: ' and Akira Sarodo',
					title: `Tracking probability in the absence of awareness.`,
				},		
				{
					speaker: 'Hsin-I Iris Liao',
					authors: '',
					title: `Auditory information extraction revealed by pupil-linked arousal.`,
				},	
				{
					speaker: 'Philip Tseng',
					authors: '',
					title: `Importance of task demand in measuring implicit learning.`,
				},	
				{
					speaker: 'Nobuhiro Hagura',
					authors: '',
					title: `Decision uncertainty as a context for motor memory.`,
				},	
				{
					speaker: 'David Alais and Matthew Davidson',
					authors: '',
					title: `Seeing the world one step at a time: perceptual modulations linked to the gait cycle.`,
				},	
			],
			abstract: `How do we track the relations among sensory items in the
surroundings? With our sensory systems bombarded by
immeasurable external information, it is hard to envision a
willful, deliberate, and moment-by-moment sensory tracking
mechanism. Instead, here we seek to illustrate how our behavior
is affected by implicitly tracked regularity and the accompanying
(un)certainty. We will provide evidence from a wide spectrum of
studies, encompassing interactions among vision, audition, and
motor systems. Shao-Min (Sean) Hung first establishes implicit
regularity tracking in a cue-target paradigm. His findings suggest
that regularity tracking between sensory items relies very little on
explicit knowledge or visual awareness. However, how we derive
meaningful results requires careful work. Philip Tseng’s work
expands on this point and demonstrates how visual statistical
learning can be influenced by task demand. These results
advocate the importance of experimental design in searching for
implicit extraction of sensory information. Similar tracking of
perceptual statistics extends to the auditory domain, as evidenced
by Hsin-I (Iris) Liao’s work. Her research shows how pupillary
responses reflect perceptual alternations and unexpected
uncertainty in response to auditory stimulations. Next, we ask
how our behavior reacts to such regularities. Using a motor
learning paradigm, Nobuhiro Hagura reveals that different visual
uncertainty can tag different motor memories, showing that
uncertainty provides contextual information to guide our
movement. Finally, David Alais uses continuous measurement of
perception during walking to reveal a modulation occurring at the
step rate, with perceptual sensitivity optimal in the swing phase
between steps. Together, our symposium aims to paint a
multifaceted picture of perceptual regularity tracking, with the
(un)certainty it generates. These findings reveal the ubiquitous
nature of implicit sensory processing in multiple sensory
domains, integrating perception and action.`,
			abstracts: [],
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
	let innerHeight: number;
</script>

<svelte:window bind:innerHeight />
<header class="flex w-full justify-between items-baseline mt-12 mb-8">
	<h2 class="h2 scroll-mt-5" id="Symposia">Symposia</h2>
</header>

<div class="w-full gap-4">
	<!-- <TabGroup>
		<Tab bind:group={day} name="day1" value={1}>Day 1</Tab>
		<Tab bind:group={day} name="day2" value={2}>Day 2</Tab>
		<Tab bind:group={day} name="day3" value={3}>Day 3</Tab>
		<svelte:fragment slot="panel">
			<div class=" overscroll-y-auto ">
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
	</TabGroup> -->
	{#each symposia as symposium}
		<Symposium {symposium} />
	{/each}
</div>
