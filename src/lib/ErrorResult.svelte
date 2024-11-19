<script>
  import { Icon } from "./index.js";

  export let result = data.scans;


  const getIconName = (amount) => {
    if (amount >= 0 && amount <= 20) {
      return "good"; 
    } else if (amount >= 21 && amount <= 40) {
      return "warning"; 
    } else if (amount >= 41) {
      return "critical-warning";
    }
    return "good"; 
  };

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
      <div>
        <h2>{title}</h2>
        <Icon name={getIconName(amount)} /> 
      </div>
      <div class="amount">
        <p>{amount}</p>
        <Icon name={icons[index]} /> 
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
