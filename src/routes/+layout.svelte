<script>
  import { Header, Footer } from '$lib';
  export let data;
  export let company = data.sites;

</script>

<Header {company}/>
  <slot />
<Footer />

<style>
  :global(:root) {
    /* fonts */
    --font-family: 'Outfit', arial, sans-serif;
    --font-weight-thin: 100;
    --font-size-regular: 16px;
    --font-size-small: 14px;
    --font-size-large: 28px;
    --font-size-medium: 20px;
    --font-size-xlarge: 32px;
    --font-weight-bold: 700;

    /* colors */
    --color-primary: #0275FF;
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
    --color-status-decent-border:var(--color-primary);
    --color-status-fine-border:orange;
    --color-status-bad-border:red;

    --average-gap: 20px;
    --average-padding: 30px;

    --box-shadow: 0px 0px 9px -2px var(--color-shadow);
    --section-border-radius: 8px;  
  }
</style>