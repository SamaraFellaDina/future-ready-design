<script>
  import { Icon, BlankDonutChart} from '$lib';
  export let data = data;
</script>

<ul>
  {#each data.sites as {url, title}}
  <li>
    <Icon name='home-icon' width=30 height=30/>
    <section>
      <h2>{title}</h2>
      <p>{url.replace(/^https?:\/\/(www\.)?/, "")}</p>
      <div>
      <Icon name='good' width=30 height=30 color='var(--color-status-good-border)'/>

        <p>toegankelijk</p>
      </div>
    </section>
      <BlankDonutChart percentage=80/>
  </li>
  {/each}
</ul>

<style>

ul {
    --average-gap: 20px;
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


    @media (min-width: 700px) {
      grid-template-columns: 50% 50%;
    }
  }

  ul li {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);
    box-shadow: var(--box-shadow);

    display: grid;
    grid-template-columns: 10% 50% 30%;
    justify-content: space-between;
    gap: var(--average-gap);
  }

  ul li svg {
    --icon-ratio: 1.2em;
    width: var(--icon-ratio);
    height: var(--icon-ratio);
  }

  ul li section{
    display: grid;
    grid-template-rows: 30% 30% 20%;
    align-content: space-between;
  }

  ul li section div {
    background-color: var(--color-status-good);
    border-radius: var(--section-border-radius);
    border: solid 2px var(--color-status-good-border);
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    align-content: center;

  }

</style>
