<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import SideBar from '$lib/components/SideBar.svelte';

	inject({ mode: dev ? 'development' : 'production' });
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

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
				<div class="flex justify-around">
					{#each ['Registration', 'Program', 'Speakers', 'Venue', 'Contact'] as item}
						<a class="btn btn-lg text-lg hover:bg-primary-600/20" href="/{item.toLowerCase()}">
							{item}
						</a>
					{/each}
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
