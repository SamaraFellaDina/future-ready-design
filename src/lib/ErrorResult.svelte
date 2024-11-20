<script>
  import Icon from "./Icon.svelte";

  export let result = data.scans;

  // Define the mapping for icons
  const icons = [
    "ondekte-fouten",
    "contrast-fouten",
    "structuele-fouten",
    "ontbrekende-alt-teksten",
    "aria-label",
  ];
</script>

<ul>
  {#each result.result as { title, amount }, index}
    <li>
      <h2>{title}</h2>
      <div>
        <p>{amount}</p>
        <Icon name={icons[index]} /> <!-- Dynamically assign icon based on index -->
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    row-gap: var(--average-gap);
  }
  @media only screen and (max-width: 1600px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }
  }
  @media only screen and (max-width: 700px) {
    ul {
      display: block;
    }
  }

  li {
    height: 20%;
    background-color: var(--color-background-section);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-padding);
  }
  @media only screen and (max-width: 1600px) {
    li {
      height: 100%;
      margin-bottom: var(--average-gap);
    }
  }

  li h2 {
    padding-bottom: 0.5em;
    font-size: 20px;
  }

  li div {
    --size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li div p {
    font-size: var(--size);
  }
</style>
