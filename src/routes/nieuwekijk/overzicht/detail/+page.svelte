

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

  @media (max-width: 1700px) {
    main {
      max-width: 900px;
      }

    main {
      display: flex;
      flex-direction: column;
    }
  }

</style>