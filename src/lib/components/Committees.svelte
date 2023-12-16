<script lang="ts">
	const committee = {
		Members: [
			{ name: 'Christopher L. Asplund (Chair)', website: 'https://sites.google.com/site/asplundcl/home' },
			{ name: 'Camilo Libedinsky', website: '' },
			{ name: 'Shih-Cheng Yen', website: '' },
			{ name: 'Mengmi Zhang', website: '' },
			{ name: 'Charles Or', website: '' },
			{ name: 'Hong Xu', website: '' }
		]
	};
</script>

<div class="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col justify-start">
	<h2 class="h2 text-center mb-4">Organizing committee</h2>

	<hr class="h-0.5 bg-surface-800-100-token" />
	{#each Object.entries(committee) as [title, content]}
		<div class="m-6">
			<!-- <h3 class="h3 mb-3">{title}</h3> -->
			{#each content as member}
				<p class="text-surface-600-300-token text-xl">
					{#if member.website}
						<a href={member.website} target="_blank" class="hover:underline">{member.name}</a>
					{:else}
						{member.name}
					{/if}
				</p>
			{/each}
		</div>
	{/each}
</div>
