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
    animation: fadein 2s forwards;
    animation-delay: 4s;
    opacity: 0;
  }

  h2 {
    margin-bottom: 50px;
  }

  @keyframes fadein{
    from{
      opacity: 0;
      transform: translateY(20px);
    }
    to{
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
