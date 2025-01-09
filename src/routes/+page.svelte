<script>
  export let data = data;
  let sites = data.sites
  console.log(sites)

</script>

<main>
  <ul>
    {#each sites as {url, title}}
    <li>
      <svg>
  
      </svg>
      
      <section>
        <h2>{title}</h2>
        <p>{url.replace(/^https?:\/\//, "")}</p>
        <div>
          <svg></svg>
          <p>toegankelijk</p>
        </div>
      </section>
  
      <figure>
  
      </figure>
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
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    unicode-bidi: isolate;

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  li {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    padding: var(--average-padding);
  }
  @media (min-width: 700px) {
    ul {
      flex-wrap: wrap;
      flex-direction: row;
    }
    li {
      width: 45%;
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