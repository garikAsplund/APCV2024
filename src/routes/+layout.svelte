<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		storePopup,
		initializeStores,
		getDrawerStore,
		Drawer
	} from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import SideBar from '$lib/components/SideBar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();

	inject({ mode: dev ? 'development' : 'production' });
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-surface-900 text-white flex flex-col',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10',
		width: 'w-[280px] md:w-[480px]',
		// blur: 'backdrop-blur-sm',
		padding: 'p-4 pt-16',
		rounded: 'rounded-lg',
		position: 'right'
	};
</script>

<svelte:head>
	<title>APCV 2024</title>
	<meta
		name="description"
		content="The 16th Asia Pacific Conference on Vision will be held in Singapore from 10-12 July 2024. 
		The conference aims to facilitate discussion on vision research in the Asia and Pacific regions, while participants from all over the world are also welcome. 
		The program consists of invited lectures, symposia and contributed papers (both oral and poster presentations). Original works on all aspects of vision research are invited to present."
	/>
</svelte:head>

<Drawer>
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-2xl font-light uppercase scale-105"
					><a href="/" class="hover:text-primary-100">APCV24SG</a></strong
				>
			</svelte:fragment>
			<svelte:fragment slot="default">
				<div class="hidden md:flex md:justify-around">
					<Navigation />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="flex items-end">
					<button
						class="md:hidden btn btn-sm mr-4 hover:rotate-90"
						aria-label="menu"
						on:click={() => drawerStore.open(drawerSettings)}
					>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-6 h-6">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">
			<!-- <SideBar /> -->
		</div>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
