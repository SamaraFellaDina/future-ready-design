<script>
  import { IconLibrary, DonutChart, WarningSign } from '$lib';
  const resultList = [
    {
      title: 'Nieuwekijk',
      percentage: 54,
      url: 'www.nieuwekijk.nl',
      grade: 'fine',
      status: 'nieuwe fouten ontdekt'
    },
    {
      title: 'Future Ready Design',
      percentage: 48,
      url: 'www.futurereadydesign.nl',
      grade: 'bad',
      status: 'nieuwe fouten ontdekt'
    },
    {
      title: 'Funda',
      percentage: 100,
      url: 'www.funda.nl',
      grade: 'good',
      status: 'geen nieuwe fouten ontdekt'
    },
    {
      title: 'strato',
      percentage: 22,
      url: 'www.strato.nl',
      grade: 'bad',
      status: 'nieuwe fouten ontdekt'
    }
  ];

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
  {#each resultList as {url, title, percentage, grade, status}}
  <li>
    <a href="nieuwekijk/overzicht">
    <IconLibrary name='home-icon' width=30 height=30/>
    <div>
      <section>
        <h2>{title}</h2>
        <p aria-label="gecontroleerde pagina van:{url}">{filterUrlCheck(url)}</p>
      </section>
        <WarningSign grade={grade}>
          <p>{status}</p>
        </WarningSign>
    </div>
    <DonutChart percentage={percentage}/>
    </a>
  </li>
  {/each}
</ul>

<style>

ul {
    --average-gap: 20px;
    display: grid;
    gap: var(--average-gap);
    list-style: none;
    
    @media (min-width: 900px) {
      grid-template-columns: 50% 50%;
    }
  }
  ul li a {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);
    box-shadow: var(--box-shadow);
    display: grid;
    grid-template-columns: 0.2fr 0.5fr 0.3fr;
    justify-content: space-between;
    gap: var(--average-gap);
    transition: 0.3s;


    @media (min-width: 900px) {
      grid-template-columns: 0.2fr 1fr 0.3fr;
    }
  }
  ul li a:visited,
  ul li a:link {
    text-decoration: none;
  }

  ul li a:hover {
    transform: scale(1.05);
  }

  ul li a div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul li a div section p {
    font-size: var(--font-size-small);
  }

  ul li a div section h2 {
    line-height: 1em;
    font-size: var(--font-size-medium);

    @media (min-width: 600px) {
      font-size: var(--font-size-large);
    }

    @media (min-width: 900px) {
      font-size: var(--font-size-medium);
    }

    @media (min-width: 1000px) {
      font-size: var(--font-size-large);
    }
  }

</style>
