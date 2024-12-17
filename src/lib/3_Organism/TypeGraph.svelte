<script>
  import { BarChart } from '../index.js'
  export let result = data.scans;
</script>

<section>
  <img src="https://img.pikbest.com/png-images/20241116/red-gift-bow-with-ribbon-detail-png-on-transparent-background_11096262.png!sw800"  width="200" height="200" class="strikje" alt="">
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
    position: relative;
  }

  .strikje{
    position: absolute;
    top: 0%;
    left: 50%; 
    transform: translate(-50%, -50%); 
  }

  h2 {
    margin-bottom: 50px;
  }
</style>
