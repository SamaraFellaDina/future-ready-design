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
      return '#C50208'; 
    } else if (value >= 10) {
      return '#FB9F0A'; 
    } else {
      return '#3A5D35'; 
    }
  });

  let chartBackgroundColor = chartData.map(value => {
    if (value >= 20) {
      return '#c502087c'; 
    } else if (value >= 10) {
      return '#fb9f0a87'; 
    } else {
      return '#3a5d3597'; 
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


