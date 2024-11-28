<script>
  import { Header, Footer } from '$lib';
  export let data;
  export let company = data.sites;

</script>

<Header {company}/>

<main id="main-content" class="wrapper">
  <slot />
</main>

<Footer />

<style>
  .wrapper {
    margin: auto;
    max-width: 1100px;
  }

  main {
    display: grid;
    grid-template-columns: 2.2fr 0.8fr; 
    grid-template-rows: 0.2fr 0.8fr 1fr 1.2fr;   
    gap: 20px;  
    height: 90%;
    margin: 20px auto;
    padding: 30px 10px;
  }

  @media only screen and (max-width: 1600px) {
    .wrapper{
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