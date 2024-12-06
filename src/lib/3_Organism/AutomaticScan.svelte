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
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    gap: 1em;
    animation: fadein 2s forwards;
    animation-delay: 2s;
    opacity: 0;
    
    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 0;
    }
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }

  @keyframes fadein{
    from{
      opacity: 0;
      transform: translateY(-20px);
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }

</style>
