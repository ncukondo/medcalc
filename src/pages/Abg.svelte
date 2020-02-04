<script>
  let Ph = '';
	let Co2 = '';
	let Hco3 = '';
	let Na = '';
	let Cl = '';
  let Ag = '';
  let AgmodHco3 = '';
  let modCo2 ='';

  $:  Ag = (Na && Cl && Hco3 && Na-Cl-Hco3) || '';
  $:  AgmodHco3 = (Ag>14 && Hco3-12+Ag) || '';
  $:  modCo2 = Hco3 && Co2 && Co2-1.3*(24-Hco3) || '';
</script>
<style>
	input{
		width: 4em;
	}
</style>

Ph <input type="number" bind:value={Ph} /><br />
CO2 <input type="number" bind:value={Co2} /><br />
HCO3 <input type="number" bind:value={Hco3} /><br />
Na <input type="number" bind:value={Na} /><br />
Cl <input type="number" bind:value={Cl} /><br />
{modCo2}
AG: {Ag}<br />
{#if AgmodHco3}
AG補正HCO3: {AgmodHco3}<br />
{/if}
{#if Ph>7.4}
    アルカレミア<br />
{:else if Ph && Ph<7.4}
    アシデミア<br />
    {#if Hco3 && Hco3<24}
        {#if Ag && Ag<=14}
        AG非開大性代謝性アシドーシス<br />
        {/if}
    {/if}
{/if}
{#if Ag>14}
AG開大性代謝性アシドーシス<br />
{/if}
{#if AgmodHco3 && AgmodHco3>26}
代謝性アルカローシス(AG補正後HCO3-より)<br />
{:else if AgmodHco3 && AgmodHco3<22}
代謝性アシドーシス(AG補正後HCO3-より)<br />
{/if}
