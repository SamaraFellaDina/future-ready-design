<script>
  import Icon from "./Icon.svelte";
  export let company;
</script>

<header>
  <input type="checkbox" name="sidebar" id="sidebar" /><label for="sidebar"><Icon name = "sidebar" /></label>
  <a href ="/" ><Icon name = "accessdash-logo" /></a>
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
    transition: 0.5s;
  }

  input {
    display: none;
  }

  header:has(input:checked) {
    transform: translateX(-80%);
  }

  header:has(input:checked) > a {
    opacity: 0;
    pointer-events: none;
  }


  label {
    position: absolute;
    top: 20px;
    right: 15px;
    cursor: pointer;
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

  nav a {
    font-size: 1.15em;
    color: var(--color-regular-text);
    text-decoration: none;
    transition: 0.3s;
  }

  nav a:hover {
    color: var(--color-blue);
  }

  header > a {
    transition: 0.3s;
    margin-top: 30px;
  }

  header > a:hover {
    opacity: 0.5;
  }

  .active {
    color: var(--color-blue);
  }

  @media screen and (max-width: 1600px) {
    header {
      transform: translateX(-80%);
    }

    header:has(input:checked) {
      transform: translateX(0);
    }

    header > a {
      opacity: 0;
      pointer-events: none;
    }

    header:has(input:checked) > a {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>