<script>
  import { IconLibrary } from "$lib";

  export let result = data.scans;

  const getIconName = (amount) => {
    if (amount === 0 ) {
      return "good"; 
    } else if (amount >= 1 && amount <= 20) {
      return "fine"; 
    } else if (amount >= 21) {
      return "bad";
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
    <li>
      <div>
        <h2>{title}</h2>
        <IconLibrary name={getIconName(amount)} /> 
      </div>
      <div class="amount">
        <p>{amount}</p>
        <IconLibrary name={icons[index]} /> 
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

    @media (max-width: 1600px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
    };

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    };
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
    
    @media (max-width: 700px) {
      padding: 10px;
    };

    @media (max-width: 1600px) {
      height: 100%;
      margin-bottom: var(--average-gap);
    };
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
</style>