<script>
  import { Icon } from "../index.js";
</script>

<nav>
  <button><Icon name="arrow-left" /></button>
   <p>Aug.</p>
  <button><Icon name="arrow-right" /></button>
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