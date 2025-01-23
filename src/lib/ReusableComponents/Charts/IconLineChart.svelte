<script>
  import { IconLibrary } from '$lib';
  export let labels;
  export let chartMaxY;
  export let chartStepY;

  const calculateChartYAxisSteps = Array.from(
    { length: chartMaxY / chartStepY + 1 },
    (_, i) => i * chartStepY
  );
</script>

<figure>
  <ul>
    {#each calculateChartYAxisSteps as stepY}
      <li>{stepY}</li>
    {/each}
  </ul>

  <ul>
    {#each labels as { name, value }}
      <li>
        {#if name === "Contrast fouten"}
          <IconLibrary name="contrast-errors" />
        {:else if name === "Structurele fouten"}
          <IconLibrary name="structural-errors" />
        {:else if name === "Ontbrekende alt-teksten"}
          <IconLibrary name="missing-alt-texts" />
        {:else if name === "Ontbrekende aria-labels"}
          <IconLibrary name="aria-label-errors" />
        {/if}
        <div>
          <div>
            <span>{name}</span>
            <span>Aantal: {value}</span>
          </div>
        </div>
        <div style="--final-height: {(value / chartMaxY) * 100}%;"></div>
        <span>{name}</span>
      </li>
    {/each}
    </ul>
</figure>

<style>
  @keyframes growHeight {
    from {
      height: 0;
    }
    to {
      height: var(--final-height);
    }
  }

  figure {
    --border-style: 2px solid var(--color-border);
    display: flex;
    position: relative;
    width: inherit;
    height: 300px;
    border-left: var(--border-style);
    border-bottom: var(--border-style);
    grid-column: 1 / -1;
    margin-left: 30px;
    margin-bottom: 40px;
    
    @media (max-width: 700px) {
      margin-bottom: 80px;
    }
  }

  ul:first-of-type {
    position: absolute;
    left: -35px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 100%;
  }

  ul:nth-of-type(2) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }

  li > div:nth-of-type(2) {
    border: 2px dashed var(--color-primary);
    animation: growHeight 1s ease-out forwards;
    height: 0;
    --final-height: 100%;
    @media (prefers-reduced-motion) {
      animation: none;
      height: var(--final-height);
    }
  }
  
  li > div:nth-of-type(1) {
    width: 20px;
    height: 20px;
    background: var(--color-primary);
    border-radius: 100%;
    border: 4px solid var(--color-primary-highlight);
    margin-top: 10px;
    position: relative;
    cursor: pointer;
  }

  li > span {
    position: absolute;
    bottom: -60px;
    text-align: center;

    @media (max-width: 700px) {
      bottom: -80px;
      transform: rotate(45deg) scale(0.8);
    }
  }

  li > div:nth-of-type(1) > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 20px;
    background-color: var(--color-background-section);
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--color-primary);
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;

    @media (max-width: 700px) {
      white-space: unset;
    }
  }

  li > div:nth-of-type(1) > div span:first-of-type {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
  }

  li > div:nth-of-type(1) > div span:nth-of-type(2) {
    font-size: var(--font-size-medium);
    color: var(--color-primary);
  }

  li > div:nth-of-type(1):hover > div {
    opacity: 1;
    pointer-events: all;
  }
</style>