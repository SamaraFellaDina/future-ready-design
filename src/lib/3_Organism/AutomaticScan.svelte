<script>
  export let result = data.scans;
  import { DonutChart } from '../index.js';
  import { onMount } from 'svelte';

// onMount to add the event listener when the component is mounted
onMount(() => {
  const uitpakken = document.getElementById('d');
  const left = document.querySelector('.left-half');
  const right = document.querySelector('.right-half');

  uitpakken.addEventListener("click", () => {
    left.classList.toggle('uitpakken');
    right.classList.toggle('uitpakken2');
  });

  // Cleanup event listener when the component is destroyed
  return () => {
    uitpakken.removeEventListener("click", () => {
      left.classList.toggle('uitpakken');
      right.classList.toggle('uitpakken2');
    });
  };
});
</script>

<section id="d">
  <img src="https://cdn.dribbble.com/userupload/4473676/file/still-f098cb72321a7acc11f3c34cbb943e5b.gif?resize=400x0" class="inpak left-half" alt="">
  <img src="https://cdn.dribbble.com/userupload/4473676/file/still-f098cb72321a7acc11f3c34cbb943e5b.gif?resize=400x0" class="inpak right-half" alt="">
  <img src="https://img.pikbest.com/png-images/20241116/red-gift-bow-with-ribbon-detail-png-on-transparent-background_11096262.png!sw800"  width="200" height="200" class="strikje" alt="">
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
    <DonutChart {result}/>
</section>

<style>

  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    overflow: hidden;
    gap: 1em;
    position: relative;
    
    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 0;
    }
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
  }

  .right-half{
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
  }

  :global(.right-half.uitpakken2){
    animation: naar-rechts 1s forwards;
  }

  .left-half{
    clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
  }

  :global(.left-half.uitpakken){
    animation: naar-links 1s forwards;
  }

  .strikje{
    position: absolute;
    top: 0%;
    left: 50%; 
    transform: translate(-50%, -50%); 
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }

  @keyframes naar-links{
    to{
      transform: translateX(-500px);
    }
  }

  @keyframes naar-rechts{
    to{
      transform: translateX(500px);
    }
  }

</style>
