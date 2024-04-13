<script lang="ts">
	const committee = {
		Members: [
			{
				name: 'Christopher L. Asplund (Chair)',
				school: 'Yale-NUS College, National University of Singapore',
				website: 'https://sites.google.com/site/asplundcl/home'
			},
			{
				name: 'Hong Xu',
				school: 'School of Social Sciences, Nanyang Technological University',
				website: ''
			},
			{
				name: 'Shih-Cheng Yen',
				school: 'College of Design and Engineering, National University of Singapore',
				website: ''
			},
			{
				name: 'Mengmi Zhang',
				school: 'School of Computer Science and Engineering, Nanyang Technological University',
				website: ''
			},
			{
				name: 'Colin Palmer',
				school: 'Department of Psychology, National University of Singapore',
				website: ''
			},
			{
				name: 'Charles Or',
				school: 'School of Social Sciences, Nanyang Technological University',
				website: ''
			},
			{
				name: 'Camilo Libedinsky',
				school: 'Department of Psychology, National University of Singapore',
				website: ''
			}
		]
	};
</script>

<div class="w-fit flex flex-col justify-start">
	<h2 class="h2 text-center mb-4">Organizing committee</h2>

	<hr class="h-0.5 bg-surface-800-100-token" />
	{#each Object.entries(committee) as [title, content]}
		<div class="m-6">
			<!-- <h3 class="h3 mb-3">{title}</h3> -->
			{#each content as member}
				<p class="text-surface-600-300-token text-xl">
					{#if member.website}
						<a href={member.website} target="_blank" class="hover:underline"
							>{member.name} <span class="text-sm"> | {member.school}</span></a
						>
					{:else}
						{member.name} <span class="text-sm">| {member.school}</span>
					{/if}
				</p>
			{/each}
		</div>
	{/each}
</div>
