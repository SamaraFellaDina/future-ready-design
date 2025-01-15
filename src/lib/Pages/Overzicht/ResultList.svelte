<script>
  import { IconLibrary } from '$lib'
</script>

<ul>
  <li>
    <a href="/">
      <h2>
        <span>over-ons</span>
        <span>73%</span>
      </h2>
      <label>
        <span>nieuwekijk.nl/over-ons</span>
        <meter value="73" max="100">73%</meter>
      </label>
      <p><IconLibrary name = "fine" />Mogelijk nieuwe fouten ontdekt</p>
      <ul>
        <li><IconLibrary name = "good" />Niveau A</li>
      </ul>
    </a>
  </li>
    <li>
    <a href="/">
      <h2>
        <span>over-ons</span>
        <span>73%</span>
      </h2>
      <label>
        <span>nieuwekijk.nl/over-ons</span>
        <meter value="73" max="100">73%</meter>
      </label>
      <p><IconLibrary name = "fine" />Mogelijk nieuwe fouten ontdekt</p>
      <ul>
        <li><IconLibrary name = "good" />Niveau A</li>
      </ul>
    </a>
  </li>
    <li>
    <a href="/">
      <h2>
        <span>over-ons</span>
        <span>73%</span>
      </h2>
      <label>
        <span>nieuwekijk.nl/over-ons</span>
        <meter value="73" max="100">73%</meter>
      </label>
      <p><IconLibrary name = "fine" />Mogelijk nieuwe fouten ontdekt</p>
      <ul>
        <li><IconLibrary name = "good" />Niveau A</li>
      </ul>
    </a>
  </li>
    <li>
    <a href="/">
      <h2>
        <span>over-ons</span>
        <span>73%</span>
      </h2>
      <label>
        <span>nieuwekijk.nl/over-ons</span>
        <meter value="73" max="100">73%</meter>
      </label>
      <p><IconLibrary name = "fine" />Mogelijk nieuwe fouten ontdekt</p>
      <ul>
        <li><IconLibrary name = "good" />Niveau A</li>
      </ul>
    </a>
  </li>
</ul>

<style>
  ul {
    list-style: none;
    display: grid;
    gap: var(--average-gap);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-column: 1 / -1;
  }

  a {
    text-decoration: none;
    display: flex;
    gap: var(--average-gap);
    flex-direction: column;
        background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);
    box-shadow: var(--box-shadow);
  }

  h2 {
    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--font-size-medium);
    cursor: unset;
  }

  meter {
    width: 100%;
  }

  p {
    display: flex;
    gap: 10px;
    align-items: center;
    border: 1px solid var(--color-status-fine-border);
    padding: 15px;
    border-radius: 30px;
    justify-content: center;
    font-size: var(--font-size-medium);
  }

  a li {
    font-size: var(--font-size-regular);
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>