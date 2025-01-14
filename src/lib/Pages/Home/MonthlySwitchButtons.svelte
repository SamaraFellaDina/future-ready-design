<script>
  import { IconLibrary } from "$lib";
  export let onNextMonth;     
  export let onPreviousMonth; 
</script>

<nav>
  <button on:click={onPreviousMonth}><IconLibrary name="arrow-left" /></button>
  <p>Aug.</p> 
  <button on:click={onNextMonth}><IconLibrary name="arrow-right" /></button>
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
