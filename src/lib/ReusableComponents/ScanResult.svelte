<script>
  import { DonutChart, IconLibrary, WarningSign } from '$lib'
  import { page } from "$app/stores";
  
  let percentage = 40;
  let currentPage = $page.url.pathname;
</script>
  
<section>
  {#if currentPage === "/nieuwekijk/home/details"}
    <div>
      <h2>Automatische Scan
      </h2>
      <p>
        <span>Laatste scan</span>
        <time datetime="2024-04-23">23/4/2024</time>
      </p>
    </div>
  {:else}
    <div>
      <h2>Automatische Scan</h2>
      <p>
        <span>Laatste scan</span>
        <time datetime="2024-04-23">23/4/2024</time>
      </p>
    </div>
  {/if}

  <div>
    <DonutChart {percentage} />
    <div>
      <WarningSign grade="bad">
        <h3> nieuwe fouten ontdekt </h3>
      </WarningSign>
      <p>
        *Dit is een schatting gegenereerd door een automatische scan. Test altijd handmatig voor een volledig beeld.
      </p>
    </div>
    {#if currentPage === "/nieuwekijk/overzicht"}
      <div>
        <h3>Aandacht vereist</h3>
        <ul>
          <li>
            <a href="/nieuwekijk/home">
              <IconLibrary name = "arrow-right" />
              /home
            </a>
          </li>
          <li>
            <a href="/nieuwekijk/over-ons">
              <IconLibrary name = "arrow-right" />
              /over-ons
            </a>
          </li>
          <li>
            <a href="/nieuwekijk/contact">
              <IconLibrary name = "arrow-right" />
              /contact
            </a>
          </li> 
        </ul>
      </div>
    {/if}
  </div>
  {#if currentPage === "/nieuwekijk/home/details"}
    <a class="more-details-link" href="/nieuwekijk/home"><WarningSign>
      <p>Bekijk scandetails</p>
      </WarningSign>
    </a>
  {/if}
</section>

<style>
  section {
    position: relative;
    padding: var(--average-padding);
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
    box-shadow: var(--box-shadow);
    grid-column: 2 / 4;
    @media (max-width: 1250px) {
      grid-column: 1 / -1;
    }
  }

  section > div:first-of-type {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  section a.more-details-link{
    justify-content: end;
  }

  section a.more-details-link:hover {
    text-decoration: none;
  }

  section > div:nth-of-type(2) {
    display: flex;
    gap: var(--average-gap);

    @media (max-width: 1250px) {
      flex-wrap: wrap;
    }
  }

  h2 {
    font-size: var(--font-size-large);
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 3fr;
    column-gap: var(--average-gap);

    @media (max-width: 440px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  li {
    font-size: var(--font-size-regular);
    white-space: nowrap;
  }

  h3 {
    font-weight: var(--font-weight-bold);
  }

  div > div {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
  }

  p {
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    gap: 10px;
    align-items: center;
    color: var(--color-regular-text);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    font-weight: var(--font-weight-bold);
  }
  
  time {
    text-align: end;
  }
</style>
