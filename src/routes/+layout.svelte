<script lang="ts">
	import '../app.postcss';
	import { AppShell, storePopup, initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Navigation from '$lib/components/Navigation.svelte';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	initializeStores();

	inject({ mode: dev ? 'development' : 'production' });
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>APCV24 | {$page.data.path ? $page.data.path : 'Home'}</title>
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
<AppShell  regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<NavBar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
