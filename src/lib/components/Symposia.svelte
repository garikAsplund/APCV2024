<script lang="ts">
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
			abstract: 'Vision science has revealed the nature of human vision and the visual functions in cognition in various ways, although ‘how humans understand an entire scene?’ is still a challenging problem. How does the visual system segregate images into meaningful parts and then assemble those parts into informative representations of the outside world? How do those representations support our immediate, intuitive knowledge about where we are, what things are present, and how those things relate to each other and to the overall scene? About what just happened in the scene, and what might happen next and how we should react for? Recent rapid advancement of machine learning algorithms enabled the identification, description, and even generation of a scene, however, they are still incapable of providing clues for understanding a scene as we humans do. We invite world-leading scientists to discuss the physiological, psychological, and computational foundations of scene understanding.',
			abstracts: [
				{
					title: 'Some profound research',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU and Meow Meow',
					abstract: 'Hubel and Wiesel, Nobel Laureates in 1981, were the first to discover that columns exist in the visual cortex representing left and right eye inputs (ocular dominance columns), and they also found that there is a critical period for visual development that occurs within the first year of life. More recently, however, it has become clear that some plasticity remains into adulthood. Recent work shows that this plasticity extends to monocular contrast sensitivity as well as ocular dominance (OD) in adults, which could potentially lead to direct therapeutic benefit. Neuroplastic changes can occur as the result of perceptual training, non-invasive brain stimulation or short-term visual deprivation. Short-term visual deprivation in adults improves sensitivity of the deprived eye and reduces sensitivity of the non-deprived eye, allowing the two eyes inputs to be rebalanced at the level of binocular integration. In this talk, I will review the evidence for adult cortical plasticity using a variety of approaches.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'When the human brain is stimulated at a rapid periodic frequency rate, it synchronizes its activity to this frequency, leading to periodic responses recorded in the EEG (Adrian & Matthews, 1934). In vision, periodic stimulation has been used essentially to investigate low-level processes and attentional effects in the primary visual cortex, under the term “Steady-State Visual Evoked Potentials” (ssVEPs; Regan, 1966; Norcia et al., 2015 for review). This approach has now been extended and refined to understand higher-level visual functions, in particular the categorization of complex visual forms such as human faces, objects and words. This talk will summarize studies carried out over the last few years illustrating the unique strengths of this fast periodic visual stimulation approach: (1) the objective (i.e., exactly at the experimentally-defined frequency rate) definition of neural activity related to visual recognition; (2) the very high signal-to-noise ratio allowing to rapidly measure visual recognition processes in difficult to test populations (e.g., infants and children, patients); (3) the independence from explicit behavioral responses; and (4) the first identification of objective markers of visual integration (“binding”). Contrary to widespread assumption, this approach also provides precise information in the time-domain, and has started to fully characterize the spatio-temporal course of visual recognition in a rapidly changing natural scene.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'The inferotemporal cortex (IT) of the monkey brain is the final stage of the ventral visual pathway, which is thought to be responsible for visual object recognition. Because our visual recognition is categorical in nature, object categories may be represented in IT and earlier stages. However, by carefully determining the stimulus selectivity of individual cells in the monkey IT, we previously found that single IT cells’ selectivity was determined by moderately complex features, defined by physical parameters. A remaining possibility is that object categories are represented by the response pattern of a population of IT cells. By recording responses of many IT cells to a fixed set of 1084 object images, we examined this possibility. Responses of only one or two cells were tested at a time, but by repeating the recording for several months in two monkeys, we obtained responses of 674 cells to the stimulus set. By seeing the response table from the stimulus side, we can analyze the response pattern evoked by each of the stimuli over the 674 cells. We found that two stimuli belonging to the same category tended to evoke similar response patterns whereas those belonging to distant categories evoked different response patterns. When the 1084 objects were plotted according to the dissimilarity of response patterns, objects of the same category clustered. Even the hierarchical structure of object categories appeared there. Thus, although the stimulus selectivity of individual IT cells is determined in the domain of moderately complex features, which is still physical, by having multiple cells with selectivity for various features, responses of a population of IT cells represent object categories, which is semantic.'
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
			abstract: 'Vision science has revealed the nature of human vision and the visual functions in cognition in various ways, although ‘how humans understand an entire scene?’ is still a challenging problem. How does the visual system segregate images into meaningful parts and then assemble those parts into informative representations of the outside world? How do those representations support our immediate, intuitive knowledge about where we are, what things are present, and how those things relate to each other and to the overall scene? About what just happened in the scene, and what might happen next and how we should react for? Recent rapid advancement of machine learning algorithms enabled the identification, description, and even generation of a scene, however, they are still incapable of providing clues for understanding a scene as we humans do. We invite world-leading scientists to discuss the physiological, psychological, and computational foundations of scene understanding.',
			abstracts: [
				{
					title: 'Some profound research',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU and Meow Meow',
					abstract: 'Hubel and Wiesel, Nobel Laureates in 1981, were the first to discover that columns exist in the visual cortex representing left and right eye inputs (ocular dominance columns), and they also found that there is a critical period for visual development that occurs within the first year of life. More recently, however, it has become clear that some plasticity remains into adulthood. Recent work shows that this plasticity extends to monocular contrast sensitivity as well as ocular dominance (OD) in adults, which could potentially lead to direct therapeutic benefit. Neuroplastic changes can occur as the result of perceptual training, non-invasive brain stimulation or short-term visual deprivation. Short-term visual deprivation in adults improves sensitivity of the deprived eye and reduces sensitivity of the non-deprived eye, allowing the two eyes inputs to be rebalanced at the level of binocular integration. In this talk, I will review the evidence for adult cortical plasticity using a variety of approaches.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'When the human brain is stimulated at a rapid periodic frequency rate, it synchronizes its activity to this frequency, leading to periodic responses recorded in the EEG (Adrian & Matthews, 1934). In vision, periodic stimulation has been used essentially to investigate low-level processes and attentional effects in the primary visual cortex, under the term “Steady-State Visual Evoked Potentials” (ssVEPs; Regan, 1966; Norcia et al., 2015 for review). This approach has now been extended and refined to understand higher-level visual functions, in particular the categorization of complex visual forms such as human faces, objects and words. This talk will summarize studies carried out over the last few years illustrating the unique strengths of this fast periodic visual stimulation approach: (1) the objective (i.e., exactly at the experimentally-defined frequency rate) definition of neural activity related to visual recognition; (2) the very high signal-to-noise ratio allowing to rapidly measure visual recognition processes in difficult to test populations (e.g., infants and children, patients); (3) the independence from explicit behavioral responses; and (4) the first identification of objective markers of visual integration (“binding”). Contrary to widespread assumption, this approach also provides precise information in the time-domain, and has started to fully characterize the spatio-temporal course of visual recognition in a rapidly changing natural scene.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'The inferotemporal cortex (IT) of the monkey brain is the final stage of the ventral visual pathway, which is thought to be responsible for visual object recognition. Because our visual recognition is categorical in nature, object categories may be represented in IT and earlier stages. However, by carefully determining the stimulus selectivity of individual cells in the monkey IT, we previously found that single IT cells’ selectivity was determined by moderately complex features, defined by physical parameters. A remaining possibility is that object categories are represented by the response pattern of a population of IT cells. By recording responses of many IT cells to a fixed set of 1084 object images, we examined this possibility. Responses of only one or two cells were tested at a time, but by repeating the recording for several months in two monkeys, we obtained responses of 674 cells to the stimulus set. By seeing the response table from the stimulus side, we can analyze the response pattern evoked by each of the stimuli over the 674 cells. We found that two stimuli belonging to the same category tended to evoke similar response patterns whereas those belonging to distant categories evoked different response patterns. When the 1084 objects were plotted according to the dissimilarity of response patterns, objects of the same category clustered. Even the hierarchical structure of object categories appeared there. Thus, although the stimulus selectivity of individual IT cells is determined in the domain of moderately complex features, which is still physical, by having multiple cells with selectivity for various features, responses of a population of IT cells represent object categories, which is semantic.'
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
			abstract: 'Vision science has revealed the nature of human vision and the visual functions in cognition in various ways, although ‘how humans understand an entire scene?’ is still a challenging problem. How does the visual system segregate images into meaningful parts and then assemble those parts into informative representations of the outside world? How do those representations support our immediate, intuitive knowledge about where we are, what things are present, and how those things relate to each other and to the overall scene? About what just happened in the scene, and what might happen next and how we should react for? Recent rapid advancement of machine learning algorithms enabled the identification, description, and even generation of a scene, however, they are still incapable of providing clues for understanding a scene as we humans do. We invite world-leading scientists to discuss the physiological, psychological, and computational foundations of scene understanding.',
			abstracts: [
				{
					title: 'Some profound research',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU and Meow Meow',
					abstract: 'Hubel and Wiesel, Nobel Laureates in 1981, were the first to discover that columns exist in the visual cortex representing left and right eye inputs (ocular dominance columns), and they also found that there is a critical period for visual development that occurs within the first year of life. More recently, however, it has become clear that some plasticity remains into adulthood. Recent work shows that this plasticity extends to monocular contrast sensitivity as well as ocular dominance (OD) in adults, which could potentially lead to direct therapeutic benefit. Neuroplastic changes can occur as the result of perceptual training, non-invasive brain stimulation or short-term visual deprivation. Short-term visual deprivation in adults improves sensitivity of the deprived eye and reduces sensitivity of the non-deprived eye, allowing the two eyes inputs to be rebalanced at the level of binocular integration. In this talk, I will review the evidence for adult cortical plasticity using a variety of approaches.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'When the human brain is stimulated at a rapid periodic frequency rate, it synchronizes its activity to this frequency, leading to periodic responses recorded in the EEG (Adrian & Matthews, 1934). In vision, periodic stimulation has been used essentially to investigate low-level processes and attentional effects in the primary visual cortex, under the term “Steady-State Visual Evoked Potentials” (ssVEPs; Regan, 1966; Norcia et al., 2015 for review). This approach has now been extended and refined to understand higher-level visual functions, in particular the categorization of complex visual forms such as human faces, objects and words. This talk will summarize studies carried out over the last few years illustrating the unique strengths of this fast periodic visual stimulation approach: (1) the objective (i.e., exactly at the experimentally-defined frequency rate) definition of neural activity related to visual recognition; (2) the very high signal-to-noise ratio allowing to rapidly measure visual recognition processes in difficult to test populations (e.g., infants and children, patients); (3) the independence from explicit behavioral responses; and (4) the first identification of objective markers of visual integration (“binding”). Contrary to widespread assumption, this approach also provides precise information in the time-domain, and has started to fully characterize the spatio-temporal course of visual recognition in a rapidly changing natural scene.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'The inferotemporal cortex (IT) of the monkey brain is the final stage of the ventral visual pathway, which is thought to be responsible for visual object recognition. Because our visual recognition is categorical in nature, object categories may be represented in IT and earlier stages. However, by carefully determining the stimulus selectivity of individual cells in the monkey IT, we previously found that single IT cells’ selectivity was determined by moderately complex features, defined by physical parameters. A remaining possibility is that object categories are represented by the response pattern of a population of IT cells. By recording responses of many IT cells to a fixed set of 1084 object images, we examined this possibility. Responses of only one or two cells were tested at a time, but by repeating the recording for several months in two monkeys, we obtained responses of 674 cells to the stimulus set. By seeing the response table from the stimulus side, we can analyze the response pattern evoked by each of the stimuli over the 674 cells. We found that two stimuli belonging to the same category tended to evoke similar response patterns whereas those belonging to distant categories evoked different response patterns. When the 1084 objects were plotted according to the dissimilarity of response patterns, objects of the same category clustered. Even the hierarchical structure of object categories appeared there. Thus, although the stimulus selectivity of individual IT cells is determined in the domain of moderately complex features, which is still physical, by having multiple cells with selectivity for various features, responses of a population of IT cells represent object categories, which is semantic.'
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
			abstract: 'Vision science has revealed the nature of human vision and the visual functions in cognition in various ways, although ‘how humans understand an entire scene?’ is still a challenging problem. How does the visual system segregate images into meaningful parts and then assemble those parts into informative representations of the outside world? How do those representations support our immediate, intuitive knowledge about where we are, what things are present, and how those things relate to each other and to the overall scene? About what just happened in the scene, and what might happen next and how we should react for? Recent rapid advancement of machine learning algorithms enabled the identification, description, and even generation of a scene, however, they are still incapable of providing clues for understanding a scene as we humans do. We invite world-leading scientists to discuss the physiological, psychological, and computational foundations of scene understanding.',
			abstracts: [
				{
					title: 'Some profound research',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU and Meow Meow',
					abstract: 'Hubel and Wiesel, Nobel Laureates in 1981, were the first to discover that columns exist in the visual cortex representing left and right eye inputs (ocular dominance columns), and they also found that there is a critical period for visual development that occurs within the first year of life. More recently, however, it has become clear that some plasticity remains into adulthood. Recent work shows that this plasticity extends to monocular contrast sensitivity as well as ocular dominance (OD) in adults, which could potentially lead to direct therapeutic benefit. Neuroplastic changes can occur as the result of perceptual training, non-invasive brain stimulation or short-term visual deprivation. Short-term visual deprivation in adults improves sensitivity of the deprived eye and reduces sensitivity of the non-deprived eye, allowing the two eyes inputs to be rebalanced at the level of binocular integration. In this talk, I will review the evidence for adult cortical plasticity using a variety of approaches.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'When the human brain is stimulated at a rapid periodic frequency rate, it synchronizes its activity to this frequency, leading to periodic responses recorded in the EEG (Adrian & Matthews, 1934). In vision, periodic stimulation has been used essentially to investigate low-level processes and attentional effects in the primary visual cortex, under the term “Steady-State Visual Evoked Potentials” (ssVEPs; Regan, 1966; Norcia et al., 2015 for review). This approach has now been extended and refined to understand higher-level visual functions, in particular the categorization of complex visual forms such as human faces, objects and words. This talk will summarize studies carried out over the last few years illustrating the unique strengths of this fast periodic visual stimulation approach: (1) the objective (i.e., exactly at the experimentally-defined frequency rate) definition of neural activity related to visual recognition; (2) the very high signal-to-noise ratio allowing to rapidly measure visual recognition processes in difficult to test populations (e.g., infants and children, patients); (3) the independence from explicit behavioral responses; and (4) the first identification of objective markers of visual integration (“binding”). Contrary to widespread assumption, this approach also provides precise information in the time-domain, and has started to fully characterize the spatio-temporal course of visual recognition in a rapidly changing natural scene.'
				},
				{
					title: 'Itsa meeee',
					authors: 'Gingi and Wasabi',
					affiliation: 'CatU',
					abstract: 'The inferotemporal cortex (IT) of the monkey brain is the final stage of the ventral visual pathway, which is thought to be responsible for visual object recognition. Because our visual recognition is categorical in nature, object categories may be represented in IT and earlier stages. However, by carefully determining the stimulus selectivity of individual cells in the monkey IT, we previously found that single IT cells’ selectivity was determined by moderately complex features, defined by physical parameters. A remaining possibility is that object categories are represented by the response pattern of a population of IT cells. By recording responses of many IT cells to a fixed set of 1084 object images, we examined this possibility. Responses of only one or two cells were tested at a time, but by repeating the recording for several months in two monkeys, we obtained responses of 674 cells to the stimulus set. By seeing the response table from the stimulus side, we can analyze the response pattern evoked by each of the stimuli over the 674 cells. We found that two stimuli belonging to the same category tended to evoke similar response patterns whereas those belonging to distant categories evoked different response patterns. When the 1084 objects were plotted according to the dissimilarity of response patterns, objects of the same category clustered. Even the hierarchical structure of object categories appeared there. Thus, although the stimulus selectivity of individual IT cells is determined in the domain of moderately complex features, which is still physical, by having multiple cells with selectivity for various features, responses of a population of IT cells represent object categories, which is semantic.'
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

<div class="w-full lg:w-3/4 px-4 h-full text-token grid grid-cols-1 gap-4">
	<TabGroup>
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
	</TabGroup>
</div>
