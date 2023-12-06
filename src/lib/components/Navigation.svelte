<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import ProgramNav from './ProgramNav.svelte';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

{#each ['Registration', 'Program', 'Presenters', 'Venue', 'Contact'] as item}
	<a
		class="btn btn-lg text-xl md:text-lg hover:bg-primary-600/20"
		href="/{item.toLowerCase()}"
		on:click={drawerClose}
	>
		{item}
	</a>
	{#if $page.data.path.includes('Program') && item === 'Program'}
		<div class="md:hidden px-6 text-lg text-primary-200">
			<ProgramNav />
		</div>
	{/if}
{/each}
