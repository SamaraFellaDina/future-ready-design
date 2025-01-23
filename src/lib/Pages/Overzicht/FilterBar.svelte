<script>
</script>

<search>
  <label>
    <span>Pagina zoeken</span>
    <input type="search" placeholder="Zoeken..." />
  </label>
  <fieldset>
    <legend>Filters</legend>
    <label>
      <input type="checkbox" name="voldoet" id="voldoet"> 
      <span>Voldoet</span>
    </label>
    <label>
      <input type="checkbox" name="voldoet-niet" id="voldoet-niet">
      <span>Voldoet niet</span>
    </label>
    <label>
      <input type="checkbox" name="a" id="a">
      <span>A</span>
    </label>
    <label>
      <input type="checkbox" name="aa" id="aa">
      <span>AA</span>
    </label>
    <label>
      <input type="checkbox" name="aaa" id="aaa">
      <span>AAA</span>
    </label>
  </fieldset>
  <button type="button">+ Pagina toevoegen</button>
</search>

<style>
  search {
    grid-column: 1 / -1;
    padding: var(--average-padding) 0;
    display: flex;
    gap: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  fieldset {
    display: flex;
    gap: 10px;
    padding: 0;
    border: none;
    flex-wrap: wrap;
  }

  fieldset label {
    cursor: pointer;
  }

  fieldset label:nth-of-type(2) {
    margin-right: 40px;
  }

  fieldset span {
    background-color: var(--color-primary-highlight);
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-regular);
    padding: 6px 10px;
    border-radius: 5px;
  }

  label:has(input[type="checkbox"]:checked) span {
    background-color: var(--color-primary);
    color: var(--color-primary-highlight);
  }

  legend {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    padding-bottom: 20px;
  }

  input[type="search"] {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
    background-repeat: no-repeat;
    background-position: 10px 10px;
    background-size: 20px 20px;
    padding: 10px 10px 10px 40px;
    border-radius: 30px;
    border: none;
    font-size: var(--font-size-regular);
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    left: -9999px;
  }

  label:has(input[type="checkbox"]:focus) span {
    outline: 5px solid var(--color-primary);
    outline-offset: 2px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
  }

  search > label span {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
  }

  button {
    background-color: var(--color-primary);
    color: white;
    padding: 10px 30px;
    border-radius: 20px;
    border: none;
    font-size: var(--font-size-regular);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
    height: fit-content;
    align-self: flex-end;
  }

  :global(main:has(#voldoet:checked):has(#voldoet-niet:checked) li.filter-results) {
    display: initial;
  }

  :global(main:has(#voldoet:checked):not(:has(#voldoet-niet:checked)) li.filter-results:not(.voldoet)) {
    display: none;
  }

  :global(main:has(#voldoet-niet:checked):not(:has(#voldoet:checked)) li.filter-results:not(.voldoet-niet)) {
    display: none;
  }

  :global(main:has(#a:checked) li.filter-results:not(.a)) {
    display: none;
  }

  :global(main:has(#aa:checked) li.filter-results:not(.aa)) {
    display: none;
  }

  :global(main:has(#aaa:checked) li.filter-results:not(.aaa)) {
    display: none;
  }

  :global(main:has(#voldoet:checked) li.filter-results.voldoet,
          main:has(#voldoet-niet:checked) li.filter-results.voldoet-niet,
          main:has(#a:checked) li.filter-results.a,
          main:has(#aa:checked) li.filter-results.aa,
          main:has(#aaa:checked) li.filter-results.aaa) {
    display: initial;
  }
</style>