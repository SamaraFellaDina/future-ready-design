<script>
  import { Icon } from "../index.js";
  import { onMount } from 'svelte';
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

// script voor view-transition
  onMount(() => {
  const errorList = document.getElementsByClassName('liedjes');
  console.log(errorList)

  const bliep = [1, 2, 3];

  Array.prototype.forEach.call(errorList, function(element) {
    element.addEventListener('click', () => {
      if (document.startViewTransition) {
        document.startViewTransition(() => toggleActiveState(element));
      } else {
        toggleActiveState(element);
      }
    });
});

});
  

function toggleActiveState(element) {
  element.classList.toggle('active'); 
  element.offsetWidth;
}

</script>

<ul>
  {#each result.result as { title, amount }, index}
    <li class="liedjes">
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

  :global(.liedjes.active) {
      transform: scale(2) !important;
      z-index: 3000 !important;
      padding: 40px !important;
  }

  li {
    
    display: grid;
    grid-template-rows: 0.5fr 1fr;
    height: 20%;
    /* background-color: var(--color-background-section); */
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-gap);
    /* https://grainy-gradients.vercel.app/ */
    filter: contrast(170%) brightness(950%);
    background: 
    linear-gradient(45deg, var(--color-blue), rgba(0,0,0,0)),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    /* view-transition-name: outstanding; */
    /* overwritten properties */
    transform: scale(1);
    cursor: pointer;
    z-index: 0;
    
  }

  ::view-transition-group(outstanding) {
    animation-duration: 3s;
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