<script>
  import Icon from "./Icon.svelte";
  export let company;
  </script>

<header>
  <Icon name = "accessdash-logo" />
  <nav>
    <h2><Icon name = "dashboard" /><span>Dashboard</span></h2>
    <a class="active" href='/dashboard'>Dashboard</a>
    <a href='/info'>Info</a>
    <a href='/voortgang'>Voortgang</a>
    <a href='/scan'>Scan</a>
  </nav>
  <nav>
    <h2><Icon name = "page-links" /><span>{company[0].title}</span></h2>
    <a class="active" href='/{company[0].title}/home'>/home</a>
    <a href='/{company[0].title}/over-ons'>/over-ons</a>
    <a href='/{company[0].title}/contact'>/contact</a>
    <a href='/{company[0].title}/missie'>/missie</a>
    <a href='/{company[0].title}/blog'>/blog</a>
    <a href='/{company[0].title}/blog-detail'>/blog-detail</a>
  </nav>
</header>

<style>
  header {
    position: fixed;
    background-color: var(--color-background-section);
    height: 100%;
    padding: var(--average-padding);
    display: flex;
    flex-direction: column;
    gap: 50px;
    box-shadow: var(--box-shadow);
  }

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
  }

  h2 {
    padding-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 1.5em;
  }

  span {
    color: var(--color-blue);
  }

  a {
    font-size: 1.15em;
    color: var(--color-regular-text);
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: var(--color-blue);
  }

  .active {
    color: var(--color-blue);
  }
</style>