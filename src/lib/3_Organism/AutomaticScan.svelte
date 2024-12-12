<script>
  export let result = data.scans;
  import { DonutChart } from '../index.js';
</script>

<section>
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
    <DonutChart {result}/>
</section>

<style>
  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: 10px 10px 0px 2px var(--color-blue);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    gap: 1em;
    background-color: #042AD5;
    
    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 0;
    }
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }

h2, 
p {
  color: yellow;
}
</style>
