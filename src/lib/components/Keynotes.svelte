<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	interface Speaker {
		slot: number;
		time: string;
		name: string;
		affiliation: string;
		title: string;
		abstract: string;
		bio: string;
		moderator: string;
		photo: string;
	}

	const speakers: Speaker[] = [
		{
			slot: 1,
			time: 'Monday, 9:30 AM - 10:30 AM',
			name: 'Yukiyasu Kamitani',
			affiliation: 'Kyoto University and ATR Computational Neuroscience Laboratories',
			title: 'Reconstructing visual and subjective experience from the brain',
			abstract:
				'The internal visual world is thought to be encoded in hierarchical representations of the brain. However, previous attempts to visualize perceptual contents based on machine-learning analysis of fMRI patterns have been limited to reconstructions with low level image bases or to matchings to exemplars. While categorical decoding of imagery contents has been demonstrated, the reconstruction of internally generated images has been challenging. I introduce our recent study showing that visual cortical activity can be decoded (translated) into the hierarchical features of a pre-trained deep neural network (DNN) for the same input image, providing a way to make use of the information from hierarchical visual features. Next I present a novel image reconstruction method, in which the pixel values of an image are optimized to make its DNN features similar to those decoded from human brain activity at multiple layers. Our method was able to reliably produce reconstructions that resembled the viewed natural images. While our model was solely trained with natural images, it successfully generalized to artificial shapes, indicating that our model was not simply matching to exemplars. The same analysis applied to mental imagery demonstrated rudimentary reconstructions of the subjective content. Our method can effectively combine hierarchical neural representations to reconstruct perceptual and subjective images, providing a new window into the internal contents of the brain.',
			bio: "Yukiyasu Kamitani, Ph.D.. Professor at Kyoto University and Department Head and ATR Fellow at ATR Computational Neuroscience Laboratories. He received B.A. in Cognitive Science from University of Tokyo, and Ph.D. in Computation and Neural Systems from California Institute of Technology. He continued his research in cognitive and computational neuroscience at Harvard Medical School and Princeton University. In 2004 he joined ATR Computational Neuroscience Laboratories, and since 2015 he is Professor at Kyoto University. He is a pioneer in the field of 'brain decoding', which combines neuroimaging and machine learning to translate brain signals to mental contents. He was named Research Leader in Neural Imaging on the 2005 “Scientific American 50”, and received many awards including Tsukahara Memorial Award (2013), JSPS Prize (2014), and Osaka Science Prize (2015). In 2018, he was selected as an ATR Fellow. He is recently engaged in activity in contemporary art with Pierre Huyghe (“UUmwelt” at Serpentine Galleries, London, 2018) and other artists.",
			moderator: "Shin'ya Nishida (Kyoto University, NTT)",
			photo: 'http://visionsociety.jp/apcv2019/images/key-kamitani.jpg'
		},
		{
			slot: 2,
			time: 'Tuesday, 17:15 PM - 18:15 PM',
			name: 'Masayo Takahashi',
			affiliation: 'Center for Biosystems Dynamics Research, RIKEN',
			title: 'Pluripotent stem cell derived photoreceptor transplantation',
			abstract: `Photoreceptor transplantation is a possible treatment to restore visual function to photoreceptor only degenerated retinas such as retinitis pigmentosa. We have been reported that the sensory retinal sheet transplantation, which supplies photoreceptors and secondary retinal neurons, can reintroduce visual function in mice with end-stage retinal degeneration. For the photoreceptor transplantation, previously many groups used photoreceptor suspension. However, it was revealed in 2017 that in those suspension transplantation GFP positive cells were host cells that have material transfer from grafted cells. In fact, transplanted retinal sheets survive for a longer period than suspended cells. Furthermore, only retinal sheets could become mature in the subretinal space and obtain tissue structure with outer segments of photoreceptors after transplantation. To confirm the functional recovery by the grafted sheets, we developed new disease mice models and functional tests analysis. With those, synaptic contact between graft photoreceptors and host bipolar cells was confirmed by immunohistochemistry, electrical physiology, and behavior tests. MEA recording showed that grafted cells could elicit light responses in the host ganglion cells.
  Now we are investigating how to increase the number of synapses and efficacy of transplantation. However, immunohistochemical characterization of synapse in the degenerated retina or of grafted retina is often challenging, as traits are not as clear as in the wild type retina. Therefore, using postnatal wild type mouse retina as a training data, we developed a new method to objectively count synapses. Using this method, we evaluated the synapses of iPSC-retina after transplantation to rd1 mice. The number of synapses increased on 30 days after transplantation, while we could not found any synapse formation in in vtro retinal organoids. The synapse numbers were more in the light/dark cycle environment than completely dark one.
  I will talk about the future strategy of outer retinal transplantation.`,
			bio: 'Masayo Takahashi M.D., Ph.D. Project leader at Laboratory for Retinal Regeneration, RIKEN Center for Biosystems Dynamics Research. She received her Ph.D. from Kyoto University. After serving as an assistant professor in the Kyoto University Hospital, she moved to the Salk Institute, U.S., where she discovered the potential of stem cells as a tool for retinal therapy. She has joined RIKEN since 2006.',
			moderator: 'Ichiro Fujita (Osaka University)',
			photo: 'http://visionsociety.jp/apcv2019/images/key-takahashi.jpg'
		},
		{
			slot: 3,
			time: 'Monday, 9:30 AM - 10:30 AM',
			name: 'Yang Dan',
			affiliation: 'University of California, Berkeley',
			title: 'A motor theory of sleep-wake control',
			abstract:
				'Sleep is a fundamental biological process observed throughout the animal kingdom, and its disruption has devastating health consequences. Using a combination of optogenetics, electrophysiology, imaging, and gene expression profiling, we identify key neurons in the sleep control circuits and map their synaptic connections. Sleep appears to be controlled by a highly distributed network spanning the forebrain, midbrain, and hindbrain, where REM and non-REM sleep neurons are part of the central somatic and autonomic motor circuits. The intimate association between the sleep and autonomic/somatic motor control circuits suggests that a primary function of sleep is to suppress movement and promote processes incompatible with motor activity.',
			bio: 
'Yang Dan, Ph.D. She studied physics as an undergraduate student at Peking University and received her Ph.D. training in Biological Sciences at Columbia University. She did her postdoctoral research at Rockefeller University and Harvard Medical School. She is currently Paul Licht Distinguished Professor in the Department of Molecular and Cell Biology and an investigator of the Howard Hughes Medical Institute at the University of California, Berkeley.',
            moderator: 'Izumi Ohzawa (Osaka University)',
			photo: 'http://visionsociety.jp/apcv2019/images/key-yangdan.jpg'
		},
		{
			slot: 4,
			time: 'Wednesday, 17:15 PM - 18:15 PM',
			name: 'Yukiyasu Kamitani',
			affiliation: 'Kyoto University and ATR Computational Neuroscience Laboratories',
			title: 'Reconstructing visual and subjective experience from the brain',
			abstract:
				'The internal visual world is thought to be encoded in hierarchical representations of the brain. However, previous attempts to visualize perceptual contents based on machine-learning analysis of fMRI patterns have been limited to reconstructions with low level image bases or to matchings to exemplars. While categorical decoding of imagery contents has been demonstrated, the reconstruction of internally generated images has been challenging. I introduce our recent study showing that visual cortical activity can be decoded (translated) into the hierarchical features of a pre-trained deep neural network (DNN) for the same input image, providing a way to make use of the information from hierarchical visual features. Next I present a novel image reconstruction method, in which the pixel values of an image are optimized to make its DNN features similar to those decoded from human brain activity at multiple layers. Our method was able to reliably produce reconstructions that resembled the viewed natural images. While our model was solely trained with natural images, it successfully generalized to artificial shapes, indicating that our model was not simply matching to exemplars. The same analysis applied to mental imagery demonstrated rudimentary reconstructions of the subjective content. Our method can effectively combine hierarchical neural representations to reconstruct perceptual and subjective images, providing a new window into the internal contents of the brain.',
			bio: "Yukiyasu Kamitani, Ph.D.. Professor at Kyoto University and Department Head and ATR Fellow at ATR Computational Neuroscience Laboratories. He received B.A. in Cognitive Science from University of Tokyo, and Ph.D. in Computation and Neural Systems from California Institute of Technology. He continued his research in cognitive and computational neuroscience at Harvard Medical School and Princeton University. In 2004 he joined ATR Computational Neuroscience Laboratories, and since 2015 he is Professor at Kyoto University. He is a pioneer in the field of 'brain decoding', which combines neuroimaging and machine learning to translate brain signals to mental contents. He was named Research Leader in Neural Imaging on the 2005 “Scientific American 50”, and received many awards including Tsukahara Memorial Award (2013), JSPS Prize (2014), and Osaka Science Prize (2015). In 2018, he was selected as an ATR Fellow. He is recently engaged in activity in contemporary art with Pierre Huyghe (“UUmwelt” at Serpentine Galleries, London, 2018) and other artists.",
			moderator: "Shin'ya Nishida (Kyoto University, NTT)",
			photo: 'http://visionsociety.jp/apcv2019/images/key-kamitani.jpg'
		}
	];
</script>

<div class="w-full text-token grid grid-cols-1 gap-4 mt-12">
	{#each speakers as speaker}
		<div class="card variant-glass overflow-hidden">
			<div class="flex flex-col lg:flex-row">
				<div class="p-4 space-y-4 flex flex-col text-left">
					<div class="flex flex-col items-baseline">
						<h2 class="h2" data-toc-ignore>{speaker.title}</h2>
						<h5 class="h5 text-surface-600-300-token opacity-80">{speaker.time}</h5>
					</div>
					<div>
						<h1 class="h3">{speaker.name}</h1>
						<h5 class="h5 text-surface-600-300-token opacity-80">{speaker.affiliation}</h5>
					</div>
				</div>
				<picture class="hidden lg:block">
					<img
						src={speaker.photo}
						class="overflow-hidden object-top object-cover"
                        width="auto"
                        height="112"
						alt={`Keynote speaker ${speaker.name}`}
					/>
				</picture>
			</div>
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6m4 16H5V5h9v5h5m-2 4H7v-2h10m-3 5H7v-2h7"
							/></svg
						>
					</svelte:fragment>
					<svelte:fragment slot="summary"><h4 class="h4">Abstract</h4></svelte:fragment>
					<svelte:fragment slot="content">
						<div in:fly={{ duration: 200, y: -20 }}>
							<article class="text-left">
								<p>
									<!-- cspell:disable -->
									{speaker.abstract}
									<!-- cspell:enable -->
								</p>
							</article>
						</div>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M21 5v2H3V5h18M3 17h9v-2H3v2m0-5h18v-2H3v2m15 2a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m-4 8v-1c0-1.1 1.79-2 4-2s4 .9 4 2v1h-8Z"
							/></svg
						></svelte:fragment
					>
					<svelte:fragment slot="summary"><h4 class="h4">Bio</h4></svelte:fragment>
					<svelte:fragment slot="content">
						<div in:fly={{ duration: 200, y: -20 }}>
							<article class="text-left">
								<p>
									<!-- cspell:disable -->
									{speaker.bio}
									<!-- cspell:enable -->
								</p>
							</article>
						</div>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4">
				<div class="flex-auto flex justify-between items-center">
					<p class="" data-toc-ignore>Moderated by {speaker.moderator}</p>
				</div>
			</footer>
		</div>
	{/each}
</div>
