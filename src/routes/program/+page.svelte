<script lang="ts">
    import { TableOfContents, tocCrawler } from "@skeletonlabs/skeleton";

    const sections: string[] = [
        'Schedule',
        'Keynotes',
        'Symposia',
        'Talks and Posters',
        'Another thing',
        'Scroll test',
		'More stuff',
		'Even more stuff',
        'One last item',
    ];
</script>

<div class="container mx-auto flex lg:space-x-8">
    <aside class="hidden lg:block w-48">
        <!-- Table of Contents -->
        <TableOfContents class="sticky top-10">On the Page</TableOfContents>
    </aside>
    <div class="flex-1 mt-12">
        <div class="space-y-10 text-center">
            <h2 class="md:text-6xl lg:text-8xl decoration-0 text-3xl text-secondary-100-token leading-loose tracking-wider">
                Program
            </h2>

            <div class="space-y-6 text-xl" use:tocCrawler={{ mode: 'generate', scrollTarget: '#page' }}>
                <p><code class="code md:text-xl text-lg">Check back soon for more details</code></p>
                <hr />
                {#each sections as section}
                    <h2 class="h2">{section}</h2>
                    <p>Lorem ipsum.</p>
                    <hr />
                {/each}
            </div>
        </div>
    </div>
</div>
