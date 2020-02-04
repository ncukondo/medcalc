<script>
	import Sensep from "./pages/Sensep.svelte";
	import Plrnlr from "./pages/Plrnlr.svelte";
	import Abg from "./pages/Abg.svelte";
	import Router, {link, location} from 'svelte-spa-router';
	import Home from './Home.svelte';

	const routes = {
		'/': Home,
    	'/abg/': Abg,
    	'/sensep/': Sensep,
    	'/plrnlr/': Plrnlr,
	}
</script>

<main>
	<Router {routes} />
	{#if $location!=='/'}
	  <hr />
	  <div><a href="/" use:link>Homeへ</a></div>
	{/if}
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