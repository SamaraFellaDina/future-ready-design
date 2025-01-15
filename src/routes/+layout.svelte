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
    --font-weight-bold: 700;

    /* font-sizes */
    --font-size-small: 14px;
    --font-size-regular: 16px;
    --font-size-large: 28px;
    --font-size-medium: 20px;
    --font-size-xlarge: 32px;

    /* colors */
    --color-primary: #0275FF;
    --color-primary-highlight: #D5E8FF;

    --color-regular-text: #5D666A;
    --color-background:#F0F0F0;
    --color-background-section:#FFFFFF;
    --color-shadow: #C8C8C8;
    --color-border:#5D666A;

    /* colors for grading */
    --color-status-good:#00800070;
    --color-status-decent:##0274ff97;
    --color-status-fine:#ffa60053;
    --color-status-bad:#ff00004a;
    --color-status-good-border:green;
    --color-status-decent-border:var(--color-primary);
    --color-status-fine-border:orange;
    --color-status-bad-border:red;

    /* global properties */
    --average-gap: 20px;
    --average-padding: 30px;
    --box-shadow: 0px 0px 9px -2px var(--color-shadow);
    --section-border-radius: 8px;  
  }
</style>