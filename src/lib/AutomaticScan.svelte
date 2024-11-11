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

<section>
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
  <figure>
    <canvas id="doughnut-chart" height="150" width="150"></canvas>
    <figcaption>{percentage}%</figcaption>
  </figure>
</section>

<style>

  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

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

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }

  div {
    padding-right: 160px;
    @media screen and (max-width: 700px) {
      padding-right: 0;
    }
  }
</style>
