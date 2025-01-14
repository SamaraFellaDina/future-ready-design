<script>
  import { DonutChart, IconLibrary } from '$lib'
  let percentage = 80;
</script>

<section>
  <h2>Toegankelijkheid</h2>
  <div>
    <DonutChart {percentage} />
    <ul>
      <li>
        <IconLibrary name = "good" />
        <p>Niveau A</p>
      </li>
      <li>
        <IconLibrary name = "good" />
        <p>Niveau AA</p>
      </li>
      <li>
        <IconLibrary name = "good" />
        <p>Niveau AAA</p>
      </li>
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
  }

  h2 {
    font-size: var(--font-size-large);
    padding-bottom: var(--average-gap);
  }

  div {
    display: flex;
    gap: var(--average-gap);
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
  }
  
  li {
    display: flex;
  }
</style>