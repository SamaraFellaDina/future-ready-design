<script>
  import {Chart} from '../index.js'
  export let result = data.scans;

  let results = result.result.slice(1);

  let errorTitles = results.map((item) => item.title);
  let errorAmounts = results.map((item) => item.amount);

  const rootStyles = getComputedStyle(document.documentElement);

  const colorStatusCheck = (data) => {
    const colorStatusGood = rootStyles.getPropertyValue("--color-status-good") || 'green';
    const colorStatusFine = rootStyles.getPropertyValue("--color-status-fine") || 'yellow';
    const colorStatusBad = rootStyles.getPropertyValue("--color-status-bad") || 'red';

  return data.map(value => {
    if (value >= 20) {
      return colorStatusBad;
    } else if (value >= 10) {
      return colorStatusFine;
    } else {
      return colorStatusGood;
    }
  });
}

const colorStatusCheckBorder = (data) => {
  const colorStatusGoodBorder = rootStyles.getPropertyValue("--color-status-good-border");
  const colorStatusFineBorder = rootStyles.getPropertyValue("--color-status-fine-border");
  const colorStatusBadBorder = rootStyles.getPropertyValue("--color-status-bad-border");

  return data.map(value => {
    if (value >=20) {
      return colorStatusBadBorder;
    } else if (value >=10) {
      return colorStatusFineBorder;
    } else {
      return colorStatusGoodBorder
    }
  })
}


  let chartLabels = errorTitles;
  let chartData = errorAmounts;
  let chartLabel = '# of Votes';
  let chartBorderColor = colorStatusCheckBorder(errorAmounts);
  let chartBackgroundColor = colorStatusCheck(errorAmounts);


</script>

<Chart 
  {chartLabels} 
  {chartData} 
  {chartLabel} 
  {chartBorderColor}
  {chartBackgroundColor}
/>
