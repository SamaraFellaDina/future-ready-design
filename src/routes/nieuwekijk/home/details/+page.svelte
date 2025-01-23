<script>
  import { CurrentPageTitle, AccessibillityScore, ScanResult, GuideLines, Filter } from "$lib";
  export let data = data;
</script>

<main id="main-content">
  <CurrentPageTitle />
  <div>
    <AccessibillityScore />
    <ScanResult />
  </div>
  <Filter />
  <GuideLines />
</main>

<style>
  main {
    display: grid;
    gap: 20px;
    margin: 0 auto;
    padding: 30px 10px;
    max-width: var(--page-width);

    @media (max-width: 1600px) {
      max-width: 900px;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 700px) and (max-width: 1040px) {
      padding-left: 70px;
    }
  }

  div {
    grid-area: 2 / 1 / 3 / 3;
    display: flex;
    gap: 20px;
    height: fit-content;

    @media (max-width: 1600px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  
</style>
