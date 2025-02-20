<script lang="ts">
	const committee = {
		Members: [
			{
				name: 'Christopher L. Asplund (Chair)',
				school: 'Yale-NUS College & N.1 Institute for Health, National University of Singapore',
				website: 'https://sites.google.com/site/asplundcl/home'
			},
			{
				name: 'Hong Xu',
				school: 'School of Social Sciences, Nanyang Technological University',
				website: ''
			},
			{
				name: 'Shih-Cheng Yen',
				school:
					'College of Design and Engineering & N.1 Institute for Health, National University of Singapore',
				website: ''
			},
			{
				name: 'Mengmi Zhang',
				school:
					'School of Computer Science and Engineering, Nanyang Technological University & Agency for Science, Technology, and Research (A*STAR)',
				website: 'https://dr.ntu.edu.sg/cris/rp/rp02397'
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
				school:
					'Department of Psychology & N.1 Institute for Health, National University of Singapore',
				website: ''
			},
			{
				name: 'Jing Wen Chai',
				school:
					'Department of English, Linguistics, and Theatre Studies; National University of Singapore',
				website: ''
			},
			{
				name: 'Takashi Obana',
				school: 'N.1 Institute for Health, National University of Singapore',
				website: ''
			}
		]
	};
</script>

<div class="w-full md:w-2/3 max-w-4xl mx-auto px-4 md:px-8 py-24">
	<div class="flex flex-col items-center">
	  <h2 class="h2 text-center mb-4">Organizing committee</h2>
	  <hr class="h-0.5 bg-surface-800-100-token w-full mb-8" />
	</div>
	{#each Object.entries(committee) as [title, content]}
	  <div class="space-y-8 md:space-y-4">
		{#each content as member}
		  <div class="flex flex-col gap-1">
			{#if member.website}
			  <a href={member.website} 
				 target="_blank" 
				 class="text-xl hover:underline">
				{member.name}
				{#if member.position} ({member.position}){/if}
			  </a>
			{:else}
			  <span class="text-xl text-surface-600-300-token">
				{member.name}
				{#if member.position} ({member.position}){/if}
			  </span>
			{/if}
			<span class="text-base text-surface-500-300-token pl-4">
			  {member.school}
			</span>
		  </div>
		{/each}
	  </div>
	{/each}
  </div>
