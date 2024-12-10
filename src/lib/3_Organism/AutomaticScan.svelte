<script>
  export let result = data.scans;
  import { Background, DonutChart } from '../index.js';
  import { onMount } from 'svelte';

// script voor view-transition
  onMount(() => {
  const section = document.getElementById('a');

  section.addEventListener('click', () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => toggleActiveState(section));
    } else {
      toggleActiveState(section);
    }
  });
});

function toggleActiveState(section) {
  section.classList.toggle('active'); 
  section.offsetWidth;
}

</script>

<section id="a" class="active">
  <Background name = "art" />
    <div>
      <h2>{result.title}</h2>
      <p>{result.description}</p>
    </div>
    <DonutChart {result}/>
</section>

<style>

  section.active{
    transform: scale(1);
    z-index: 0;
  }
 
  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    gap: 1em;
    view-transition-name: super;
    /* overwritten properties */
    transform: scale(2) translateY(200px);
    cursor: pointer;
    z-index: 3000;
    /* animation: rotatezoom 2s forwards; */
  }

::view-transition-group(super) {
    animation-duration: 3s;
}

  div{
    z-index: 1;
  }


@keyframes rotatezoom{
  from{
    transform: rotateZ(0deg);
  }
  to{
    transform: rotateZ(360deg);
  }
}
</style>
