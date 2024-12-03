<script>
  import { Chart } from '../index.js'
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
      return '#FF0084'; 
    } else if (value >= 10) {
      return '#E75A00'; 
    } else {
      return '#A5C536'; 
    }
  });

  let chartBackgroundColor = chartData.map(value => {
    if (value >= 20) {
      return '#ff00848c'; 
    } else if (value >= 10) {
      return '#e759008b'; 
    } else {
      return '#a6c53680'; 
    }
  });

</script>

<Chart 
  {chartLabels} 
  {chartData} 
  {chartLabel} 
  {DefineAxis}
  {chartBorderColor}
  {chartBackgroundColor}
/>


