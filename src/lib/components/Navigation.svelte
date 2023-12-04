<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

{#each ['Registration', 'Program', 'Presenters', 'Venue', 'Contact'] as item}
	<a class="btn btn-lg text-lg hover:bg-primary-600/20" href="/{item.toLowerCase()}" on:click={drawerClose}>
		{item}
	</a>
{/each}
