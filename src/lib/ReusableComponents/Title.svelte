<script>
  import { MonthlyNavigation } from "$lib";
  import { page } from "$app/stores";
  export let company;
  export let nextMonth;
  export let previousMonth;

  let currentPage = $page.url.pathname;
</script>

<section>
  <div>
    <h1>{company[0].title}/home</h1>
    <p>Automatische Scan</p>
  </div>
  {#if currentPage === "/nieuwekijk/home"}
    <MonthlyNavigation onNextMonth={nextMonth} onPreviousMonth={previousMonth} />
  {/if}
</section>

<style>
  section {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-between;
  }

  section div {
    display: flex;
    flex-direction: column-reverse;
  }

  h1 {
    font-size: 2em;
  }

  @media screen and (max-width: 500px) {
    section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
</style>
