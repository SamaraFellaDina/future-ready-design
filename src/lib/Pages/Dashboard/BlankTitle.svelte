<script>
  import { page } from "$app/stores";
  export let company;
</script>

<div>
  <h1>{company[0].title}</h1>
  <p>{$page.url.pathname.slice(1)}</p>
</div>

<style>
  p {
    text-transform: capitalize;
  }

  h1 {
    font-size: var(--font-size-xlarge);
  }

  div {
    display: flex;
    flex-direction: column-reverse;
    grid-column: 1 / -1;
  }
</style>