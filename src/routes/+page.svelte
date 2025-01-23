<script>
  import { SiteOverview, CurrentPageTitle } from '$lib';
  export let data = data;
</script>

<main id="main-content">
  <CurrentPageTitle />
  <SiteOverview {data} />
</main>

<style>

  main {
    margin: 0 auto;
    max-width: var(--page-width);
    padding: 30px 10px;
    gap: var(--average-gap);
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) and (max-width: 1440px) {
      padding-left: 70px;
    }
  }

</style>