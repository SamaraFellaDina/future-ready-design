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

  onMount(() => {
    const uitpakken = document.getElementById('d');
    const left = document.querySelector('.left-half-err');
    const right = document.querySelector('.right-half-err');

    const errorList = document.getElementsByClassName('liedjes');
    console.log(errorList)

    Array.prototype.forEach.call(errorList, function(element) {
      element.addEventListener('click', () => {
        left.classList.toggle('uitpakken-err');
        right.classList.toggle('uitpakken2-err');
        element.classList.toggle('li-tril')
      });
  });

});

</script>

<ul>
  <img src="https://img.pikbest.com/png-images/20241116/red-gift-bow-with-ribbon-detail-png-on-transparent-background_11096262.png!sw800"  width="100" height="100" class="strikje" alt="">
  {#each result.result as { title, amount }, index}
    <li class="liedjes" id="d">
      <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak left-half-err" alt="">
      <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak right-half-err" alt="">
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
    position: relative;
  }

  .liedjes{
    position: relative;
    border: 10px ridge var(--color-blue);
  }

  :global(.liedjes.li-tril) {
  animation: trillen 0.3s ease-in-out 4;
}

  .inpak{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    pointer-events: none;
    z-index: 1;
  }

  .right-half-err{
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.right-half-err.uitpakken2-err){
    animation: naar-rechts 1s forwards;
    animation-delay: 1.2s;
  }

  .left-half-err{
    clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.left-half-err.uitpakken-err){
    animation: naar-links 1s forwards;
    animation-delay: 1.2s;
  }

  .strikje{
    position: absolute;
    top: 0%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 2;
  }

  li {
    display: grid;
    grid-template-rows: 0.5fr 1fr;
    height: 20%;
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

  @keyframes naar-links{
    to{
      transform: translateX(-500px);
      opacity: 0;
    }
  }

  @keyframes naar-rechts{
    to{
      transform: translateX(500px);
      opacity: 0;
    }
  }

  @keyframes trillen {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(-5px) rotate(-2deg);
    }
    50% {
      transform: translateX(5px) rotate(2deg);
    }
    75% {
      transform: translateX(-5px) rotate(-2deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

</style>