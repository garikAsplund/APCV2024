<script lang="ts">
	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import { inview } from 'svelte-inview';
	import Speaker from './Speaker.svelte';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { time, title } from '$lib/stores';
	import type { SpeakerType } from '$lib/types';
	import shin from '$lib/images/shin.jpeg?enhanced';
	import jeremy from '$lib/images/jeremy.png?enhanced';
	import wei from '$lib/images/wei.jpeg?enhanced';
	import ning from '$lib/images/ning.jpeg?enhanced';
	import li from '$lib/images/li.jpeg?enhanced';
	import stephanie from '$lib/images/stephanie.jpeg?enhanced';

	// let isInView: boolean;

	// const options: Options = {
	// 	rootMargin: '-50%',
	// 	unobserveOnEnter: true
	// };

	// const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
	// 	isInView = detail.inView;
	// 	$title = detail.node.id;
	// 	$time = detail.node.className;
	// 	console.log({ $time });
	// };

	const speakers: SpeakerType[] = [
		{
			slot: 1,
			time: 'Monday, 9:30 AM - 10:30 AM',
			name: 'Jeremy Wolfe',
			affiliation: 'Professor of Ophthalmology and Radiology',
			school: 'Harvard Medical School',
			title: 'How did I miss that? “Normal Blindness” in the lab, the clinic, and the world',
			abstract: `Why don’t we see everything that we want to see or that we think we should see?
From typos to tumors to gorillas in Introductory Psychology demos, humans manage
to routinely miss targets that are "right in front of our eyes". In the psychologically
most interesting cases, these are instances where observers fail to respond to
stimuli that are clearly visible. The observers may even directly fixate on those
stimuli. Some of these “Looked But Failed to See” (LBFTS) errors are life-threatening
(e.g. missing that tumor or a weapon in carry-on baggage). Nevertheless, such
errors are common enough that we can describe them as “normal blindness". If you
are a radiologist in the US, these errors are also the sort of errors that end up in
court (“Doctor, would you say that this spot that I am pointing at is a sign of cancer?”
If the answer is “yes”, does that mean that it is “negligent” to have missed the
diagnosis?). I will give a four-part account of LBFTS errors: Our vision and attention
are 1) limited, 2) misguided, 3) incomplete, and 4) misunderstood. All four of these
“problems” have evolved to allow us to move through the world, but they are virtually
guaranteed to cause us to miss some significant stimuli. I will illustrate with some
demonstrations and with an emphasis on radiology. If all goes well, you will look, you
will fail to see, and you will gain insight into why that happens.`,
			bio: `Jeremy Wolfe, PhD, is Professor of Ophthalmology and Professor of Radiology at Harvard Medical School and Director of the Visual Attention Lab at Brigham and Women's Hospital in the Department of Surgery. Wolfe received an AB in Psychology in 1977 from Princeton and his PhD in Psychology in 1981 from MIT. His research focuses on visual search and visual attention with a particular interest in socially important search tasks in areas such as medical image perception (e.g. cancer screening), security (e.g. baggage screening), and intelligence. This research has been funded at different times since 1982 by NIH (NEI, NIMH, NCI), NSF, AFOSR (Air Force), ONR (Navy), ARO (Army), Homeland Security, and the Nat. Geospatial Agency as well as by IBM, Google, Toshiba, Hewlett-Packard, & GE. Wolfe taught Introductory Psychology and other courses for 25 years, mostly at MIT. He has served as Past President or Chair of the Federation of Associations in Behavioral and Brain Sciences (FABBS), the Psychonomic Soc, APA Division 3, Eastern Psychological Assoc, NAS Panel on Soldier Systems. He has served on the Governing Boards of the Vision Sciences Society, APA Div 1 and 6. Wolfe was Founding Editor-in-Chief of Cognitive Research: Principles and Implications (CRPI), the newest Psychonomic Society journal, and Past-Editor of Attention, Perception, and Psychophysics. Wolfe also serves on the Board of the North American Board of the Union for Reform Judaism. He was elected to American Academy of Arts and Sciences in 2019.`,
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
			title: `X’ (extreme) Periphery`,
			abstract: `The “X’(extreme) periphery” can be defined by visual eccentricity larger than 60 deg.,
up to the limit of the visual field (90 deg., approximately). This should be of the
central focus of vision scientists who are interested in the situations where the brain
needs to solve the maximum degree of ambiguity in visual inputs. Ironically, very little
has been studied and known. Thus, we have conducted a series of experimental
studies to test our “brain compensation hypothesis” in the past one decade or so,
which are reviewed in this talk with three main themes.</br></br>
1) Auditory-visual integration. A flicker appears faster in the periphery than that with
the same frequency (say 5Hz) in the fovea, but they can be entrained by
synchronous sounds. An auditory primer not always facilitate visual detection, but it
does so when motion direction is consistent (visual moving motion with auditory
Doppler stimulus), or at a particular frequency (eg. 300 Hz).</br></br>
2) Color/location cluttering. Colors and locations are often misperceived in the
X’periphery, especially when crowded. Not only that there are color/relative location
mistakes, some new phenomenological effects are reported in the X’periphery, such
as flashing, dynamic changes of color, filling-in, etc. A cortical-magnification-like
factor tends to be found when the critical size for such illusions is measured at each
eccentricity.</br></br>
3) Action capture. When the observer moves its own hand behind the display, which
can be either dynamic random noise or a low-frequency (say 2-3 Hz) flicker, the
visual stimulus is often “captured” by the hand, thus appear to move along with it.
Own action tends to yield somewhat stronger effect than observing other’s, but the
latter still yields a substantial capture effect.</br></br>
In short, the effects that have been found in the periphery are enhanced or
qualitatively extended (ie. new effects are found) in the X’periphery. A large part of
the findings can be accounted for by the cortical magnification, in that the same size-
dependent perceptual processing operates across eccentricities (including the
X’periphery) and that it is just the size scaling differences. Related to this, we still
need to make two points. First, even if it is just cortical magnification, the
psychophysical findings in the X’periphery would have a wide and profound impacts
in the real-world situations, including driving, VR and display technology, sports,
entertainment, etc. Second and more significantly, there is something more
noticeable, on top of what would be expected from the cortical magnification -
especially related to clarity/stability and confidence on the percept in the X’periphery.
At a glance, it may be puzzling as to why invalid (illusory) percept with confidence is
adaptive or beneficial in any fashion. From the biological and  evolutionary
perspective, a quick “false  alarm” can often be better than a slow “hit” or no
decision, especially when it comes to risk detection.`,
			bio: `Shinsuke Shimojo has received his BA and MA in psychology from the University of
Tokyo (’78, ’80). He has also received his PhD from from MIT under the supervision of
Richard Held. His earlier work include multisensory body sheme, perceptual adaptation
to inverted vision, development of binocular and vernier vision in the infant, occlusion
and surface representation, attention and visual motion, just to name a few.
<br/><br/>
The Shimojo Psychophysics Laboratory is one of the few laboratories on the campus of
the Caltech which exclusively concentrates on the study of perception, cognition, and
action in humans. The lab employs psychophysical paradigms and a variety of
recording techniques such as eye-tracking, functional magnetic resonance imaging
(fMRI), electroencephalogram (EEG), as well as, brain stimulation techniques such as
transcranial magnetic stimulation (TMS), transcranial direct current stimulation (tDCS),
and recently ultrasound neuromodulation (UNM). They try to bridge the gap between
cognitive and neurosciences. They would like to understand how the brain adapts real-
world constraints to resolve perceptual ambiguity and to reach ecologically valid, unique
solutions. In addition to their continuing interest in surface representation, motion
perception, attention, and action, they also focus on crossmodal integration (including
VR environments), perception in the extreme periphery, visual preference/attractiveness
decision, social brain, flow and choke in the game-playing brains and individual
differences related to "neural, dynamic fingerprint" of the brain.`,
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
			title: '"Seeing Blue": The S-cone Pathway in the Mammalian Retina',
			abstract: `The highly conserved ability of animals to detect short-wavelength signals (blue or
ultraviolet light) plays a crucial role in various biological functions and ecological
interactions. This detection is critically dependent on the precise synaptic
connections between short-wavelength sensitive cone photoreceptors (S-cones) and
S-cone bipolar cells (SCBCs), which create a distinct spectral channel. Utilizing a
cone-dominant animal model, the 13-lined ground squirrel, we investigated the
structures and functions of the S-cone pathway in the mammalian retina.
Additionally, we employed a unique deep RNA sequencing technique to probe the
molecular underpinnings of the S-cone specific synaptic wiring.`,
			bio: `Dr. Li received his medical degree in 1997 from Zhejiang University School of Medicine in China and his PhD in Neuroscience in 2003 from the University of Texas at Houston where he studied the organization of reciprocal feedback synapse at the axon terminal of the retinal bipolar cell in Dr. Stephen Massey's laboratory. From 2003 to 2007, as a postdoctoral fellow, he worked with Dr. Steven DeVries at Northwestern University where he investigated synaptic connections between photoreceptors and bipolar neurons in a mammalian retina. Dr. Li joined NEI as the principal investigator of the Unit on Retinal Neurophysiology in 2007. His unit uses a variety of physiological and anatomical techniques to explore retinal synapses and circuits and their functions in vision.
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
			title: 'Receptive-field remapping and space representation across saccades',
			abstract: `The nature and function of perisaccadic receptive-field (RF) remapping have been
controversial. We used a delayed saccade task to reduce previous confounds and
examined the remapping time course in areas LIP and FEF. In the delay period, the
RF shift direction turned from the initial fixation to the saccade target. In the
perisaccadic period, RFs first shifted toward the target (convergent remapping) but
around the time of saccade onset/offset, the shifts became predominantly toward the
post-saccadic RF locations (forward remapping). Thus, unlike forward remapping
that depends on the corollary discharge (CD) of the saccade command, convergent
remapping appeared to follow attention from the initial fixation to the target. We
modelled the data with attention-modulated and CD-gated connections, and showed
that both sets of connections emerged automatically in neural networks trained to
update stimulus retinal locations across saccades. The model also explained the
translational component of perisaccadic perceptual mislocalization of flashed stimuli.
Our work thus integrates seemingly contradictory findings into a computational
mechanism for transsaccadic space representation. (Joint work with Mingsha Zhang
and Mickey Goldberg&#39;s labs.)`,
			bio: `The research in our laboratory focuses on computational and psychophysical studies of visual perception. Unlike machine vision approaches, we emphasize physiological plausibility of our models because such models have more explanatory and predictive power for understanding biological vision. We have been constructing binocular vision models by analyzing known spatiotemporal receptive-field properties of binocular cells in the visual cortex, and have been applying our models to explain depth perception from horizontal disparity (stereovision), vertical disparity (the induced effect), inter-ocular time delay (the Pulfrich effects), motion field (structure-from-motion), and monocular occlusion (da Vinci stereopsis). We also test new predictions from our models via visual psychophysical experiments. A recent emphasis of our research is psychophysical investigation of faces. Face perception is essential for social interactions. While traditional face studies have primarily focused on high-level properties of face perception, we take a complementary approach by investigating contributions of low-level processing along multiple, interactive streams to face perception. We have been studying hierarchical face processing from low to high levels by measuring multi-level adaptation aftereffects. We also plan to conduct computational studies of faces. Finally, we are interested in computational models of motor planning and sensorimotor integration. In particular, we would like to understand synergistic interactions between visual perception and motor control.`,
			moderator: 'Ichiro Fujita (Osaka University)',
			photo: ning,
			link: 'https://www.neurosciencephd.columbia.edu/content/ning-qian-phd'
		},
		{
			slot: 5,
			time: 'Tuesday, 17:15 PM - 18:15 PM',
			name: 'Li Zhaoping',
			affiliation: 'Professor, Head of Sensory and Sensorimotor Systems',
			school: 'Max Planck Institute for Biological Cybernetics',
			title: 'VBC: the V1 Saliency Hypothesis, the Attentional Bottleneck, and the Central-Peripheral Dichotomy',
			abstract: `The V1 Saliency Hypothesis (V1SH) holds that neural responses in primary visual
cortex (V1) to visual inputs form a bottom-up saliency map of the visual field. V1SH
has received convergent experimental support: e.g., V1 activity to a visual location is
correlated with faster saccades to that location in monkeys (Yan, Zhaoping, Li 2018),
and human gaze is strongly attracted to a location with a unique eye-of-origin of
input which V1 responses would single out, even though it is not perceptually
distinctive (Zhaoping 2008).  Since the saliency map guides visual attention to center
the attentional spotlight on the fovea, V1SH motivates the idea that the attentional
bottleneck, which limits the extent of deeper processing of visual information, starts
already at V1&#39;s output to downstream areas along the visual pathway.  Together,
V1SH and the bottleneck motivate the central-peripheral dichotomy (CPD) theory,
which hypothesizes distinct roles for central and peripheral vision that should be
supported by different algorithms and neural architecture (Zhaoping 2019): (1)
peripheral vision is mainly for looking (guiding gaze/attentional shifts) whereas
central vision is mainly for seeing (recognition); (2) top-down feedback from
downstream to upstream regions along the visual pathway should mainly target
central vision to aid seeing by querying for more information from upstream areas
(e.g., V1). I will review recent evidence from neural, fMRI, and psychophysical data
in support of this V1SH-Bottleneck-CPD (VBC) framework.  I will highlight
psychophysical findings from experiments that test two predictions of the VBC
framework: (1) the novel reversed depth illusion, that is only, or more, visible in
peripheral vision; and (2) this illusion nevertheless becomes visible in central vision
when top-down feedback is compromised by backward masking.`,
			bio: `Dr. Li obtained her BS in Physics in 1984 from Fudan University, Shanghai, and PhD in Physics in 1989 from California Institute of Technology. She was a postdoctoral researcher in Fermi National Laboratory in Batavia, Illinois USA, Institute for Advanced Study in Princeton New Jersey, USA, and Rockefeller University in New York USA. She has been a faculty member in Computer Science in Hong Kong University of Science and Technology, and was a visiting scientist at various academic institutions. In 1998, she and her colleagues co-founded the Gatsby Computational Neuroscience Unit in University College London. From Oct. 2018, she is a professor in University of Tuebingen and the head of the Department of Sensory and Sensorimotor Systems at the Max Planck Institute for Biological Cybernetics in Tuebingen, Germany. Her research experience throughout the years ranges from areas in high energy physics to neurophysiology and marine biology, with most experience in understanding the brain functions in <a href="https://www.lizhaoping.org/zhaoping/papers.html" target="_blank" class="underline hover:no-underline">vision</a>, <a href="https://www.lizhaoping.org/zhaoping/olfaction.html" target="_blank" class="underline hover:no-underline">olfaction</a>, and in <a href="https://www.lizhaoping.org/zhaoping/dynamics.html" target="_blank" class="underline hover:no-underline">nonlinear neural dynamics</a>. In late 90s and early 2000s, she proposed a theory (which is being extensively tested) that the primary visual cortex in the primate brain creates a <a href="https://www.lizhaoping.org/zhaoping/V1Saliency.html" target="_blank" class="underline hover:no-underline">saliency map</a> to automatically attract visual attention to salient visual locations. This theory, and the supporting experimental evidence, have led her to propose <a href="https://www.lizhaoping.org/zhaoping/NewPathPaperEtc_2019.html" target="_blank" class="underline hover:no-underline">a new framework for understanding vision</a>. She is also the author of <a href="https://www.lizhaoping.org/zhaoping/VisionBook.html" target="_blank" class="underline hover:no-underline">Understanding Vision: theory, models, and data</a>, Oxford University Press, 2014.`,
			moderator: 'Ichiro Fujita (Osaka University)',
			photo: li,
			link: 'https://www.lizhaoping.org/zhaoping/index.html'
		},
		{
			slot: 6,
			time: 'Tuesday, 17:15 PM - 18:15 PM',
			name: 'Stephanie Goodhew',
			affiliation: 'Associate Professor',
			school: 'The Australian National University',
			title: 'Subjective Cognitive Failures: What Can They Tell Us?',
			abstract: `What do safe driving, healthy eating, and understanding someone else’s perspective
all have in common? They are all underscored by attentional control - the need for
attentional control in our everyday lives is ubiquitous, and individual differences in it
have implications for our health, safety, and relationships. Developing behavioural
measures that can reliably capture the full richness and diversity of attentional
control in our lives has proved challenging. In this talk, I will discuss the insights
offered from an alternative approach: subjective measures of attentional control. I will
focus on the Cognitive Failures Questionnaire (CFQ), which quantifies individual
differences in the extent to which people experience failures of attentional control in
everyday life, such as forgetting appointments and daydreaming when supposed to
be listening. I will present research from my lab about how CFQ scores relate to
objective performance on important tasks that require attentional control such as low
prevalence visual search, and how they relate to different aspects of empathy and
negative affect. Finally, I will discuss our development and validation of the new
“Cognitive Failures Questionnaire 2.0” and show how it explains greater variance in
objective attentional control performance than the original CFQ. This highlights the
insights offered by subjective measures of attentional control and the role attentional
control plays across cognitive, social, and emotional domains.`,
			bio: `Dr. Goodhew is currently an Associate Professor at The Australian National University (ANU).  She completed her PhD at the University of Queensland and then a postdoctoral fellowship at the University of Toronto. She then moved to ANU, where she was previously an ARC Future Fellow, Senior Lecturer, and Australian Research Council (ARC) Discovery Early Career Researcher.
<br/><br/>To err is human: we all make mistakes in everyday life. Sometimes such everyday cognitive slips and lapses have relatively trivial consequences, such as the inconvenience of missing a forgotten-about appointment. But other times, such cognitive failures can have profound consequences, such as failing to notice a safety-critical sign by the side of the road resulting in a car crash. While everyone succumbs to cognitive failures, there are clear and meaningful individual differences in the frequency with which they are experienced. One measure that has a long and illustrious history of measuring these differences is the Cognitive Failures Questionnaire (CFQ). CFQ scores are related to a host of important real-world outcomes, such as a person’s risk of being responsible for a car crash or work accident. Dr. Goodhew has an ongoing program of research investigating the mechanisms underlying cognitive failures, and assessing the convergences and divergences between people’s subjective experiences of cognitive failures and their objective performance on important cognitive tasks.`,
			moderator: 'Ichiro Fujita (Osaka University)',
			photo: stephanie,
			link: 'https://psychology.anu.edu.au/people/academics/prof-stephanie-goodhew'
		}
	];
</script>

<header class="flex w-full justify-between items-baseline mt-12 mb-8">
	<h2 class="h2 scroll-mt-5" id="Keynotes">Keynote speakers</h2>
</header>
<div class="flex flex-row-reverse justify-center gap-24 mr-4">
	<!-- <aside class="hidden lg:block w-48"> -->
	<!-- Table of Contents -->
	<!-- <TableOfContents class="sticky top-12">On the Page</TableOfContents> -->
	<!-- </aside> -->

	<div class="w-full overflow-hidden text-token grid grid-cols-1">
		{#each speakers as speaker (speaker.slot)}
			<div id={speaker.slot.toString()}>
				<Speaker {speaker} />
			</div>
		{/each}
	</div>
</div>
