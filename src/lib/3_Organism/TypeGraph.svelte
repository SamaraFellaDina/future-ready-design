<script>
  import { BarChart } from '../index.js'
  export let result = data.scans;
</script>

<section>
  <h2>Soorten foutmeldingen</h2>
  <figure>
    <BarChart {result}/>
  </figure>
</section>

<style>
  
  section {
    background-color: #6ee5fa;
    border-radius: var(--section-border-radius);
    box-shadow: 10px 10px 0px -2px var(--color-background);
    padding: var(--average-padding);
    grid-area: 3 / 1 / 4 / 2;

  }

  h2 {
    margin-bottom: 50px;
  }
</style>
