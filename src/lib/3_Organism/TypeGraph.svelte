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
