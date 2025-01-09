<script>
  import { Title, AccessibillityScore, ScanResult, SearchBar, SearchResults } from '$lib';
  export let data;
  let company = data.sites;
</script>

<main>
  <Title {company}/>

  <AccessibillityScore />

  <ScanResult />

  <SearchBar />

  <SearchResults />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: var(--average-gap);
    padding: 30px 10px;
    margin-left: 300px;
    max-width: 1300px;
    margin: 0 auto;
  }
</style>