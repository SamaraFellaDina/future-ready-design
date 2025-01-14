<script>
  import { onMount } from "svelte";
  export let percentageData;
  export let chartWidth;
  export let mobileChartWidth;

  const isValid = (value) => value !== undefined && value !== null && value !== "";

  const lastValidIndex = percentageData.slice().reverse().findIndex(({ start }) => isValid(start));
  if (lastValidIndex !== -1) {
    percentageData[percentageData.length - 1 - lastValidIndex].isLastValid = true;
  }

  onMount(() => {
    const figure = document.querySelector(".line-chart");
    const lastDot = figure.querySelector(".last-dot");

    if (figure && lastDot) {
      figure.scrollLeft = lastDot.offsetLeft - figure.offsetLeft;

      figure.style.scrollSnapType = "none";
    }
  });
</script>

<figure class="line-chart">	
  <ul>
    <li>100</li>
    <li>80</li>
    <li>60</li>
    <li>40</li>
    <li>20</li>
    <li>0</li>
  </ul>
  <div style="--chart-width: {chartWidth}; --mobile-chart-width: {mobileChartWidth}">
    <ul>
      {#each percentageData as { start, end, delay, name, isLastValid }}
        {#if isValid(start) && isValid(end)}
          <li style="--start: {start}%; --end: {end}%; --delay: {delay}">
            <div class="bar"></div>
            <div class="dot">
              {#if isLastValid}
                <div class="last-dot {start < 50 ? 'bottom' : 'top'}">
                  <span class="month">{name.substr(0, 3)}</span>
                  <span class="value">{start}%</span>
                </div>
              {/if}
              {#if !isLastValid}
              <div class="tooltip">
                <span>{name.substr(0, 3)}</span>
                <span>{start}%</span>
              </div>
              {/if}
            </div>
            <span class="month-label">{name.substr(0, 3)}</span>
          </li>
        {:else}
          <li>
            <span class="month-label">{name.substr(0, 3)}</span>
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</figure>

<style>
:root {
  --chart-thickness: 3px;
}

@keyframes line-animation {
  from {
    clip-path: polygon(
      0 calc(100% - var(--start)),
      0 calc(100% - var(--start)),
      0 calc(100% - var(--start)),
      0 calc(100% - var(--start))
    );
  }

  to {
    clip-path: polygon(
      0 calc(100% - var(--start)),
      100% calc(100% - var(--end)),
      100% calc(calc(100% - var(--end)) + var(--chart-thickness)),
      0 calc(calc(100% - var(--start)) + var(--chart-thickness))
    );
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

figure {
  display: flex;
  padding-bottom: 35px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
}

figure > ul {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

figure > ul li {
  padding: 0 15px;
}

figure > div {
  --border-style:2px solid var(--color-border);
  display: flex;
  flex-direction: column;
  width: var(--chart-width);
  border-bottom: var(--border-style);
  border-left: var(--border-style);
  padding-left: 60px;
  
  @media (max-width: 1040px) {
    width: var(--mobile-chart-width);
  }
}

figure > div > ul:first-of-type {
  display: flex;
  position: relative;
  height: 100%;
}

figure > div > ul:first-of-type li {
  position: relative;
  display: flex;
  width: 100%;
  min-width: 50px;
}

figure > div > ul:first-of-type .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  clip-path: polygon(
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start))
  );
  animation: line-animation 1s forwards;
}

figure > div > ul:first-of-type .dot {
  position: absolute;
  top: calc(100% - var(--start));
  left: 0;
  width: 14px;
  height: 14px;
  background: var(--color-background-section);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

figure > div > ul:nth-of-type(2) {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-top: 1px solid var(--color-border);
  padding-top: 10px;
}

figure > div > ul:nth-of-type(2) > li {
  text-align: center;
  flex: 1;
  text-transform: lowercase;
}

figure > div > ul li:last-child .bar {
  display: none;
}

div.last-dot {
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  background-color: var(--color-background-section);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: absolute;
  left: -25px;
  cursor: default;
  scroll-snap-align: start;
}

div.last-dot.top {
  top: 20px;
}

div.last-dot.bottom {
  bottom: 20px;
}

figure div.dot:has(div.last-dot) {
  cursor: default;
}

div.last-dot span {
  color: var(--color-primary);
  font-size: var(--font-size-medium);
}

div.last-dot span:nth-of-type(2) {
  font-weight: var(--font-weight-bold);
}

div.tooltip {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  background-color: var(--color-background-section);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: absolute;
  top: 20px;
  left: -25px;
}

div.tooltip span {
  color: var(--color-primary);
  font-size: var(--font-size-medium);
}

div.tooltip span:nth-of-type(2) {
  font-weight: var(--font-weight-bold);
}

div.dot:hover div.tooltip {
  opacity: 1;
  pointer-events: all;
}

span.month-label {
  margin-left: -20px;
  position: absolute;
  bottom: -35px;
}
</style>