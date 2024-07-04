<script>
	import pdfUrl from '$lib/images/schedule.pdf?url';
</script>

<div class="space-y-10 text-center">
	<header class="flex w-full justify-between items-baseline mt-12 mb-8">
        <h2 class="h2 scroll-mt-24" id="Schedule">Schedule</h2>
    </header>

	<div class="space-y-6 text-xl mx-6">
		<!-- <p class=" md:text-xl text-lg">Check back soon for more details.</p> -->
		<!-- <enhanced:img src="$lib/images/schedule.png" alt="APCV 2024 schedule" /> -->
		 <p class="text-surface-600-300-token text-left leading-loose text-lg">
			An A5 printout of this schedule will be given to you when you register at the conference. The other side of that printout contains information about getting to and around Yale-NUS College.
		 </p>
		<iframe src={pdfUrl} width="100%" height="666" title="PDF"/>
	</div>
</div>
