<script>
    import { BlankDonutChart, Icon } from '$lib'
    import { page } from "$app/stores";
    let percentage = 40;
    let borderColor = percentage < 50 ? 'var(--color-status-bad-border)' : percentage < 80 ? 'var(--color-status-fine-border)' : 'var(--color-status-good-border)';

    let currentPage = $page.url.pathname;
  </script>
  
  <section>
    <div>
      <h2>Automatische Scan</h2>
      <p>
        <span>Laatste scan</span>
        <time datetime="2024-04-23">23/4/2024</time>
      </p>
    </div>
  
    <div>
      <BlankDonutChart {percentage} />
      <div>
        <h3 style="--bordercolor: {borderColor}">3 nieuwe fouten ontdekt</h3>
        <p>
          *Dit is een schatting gegenereerd door een automatische scan. Test altijd handmatig voor een volledig beeld.
        </p>
      </div>
      {#if currentPage === "/nieuwekijk/overzicht"}
      <ul>
        <li>Aandacht vereist</li>
        <li>
          <a href="/">
            <Icon name = "arrow-right" />
            /over-ons
          </a>
        </li>
        <li>
          <a href="/">
            <Icon name = "arrow-right" />
            /over-ons
          </a>
        </li>
        <li>
          <a href="/">
            <Icon name = "arrow-right" />
            /over-ons
          </a>
        </li> 
      </ul>
      {/if}
    </div>
  </section>
  
  <style>
    section {
      padding: var(--average-padding);
      background-color: var(--color-background-section);
      border-radius: var(--section-border-radius);
      display: flex;
      flex-direction: column;
      gap: var(--average-gap);
      box-shadow: var(--box-shadow);
      grid-column: 2 / 4;
    }
    section > div:first-of-type {
      display: flex;
      justify-content: space-between;
    }
    
    section > div:nth-of-type(2) {
      display: flex;
      gap: var(--average-gap);
    }
    h2 {
      font-size: var(--font-size-large);
    }
    h3 {
      border: 1px solid var(--bordercolor);
      width: fit-content;
      padding: 10px;
      border-radius: 30px;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr 3fr;
      column-gap: var(--average-gap);
    }
    li:first-of-type {
      grid-column: 1 / -1;
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
    span {
      font-weight: var(--font-weight-bold);
    }
    time {
      text-align: end;
    }
  </style>