<script>
  import { Header, Footer, Acid } from '$lib';
  export let data;
  export let company = data.sites;

</script>

<Header {company}/>
<Acid />
<main>
  <slot />
</main>

<Footer />

<style>
  main {
    display: grid;
    grid-template-columns: 2.2fr 0.8fr; 
    grid-template-rows: 0.2fr 0.8fr 1fr 1.2fr;   
    gap: 20px;  
    height: 90%;
    padding: 30px 10px;
    margin: auto;
    max-width: 1100px;
  }



main {
  position: relative; 
  z-index: 1; 
  display: grid;
  grid-template-columns: 2.2fr 0.8fr; 
  grid-template-rows: 0.2fr 0.8fr 1fr 1.2fr;   
  gap: 20px;  
  height: 90%;
  padding: 30px 10px;
  margin: auto;
  max-width: 1100px;
}
  @media only screen and (max-width: 1600px) {

    main {
      display: flex;
      flex-direction: column;
      max-width: 900px;

    }
  }

  @media only screen and (min-width: 700px) and (max-width: 1040px) {
    main {
      padding-left: 70px;
    }
  }
</style>