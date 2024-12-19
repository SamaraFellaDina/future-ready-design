<script>
  import { MonthlyNavigation } from "../index.js";
  export let company;
  export let nextMonth;
  export let previousMonth;
</script>

<article>
  <div>
    <h1>{company[0].title}/home</h1>
    <p>Automatische Scan</p>
  </div>
  <MonthlyNavigation onNextMonth={nextMonth} onPreviousMonth={previousMonth} />
</article>

<style>
  article {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-between;
    box-shadow: unset;
  }

  article div {
    display: flex;
    flex-direction: column-reverse;
  }

  h1 {
    font-size: 2em;
  }

  @media screen and (max-width: 500px) {
    article {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
</style>
