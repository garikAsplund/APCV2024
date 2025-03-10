<script lang="ts">
	import '../app.postcss';
	import { AppShell, storePopup, initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import {
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow,
		autoPlacement,
		detectOverflow
	} from '@floating-ui/dom';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { page } from '$app/stores';
	import { Navigation, NavBar, Footer, ProgramNav } from '$lib/components/components';
	import type { ComponentEvents } from 'svelte';
	import { scroll } from '$lib/stores';

	let pageTitle = 'Home';

	function capitalizeFirstChar(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	$: {
		const path = $page.url.pathname.split('/').pop();
		if (path === 'to-presenters') {
			pageTitle = 'To Presenters';
		} else if (path === 'abstract-submission') {
			pageTitle = 'Abstract Submission';
		} else {
			pageTitle = path ? capitalizeFirstChar(path) : 'Home';
		}
	}

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		$scroll = event.currentTarget.scrollTop;
	}

	initializeStores();

	inject({ mode: dev ? 'development' : 'production' });
	storePopup.set({
		computePosition,
		autoUpdate,
		autoPlacement,
		flip,
		shift,
		offset,
		arrow,
		detectOverflow
	});
</script>

<svelte:head>
	<title>APCV24 | {pageTitle}</title>
	<meta
		name="description"
		content="The 16th Asia Pacific Conference on Vision (APCV) will be held in Singapore from 10-12 July 2024. 
		The conference aims to facilitate discussion on vision research in the Asia and Pacific regions, while participants from all over the world are also welcome. 
		The program consists of invited lectures, symposia and contributed papers (both oral and poster presentations). Original works on all aspects of vision research are invited to present.
		APCV2024 will be held at the National University of Singapore (NUS)"
	/>
</svelte:head>

<Drawer>
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell regionPage="scroll-smooth" slotHeader="" on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<NavBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Left Sidebar -->
		{#if $page.data?.path?.includes('Program')}
			<div class="hidden md:block lg:pl-12 xl:pl-24 py-4 md:py-6 lg:py-8"></div>
		{/if}
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
