<script>
  import { Icon } from "$lib";
  import { page } from '$app/stores';
  import { SkipLink } from "$lib";
  export let company;
  let name = company[0].title.toLowerCase();
  let currentPage = $page.url.pathname;

  const primaryLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/info', label: 'Info' },
    { href: '/voortgang', label: 'Voortgang' },
    { href: '/scan', label: 'Scan' }
  ];

  const secondaryLinks = [
    { href: `/${name}/home`, label: '/home' },
    { href: `/${name}/over-ons`, label: '/over-ons' },
    { href: `/${name}/contact`, label: '/contact' },
    { href: `/${name}/missie`, label: '/missie' },
    { href: `/${name}/blog`, label: '/blog' },
    { href: `/${name}/blog-detail`, label: '/blog-detail' }
  ];
</script>

<SkipLink />
<header>
  <input type="checkbox" name="sidebar" id="sidebar" aria-label="toggle navigatiemenu"/>
  <label for="sidebar">
    <Icon name = "sidebar" />
    <span>Menu</span>
  </label>
  <nav>
    <a href ="/"><Icon name = "accessdash-logo" /></a>
    <ul>
      <li>
        <Icon name="dashboard" />
        <span>Dashboard</span>
      </li>
      {#each primaryLinks as links}
        <li>
          <a class:active={currentPage === links.href} href={links.href}>
            {links.label}
          </a>
        </li>
      {/each}
    </ul>
    <ul>
      <li>
        <Icon name="page-links" />
        <span>{name}</span>
      </li>
      {#each secondaryLinks as links}
        <li>
          <a class:active={currentPage === links.href} href={links.href}>
            {links.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  nav {
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

  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
  }

  li {
    list-style: none;
  }

  li:first-child {
    padding-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: capitalize;
  }

  span {
    color: var(--color-blue);
  }

  li a {
    font-size: var(--font-size);
    color: var(--color-regular-text);
    text-decoration: none;
    transition: 0.3s;
  }

  li a:hover {
    color: var(--color-blue);
  }

  .active {
    color: var(--color-blue);
  }

  input {
    position: absolute;
    left: -100vw;
  }

  input:checked ~ nav {
    transform: translateX(-80%);
  }

  input:checked ~ label {
    transform: translateX(-225px) scaleX(-1);
  }

  input:checked ~ nav a {
    opacity: 0;
    pointer-events: none;
  }

  input:focus-visible ~ label {
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

  label > span {
    display: none;
  }

  nav > a {
    transition: 0.3s;
    margin-top: 30px;
  }

  nav > a:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 1700px) {
    nav {
      transform: translateX(-80%);
      overflow-y: hidden;
    }

    label {
      transform: translateX(-225px) scaleX(-1);
    }

    input:checked ~ nav {
      transform: translateX(0);
      overflow-y: auto;
    }

    input:checked ~ label {
      transform: translateX(0);
    }

    nav a {
      opacity: 0;
      pointer-events: none;
    }

    input:checked ~ nav a {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media screen and (max-width: 700px) {
    input:not(:checked) ~ nav {
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