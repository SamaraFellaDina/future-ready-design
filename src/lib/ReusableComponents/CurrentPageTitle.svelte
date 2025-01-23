<script>
  import { MonthlySwitchButtons } from "$lib";
  import { page } from "$app/stores";
  export let nextMonth;
  export let previousMonth;

  let currentPage = $page.url.pathname;

  let h1Content = '';
  let pContent = '';

  $: {
    const currentPage = $page.url.pathname;

    if (currentPage === '/') {
      h1Content = 'Websiteoverzicht';
      pContent = 'Accessdash';
    } else if (currentPage.endsWith('/overzicht')) {
      h1Content = 'Paginaoverzicht';
      pContent = 'Accessdash';
    } else if (currentPage.endsWith('/details')) {
      h1Content = 'Paginadetails';
      pContent = 'Nieuwekijk/home';
    } else if (currentPage.endsWith('/nieuwekijk/home')) {
      h1Content = 'Automatische Scan';
      pContent = 'Nieuwekijk/home';
    }
  }
</script>

<section>
  <div>
    <h1>{h1Content}</h1>
    <p>{pContent}</p>
  </div>
  {#if currentPage === "/nieuwekijk/home"}
    <MonthlySwitchButtons onNextMonth={nextMonth} onPreviousMonth={previousMonth} />
  {/if}
</section>

<style>
  section {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / -1;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  section div {
    display: flex;
    flex-direction: column-reverse;
  }

  h1 {
    font-size: 2em;
  }
</style>
