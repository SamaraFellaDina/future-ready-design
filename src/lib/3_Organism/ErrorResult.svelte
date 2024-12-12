<script>
  import { Icon } from "../index.js";

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
  "detected-errors",
  "contrast-errors",
  "structural-errors",
  "missing-alt-texts",
  "aria-label-errors",
];

</script>

<ul>
  {#each result.result as { title, amount }, index}
  <a href="/Result">

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

  </a>
  {/each}
</ul>

<style>
  ul {
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    row-gap: var(--average-gap);
  }

  li {
    display: grid;
    grid-template-rows: 0.5fr 1fr;
    height: 20%;
    background-color: var(--color-background-section);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-gap);
  }

  li h2 {
    padding-bottom: 0.5em;
    font-size: 20px;
    font-weight: var(--font-weigth-thin);
  }

  li div {
    --_size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li div:nth-child(1){
    align-items: flex-start;
  }

  li div p {
    font-size: var(--_size);
  }

  @media only screen and (max-width: 1600px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }

    li {
      height: 100%;
      margin-bottom: var(--average-gap);
    }
  }

  @media only screen and (max-width: 700px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }

    li{
      padding: 10px;
    }
  }

</style>