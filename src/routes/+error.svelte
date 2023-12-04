<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page}
	<div class="w-full h-full flex justify-center items-center">
		<div class="flex flex-col justify-center text-center space-y-4">
			<h2 class="h2 text-5xl">
				{$page.status}: {#if $page.error}
					{$page.error.message}
				{/if}
			</h2>
			<img
				src="https://media2.giphy.com/media/t7jyV6BB5FEZAhL2rI/200w.webp?cid=ecf05e47hdv8c7eq1ict75vctas0154yax36g4ilo28vb2py&ep=v1_gifs_search&rid=200w.webp&ct=g"
				alt="Error merlion"
				class="justify-center saturate-150 hue-rotate-30 brightness-90"
			/>
			<p class="text-xl">We're sorry, something went wrong.</p>
		</div>
	</div>
{/if}
