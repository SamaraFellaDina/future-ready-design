<script>
  // import { onMount } from "svelte";
  // import { createEventDispatcher } from "svelte";

  // let searchValue = "";
  // let filters = [
  //   { id: "filter1", label: "Voldoet niet" },
  //   { id: "filter2", label: "Voldoet" },
  //   { id: "filter3", label: "A" },
  //   { id: "filter4", label: "AA" },
  //   { id: "filter5", label: "AAA" },
  // ];

  // const dispatch = createEventDispatcher();

  // onMount(() => {
  //   const searchInput = document.querySelector("input[type=search]");
  //   searchInput.addEventListener("input", (event) => {
  //     searchValue = event.target.value;
  //     dispatch("search", searchValue);
  //   });
  // });

  // function handleFilterChange(event) {
  //   const filter = event.target.id;
  //   dispatch("filter", filter);
  // }
</script>

<section>
  <label>
    <span>Pagina zoeken</span>
    <input type="search" placeholder="Zoeken..." />
  </label>
  <fieldset>
    <legend>Filters</legend>
    <label>
      <input type="checkbox" name="voldoet"> 
      <span>Voldoet</span>
    </label>
    <label>
      <input type="checkbox" name="voldoet-niet">
      <span>Voldoet niet</span>
    </label>
    <label>
      <input type="checkbox" name="a">
      <span>A</span>
    </label>
    <label>
      <input type="checkbox" name="aa">
      <span>AA</span>
    </label>
    <label>
      <input type="checkbox" name="aaa">
      <span>AAA</span>
    </label>
  </fieldset>
  <button type="button">+ Pagina toevoegen</button>
</section>

<style>
  section {
    grid-column: 1 / -1;
    padding: var(--average-padding) 0;
    display: flex;
    gap: 50px;
    justify-content: space-between;
  }

  fieldset {
    display: flex;
    gap: 10px;
    padding: 0;
    border: none;
  }

  fieldset label {
    cursor: pointer;
  }

  fieldset label:nth-of-type(2) {
    margin-right: 40px;
  }

  fieldset span {
    background-color: var(--color-lightblue);
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-regular);
    padding: 6px 10px;
    border-radius: 5px;
  }

  label:has(input[type="checkbox"]:checked) span {
    background-color: var(--color-primary);
    color: var(--color-lightblue);
  }

  legend {
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    padding-bottom: 20px;
  }

  input {
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
    display: none;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: var(--average-gap);
  }

  section > label span {
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
</style>