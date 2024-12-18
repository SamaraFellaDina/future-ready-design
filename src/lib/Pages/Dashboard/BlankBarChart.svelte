<script>
  import { Icon } from '$lib';
  export let labels;
  export let maxY;
  export let stepY;
</script>

<figure>
  <div class="y-axis">
    {#each Array.from({ length: maxY / stepY + 1 }, (_, i) => i * stepY) as y}
      <span>{y}</span>
    {/each}
  </div>

  <div class="data-lines">
    {#each labels as { name, value }}
      <div class="data-point">
        {#if name === "Contrast fouten"}
          <Icon name="contrast-errors" />
        {:else if name === "Structurele fouten"}
          <Icon name="structural-errors" />
        {:else if name === "Ontbrekende alt-teksten"}
          <Icon name="missing-alt-texts" />
        {:else if name === "Ontbrekende aria-labels"}
          <Icon name="aria-label-errors" />
        {/if}
        <div class="dot"></div>
        <hr style="--final-height: {(value / maxY) * 100}%;">
        <span>{name}</span>
      </div>
    {/each}
  </div>
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
    display: flex;
    position: relative;
    width: inherit;
    height: 300px;
    border-left: 2px solid var(--color-black);
    border-bottom: 2px solid var(--color-black);
    grid-column: 1 / -1;
    margin-left: 30px;
    margin-bottom: 40px;
  }

  .y-axis {
    position: absolute;
    left: -30px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 100%;
  }

  .data-lines {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .data-point {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }

  hr {
    border: 2px dashed var(--color-blue);
    animation: growHeight 1s ease-out forwards;
    height: 0;
    --final-height: 100%;
  }
  
  .data-point .dot {
    width: 20px;
    height: 20px;
    background: var(--color-blue);
    border-radius: 100%;
    border: 4px solid var(--color-lightblue);
    margin-top: 10px;
  }

  .data-lines span {
    position: absolute;
    bottom: -50px;
    text-align: center;
  }

</style>