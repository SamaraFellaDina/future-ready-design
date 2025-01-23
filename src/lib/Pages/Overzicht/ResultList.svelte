<script>
  import { IconLibrary, WarningSign } from '$lib';
  
  const resultList = [
    {
      title: 'home',
      percentage: 54,
      urlLabel: 'nieuwekijk.nl/home/',
      url: 'nieuwekijk/home/details',
      grade: 'fine',
    },
    {
      title: 'over-ons',
      percentage: 48,
      urlLabel: 'nieuwekijk.nl/over-ons/',
      url: 'nieuwekijk/over-ons/details',
      grade: 'fine',
    },
    {
      title: 'contact',
      percentage: 100,
      urlLabel: 'nieuwekijk.nl/contact/',
      url: 'nieuwekijk/contact/details',
      grade: 'good',
    },
    {
      title: 'missie',
      percentage: 22,
      urlLabel: 'nieuwekijk.nl/missie/',
      url: 'nieuwekijk/missie/details',
      grade: 'bad',
    }
  ];
</script>

<ul>
  {#each resultList as page}
    <li class="filter-results {page.percentage === 100 ? 'voldoet' : 'voldoet-niet'} {page.percentage < 50 ? 'a' : page.percentage < 100 ? 'aa' : 'aaa'}">
      <a href="/{page.url}">
        <h2>
          <span>{page.title}</span>
          <span>{page.percentage}%</span>
        </h2>
        <div>
          <span>{page.urlLabel}</span>
          <meter value="{page.percentage}" low="50" high="99" optimum="100" max="100">{page.percentage}%</meter>
        </div>
        <WarningSign grade="{page.grade}" >
        {#if page.grade === 'bad'}
          <p>Mogelijk ernstige fouten ontdekt</p>
        {:else if page.grade === 'fine'}
          <p>Mogelijk nieuwe fouten ontdekt</p>
        {:else if page.grade === 'good'}
          <p>Geen fouten gevonden</p>
        {/if}
        </WarningSign>
        <ul>
          {#if page.percentage < 50}
            <li>
              <IconLibrary name="good" />
              <p>Niveau A</p>
            </li>
          {:else if page.percentage < 99}
            <li>
              <IconLibrary name="good" />
              <p>Niveau A</p>
            </li>
            <li>
              <IconLibrary name="good" />
              <p>Niveau AA</p>
            </li>
          {:else if page.percentage == 100}
            <li>
              <IconLibrary name="good" />
              <p>Niveau A</p>
            </li>
            <li>
              <IconLibrary name="good" />
              <p>Niveau AA</p>
            </li>
            <li>
              <IconLibrary name="good" />
              <p>Niveau AAA</p>
            </li>
          {/if}
        </ul>
      </a>
    </li>
  {/each}
</ul>

<style>
  ul:has(li > a) {
    list-style: none;
    display: grid;
    gap: var(--average-gap);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-column: 1 / -1;
    @media (max-width: 1440px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 820px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  a {
    text-decoration: none;
    display: flex;
    gap: var(--average-gap);
    flex-direction: column;
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);
    box-shadow: var(--box-shadow);
    height: 100%;
    transition: transform 1s
      linear(
        0,
        0.009,
        0.035 2.1%,
        0.141,
        0.281 6.7%,
        0.723 12.9%,
        0.938 16.7%,
        1.017,
        1.077,
        1.121,
        1.149 24.3%,
        1.159,
        1.163,
        1.161,
        1.154 29.9%,
        1.129 32.8%,
        1.051 39.6%,
        1.017 43.1%,
        0.991,
        0.977 51%,
        0.974 53.8%,
        0.975 57.1%,
        0.997 69.8%,
        1.003 76.9%,
        1.004 83.8%,
        1
      );
  }

  a:hover {
    transform: scale(1.05);
  }

  h2 {
    display: flex;
    justify-content: space-between;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--font-size-medium);
    cursor: unset;
  }

  meter {
    appearance: none;
    width: 100%;
    border-radius: 4px;
    height: 10px;
    background: #ccc;
  }

  meter::-webkit-meter-bar {
    background: #ccc;
    border-radius: 4px;
    height: 10px;
  }

  meter::-webkit-meter-optimum-value,
  meter::-webkit-meter-suboptimum-value,
  meter::-webkit-meter-even-less-good-value {
    border-radius: 4px;
  }

  meter::-webkit-meter-optimum-value {
    background: var(--color-status-good-border);
  }

  meter::-webkit-meter-suboptimum-value {
    background: var(--color-status-fine-border);
  }

  meter::-webkit-meter-even-less-good-value {
    background: var(--color-status-bad-border);
  }

  meter::-moz-meter-bar {
    border-radius: 4px;
  }

  meter:-moz-meter-optimum::-moz-meter-bar {
    background: var(--color-status-good-border);
  }

  meter:-moz-meter-sub-optimum::-moz-meter-bar {
    background: var(--color-status-fine-border);
  }

  meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: var(--color-status-bad-border);
  }

  a ul {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  a li {
    font-size: var(--font-size-regular);
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>