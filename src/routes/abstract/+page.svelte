<script lang="ts">
	let talk: string;
	let isFormValid: boolean = false;
</script>

<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-10 flex flex-col items-center mt-12 text-left">
		<h2
			class="md:text-6xl lg:text-8xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider"
		>
			Abstract submission form
		</h2>

		<div class="space-y-6">
			<label class="label">
				<span>Name</span>
				<input class="input" title="First name" type="text" placeholder="First" />
				<input class="input" title="Last name" type="text" placeholder="Last" />
			</label>
			<label class="label">
				<span>Email</span>
				<input
					class="input"
					title="Email"
					type="email"
					placeholder="john@example.com"
					autocomplete="email"
				/>
			</label>

			<div class="scale-125 text-center">
				{#each ['talk', 'poster'] as talkType}
					<button
						class="chip {talk === talkType ? 'variant-filled' : 'variant-soft'}"
						on:click={() => {
							talk = talkType;
						}}
						on:keypress
					>
						{#if talk === talkType}<span><i class="fa-solid fa-check" /></span>{/if}
						<span>{talkType}</span>
					</button>
				{/each}
			</div>
			<label class="label">
				<span>Title</span>
				<input class="input" title="Title" type="text" placeholder="Title" />
			</label>
			<label class="label">
				<span>Affiliation</span>
				<input class="input" title="Title" type="text" placeholder="Affiliation" />
			</label>
			<label class="label">
				<span>Abstract</span>
				<input class="input" type="file" />
			</label>
		</div>
		<button class="btn {isFormValid ? 'variant-filled-success': 'variant-filled-error'}" disabled='{!isFormValid}'>Submit</button>
	</div>
</div>
