<script>
  import { BarChart } from '../index.js'
  export let result = data.scans;
  import { onMount } from 'svelte';

  onMount(() => {
  const uitpakken = document.getElementById('b');
  const left = document.querySelector('.left-half-type');
  const right = document.querySelector('.right-half-type');

  uitpakken.addEventListener("click", () => {
    left.classList.toggle('uitpakken-type');
    right.classList.toggle('uitpakken2-type');
    uitpakken.classList.toggle('section-tril-type');
  });
});
</script>

<section id="b">
  <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak left-half-type" alt="">
  <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak right-half-type" alt="">
  <img src="https://img.pikbest.com/png-images/20241116/red-gift-bow-with-ribbon-detail-png-on-transparent-background_11096262.png!sw800"  width="200" height="200" class="strikje" alt="">
  <h2>Soorten foutmeldingen</h2>
  <figure>
    <BarChart {result}/>
  </figure>
</section>

<style>
  
  section {
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 3 / 1 / 4 / 2;
    position: relative;
    border: 10px ridge var(--color-blue);
  }

  :global(section.section-tril-type) {
  animation: trillen 0.3s ease-in-out 4;
  z-index: 2;
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

  .right-half-type{
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.right-half-type.uitpakken2-type){
    animation: naar-rechts 1s forwards;
    animation-delay: 1.2s;
  }

  .left-half-type{
    clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.left-half-type.uitpakken-type){
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

  h2 {
    margin-bottom: 50px;
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
