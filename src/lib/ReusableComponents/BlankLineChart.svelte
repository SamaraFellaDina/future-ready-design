<script>
  export let percentageData;

  import { onMount } from 'svelte';
  onMount(() => {
    document.body.classList.add('loaded');
  });

  const isValid = (value) => value !== undefined && value !== null && value !== "";
</script>

<div class="container">
  <div class="wrapper">
    <div class="chart-wrapper">
      <ul class="chart-y">
        <li>100</li>
        <li>80</li>
        <li>60</li>
        <li>40</li>
        <li>20</li>
        <li>0</li>
      </ul>
      <div class="chart-bars">
        <ul class="bars">
          {#each percentageData as { start, end, delay }}
            {#if isValid(start) && isValid(end)}
              <li style="--start: {start}%; --end: {end}%; --delay: {delay}s">
                <div class="bar"></div>
                <div class="dot">
                  <span class="tooltip">{end}%</span>
                </div>
              </li>
            {:else}
              <li style="visibility: hidden;"></li>
            {/if}
          {/each}
        </ul>
        <ul class="labels">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
:root {
  --chart-thickness: 3px;
  --border: 1px solid rgba(211, 211, 211, 0.6);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chart-wrapper {
  display: flex;
  padding: 20px;
  border: var(--border);
  flex: 2;
}

.chart-wrapper .chart-y li {
  padding: 0 15px;
}

.chart-wrapper .chart-y li + li {
  margin-top: 40px;
  margin-bottom: 30px;
}

.chart-bars {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.chart-bars .bars {
  display: flex;
  flex-grow: 1;
  height: 200px; /* Adjust for your desired chart height */
  position: relative;
  left: 33px;
}

.chart-bars .bars li {
  position: relative;
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.chart-bars .bars .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-blue);
  clip-path: polygon(
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start))
  );
  transition: clip-path 0.5s calc(var(--delay, 0) * 0.5s);
}

.loaded .chart-bars .bars .bar {
  clip-path: polygon(
    0 calc(100% - var(--start)),
    100% calc(100% - var(--end)),
    100% calc(calc(100% - var(--end)) + var(--chart-thickness)),
    0 calc(calc(100% - var(--start)) + var(--chart-thickness))
  );
}

.chart-bars .bars .dot {
  position: absolute;
  top: calc(100% - var(--start));
  left: 0;
  width: 10px;
  height: 10px;
  background: var(--color-blue);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.chart-bars .labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 5px;
}

.chart-bars .labels li {
  text-align: center;
  flex: 1;
}

.bars li:last-child .bar {
  display: none;
}

span.tooltip {
  position: absolute;
  bottom: 20px;
  left: -10px;
}
</style>
