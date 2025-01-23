<script>
  import { CurrentPageTitle, AccessibillityScore, ScanResult, FilterBar, ResultList } from '$lib';
  export let data;
  let company = data.sites;
</script>

<main>
  <CurrentPageTitle {company}/>

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
  }

  @media only screen and (min-width: 700px) and (max-width: 1440px) {
    main {
      padding-left: 70px;
    }
  }
</style>