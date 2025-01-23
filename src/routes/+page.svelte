<script>
  import { SiteOverview, CurrentPageTitle } from '$lib';
  export let data = data;
  let company = data.sites;
</script>

<main id="main-content">
  <CurrentPageTitle {company} />
  <SiteOverview {data} />
</main>

<style>

  main {
    margin: 0 auto;
    padding: var(--average-padding);
    max-width: var(--page-width);
    gap: var(--average-gap);

    @media (max-width: 1600px) {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 700px) and (max-width: 1440px) {
      padding-left: 70px;
    }
  }

</style>