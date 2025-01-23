<script>

</script>

<section>
  <h2>Filter op categorie</h2>
  <fieldset>
    <label>
      <input type="checkbox" name="voldoet" id="voldoet">
      <span>Voldoet niet (14)</span>
    </label>
    <label>
      <input type="checkbox" name="voldoet-niet" id="voldoet-niet">
      <span>Voldoet (6)</span>
    </label>
    <label>
      <input type="checkbox" name="a" id="a">
      <span>A (25)</span>
    </label>
    <label>
      <input type="checkbox" name="aa" id="aa">
      <span>AA (13)</span>
    </label>
    <label>
      <input type="checkbox" name="aaa" id="aaa">
      <span>AAA (12)</span>
    </label>
  </fieldset>

  <fieldset>
    <label>
      <input type="checkbox" name="voldoet" />
      <span>waarneembaar</span>
    </label>
    <label>
      <input type="checkbox" name="voldoet-niet" />
      <span>begrijpelijk</span>
    </label>
    <label>
      <input type="checkbox" name="a" />
      <span>bedienbaar</span>
    </label>
    <label>
      <input type="checkbox" name="aa" />
      <span>robuust</span>
    </label>
  </fieldset>
</section>

<style>
  section {
    grid-area: 2 / 3 / 4 / 4;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    position: sticky;
    top: 20px;
    height: 800px;
    width: 100%;

    @media (max-width: 1600px) {
      height: fit-content;
      background-color: var(--color-background-section);
      box-shadow: var(--box-shadow);
      z-index: 1;
    }
  }

  h2 {
    margin-bottom: 20px;
    display: block;
  }

  fieldset {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 10px 0 10px 0;
    border: none;

    @media (max-width: 1600px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  fieldset:last-child {
    border-top: solid 1px var(--color-shadow);
  }

  fieldset label {
    cursor: pointer;
  }

  fieldset span {
    background-color: var(--color-primary-highlight);
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-regular);
    padding: 6px 10px;
    border-radius: 5px;
    white-space: nowrap;
  }

  label:has(input[type="checkbox"]:checked) span {
    background-color: var(--color-primary);
    color: var(--color-primary-highlight);
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
</style>
