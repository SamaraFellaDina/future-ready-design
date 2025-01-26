<script>
  import { IconLibrary } from "$lib";
  import { page } from '$app/stores';
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

  let isActive = false;

  function toggleActive() {
    isActive = !isActive;
  }
</script>

<a class="skip-link" href="#main-content">Ga naar hoofdinhoud</a>
<header>
  <button type="button" aria-label={isActive ? "Navigatiemenu sluiten" : "Navigatiemenu openen"} class:active={isActive} on:click={toggleActive}>
    <IconLibrary name = "sidebar" />
    <span>Menu</span>
  </button>
  <nav>
    <a href ="/"><IconLibrary name = "accessdash-logo" aria-label="ga naar de homepage"/></a>
    <div>
      <h2>
        <IconLibrary name="dashboard" />
        <span>Dashboard</span>
      </h2>
      <ul>
        {#each primaryLinks as links}
          <li>
            <a class:currentpage={currentPage === links.href} href={links.href}>
              {links.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <h2>
        <IconLibrary name="header-arrow" />
        <span>{name}</span>
      </h2>
      <ul>
        {#each secondaryLinks as links}
          <li>
            <a class:currentpage={currentPage === links.href} href={links.href}>
              {links.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</header>

<style>
  .skip-link {
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 1em;
    background-color: black;
    color: white;
    opacity: 0;
  }

  .skip-link:focus {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }

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
    z-index: 2;
    width: 280px;
    overflow-y: auto;
    
    @media (max-width: 1700px) {
      transform: translateX(-80%);
      overflow-y: hidden;
    }
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

  h2 {
    padding-bottom: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 1.5em;
    font-weight: 700;
    text-transform: capitalize;
  }

  span {
    color: var(--color-primary);
  }

  li a {
    font-size: var(--font-size);
    color: var(--color-regular-text);
    text-decoration: none;
    transition: 0.3s;
  }

  li a.currentpage {
    color: var(--color-primary);
  }

  li a:hover {
    color: var(--color-primary);
  }

  button {
    position: fixed;
    top: 20px;
    cursor: pointer;
    z-index: 3;
    left: 240px;
    transition: 0.5s;
    width: min-content;

    @media (max-width: 1700px) {
      transform: translateX(-225px) scaleX(-1);
    }
  }

  button span {
    visibility: hidden;
    position: absolute;
  }

  button.active ~ nav {
    transform: translateX(-80%);

    @media (max-width: 1700px) {
      transform: translateX(0);
      overflow-y: auto;
    }
  }

  button.active {
    transform: translateX(-225px) scaleX(-1);

    @media (max-width: 1700px) {
      transform: translateX(0);
    }
  }

  button.active ~ nav a {
    opacity: 0;
    pointer-events: none;

    @media (max-width: 1700px) {
      opacity: 1;
      pointer-events: all;
    }
  }

  nav > a {
    transition: 0.3s;
    margin-top: 30px;
  }

  nav > a:hover {
    opacity: 0.5;
  }

  button:not(.active) {
    @media (max-width: 700px) {
      box-shadow: var(--box-shadow);
      background: #FFFFFF80;
      padding: 6px 8px;
      border-radius: 50%;
    }
  }

  nav a {
    @media (max-width: 1700px) {
      opacity: 0;
      pointer-events: none;
    }
  }

  button:not(.active) ~ nav {
    @media (max-width: 700px) {
      background-color: transparent;
      box-shadow: none;
    }
  }

  @media (scripting: none) {
    header nav:not(.active) {
      flex-direction: row;
      width: 100%;
      height: min-content;
      transform: unset;
      left: unset;
      position: static;
      background-color: var(--color-background-section);
    }

    header nav ul {
      flex-direction: row;
      align-items: center;
    }

    nav a {
      opacity: 1;
      pointer-events: all;
      margin-top: 0;
    }

    button {
      display: none;
    }
  }
</style>