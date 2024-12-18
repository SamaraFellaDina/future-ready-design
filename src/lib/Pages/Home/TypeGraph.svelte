<script>
  import { BlankBarChart } from '$lib';
  export let result = data.scans;
  let results = result.result.slice(1);
  let labels = results.map((item) => ({
    name: item.title,
    value: item.amount
  }));
  let maxY = Math.max(...results.map((item) => item.amount)) + 10;
  let stepY;
  if (maxY <= 20) {
    stepY = 5;
  } else if (maxY > 20 && maxY <= 50) {
    stepY = 10;
  } else if (maxY > 50 && maxY <= 100) {
    stepY = 20;
  } else if (maxY > 100) {
    stepY = 50;
  }
</script>

<section>
  <h2>Soorten foutmeldingen</h2>
  <BlankBarChart {labels} {maxY} {stepY}/>
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
