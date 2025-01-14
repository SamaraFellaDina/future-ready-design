<script>
  import { SiteOverview} from '$lib';
  export let data = data;
</script>

<main>
  <SiteOverview {data}/>
</main>

<style>

  main {
    margin: 0 auto;
    padding: var(--average-padding);
    max-width: 1100px;
  }

  @media only screen and (max-width: 1600px) {
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