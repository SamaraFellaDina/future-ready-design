<script>
  import { BlankTitle, AccessibillitySection, ScanResultSection } from '$lib'
  export let data;
  let company = data.sites;
</script>

<main>
  <BlankTitle {company}/>

  <AccessibillitySection />

  <ScanResultSection />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: var(--average-gap);
    padding: 30px 10px;
    margin-left: 300px;
    max-width: 1600px;
  }
</style>