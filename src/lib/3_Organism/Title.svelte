<script>
  import { MonthlyNavigation } from "../index.js";
  export let company;
  export let nextMonth;
  export let previousMonth;
</script>

<section>
  <div>
    <h1>{company[0].title}/home</h1>
    <p>Automatische Scan</p>
  </div>
  <MonthlyNavigation onNextMonth={nextMonth} onPreviousMonth={previousMonth} />
</section>

<style>
  section {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-between;
    animation: fadein 2s forwards;
    opacity: 0;
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

  @keyframes fadein{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
</style>
