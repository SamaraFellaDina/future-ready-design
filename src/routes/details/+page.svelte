<script>
  import { Title, Donuts, GuideLine11, GuideLine12, GuideLine13, GuideLine14, GuideLine21, GuideLine31, GuideLine32, GuideLine41, GuideLine42, Filter } from "$lib";
  export let data = data;
  export let company = data.sites;

  let index = 0;
  let result = data.scans[index];
</script>

<main>
  <Title {company} />

  <article>
    <Donuts {result} />
    <GuideLine11 />
    <GuideLine12 />
    <GuideLine13 />
    <GuideLine14 />
    <GuideLine21 />
    <GuideLine31 />
    <GuideLine32 />
    <GuideLine41 />
    <GuideLine42 />
  </article>

  <article>
    <Filter />
  </article>

</main>

<style>
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 0.2fr 1fr;
    gap: 20px;
    margin: 0 auto;
    padding: 30px 10px;
    max-width: 1100px;
  }

  article:first-child {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background-section);
  }
  article:last-child{
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    background-color: var(--color-background-section);
  }

  :global(.content-wrapper) {
    margin-bottom: 20px;
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
