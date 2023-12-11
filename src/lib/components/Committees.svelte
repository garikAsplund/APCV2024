<script lang="ts">
	const committee = {
		Chairs: ['Izumi Ohzawa (CiNet, Osaka Univ)', 'Takao Sato (Ritsumeikan Univ)'],
		'Executive Chairs': ['Kowa Koida (Toyohashi Univ of Tech)'],
		Members: [
			'Hiroshi Ashida (Kyoto Univ)',
			'Kaoru Amano (CiNet, NICT)',
			'Chieko Koike (Ritsumeikan Univ)',
			'Ichiro Fujita (CiNet, Osaka Univ)',
			'Hidetoshi Kanaya (Ritsumeikan Univ)',
			'Akiyoshi Kitaoka (Ritsumeikan Univ)',
			'Ichiro Kuriki (Tohoku Univ)',
			'Takashi Murakami (Ritsumeikan Univ)',
			"Shin'ya Nishida (Kyoto univ, NTT)",
			'Takahiro Kawabe (NTT)',
			'Tatsuya Sato (Ritsumeikan Univ)',
			'Masataka Sawayama (NTT)',
			'Satoshi Shioiri (Tohoku Univ)'
		],
		'Abstract Review Committee': [
			'Akiyoshi Kitaoka (Ritsumeikan Univ)',
			'Atsushi Wada (CiNet, NICT)',
			'Chia-huei Tseng (Tohoku Univ)',
			'Chieko Koike (Ritsumeikan Univ)',
			'Hidetoshi Kanaya (Ritsumeikan Univ)',
			'Hiromasa Takemura (CiNet, NICT)',
			'Hiroshi Ashida (Kyoto Univ)',
			'Hiroshi Ban (CiNet, NICT)',
			'Hiroshi Tamura (CiNet, Osaka Univ)',
			'Ichiro Fujita (CiNet, Osaka Univ)',
			'Ichiro Kuriki (Tohoku Univ)',
			'Izumi Ohzawa (CiNet, Osaka Univ)',
			'Jun Saiki (Kyoto Univ)',
			'Kaoru Amano (CiNet, NICT)',
			'Katsunori Kitano (Ritsumeikan Univ)',
			'Kota Sasaki (CiNet, Osaka Univ)',
			'Kowa Koida (Toyohashi Univ of Tech)',
			'Masataka Sawayama (NTT)',
			'Mikio Inagaki (CiNet, Osaka Univ)',
			'Naokazu Goda (NIPS)',
			'Satoshi Shioiri (Tohoku Univ)',
			"Shin'ya Nishida (NTT)",
			'Takahiro Kawabe (NTT)',
			'Takahisa Sanada (Kansai Medical Univ)',
			'Tetsuya Yagi (Osaka Univ)',
			'Tomoyuki Naito (Osaka Univ)',
			'Yuji Wada (Ritsumeikan Univ)',
			'Yuki Hayashida (Osaka Univ)'
		]
	};
</script>

<div class="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-start">
	<h2 class="h2 text-center mb-4">Organizing committee</h2>

	<hr class="h-0.5 bg-surface-800-100-token" />
	{#each Object.entries(committee) as [title, content]}
		<div class="m-6">
			<h3 class="h3 mb-3">{title}</h3>
			{#each content as member}
				<p class="text-surface-600-300-token">{member}</p>
			{/each}
		</div>
	{/each}
</div>
