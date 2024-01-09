<script lang="ts">
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	const drawerSettings: DrawerSettings = {
		id: 'mobile-drawer-settings',

		bgDrawer:
			'p-4 bg-tertiary-100 dark:bg-surface-800 text-white-token flex flex-col items-start justify-start text-xl',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10',
		width: 'w-[260px] md:w-[480px]',
		padding: 'p-4 pt-20',
		rounded: 'rounded-lg',
		position: 'right'
	};

	const drawerStore = getDrawerStore();
</script>

<AppBar background="variant-glass-surface" border="">
	<svelte:fragment slot="lead">
		<strong class="text-2xl font-mono font-light uppercase scale-105 lg:px-4"
			><a href="/" class="hover:text-primary-400">APCV24SG</a></strong
		>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<div class="hidden md:flex md:justify-end md:items-center">
			<!-- <Navigation /> -->
			<LightSwitch />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex items-center">
			<div class="md:hidden mx-4">
				<LightSwitch />
			</div>
			<!-- <button
				class="md:hidden btn btn-sm mr-4 hover:rotate-90"
				aria-label="Expandable menu"
				on:click={() => drawerStore.open(drawerSettings)}
			>
				<span>
					<svg viewBox="0 0 100 80" class="fill-token w-6 h-6">
						<rect width="100" height="20" />
						<rect y="30" width="100" height="20" />
						<rect y="60" width="100" height="20" />
					</svg>
				</span>
			</button> -->
		</div>
	</svelte:fragment>
	
</AppBar>
