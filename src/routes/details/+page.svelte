<script>
  import { CurrentPageTitle, AccessibillityScore, ScanResult, GuideLine11, GuideLine12, Filter } from "$lib";
  export let data = data;
  export let company = data.sites;

  let index = 0;
  let result = data.scans[index];
</script>

<main>
  <CurrentPageTitle {company} />

  <article>
    <div>
      <AccessibillityScore />
      <ScanResult />
    </div>
    <GuideLine11 />
    <GuideLine12 />
  </article>

  <article>
    <Filter />
  </article>

</main>

<style>
  main {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 0.2fr 1fr;
    gap: 20px;
    margin: 0 auto;
    padding: 30px 10px;
    max-width: 1300px;
  }

  article:first-child {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background-section);
  }
  article:last-child{
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    position: relative;
  }

  :global(.content-wrapper) {
    margin-bottom: 20px;
  }

  div{
    display: grid;
    margin-bottom: 20px;
    gap: 20px;
  }


  @media only screen and (max-width: 1600px) {
    main {
      max-width: 900px;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1040px) {
    main {
      padding-left: 70px;
    }
  }
</style>
