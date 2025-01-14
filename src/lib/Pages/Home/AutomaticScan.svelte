<script>
  export let result = data.scans;
  import { DonutChartTemplate } from '$lib';

  $: percentage = result.score; // Reactief maken
</script>

<section>
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
  <DonutChartTemplate {percentage}/>
</section>

<style>
  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    gap: 1em;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 0;
    }
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }
</style>
