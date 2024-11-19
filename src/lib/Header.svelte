<script>
  import Icon from "./Icon.svelte";
  export let company;
</script>

<input type="checkbox" name="sidebar" id="sidebar" aria-controls="sidebar" aria-label="navigatiemenu"/>
<label for="sidebar">
  <Icon name = "sidebar" />
</label>
<header>
  <a href ="/"><Icon name = "accessdash-logo" /></a>
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
    z-index: 1;
    width: 280px;
    overflow-y: auto;
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

  .active {
    color: var(--color-blue);
  }

  input {
    position: absolute;
    left: -100vw;
  }

  input:checked ~ header {
    transform: translateX(-80%);
  }

  input:checked ~ label {
    transform: translateX(-225px) scaleX(-1);
  }

  input:checked ~ header > a {
    opacity: 0;
    pointer-events: none;
  }

  input:focus ~ label {
    border: 3px solid black;
    border-radius: 5px;
  }

  label {
    position: fixed;
    top: 20px;
    cursor: pointer;
    z-index: 2;
    left: 240px;
    transition: 0.5s;
  }

  header > a {
    transition: 0.3s;
    margin-top: 30px;
  }

  header > a:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 1700px) {
    header {
      transform: translateX(-80%);
      overflow-y: hidden;
    }

    label {
      transform: translateX(-225px) scaleX(-1);
    }

    input:checked ~ header {
      transform: translateX(0);
      overflow-y: auto;
    }

    input:checked ~ label {
      transform: translateX(0);
    }

    header > a {
      opacity: 0;
      pointer-events: none;
    }

    input:checked ~ header > a {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media screen and (max-width: 700px) {
    input:not(:checked) ~ header {
      background-color: transparent;
      box-shadow: none;
    }

    input:not(:checked) ~ label {
      box-shadow: var(--box-shadow);
      background: #FFFFFF80;
      padding: 6px 8px;
      border-radius: 50%;
    }
  }
</style>