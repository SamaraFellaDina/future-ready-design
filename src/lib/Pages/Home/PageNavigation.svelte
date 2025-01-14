<script>
  import { Icon, BlankDonutChart } from '$lib';
  export let data = data;

  const filterUrlCheck = (url) => {
    const filterUrl = ["https://", "www."];
    let cleanedUrl = url;
    filterUrl.forEach((part) => {
      cleanedUrl = cleanedUrl.replace(part, "");
    });
    return cleanedUrl;
  }; 
</script>

<ul>
  {#each data.sites as {url, title}}
  <li>
    <Icon name='home-icon' width=30 height=30/>
    <div>
      <section>
        <h2>{title}</h2>
        <p>{filterUrlCheck(url)}</p>
      </section>

      <div>
        <Icon name='good' width=30 height=30 color='var(--color-status-good-border)'/>
        <p>toegankelijk</p>
      </div>
    </div>
    <BlankDonutChart percentage=80/>
  </li>
  {/each}
</ul>

<style>

ul {
    --average-gap: 20px;
    display: grid;
    gap: var(--average-gap);
    @media (min-width: 900px) {
      grid-template-columns: 50% 50%;
    }
  }

  ul li {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);
    box-shadow: var(--box-shadow);
    display: grid;
    grid-template-columns: 0.2fr 0.5fr 0.3fr;
    justify-content: space-between ;
    gap: var(--average-gap);
  }

  ul li div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul li div div {
    background-color: var(--color-status-good);
    border-radius: var(--section-border-radius);
    border: solid 2px var(--color-status-good-border);
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: center;
    align-content: center;
  }

</style>
