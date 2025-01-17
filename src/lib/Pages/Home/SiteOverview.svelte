<script>
  import { IconLibrary, DonutChart, WarningSign } from '$lib';
  export let data = data;

  const filterUrlCheck = (url) => {
    const filterUrl = ["https://", "www."];
    let cleanedUrl = url;

    filterUrl.forEach((part) => {
      cleanedUrl = cleanedUrl.replace(part, "");
    });

    if (cleanedUrl.length > 10) {
      return cleanedUrl.substring(0, 15) + '...'
    }
    return cleanedUrl;
  }; 
</script>

<ul>
  {#each data.sites as {url, title}}
  <li>
    <IconLibrary name='home-icon' width=30 height=30/>
    <div>
      <section>
        <h2>{title}</h2>
        <p>{filterUrlCheck(url)}</p>
      </section>
        <WarningSign grade='good'>
          <p>toegankelijk</p>
        </WarningSign>
    </div>
    <DonutChart percentage=80/>
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

    @media (min-width: 900px) {
      grid-template-columns: 0.2fr 1fr 0.3fr;
    }

  }

  ul li div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul li div section p {
    font-size: var(--font-size-small);
  }

  ul li div section h2 {
    line-height: 1em;
    font-size: var(--font-size-medium);

    @media (min-width: 600px) {
      font-size: var(--font-size-large);
    }

    @media (min-width: 900px) {
      font-size: var(--font-size-medium);
    }
  }

</style>
