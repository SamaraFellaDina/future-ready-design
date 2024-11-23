<!-- Chart.svelte -->
<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  export let chartLabels = [];   
  export let chartData = [];     
  export let chartLabel = ''; 
  export let chartBorderColor = '';
  export let chartBackgroundColor = '';


  let chart;

  onMount(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartLabels,
        datasets: [{
          label: chartLabel,
          data: chartData,
          borderColor: chartBorderColor,
          backgroundColor: chartBackgroundColor,
          borderWidth: 3,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => chart.destroy();
  });
</script>

<canvas id="myChart"></canvas>

