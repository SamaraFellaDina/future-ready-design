<script>
  import { Background, BarChart } from '../index.js'
  export let result = data.scans;
  import { onMount } from 'svelte';

// script voor view-transition
  onMount(() => {
  const section = document.getElementById('b');

  section.addEventListener('click', () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => toggleActiveState(section));
    } else {
      toggleActiveState(section);
    }
  });
});

function toggleActiveState(section) {
  section.classList.toggle('active4'); 
  section.offsetWidth;
}

</script>

<section id="b" class="type">
  <Background name = "risograph" />
  <h2>Soorten foutmeldingen</h2>
  <figure>
    <BarChart {result}/>
  </figure>
</section>

<style>

:global(.type.active4){
  transform: scale(2);
  z-index: 3000;
}
  
  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 3 / 1 / 4 / 2;
    position: relative;
    view-transition-name: amazing;
    /* overwritten properties */
    transform: scale(1);
    cursor: pointer;
    z-index: 0;
  }

  ::view-transition-group(super) {
    animation-duration: 3s;
}

  h2 {
    margin-bottom: 50px;
  }

  h2, figure{
    z-index: 2;
    position: relative;
  }
</style>
