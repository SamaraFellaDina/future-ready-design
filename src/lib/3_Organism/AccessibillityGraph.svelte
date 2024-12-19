<script>
  import { onMount } from 'svelte';
  import Chart from "chart.js/auto";
  import { Icon } from "../index.js";

  export let resultsheet = data.scans;
  let chart;
 
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  Chart.register(ChartDataLabels);
 
  let August = resultsheet[0].score;
  let September = resultsheet[1].score;
  let October = resultsheet[2].score;
  let November = resultsheet[3].score;
  let December = resultsheet[4].score;
 
  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue('--color-blue');
    const colorLightBlue = rootStyles.getPropertyValue('--color-lightblue');
    const fontFamily = rootStyles.getPropertyValue('--font-family');
    const colorBlack = rootStyles.getPropertyValue('--color-black');
 
    const months = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    const data = {
      labels: months,
      datasets: [{
        data: [, , , , , , , August, September, October, November, December],
        borderColor: colorBlue,
        backgroundColor: colorLightBlue,
        fill: true,
        tension: 0
      }]
    };
 
    const options = {
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: '#FFFFFF',
      pointHitRadius: 10,
      scales: {
        y: {
          grid: {
            display: false
          },
          beginAtZero: true,
          max: 100,
          tickColor: colorBlack,
          ticks: {
            stepSize: 20,
            font: {
              family: fontFamily,
              size: 16,
            },
            callback: function(value) {
              return value + '%';
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              family: fontFamily,
              size: 16,
            },
          }
        }
      },
      plugins: {
        tooltip: {
          enabled: true,
          titleAlign: 'center',
          bodyAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderWidth: 2,
          borderColor: colorBlue,
          padding: 10,
          displayColors: false,
          titleFont: {
            size: 14,
            weight: 'normal',
            family: fontFamily
          },
          titleColor: colorBlue,
          bodyFont: {
            size: 16,
            weight: 'bold',
            family: fontFamily
          },
          bodyColor: colorBlue,
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.raw + '%';
            }
          },
        },
        legend: {
          display: false
        },
        datalabels: {
          color: colorBlack,
          anchor: 'center',
          align: 'top',
          font: {
            family: fontFamily,
            weight: 'bold',
            size: 18,
          },
          formatter: (value) => value + '%'
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      onHover: (event, elements) => {
        const canvas = event.native.target;
        if (elements.length) {
          canvas.style.cursor = 'pointer';
        } else {
          canvas.style.cursor = 'default';
        }
      }
    };
 
    const ctx = document.getElementById('line-chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  });

  onMount(() => {
  const uitpakken = document.getElementById('c');
  const left = document.querySelector('.left-half-acces');
  const right = document.querySelector('.right-half-acces');

  let clickCount = 0; 

  uitpakken.addEventListener("click", () => {
    clickCount++;   

  if (clickCount % 2 !== 0) {
      setTimeout(() => {
        const audio = new Audio('./assets/sounds/papel-38926.mp3');
        audio.playbackRate = Math.max(6, audio.playbackRate - 6);
        audio.play();
      }, 0);

      setTimeout(() => {
        const audio2 = new Audio('./assets/sounds/bell.mp3');
        audio2.playbackRate = Math.max(1, audio2.playbackRate - 1);
        audio2.play();
      }, 1200);

    }

    left.classList.toggle('uitpakken-acces');
    right.classList.toggle('uitpakken2-acces');
    uitpakken.classList.toggle('section-tril-acces');
  });
});
</script>

<section id="c">
  <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak left-half-acces" alt="">
  <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak right-half-acces" alt="">
  <img src="https://img.pikbest.com/png-images/20241116/red-gift-bow-with-ribbon-detail-png-on-transparent-background_11096262.png!sw800"  width="200" height="200" class="strikje" alt="">
  <div>
    <h2>Toegankelijkheid</h2>
    <nav>
      <button>
        <Icon name="arrow-left" />
      </button>
      <span>2024</span>
      <button>
        <Icon name="arrow-right" />
      </button>
    </nav>
  </div>
  <figure>
    <canvas id="line-chart" aria-label="Grafiek van scanresultaten van een jaar">
      <ul>
        {#each resultsheet as item}
          <li>{item.date}: {item.score}</li>
        {/each}
      </ul>
    </canvas>
  </figure>
</section>

<style>

  section {
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 4 / 1 / 5 / 3;
    position: relative;
    border: 10px ridge var(--color-blue);
    cursor: pointer;
  }

  :global(section.section-tril-acces) {
    animation: trillen 0.3s ease-in-out 4;
    z-index: 2;
    cursor: unset;
}

  .inpak{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    pointer-events: none;
    z-index: 1;
  }

  .right-half-acces{
    clip-path: polygon(49% 0, 100% 0%, 100% 100%, 49% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.right-half-acces.uitpakken2-acces){
    animation: naar-rechts 1s forwards;
    animation-delay: 1.2s;
  }

  .left-half-acces{
    clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.left-half-acces.uitpakken-acces){
    animation: naar-links 1s forwards;
    animation-delay: 1.2s;
  }

  .strikje{
    position: absolute;
    top: 0%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 2;
  }
  
  canvas {
    max-width: 100%;
    height: 300px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @keyframes naar-links{
    to{
      transform: translateX(-500px);
      opacity: 0;
      display: none;
    }
  }

  @keyframes naar-rechts{
    to{
      transform: translateX(500px);
      opacity: 0;
      display: none;
    }
  }

  @keyframes trillen {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(-5px) rotate(-2deg);
    }
    50% {
      transform: translateX(5px) rotate(2deg);
    }
    75% {
      transform: translateX(-5px) rotate(-2deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }
</style>
