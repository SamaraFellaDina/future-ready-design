<script>
  import { BarChart } from '../index.js'
  export let result = data.scans;


  let results = result.result.slice(1);
  let errorTitles = results.map((item) => item.title);
  let errorAmounts = results.map((item) => item.amount);

  let chartLabels = errorTitles;
  let chartData = errorAmounts;
  let chartLabel = '# of Votes';
  let DefineAxis = 'x';

  let chartBorderColor = chartData.map(value => {
    if (value >= 20) {
      return 'red'; 
    } else if (value >= 10) {
      return 'orange'; 
    } else {
      return 'green'; 
    }
  });

  let chartBackgroundColor = chartData.map(value => {
    if (value >= 20) {
      return '#ff00004a'; 
    } else if (value >= 10) {
      return '#ffa60053'; 
    } else {
      return '#00800070'; 
    }
  });

</script>

<section>
  <h2>Soorten foutmeldingen</h2>
  <figure>
    <BarChart 
    {result}
    {chartLabels} 
    {chartData} 
    {chartLabel} 
    {DefineAxis}
    {chartBorderColor}
    {chartBackgroundColor}
  />
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
