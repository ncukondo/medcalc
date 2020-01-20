<script>
	import {oddsToPersent,percentToOdds,round} from "./utils.js";
	export let sensitivity='';
	export let specificity='';
	export let preProbability = '';
	export let postProbabilityP = '';
	export let postProbabilityN = '';

	export let positiveLR='';
	export let negativeLR='';

	$: if(sensitivity && specificity){
		const _positiveLR = sensitivity / (100-specificity);
		const _negativeLR = (100-sensitivity)/specificity;
		positiveLR = round(_positiveLR, 2);
		negativeLR = round(_negativeLR ,2);

		if (preProbability) {
			const preOdds = percentToOdds(preProbability);
			postProbabilityP = round(oddsToPersent(preOdds * _positiveLR),2);
			postProbabilityN = round(oddsToPersent(preOdds * _negativeLR),2);

		}
	}


</script>
<style>
	input{
		width: 4em;
	}
</style>
感度(%)<input type="number" bind:value={sensitivity} /><br />
特異度(%)<input type="number" bind:value={specificity} /><br />
事前確率(%)<input type="number" bind:value={preProbability} /><br />
陽性尤度比 : {positiveLR}<br />
陰性尤度比 : {negativeLR}<br />
検査陽性の事後確率(%) : {postProbabilityP}<br />
検査陰性の事後確率(%) : {postProbabilityN}<br />

