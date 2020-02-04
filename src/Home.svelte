<script>
	import Sensep from "./pages/Sensep.svelte";
	import Plrnlr from "./pages/Plrnlr.svelte";
	import Abg from "./pages/Abg.svelte";
	import {link} from 'svelte-spa-router';

</script>

<main>
    <ul>
      <li><a href="/sensep/" use:link>感度・特異度からの事後確率計算</a></li>
      <li><a href="/plrnlr/" use:link>尤度比からの事後確率計算</a></li>
      <li><a href="/abg/" use:link>血液ガス解析</a></li>
    </ul>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>