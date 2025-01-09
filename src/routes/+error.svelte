<script>
  import {page} from '$app/stores'
</script>

<section>
  <h1>Kan de pagina niet vinden!</h1>
  <p>{$page.status} - {$page.error.message}</p>
  <a href="/">Naar home</a>
</section>

<style>
  section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  }
</style>