

<main>
  <h1>detailpagina</h1>
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

  @media only screen and (max-width: 1600px) {
    main {
      max-width: 900px;
      }

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