<script>
  import { MonthlyNavigation } from "../index.js";
  export let company = data.sites;
</script>

<section>
  <div>
    <h1>{company[0].title}/home</h1>
    <p>Automatische Scan</p>
  </div>
  <MonthlyNavigation />
</section>

<style>

  section {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
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