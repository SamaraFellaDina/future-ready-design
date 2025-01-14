<script>
  import { IconLineChart } from "$lib";
  export let result = data.scans;

  let results;
  let labels;
  let chartMaxY;
  let chartStepY;
  
  $: {
    results = result.result.slice(1);
    labels = results.map((item) => ({
      name: item.title,
      value: item.amount,
    }));

    chartMaxY = Math.max(...results.map((item) => item.amount)) + 10;
    chartStepY;

    if (chartMaxY <= 20) {
      chartStepY = 5;
    } else if (chartMaxY > 20 && chartMaxY <= 50) {
      chartStepY = 10;
    } else if (chartMaxY > 50 && chartMaxY <= 100) {
      chartStepY = 20;
    } else if (chartMaxY > 100) {
      chartStepY = 50;
    }
  }
</script>

<section>
  <h2>Soorten foutmeldingen</h2>
  <IconLineChart {labels} {chartMaxY} {chartStepY}/>
</section>

<style>
  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 3 / 1 / 4 / 2;
  }

  h2 {
    margin-bottom: 50px;
  }
</style>
