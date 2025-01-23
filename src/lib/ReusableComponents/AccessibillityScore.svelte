<script>
  import { DonutChart, IconLibrary } from '$lib'
  let percentage = 80;
</script>

<section>
  <h2>Toegankelijkheid</h2>
  <div>
    <DonutChart {percentage} />
    <ul>
      {#if percentage < 50}
        <li>
          <IconLibrary name="good" />
          <p>Niveau A</p>
        </li>
      {:else if percentage < 99}
        <li>
          <IconLibrary name="good" />
          <p>Niveau A</p>
        </li>
        <li>
          <IconLibrary name="good" />
          <p>Niveau AA</p>
        </li>
      {:else if percentage == 100}
        <li>
          <IconLibrary name="good" />
          <p>Niveau A</p>
        </li>
        <li>
          <IconLibrary name="good" />
          <p>Niveau AA</p>
        </li>
        <li>
          <IconLibrary name="good" />
          <p>Niveau AAA</p>
        </li>
      {/if}
    </ul>
  </div>
</section>

<style>
  section {
    padding: var(--average-padding);
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
    box-shadow: var(--box-shadow);
    grid-column: 1 / 2;
    @media (max-width: 1250px) {
      grid-column: 1 / -1;
    }
  }

  h2 {
    font-size: var(--font-size-large);
    padding-bottom: var(--average-gap);
  }

  div {
    display: flex;
    gap: var(--average-gap);
    align-items: center;
    flex-wrap: wrap;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
    align-self: baseline;
  }
  
  li {
    display: flex;
    gap: 5px;
    align-items: center;
  }
</style>