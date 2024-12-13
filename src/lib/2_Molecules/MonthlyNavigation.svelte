<script>
  import { Icon } from "../index.js";
  export let data;

  let index = 0;
  let result = data.scans[index];

  function nextMonth() {
    if (index < data.scans.length - 1) {
      index += 1;
      result = data.scans[index];
      console.log("Next Month:", result);
    }
  }

  function previousMonth() {
    if (index > 0) {
      index -= 1;
      result = data.scans[index];
      console.log("Previous Month:", result);
    }
  }
</script>

<nav>
  <button on:click={previousMonth}><Icon name="arrow-left" /></button>
  <p>{result ? result.month || "N/A" : "Geen data"}</p>
  <button on:click={nextMonth}><Icon name="arrow-right" /></button>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button,
  p {
    --average-gap: 10px 20px;
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-gap);
  }
</style>
