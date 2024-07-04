<script lang="ts">
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import PhotoSwipe from '$lib/components/PhotoSwipe.svelte';
	// import type { GalleryItem } from '$lib/components/PhotoSwipe.svelte';
	const images = [
		{
			largeURL:
				'https://www.yale-nus.edu.sg/college-life/wp-content/uploads/sites/28/2022/01/TCT-new-pic-3-scaled.jpg',
			thumbnailURL:
				'https://www.yale-nus.edu.sg/college-life/wp-content/uploads/sites/28/2022/01/TCT-new-pic-3-scaled.jpg',
			width: '100%',
			height: 'auto'
		}
		// {
		// 	largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
		// 	thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
		// 	width: 1669,
		// 	height: 2500
		// },
		// {
		// 	largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
		// 	thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
		// 	width: 2500,
		// 	height: 1666
		// }
	];

	// import campusImageDark from '$lib/images/yale-nus.jpeg';

	const hotels = [
		// {
		// 	name: 'Prince George’s Park Residence (PGPR)',
		// 	website: 'https://uci.nus.edu.sg/ceu/student-hostel/pgpr/',
		// 	address: '',
		// 	info: '$ On campus hostel with standard rooms, common corridor, no A/C'
		// },
		{
			name: 'Fragrance Hotel',
			website: 'https://www.fragrancehotel.com/our-hotels/fragrance-oceanview.html',
			address: '432 Pasir Panjang Road',
			info: '$$ 30 minute walk or 15 minutes on bus 183'
		},
		{
			name: 'ibis budget Singapore West Coast',
			website: 'https://all.accor.com/hotel/B6I3/index.en.shtml',
			address: '418 Pasir Panjang Road',
			info: '$$ 30 minute walk or 15 minutes on bus 183'
		},
		{
			name: 'Park Avenue Rochester',
			website: 'https://parkavenuegroup.com/property/singapore-rochester-parkavenue/',
			address: '31 Rochester Drive Park',
			info: '$$$ 30 minute walk or 15 minutes on bus 196'
		},
		{
			name: 'Travelodge Harbourfront',
			website: 'https://www.travelodgehotels.asia/travelodge-harbourfront/',
			address: '50 Telok Blangah Road',
			info: '$$$ 45 minutes on public transit or 15 minutes by car'
		}

		// { name: '', website: '', address: ''},
	];
</script>

<header class="flex w-full justify-between items-baseline mt-12 mb-8">
	<h2 class="h2 scroll-mt-5" id="Getting to NUS">Conference venue</h2>
</header>

<div class="mb-6 space-y-36 ml-4">
	<article class="text-left space-y-6 text-lg text-surface-600-300-token leading-loose">
		{#if $modeCurrent === true}
			<enhanced:img src="$lib/images/yale-nus-day.jpeg" alt="Yale-NUS campus during daytime" />
		{:else}
			<enhanced:img src="$lib/images/yale-nus.jpeg" alt="Yale-NUS campus at night" />{/if}
		<p>
			<a href="https://www.yale-nus.edu.sg/" class="underline hover:no-underline" target="_blank">
				Yale-NUS College</a
			> is a residential liberal arts college that was founded by the National University of Singapore
			and Yale University in 2011. Its beautiful facilities include a performance hall, lecture spaces,
			a black box theatre, a library, and a multipurpose hall—all built around a green space and pond.
		</p>
		<!-- <PhotoSwipe {images} galleryID="my-test-gallery" /> -->
		<p>
			The conference will enjoy the use of these spaces, and the College is also a convenient
			launching point for exploring other parts of Singapore.
		</p>
		<br />
		{#if $modeCurrent === true}
			<enhanced:img src="$lib/images/yale-nus-banner.jpeg" alt="Yale-NUS campus" />
		{:else}
			<enhanced:img src="$lib/images/yale-nus-night.jpeg" alt="Yale-NUS campus" />
		{/if}
	</article>
</div>

<header class="flex w-full justify-between items-baseline mt-12 mb-8">
	<h2 class="h2 scroll-mt-5" id="Food">Food</h2>
</header>

<div class="mb-6 space-y-36 ml-4">
	<article class="text-left space-y-6 text-lg text-surface-600-300-token leading-loose">
		<div>
			<ul class="list-disc ml-4">
				<li class="mt-2">
					Catered buffet lunch as well as morning and afternoon coffee, tea, and snacks provided by
					<a href="https://grain.com.sg/" class="underline hover:no-underline" target="_blank"
						>Grain</a
					>. Vegetarian and vegan options will be available, and Grain is Halal certified.
				</li>
				<li class="mt-2">
					Closing Banquet at
					<a href="https://www.sirihouse.com/" class="underline hover:no-underline" target="_blank"
						>Siri House</a
					>. Buses will depart from the Oculus at 6:15-6:30 pm on 12 July. Buses will depart Siri
					House at 9:00 pm and 10:00 pm, making stops at Holland Village MRT station, Buona Vista
					MRT station, Kent Ridge MRT station, and Prince George Park Residence.
				</li>
				<li class="mt-2">
					There are also numerous food options around UTown. See
					<a
						href="https://uci.nus.edu.sg/oca/retail-dining/food-and-beverage-utown/"
						class="underline hover:no-underline"
						target="_blank">here</a
					>
					for descriptions and hours.
				</li>
			</ul>
		</div>
	</article>
</div>

<header class="flex w-full justify-between items-baseline mt-12 mb-8">
	<h2 class="h2 scroll-mt-5" id="Getting here">Getting here</h2>
</header>

<div class="mb-6 space-y-36 ml-4">
	<article class="text-left space-y-6 text-lg text-surface-600-300-token leading-loose">
		<p>
			The National University of Singapore is located eight kilometers west of the city centre. It
			has good public transportation links and internal shuttle buses.
		</p>
		<p>
			The nearest MRT station is
			<a
				class="underline hover:no-underline"
				href="https://maps.app.goo.gl/MHYMQzXLaDDa4oyk9"
				target="_blank">Kent Ridge</a
			>
			<span
				style="display:inline-block;background-color:#fa9e0d;text-align:center;line-height:18px;border-radius: 9px 9px 9px 9px;color:#000000"
				><span class="nowrap">&nbsp;</span><b>CC24</b><span class="nowrap">&nbsp;</span></span
			>
			on the Circle Line.
		</p>
		<p>
			Yale-NUS College is located in UTown, in the northeast corner of NUS’ Kent Ridge campus. To
			get from Kent Ridge MRT to UTown, take the D2 or BTC bus provided by the <a
				class="underline hover:no-underline"
				href="https://uci.nus.edu.sg/oca/mobilityservices/getting-around-nus/"
				target="_blank">NUS Internal Shuttle Bus (ISB)</a
			>. There are covered paths from the bus stop to Yale-NUS College.
		</p>
		<p>Video showing the route from the UTown bus stop to the Oculus in Yale-NUS College:</p>
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/_NUhzN97fj4?si=A8QckkdN24mf_6-l"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
		<p>
			Alternatively, you can reach Yale-NUS College from other parts of Singapore by bus. The final
			stop is the <a
				class="underline hover:no-underline"
				href="https://businterchange.net/sgbus/stops/busstop.php?stop=17099"
				target="_blank">Yale-NUS bus stop</a
			> bus stop on Clementi Road, serviced by buses 33, 151, 183, or 196.
		</p>
		<h4 class="h4 text-surface-300-600" data-toc-ignore>From the airport</h4>
		<br />
		<enhanced:img
			src="$lib/images/jewel.jpeg"
			alt="Jewel Changi Airport"
			title="Jewel Changi Airport"
		/>
		<p>
			If you are coming from Changi Airport, take the Green Line to Buona Vista
			<span class="nobold"
				><span style="display:inline-block"
					><span
						style="background-color: rgb(0, 150, 69); text-align: center; line-height: 18px; border-radius: 9px 0px 0px 9px; color: rgb(255, 255, 255); --darkreader-inline-bgcolor: #007837; --darkreader-inline-color: #e8e6e3;"
						data-darkreader-inline-bgcolor=""
						data-darkreader-inline-color=""
						><span class="nowrap">&nbsp;</span><b>EW21</b><span class="nowrap">&nbsp;</span></span
					><span
						style="text-align: center; line-height: 18px; border-radius: 0px 9px 9px 0px; background-color: rgb(250, 158, 13); color: rgb(0, 0, 0); --darkreader-inline-bgcolor: #c37904; --darkreader-inline-color: #e8e6e3;"
						data-darkreader-inline-bgcolor=""
						data-darkreader-inline-color=""
						><span class="nowrap">&nbsp;</span><b>CC22</b><span class="nowrap">&nbsp;</span></span
					></span
				></span
			>, then transfer to the Circle Line and exit at Kent Ridge
			<span
				style="display:inline-block;background-color:#fa9e0d;text-align:center;line-height:18px;border-radius: 9px 9px 9px 9px;color:#000000"
				><span class="nowrap">&nbsp;</span><b>CC24</b><span class="nowrap">&nbsp;</span></span
			>. The first train usually departs at 05:31 and the last train at 23:18.
		</p>
		<p>
			Alternatively, a taxi or a ride-hailing service will get you to NUS in about 30 minutes and
			costs S$25-S$45. These services are readily available 24 hours a day.
		</p>
		<div class="flex w-full bg-scroll h-96 scrollbar-hide mb-36 mt-12 -z-10">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d127638.8997376693!2d103.80554313217303!3d1.3471019281288241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x31da3c8c163db417%3A0x7aedf4da3cd9f636!2sChangi%20Airport%2C%2070%20Airport%20Blvd.%2C%20Singapore%20819661!3m2!1d1.35731!2d103.98836!4m5!1s0x31da1bcc1e50d8ff%3A0x1807cfeadf8b230f!2sSouth%20Buona%20Vista%20Road%2C%20Kent%20Ridge%20MRT%20Station%20(CC24)%2C%20Singapore!3m2!1d1.2933881!2d103.7842699!5e0!3m2!1sen!2sus!4v1713131047568!5m2!1sen!2sus"
				class="w-full saturate-100 contrast-125 {$modeCurrent ? '' : 'invert hue-rotate-180'}"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				title="Transit from Changi to NUS"
				referrerpolicy="no-referrer-when-downgrade"
			>
			</iframe>
		</div>
	</article>
</div>
<hr class="opacity-50" />
<!-- 
<header class="flex w-full justify-between items-baseline mt-36 h-24">
	<h2 class="h2 scroll-mt-24" id="Lecture halls">Lecture halls</h2>
</header>

<div class=" mb-6 space-y-36 ml-4">
	<article class="text-left text-lg">
		<p class="text-surface-600-300-token leading-loose">
			Talks and poster sessions will be held in the Faculty of Science and School of Medicine.
			<br />
			LT27 as seen from Lower Kent Ridge Road:
		</p>
		<img
			class="mb-24"
			src="https://phylorf.org/wp-content/uploads/2023/02/NUS_SoC_LT27.jpg"
			alt="LT27 as seen from Lower Kent Ridge Road"
		/>
		<div class="flex w-full bg-scroll h-96 scrollbar-hide mb-3 -z-10">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6579.5327889352475!2d103.77745238654909!3d1.2956608320922984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a51363c2731%3A0xc4627bf2b73714bf!2sMD6%20-%20Centre%20for%20Translational%20Medicine!5e0!3m2!1sen!2sus!4v1712206289338!5m2!1sen!2sus"
				class="w-full saturate-100 contrast-125"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				title="Map of Singapore and NUS"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</article>
</div>
<hr class="opacity-50" /> -->

<header class="flex w-full justify-between items-baseline mt-36 h-24">
	<h2 class="h2 scroll-mt-5" id="The city">The city</h2>
</header>

<div class=" mb-6 space-y-36 ml-4">
	<article class="text-left space-y-6 text-lg text-surface-600-300-token leading-loose">
		<!-- {#if $modeCurrent === true}
			<img src="" alt="" />
		{:else}
			<img
				src="https://www.yale-nus.edu.sg/wp-content/uploads/2016/07/Banner-Campus-1024x441.jpg"
				alt="Singapore"
			/>
		{/if} -->
		<p>
			Singapore is a vibrant city-state located just north of the equator at the tip of the Malay
			peninsula. The island is only 734 square kilometers, yet contains some five million people.
		</p>
		<p>
			Most Singaporeans are ethnically Chinese, Indian, and Malay, and these different backgrounds
			combine with global influences to produce a culture of diverse food, architecture, religion,
			art, and institutions. Many cultural elements reflect their origins, but they also have unique
			combinations and expressions in Singapore.
		</p>
		<p>
			Despite being a bustling and efficient metropolis, Singapore is also a "city in a garden".
			Tended greenery abounds, as do wilder areas in both the island's center and its coasts.
		</p>
		<img
			class="mb-24 {$modeCurrent ? '' : ' saturate-75 brightness-75'}"
			src="https://images.unsplash.com/photo-1576669489170-fa28e7b823db?q=80&w=3562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="A city in a garden"
		/>
	</article>
</div>
<hr class="opacity-50" />

<header class="flex w-full justify-between items-baseline mt-36 h-24">
	<h2 class="h2 scroll-mt-5" id="Where to stay">Where to stay</h2>
</header>

<div class=" mb-6 space-y-36 ml-4">
	<article class="text-left text-lg space-y-6">
		<!-- {
			name: 'Prince George’s Park Residence (PGPR)',
			website: 'https://uci.nus.edu.sg/ceu/student-hostel/pgpr/',
			address: '',
			info: '$ On campus hostel with standard rooms, common corridor, no A/C'
		}, -->
		<h4 class="h4 text-surface-300-600" data-toc-ignore>University housing</h4>
		<p class="text-surface-600-300-token leading-loose">
			There is limited university housing available at a reasonable rate. A single room is S$57 per
			night for students and S$80 per night for others. Check-in is after 2 p.m. on 9 July and
			check-out is before 12 p.m. on 13 July. Although we cannot guarantee housing after the 13 May
			deadline, you can still indicate if you are interested in this option during conference
			registration. We will then check with the University to see whether any rooms are still
			available.
		</p>
		<p class="text-surface-600-300-token leading-loose">
			Rooms are air-conditioned and furnished with a single bed, a ceiling fan, a writing desk and
			chair, a bookshelf, a wardrobe and a mobile pedestal. Shower and toilet facilities as well as
			kitchenettes are located along the common corridors.
		</p>
		<ul class="mx-6 pb-6">
			<li>
				<a
					href="https://uci.nus.edu.sg/ceu/student-hostel/pgpr/"
					target="_blank"
					class="underline hover:no-underline">Prince George’s Park Residence</a
				>
				|
				<span class="text-base"
					>$ 45 minute walk or 15 minutes on <a
						class="underline hover:no-underline"
						href="https://uci.nus.edu.sg/oca/mobilityservices/getting-around-nus/"
						target="_blank">bus D2</a
					>.</span
				>
			</li>
		</ul>
		<enhanced:img
			src="$lib/images/pgpr.jpeg"
			class={$modeCurrent ? '' : ' saturate-75 brightness-75'}
			alt="PGPR room"
		/>
		<h4 class="h4 text-surface-300-600" data-toc-ignore>Hotels</h4>
		<p class="text-surface-600-300-token leading-loose">
			APCV 2024 does not block book hotel rooms. Below are some nearby hotels, though this list
			should not be taken as a recommendation or endorsement. All are in safe areas, with fairly
			easy access to the conference venue itself. <br />
		</p>
		<ul class="mx-6 pb-6">
			{#each hotels as hotel}
				<li>
					<a href={hotel.website} target="_blank" class="underline hover:no-underline"
						>{hotel.name}</a
					>
					| <span class="text-base">{hotel.info}</span>
				</li>
			{/each}
		</ul>
		<div class="flex w-full bg-scroll h-96 scrollbar-hide mb-36 mt-12 -z-10">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31910.466370439884!2d103.78226697279621!3d1.2892468749043782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels%20near%20NUS!5e0!3m2!1sen!2sus!4v1713129899282!5m2!1sen!2sus"
				class="w-full saturate-100 contrast-125 {$modeCurrent ? '' : 'invert hue-rotate-180'}"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				title="Transit from Changi to NUS"
				referrerpolicy="no-referrer-when-downgrade"
			>
			</iframe>
		</div>
	</article>
</div>
<hr class="opacity-50 mb-24" />
