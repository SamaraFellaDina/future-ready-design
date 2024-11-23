<script>
  export let result = data.scans;

  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

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

    const colorStatusGood = rootStyles.getPropertyValue("--color-status-good");
    const colorStatusGoodBorder = rootStyles.getPropertyValue("--color-status-good-border");

    const colorStatusFine = rootStyles.getPropertyValue("--color-status-fine");
    const colorStatusFineBorder = rootStyles.getPropertyValue("--color-status-fine-border");

    const colorStatusBad = rootStyles.getPropertyValue("--color-status-bad");
    const colorStatusBadBorder = rootStyles.getPropertyValue("--color-status-bad-border");


    const colorStatusCheck = (data) => {
      return data.map(value => {
        if (value >=20) {
          return colorStatusBad;
        } else if (value >=10) {
          return colorStatusFine;
        } else {
          return colorStatusGood
        }
      })
    }

    const colorStatusCheckBorder = (data) => {
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

    const data = {
      labels: errorTitles,
      datasets: [
        {
          label: "Fouten",
          data: errorAmounts,
          borderColor: colorStatusCheckBorder(errorAmounts),
          backgroundColor: colorStatusCheck(errorAmounts),
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

<canvas id="bar-chart" aria-label="Soorten fouten grafiek">
  <ul>
    {#each results as item}
      <li>{item.title}: {item.amount}</li>
    {/each}
  </ul>
</canvas>

<style>
    canvas {
    max-width: 100%;
    height: 300px;
  }
</style>