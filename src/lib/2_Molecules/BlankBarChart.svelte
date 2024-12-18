<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";


  let chart;

  export let chartLabels = [];   
  export let chartData = [];     
  export let chartLabel = ''; 
  export let chartBorderColor = '';
  export let chartBackgroundColor = '';
  export let DefineAxis = ''
  
  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue("--color-blue");
    const colorLightBlue = rootStyles.getPropertyValue("--color-lightblue");
    const fontFamily = rootStyles.getPropertyValue("--font-family");
    const colorBlack = rootStyles.getPropertyValue("--color-black");

    const data = {
      labels: chartLabels,
      datasets: [
        {
          label: chartLabel,
          data: chartData,
          borderColor: chartBorderColor,
          backgroundColor: chartBackgroundColor,
          borderWidth: 3,
        },
      ],
    };


    const options = {
      indexAxis: DefineAxis,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: false,
            text: "Aantal",
          },
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: fontFamily,
              size: 16,
            },
          }
        },
        x: {
          title: {
            display: false,
            text: "Type fouten",
          },
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: fontFamily,
              size: 16,
            },
          }
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: colorBlack,
          anchor: "center",
          align: "center",
          font: {
            family: fontFamily,
            weight: "bold",
            size: 18,
          },
          formatter: (value) => value,
        },
        tooltip: {
          enabled: true,
          titleAlign: "center",
          bodyAlign: "center",
          backgroundColor: "#FFFFFF",
          borderWidth: 2,
          borderColor: colorBlue,
          padding: 10,
          displayColors: false,
          titleFont: {
            size: 18,
            weight: "bold",
            family: fontFamily,
          },
          titleColor: colorBlue,
          bodyFont: {
            size: 16,
            weight: "normal",
            family: fontFamily,
          },
          bodyColor: colorBlue,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      onHover: (event, elements) => {
        const canvas = event.native.target;
        if (elements.length) {
          canvas.style.cursor = "pointer";
        } else {
          canvas.style.cursor = "default";
        }
      },
    };


    const ctx = document.getElementById("bar-chart").getContext("2d");
    chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  });
</script>


<canvas id="bar-chart" aria-label="Soorten fouten grafiek">
</canvas>


<style>
    canvas {
    max-width: 100%;
    height: 300px;
  }
</style>