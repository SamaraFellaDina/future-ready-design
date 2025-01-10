<script>
  import { Icon, BlankDonutChart} from '$lib';
  export let data = data;
  console.log(data)
</script>

<ul>
  {#each data.sites as {url, title}}
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

<style>

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

  ul li {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);

    display: flex;
    gap: var(--average-gap);
  }

  ul li svg {
    --icon-ratio: 1.2em;
    width: var(--icon-ratio);
    height: var(--icon-ratio);
  }
  @media (min-width: 700px) {
      ul {
        grid-template-columns: 50% 50%;
      }
    }
</style>
