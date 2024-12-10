<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  export let result = data.scans;

  let chart;
  let percentage = result.score;

  onMount(() => {
    let doughnutColor = percentage < 50 ? '#c30010' : percentage < 80 ? '#faa800' : '#228b22';
    let doughnutColorAlt = doughnutColor + "33";

    const data = {
      datasets: [
        {
          label: "Percentage",
          data: [percentage, 100 - percentage],
          backgroundColor: [doughnutColor, doughnutColorAlt],
          borderWidth: 0,
          cutout: "75%",
        },
      ],
    };

    const options = {
      plugins: {
        datalabels: {
          display: false,
        },
        tooltip: {
          enabled: false, // Enable tooltips
        },
      },
      responsive: false,
      maintainAspectRatio: true,
    };

    const ctx = document.getElementById("doughnut-chart").getContext("2d");
    chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  });
</script>


<figure>
  <canvas id="doughnut-chart" height="150" width="150"><img src="" alt=""></canvas>
  <figcaption>{percentage}%</figcaption>
</figure>

<style>
    canvas {
    max-width: 100%;
    height: auto;
  }

  figcaption {
    position: absolute;
    font-size: 2em;
    top: 52%;
    left: 50%; 
    transform: translate(-50%, -50%);
    font-weight: 700;
  }

  figure {
    position: relative;
    width: 100%;
    max-width: fit-content;
    height: min-content;
    align-self: center;
    
    @media screen and (max-width: 700px) {
      margin-top: 50px;
    }
  }

</style>