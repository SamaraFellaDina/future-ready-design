<script>
  import { Header, Footer } from '$lib';
  import { onNavigate } from '$app/navigation'
  export let data;
  export let company = data.sites;

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<Header {company}/>
  <slot />
<Footer />
