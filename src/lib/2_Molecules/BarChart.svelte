<script>
  import {Chart} from '../index.js'
  export let result = data.scans;


  let results = result.result.slice(1);
  let errorTitles = results.map((item) => item.title);
  let errorAmounts = results.map((item) => item.amount);

  let chartLabels = errorTitles;
  let chartData = errorAmounts;
  let chartLabel = '# of Votes';
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
      return '#ff00004a'; // Tomato red for high values
    } else if (value >= 10) {
      return '#ffa60053'; // Gold for medium values
    } else {
      return '#00800070'; // Lime green for low values
    }
  });

</script>

<Chart 
  {chartLabels} 
  {chartData} 
  {chartLabel} 
  {chartBorderColor}
  {chartBackgroundColor}
/>
