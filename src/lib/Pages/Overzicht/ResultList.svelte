<script>
  import { IconLibrary, WarningSign } from '$lib';
  
  const resultList = [
    {
      title: 'home',
      percentage: 54,
      url: 'nieuwekijk/home',
      grade: 'fine',
    },
    {
      title: 'over-ons',
      percentage: 48,
      url: 'nieuwekijk/over-ons',
      grade: 'fine',
    },
    {
      title: 'contact',
      percentage: 100,
      url: 'nieuwekijk/contact',
      grade: 'good',
    },
    {
      title: 'missie',
      percentage: 22,
      url: 'nieuwekijk/missie',
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
        <label>
          <span>{page.url}</span>
          <meter value="{page.percentage}" low="50" high="99" optimum="100" max="100">{page.percentage}%</meter>
        </label>
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
    transition: 0.3s;
  }

  a:hover {
    transform: scale(1.05);
  }

  h2 {
    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--font-size-medium);
    cursor: unset;
  }

  meter {
    width: 100%;
  }

  meter::-webkit-meter-optimum-value {
    background: var(--color-status-good-border);
  }

  meter::-webkit-meter-suboptimum-value {
    background: var(--color-status-decent-border);
  }

  meter::-webkit-meter-even-less-good-value {
    background: var(--color-status-fine-border);
  }

  meter::-moz-meter-optimum-value {
    background: var(--color-status-good-border);
  }

  meter::-moz-meter-suboptimum-value {
    background: var(--color-status-decent-border);
  }

  meter::-moz-meter-even-less-good-value {
    background: var(--color-status-fine-border);
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