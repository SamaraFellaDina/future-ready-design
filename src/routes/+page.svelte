<script>
  import { Icon, BlankDonutChart} from '$lib';
  export let data = data;
  let sites = data.sites
  console.log(sites)

</script>

<main>
  <ul>
    {#each sites as {url, title}}
    <li>
      <Icon name='home-icon' width=20 height=20/>
      <section>
        <h2>{title}</h2>
        <p>{url.replace(/^https?:\/\//, "")}</p>
        <div>
          <svg></svg>
          <p>toegankelijk</p>
        </div>
      </section>
        <BlankDonutChart percentage=80/>
    </li>
    {/each}
  </ul>
</main>

<style>

  main {
    display: grid;
    grid-template-columns: 2.2fr 0.8fr; 
    grid-template-rows: 0.2fr 0.8fr 1fr 1.2fr;   
    gap: 20px;  
    margin: 0 auto;
    padding: 30px 10px;
    max-width: 1100px;
  }

  ul {
    --average-gap: .8em;
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    unicode-bidi: isolate;

    display: grid;
    gap: var(--average-gap);

  }

  li {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);

    display: flex;
    gap: var(--average-gap);
  }

  li svg {
    --icon-ratio: 1.2em;
    width: var(--icon-ratio);
    height: var(--icon-ratio);
  }


  @media (min-width: 700px) {

      ul {
        grid-template-columns: 50% 50%;
      }
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