<script>
	import Sensep from "./Sensep.svelte";
	import Plrnlr from "./Plrnlr.svelte";
</script>

<main>
    <Sensep />
	<hr />
	<Plrnlr />
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