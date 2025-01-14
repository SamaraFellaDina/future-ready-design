<script>
  import { DonutChart } from '$lib';
  export let result = data.scans;

  let percentage;

  $:{
    percentage = result.score; // Reactief maken
  } 
</script>

<section>
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
  <DonutChart {percentage}/>
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
    
    @media (max-width: 700px) {
      flex-direction: column;
      gap: 0;
    }
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }
</style>
