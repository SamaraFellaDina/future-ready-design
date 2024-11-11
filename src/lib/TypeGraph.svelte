<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  export let result = data.scans;

  let chart;

  let results = result.result.slice(1);

  let errorTitles = results.map((item) => item.title);
  let errorAmounts = results.map((item) => item.amount);

  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue("--color-blue");
    const colorLightBlue = rootStyles.getPropertyValue("--color-lightblue");
    const fontFamily = rootStyles.getPropertyValue("--font-family");
    const colorBlack = rootStyles.getPropertyValue("--color-black");

    const data = {
      labels: errorTitles,
      datasets: [
        {
          label: "Fouten",
          data: errorAmounts,
          borderColor: colorBlue,
          backgroundColor: colorLightBlue,
          borderWidth: 3,
        },
      ],
    };

    const options = {
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
          enabled: true, // Enable tooltips
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

<section>
  <h2>Soorten foutmeldingen</h2>
  <figure>
    <canvas id="bar-chart" aria-label="Soorten fouten grafiek">
      <ul>
        {#each results as item}
          <li>{item.title}: {item.amount}</li>
        {/each}
      </ul>
    </canvas>
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

  canvas {
    max-width: 100%;
    height: 300px;
  }

  h2 {
    margin-bottom: 50px;
  }
</style>
