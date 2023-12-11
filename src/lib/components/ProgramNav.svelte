<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav
	class="list-nav w-full md:border-none md:px-3 lg:px-6 lg:text-xl border-l-2 border-surface-800-100-token opacity-60"
>
	<ul >
		<li>
			<a href="/program/schedule" class="border-surface-800-100-token" on:click={drawerClose} class:border-b-2={$page.route.id?.slice(9) === 'schedule'}
				>Schedule</a
			>
		</li>
		<li>
			<a href="/program/keynotes" class="border-surface-800-100-token" on:click={drawerClose} class:border-b-2={$page.route.id?.slice(9) === 'keynotes'}
				>Keynote Speakers</a
			>
		</li>
		<li>
			<a href="/program/symposia" class="border-surface-800-100-token" on:click={drawerClose} class:border-b-2={$page.route.id?.slice(9) === 'symposia'}
				>Symposia</a
			>
		</li>
		<li>
			<a href="/program/talks" class="border-surface-800-100-token" on:click={drawerClose} class:border-b-2={$page.route.id?.slice(9) === 'talks'}
				>Talk Sessions</a
			>
		</li>
		<li>
			<a href="/program/posters" class="border-surface-800-100-token" on:click={drawerClose} class:border-b-2={$page.route.id?.slice(9) === 'posters'}
				>Poster Sessions</a
			>
		</li>
		<li>
			<a href="/program/public" class="border-surface-800-100-token" on:click={drawerClose} class:border-b-2={$page.route.id?.slice(9) === 'public'}
				>Public Event</a
			>
		</li>
	</ul>
</nav>
