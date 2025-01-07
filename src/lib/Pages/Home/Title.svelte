<script>
  import { MonthlyNavigation } from "$lib";
  export let company;

</script>

<section>
  <div>
    <h1>{company[0].title}/home</h1>
    <p>Automatische Scan</p>
  </div>
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
