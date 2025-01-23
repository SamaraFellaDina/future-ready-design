<script>
  import { CurrentPageTitle, AccessibillityScore, ScanResult, FilterBar, ResultList } from '$lib';
</script>

<main id="main-content">
  <CurrentPageTitle />

  <AccessibillityScore />

  <ScanResult />

  <FilterBar />

  <ResultList />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: var(--average-gap);
    padding: 30px 10px;
    margin-left: 300px;
    max-width: var(--page-width);
    margin: 0 auto;

    @media (min-width: 700px) and (max-width: 1440px) {
      padding-left: 70px;
    }
  }
</style>