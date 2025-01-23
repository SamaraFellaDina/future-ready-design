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
    max-width: var(--page-width);

    @media (max-width: 1600px) {
      display: flex;
      flex-direction: column;
    
    }

    @media (min-width: 700px) and (max-width: 1440px) {
      padding-left: 70px;
    }
  }

</style>