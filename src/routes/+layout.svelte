<script>
  import { Header, Footer } from '$lib';
  export let data;
  export let company = data.sites;

</script>

<Header {company}/>

<!-- <main id="main-content" class="wrapper"> -->
  <slot />
<!-- </main> -->

<Footer />

<style>
  :global(:root) {
    --font-family: 'Outfit', arial, sans-serif;
    --font-weight-thin: 100;
    --font-size-regular: 16px;
    --font-size-small: 14px;
    --font-size-large: 28px;
    --font-size-medium: 20px;
    --font-size-xlarge: 32px;
    --font-weight-bold: 700;

    --color-blue: #0275FF;
    --color-lightblue: #D5E8FF;
    --color-black: #5D666A;

    --color-regular-text: var(--color-black);
    --color-background:#F0F0F0;
    --color-background-section:#FFFFFF;
    --color-shadow: #C8C8C8;

    --color-status-good:#00800070;
    --color-status-fine:#ffa60053;
    --color-status-bad:#ff00004a;
    --color-status-good-border:green;
    --color-status-fine-border:orange;
    --color-status-bad-border:red;

    --average-gap: 20px;
    --average-padding: 30px;

    --box-shadow: 0px 0px 9px -2px var(--color-shadow);
    --section-border-radius: 8px;  
  }

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