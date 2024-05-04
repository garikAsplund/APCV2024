<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { inview } from 'svelte-inview';
	import Speaker from './Speaker.svelte';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { time, title } from '$lib/stores';
	import type { SpeakerType } from '$lib/types';
	import shin from '$lib/images/shin.jpeg?enhanced';
	import jeremy from '$lib/images/jeremy.jpeg?enhanced';
	import wei from '$lib/images/wei.jpeg?enhanced';
	import ning from '$lib/images/ning.jpeg?enhanced';

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
			photo: jeremy,
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
			photo: shin,
			link: 'https://neuroscience.caltech.edu/people/shinsuke-shin-shimojo'
		},
		{
			slot: 3,
			time: 'Tuesday, 17:15 PM - 18:15 PM',
			name: 'Wei Li',
			affiliation: 'Senior Investigator, Retinal Neurophysiology Section',
			school: 'National Eye Institute',
			title: 'Pluripotent stem cell derived photoreceptor transplantation',
			abstract: `Photoreceptor transplantation is a possible treatment to restore visual function to photoreceptor only degenerated retinas such as retinitis pigmentosa. We have been reported that the sensory retinal sheet transplantation, which supplies photoreceptors and secondary retinal neurons, can reintroduce visual function in mice with end-stage retinal degeneration. For the photoreceptor transplantation, previously many groups used photoreceptor suspension. However, it was revealed in 2017 that in those suspension transplantation GFP positive cells were host cells that have material transfer from grafted cells. In fact, transplanted retinal sheets survive for a longer period than suspended cells. Furthermore, only retinal sheets could become mature in the subretinal space and obtain tissue structure with outer segments of photoreceptors after transplantation. To confirm the functional recovery by the grafted sheets, we developed new disease mice models and functional tests analysis. With those, synaptic contact between graft photoreceptors and host bipolar cells was confirmed by immunohistochemistry, electrical physiology, and behavior tests. MEA recording showed that grafted cells could elicit light responses in the host ganglion cells.
  Now we are investigating how to increase the number of synapses and efficacy of transplantation. However, immunohistochemical characterization of synapse in the degenerated retina or of grafted retina is often challenging, as traits are not as clear as in the wild type retina. Therefore, using postnatal wild type mouse retina as a training data, we developed a new method to objectively count synapses. Using this method, we evaluated the synapses of iPSC-retina after transplantation to rd1 mice. The number of synapses increased on 30 days after transplantation, while we could not found any synapse formation in in vtro retinal organoids. The synapse numbers were more in the light/dark cycle environment than completely dark one.
  I will talk about the future strategy of outer retinal transplantation.`,
			bio: `Dr. Li received his medical degree in 1997 from Zhejiang University School of Medicine in China and his Ph.D. in Neuroscience in 2003 from the University of Texas at Houston where he studied the organization of reciprocal feedback synapse at the axon terminal of the retinal bipolar cell in Dr. Stephen Massey's laboratory. From 2003 to 2007, as a postdoctoral fellow, he worked with Dr. Steven DeVries at Northwestern University where he investigated synaptic connections between photoreceptors and bipolar neurons in a mammalian retina. Dr. Li joined NEI as the principal investigator of the Unit on Retinal Neurophysiology in 2007. His unit uses a variety of physiological and anatomical techniques to explore retinal synapses and circuits and their functions in vision.
<br/><br/>The long-term goal of our research is to study the mammalian retina as a model for the central nervous system (CNS) -- to understand how it functions in physiological conditions, how it is formed, how it breaks down in pathological conditions, and how it can be repaired. We have focused on two research themes: 1) Photoreceptor structure, synapse, circuits, and development, 2) Hibernation and metabolic adaptations in the retina and beyond. As the first neuron of the visual system, photoreceptors are vital for photoreception and transmission of visual signals. We are particularly interested in cone photoreceptors, as they mediate our daylight vision with high resolution color information. Diseases affecting cone photoreceptors compromise visual functions in the central macular area of the human retina and are thus most detrimental to our vision. However, because cones are much less abundant compared to rods in most mammals, they are less well studied. We have used the ground squirrel (GS) as a model system to study cone vision, taking advantage of their unique cone-dominant retina. In particular, we have focused on short-wavelength sensitive cones (S-cones), which are not only essential for color vision, but are also an important origin of signals for biological rhythm, mood and cognitive functions, and the growth of the eye during development. We are studying critical cone synaptic structures – synaptic ribbons, the synaptic connections of S-cones, and the development of S-cones with regard to their specific connections. These works will provide knowledge of normal retinal development and function, which can also be extended to the rest of CNS. In addition, such knowledge will benefit the development of optimal therapeutic strategies for regeneration and repair in cases of retinal degenerative disease. Many neurodegenerative diseases, including retinal diseases, are rooted in metabolic stress in neurons and/or glial cells. Using the same GS model, we aim to learn from this hibernating mammal, which possesses an amazing capability to adapt to the extreme metabolic conditions during hibernation. By exploring the mechanisms of such adaptation, we hope to discover novel therapeutic tactics for neurodegenerative diseases.`,
			moderator: 'Ichiro Fujita (Osaka University)',
			photo: wei,
			link: 'https://irp.nih.gov/pi/wei-li'
		},
		{
			slot: 4,
			time: 'Tuesday, 17:15 PM - 18:15 PM',
			name: 'Ning Qian',
			affiliation: 'Associate Professor of Neuroscience / Physiology & Cellular Biophysics',
			school: 'Columbia University',
			title: 'Pluripotent stem cell derived photoreceptor transplantation',
			abstract: `Photoreceptor transplantation is a possible treatment to restore visual function to photoreceptor only degenerated retinas such as retinitis pigmentosa. We have been reported that the sensory retinal sheet transplantation, which supplies photoreceptors and secondary retinal neurons, can reintroduce visual function in mice with end-stage retinal degeneration. For the photoreceptor transplantation, previously many groups used photoreceptor suspension. However, it was revealed in 2017 that in those suspension transplantation GFP positive cells were host cells that have material transfer from grafted cells. In fact, transplanted retinal sheets survive for a longer period than suspended cells. Furthermore, only retinal sheets could become mature in the subretinal space and obtain tissue structure with outer segments of photoreceptors after transplantation. To confirm the functional recovery by the grafted sheets, we developed new disease mice models and functional tests analysis. With those, synaptic contact between graft photoreceptors and host bipolar cells was confirmed by immunohistochemistry, electrical physiology, and behavior tests. MEA recording showed that grafted cells could elicit light responses in the host ganglion cells.
  Now we are investigating how to increase the number of synapses and efficacy of transplantation. However, immunohistochemical characterization of synapse in the degenerated retina or of grafted retina is often challenging, as traits are not as clear as in the wild type retina. Therefore, using postnatal wild type mouse retina as a training data, we developed a new method to objectively count synapses. Using this method, we evaluated the synapses of iPSC-retina after transplantation to rd1 mice. The number of synapses increased on 30 days after transplantation, while we could not found any synapse formation in in vtro retinal organoids. The synapse numbers were more in the light/dark cycle environment than completely dark one.
  I will talk about the future strategy of outer retinal transplantation.`,
			bio: `The research in our laboratory focuses on computational and psychophysical studies of visual perception. Unlike machine vision approaches, we emphasize physiological plausibility of our models because such models have more explanatory and predictive power for understanding biological vision. We have been constructing binocular vision models by analyzing known spatiotemporal receptive-field properties of binocular cells in the visual cortex, and have been applying our models to explain depth perception from horizontal disparity (stereovision), vertical disparity (the induced effect), inter-ocular time delay (the Pulfrich effects), motion field (structure-from-motion), and monocular occlusion (da Vinci stereopsis). We also test new predictions from our models via visual psychophysical experiments. A recent emphasis of our research is psychophysical investigation of faces. Face perception is essential for social interactions. While traditional face studies have primarily focused on high-level properties of face perception, we take a complementary approach by investigating contributions of low-level processing along multiple, interactive streams to face perception. We have been studying hierarchical face processing from low to high levels by measuring multi-level adaptation aftereffects. We also plan to conduct computational studies of faces. Finally, we are interested in computational models of motor planning and sensorimotor integration. In particular, we would like to understand synergistic interactions between visual perception and motor control.`,
			moderator: 'Ichiro Fujita (Osaka University)',
			photo: ning,
			link: 'https://www.neurosciencephd.columbia.edu/content/ning-qian-phd'
		}
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
