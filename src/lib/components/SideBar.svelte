

<div class="grid grid-cols-[auto_1fr] h-full border-r border-surface-500/30">
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each ['hi', 'its', 'me'] as segment, i}
			<!-- Title -->
			<p class="font-bold pl-4 text-2xl">{segment}</p>
			<!-- Nav List -->
			<nav class="list-nav">
				<ul>
						<li >
                            <a href="/registration" class="btn btn-lg text-lg hover:bg-primary-600/20">
                                Registration
                            </a>
						</li>
				</ul>
			</nav>
			<!-- Divider -->
			<hr class="!my-6 opacity-50" />
		{/each}
	</section>
</div>
