<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import ProgramNav from './ProgramNav.svelte';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	console.log("page data path: ", $page.data.path);
</script>

<nav class="list-nav w-full flex justify-center md:p-2 lg:px-6 lg:text-xl">
	<ul class="w-full flex flex-col md:flex-row md:justify-around">
		{#each [
			'Program',
			'Registration',
			'Abstract Submission', 
			'To Presenters', 
			'Location', 
			// 'Contact'
			] as item}
			<li class="md:inline-flex flex justify-start w-full">
				<a
					class="btn btn-lg w-full text-xl md:text-lg hover:bg-primary-600/20 border-surface-800-100-token"
					href="/{item.toLowerCase()}"
					on:click={drawerClose}
					class:border-b-2={$page.data.path === item || ($page.data.path === "To presenters" && item === "To Presenters")}
				>
					{item}
				</a>
			</li>
			{#if item === 'Program'}
				<div class="md:hidden w-full px-6 text-lg text-primary-200-token">
					<ProgramNav />
				</div>
			{/if}
		{/each}
	</ul>
</nav>
