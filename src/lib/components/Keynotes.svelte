<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { inview } from 'svelte-inview';
	import Speaker from './Speaker.svelte';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { time, title } from '$lib/stores';
	import type { SpeakerType } from '$lib/types';

	let isInView: boolean;

	const options: Options = {
		rootMargin: '-50%',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		$title = detail.node.id;
		$time = detail.node.className;
		console.log({ $time });
	};

	const speakers: SpeakerType[] = [
		{
			slot: 1,
			time: 'Monday, 9:30 AM - 10:30 AM',
			name: 'Jeremy Wolfe',
			affiliation: 'Professor of Ophthalmology and Radiology',
			school: 'Harvard Medical School',
			title: 'Reconstructing visual and subjective experience from the brain',
			abstract:
				'The internal visual world is thought to be encoded in hierarchical representations of the brain. However, previous attempts to visualize perceptual contents based on machine-learning analysis of fMRI patterns have been limited to reconstructions with low level image bases or to matchings to exemplars. While categorical decoding of imagery contents has been demonstrated, the reconstruction of internally generated images has been challenging. I introduce our recent study showing that visual cortical activity can be decoded (translated) into the hierarchical features of a pre-trained deep neural network (DNN) for the same input image, providing a way to make use of the information from hierarchical visual features. Next I present a novel image reconstruction method, in which the pixel values of an image are optimized to make its DNN features similar to those decoded from human brain activity at multiple layers. Our method was able to reliably produce reconstructions that resembled the viewed natural images. While our model was solely trained with natural images, it successfully generalized to artificial shapes, indicating that our model was not simply matching to exemplars. The same analysis applied to mental imagery demonstrated rudimentary reconstructions of the subjective content. Our method can effectively combine hierarchical neural representations to reconstruct perceptual and subjective images, providing a new window into the internal contents of the brain.',
			bio: 'Wolfe received an AB in Psychology in 1977 from Princeton and his PhD in Psychology in 1981 from MIT under the supervision of Richard Held. His research focuses on visual search and visual attention with a particular interest in socially important search tasks in areas such as medical image perception (e.g. cancer screening), security (e.g. baggage screening), and intelligence. He taught Intro. Psychology and other courses for 25 years, mostly at MIT. Wolfe is an elected member of the American Academy of Arts and Sciences and a Fellow of AAAS, APA (Div 1, 3, & 6), and APS. He has been President of the Federation of Associations in Behavioral and Brain Sciences (FABBS), President of the Eastern Psychological Association, Chair of the Board of the Psychonomic Society and a member of the Board of the Vision Sciences Society. He was the founding Editor-in-Chief of Cognitive Research: Principles and Implications (CRPI) and was Editor of Attention, Perception, and Psychophysics. Wolfe also serves on the North American Board of the Union for Reform Judaism. He is married to Julie Sandell; Provost of Suffolk University in Boston (Information accurate in March, 2022). They have three sons: Ben, Philip, and Simon. Wolfe’s office contains more stuffed animals than one would expect in the office of a grown man.',
			moderator: "Shin'ya Nishida (Kyoto University, NTT)",
			photo: 'https://search.bwh.harvard.edu/new/pics_ppl/thumbs120/jeremy2022.jpeg',
			link: 'https://search.bwh.harvard.edu/new/lab_members.html'
		},
		{
			slot: 2,
			time: 'Tuesday, 17:15 PM - 18:15 PM',
			name: 'Shinsuke (Shin) Shimojo',
			affiliation: 'Gertrude Baltimore Professor of Experimental Psychology',
			school: 'California Institute of Technology',
			title: 'Pluripotent stem cell derived photoreceptor transplantation',
			abstract: `Photoreceptor transplantation is a possible treatment to restore visual function to photoreceptor only degenerated retinas such as retinitis pigmentosa. We have been reported that the sensory retinal sheet transplantation, which supplies photoreceptors and secondary retinal neurons, can reintroduce visual function in mice with end-stage retinal degeneration. For the photoreceptor transplantation, previously many groups used photoreceptor suspension. However, it was revealed in 2017 that in those suspension transplantation GFP positive cells were host cells that have material transfer from grafted cells. In fact, transplanted retinal sheets survive for a longer period than suspended cells. Furthermore, only retinal sheets could become mature in the subretinal space and obtain tissue structure with outer segments of photoreceptors after transplantation. To confirm the functional recovery by the grafted sheets, we developed new disease mice models and functional tests analysis. With those, synaptic contact between graft photoreceptors and host bipolar cells was confirmed by immunohistochemistry, electrical physiology, and behavior tests. MEA recording showed that grafted cells could elicit light responses in the host ganglion cells.
  Now we are investigating how to increase the number of synapses and efficacy of transplantation. However, immunohistochemical characterization of synapse in the degenerated retina or of grafted retina is often challenging, as traits are not as clear as in the wild type retina. Therefore, using postnatal wild type mouse retina as a training data, we developed a new method to objectively count synapses. Using this method, we evaluated the synapses of iPSC-retina after transplantation to rd1 mice. The number of synapses increased on 30 days after transplantation, while we could not found any synapse formation in in vtro retinal organoids. The synapse numbers were more in the light/dark cycle environment than completely dark one.
  I will talk about the future strategy of outer retinal transplantation.`,
			bio: 'The Shimojo Psychophysics Laboratory is one of the few laboratories on the campus of the Caltech which exclusively concentrates on the study of perception, cognition, and action in humans. The lab employs psychophysical paradigms and a variety of recording techniques such as eye-tracking, functional magnetic resonance imaging (fMRI), electroencephalogram (EEG), as well as, brain stimulation techniques such as transcranial magnetic stimulation (TMS), transcranial direct current stimulation (tDCS), and recently ultrasound neuromodulation (UNM). They try to bridge the gap between cognitive and neurosciences. They would like to understand how the brain adapts real-world constraints to resolve perceptual ambiguity and to reach ecologically valid, unique solutions. In addition to their continuing interest in surface representation, motion perception, attention, and action, they also focus on crossmodal integration (including VR environments), visual preference/attractiveness decision, social brain, flow and choke in the game-playing brains and individual differences related to "neural, dynamic fingerprint" of the brain.',
			moderator: 'Ichiro Fujita (Osaka University)',
			photo:
				'https://divisions-prod.s3.amazonaws.com/bbe20/People/Shinsuke%20%28Shin%29%20Shimojo/images/shimojo-2.df3989a7.fill-310x412-c100.jpg',
			link: 'https://neuroscience.caltech.edu/people/shinsuke-shin-shimojo'
		}
		// {
		// 	slot: 3,
		// 	time: 'Monday, 9:30 AM - 10:30 AM',
		// 	name: 'Yang Dan',
		// 	affiliation: 'University of California, Berkeley',
		// 	title: 'A motor theory of sleep-wake control',
		// 	abstract:
		// 		'Sleep is a fundamental biological process observed throughout the animal kingdom, and its disruption has devastating health consequences. Using a combination of optogenetics, electrophysiology, imaging, and gene expression profiling, we identify key neurons in the sleep control circuits and map their synaptic connections. Sleep appears to be controlled by a highly distributed network spanning the forebrain, midbrain, and hindbrain, where REM and non-REM sleep neurons are part of the central somatic and autonomic motor circuits. The intimate association between the sleep and autonomic/somatic motor control circuits suggests that a primary function of sleep is to suppress movement and promote processes incompatible with motor activity.',
		// 	bio: 'Yang Dan, Ph.D. She studied physics as an undergraduate student at Peking University and received her Ph.D. training in Biological Sciences at Columbia University. She did her postdoctoral research at Rockefeller University and Harvard Medical School. She is currently Paul Licht Distinguished Professor in the Department of Molecular and Cell Biology and an investigator of the Howard Hughes Medical Institute at the University of California, Berkeley.',
		// 	moderator: 'Izumi Ohzawa (Osaka University)',
		// 	photo: 'http://visionsociety.jp/apcv2019/images/key-yangdan.jpg'
		// },
		// {
		// 	slot: 4,
		// 	time: 'Wednesday, 17:15 PM - 18:15 PM',
		// 	name: 'Yukiyasu Kamitani',
		// 	affiliation: 'Kyoto University and ATR Computational Neuroscience Laboratories',
		// 	title: 'Reconstructing visual and subjective experience from the brain',
		// 	abstract:
		// 		'The internal visual world is thought to be encoded in hierarchical representations of the brain. However, previous attempts to visualize perceptual contents based on machine-learning analysis of fMRI patterns have been limited to reconstructions with low level image bases or to matchings to exemplars. While categorical decoding of imagery contents has been demonstrated, the reconstruction of internally generated images has been challenging. I introduce our recent study showing that visual cortical activity can be decoded (translated) into the hierarchical features of a pre-trained deep neural network (DNN) for the same input image, providing a way to make use of the information from hierarchical visual features. Next I present a novel image reconstruction method, in which the pixel values of an image are optimized to make its DNN features similar to those decoded from human brain activity at multiple layers. Our method was able to reliably produce reconstructions that resembled the viewed natural images. While our model was solely trained with natural images, it successfully generalized to artificial shapes, indicating that our model was not simply matching to exemplars. The same analysis applied to mental imagery demonstrated rudimentary reconstructions of the subjective content. Our method can effectively combine hierarchical neural representations to reconstruct perceptual and subjective images, providing a new window into the internal contents of the brain.',
		// 	bio: "Yukiyasu Kamitani, Ph.D.. Professor at Kyoto University and Department Head and ATR Fellow at ATR Computational Neuroscience Laboratories. He received B.A. in Cognitive Science from University of Tokyo, and Ph.D. in Computation and Neural Systems from California Institute of Technology. He continued his research in cognitive and computational neuroscience at Harvard Medical School and Princeton University. In 2004 he joined ATR Computational Neuroscience Laboratories, and since 2015 he is Professor at Kyoto University. He is a pioneer in the field of 'brain decoding', which combines neuroimaging and machine learning to translate brain signals to mental contents. He was named Research Leader in Neural Imaging on the 2005 “Scientific American 50”, and received many awards including Tsukahara Memorial Award (2013), JSPS Prize (2014), and Osaka Science Prize (2015). In 2018, he was selected as an ATR Fellow. He is recently engaged in activity in contemporary art with Pierre Huyghe (“UUmwelt” at Serpentine Galleries, London, 2018) and other artists.",
		// 	moderator: "Shin'ya Nishida (Kyoto University, NTT)",
		// 	photo: 'http://visionsociety.jp/apcv2019/images/key-kamitani.jpg'
		// }
	];
</script>

<div class="flex flex-row-reverse justify-center gap-24 mr-4">
	<!-- <aside class="hidden lg:block w-48"> -->
	<!-- Table of Contents -->
	<!-- <TableOfContents class="sticky top-12">On the Page</TableOfContents> -->
	<!-- </aside> -->
	<div
		class="w-full overflow-hidden lg:w-5/6 xl:w-4/6 text-token grid grid-cols-1"
		use:tocCrawler={{ scrollTarget: '#page' }}
	>
		{#each speakers as speaker (speaker.slot)}
			<div
				id={speaker.slot.toString()}
				class={speaker.time}
				use:inview={options}
				on:inview_change={handleChange}
			>
				<Speaker {speaker} />
			</div>
		{/each}
	</div>
</div>
