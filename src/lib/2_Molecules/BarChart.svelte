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
      return '#FD02CB'; 
    } else if (value >= 10) {
      return '#E83916'; 
    } else {
      return '#69AC2E'; 
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

<Chart 
  {chartLabels} 
  {chartData} 
  {chartLabel} 
  {DefineAxis}
  {chartBorderColor}
  {chartBackgroundColor}
/>


