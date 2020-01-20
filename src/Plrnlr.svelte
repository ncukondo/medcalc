<script>
	import {oddsToPersent,percentToOdds,round} from "./utils.js";
	export let preProbability = '';
	export let postProbabilityP = '';
	export let postProbabilityN = '';

	export let positiveLR='';
	export let negativeLR='';

	$: if(positiveLR && negativeLR && preProbability){
			const preOdds = percentToOdds(preProbability);
			postProbabilityP = round(oddsToPersent(preOdds * positiveLR),2);
			postProbabilityN = round(oddsToPersent(preOdds * negativeLR),2);

	}


</script>
<style>
	input{
		width: 4em;
	}
</style>

陽性尤度比 <input type="number" bind:value={positiveLR} /><br />
陰性尤度比 <input type="number" bind:value={negativeLR} /><br />
事前確率(%)<input type="number" bind:value={preProbability} /><br />
検査陽性の事後確率(%) : {postProbabilityP}<br />
検査陰性の事後確率(%) : {postProbabilityN}<br />

