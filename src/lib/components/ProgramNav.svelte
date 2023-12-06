<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav w-full md:p-2">
	<ul>
		<li><a href="/program/schedule" on:click={drawerClose}>Schedule</a></li>
		<li><a href="/program/keynotes" on:click={drawerClose}>Keynote Speakers</a></li>
		<li><a href="/program/symposia" on:click={drawerClose}>Symposia</a></li>
		<li><a href="/program/talks" on:click={drawerClose}>Talk Sessions</a></li>
		<li><a href="/program/posters" on:click={drawerClose}>Poster Sessions</a></li>
		<li><a href="/program/public" on:click={drawerClose}>Public Event</a></li>
	</ul>
</nav>
