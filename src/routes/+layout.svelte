<script>
  import { Header, Footer } from '$lib';
  export let data;
  export let company = data.sites;

</script>

<Header {company}/>
  <slot />
<Footer />
