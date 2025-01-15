<script>
  import { IconLibrary } from "$lib";
</script>

<article class="content-wrapper">
  <section class="guideline-title">
    <div class="title-wrapper">
        <h2>Tekstalternatieven</h2>
        <p>richtlijn 1.1</p>
    <IconLibrary name="eye" />
    </div>
    <meter value=".5" max="1" high=".75" low=".25"></meter>
  </section>
  <section class="guideline-details">
    <details open>
      <summary class="summary-flex">
        <div class="summary-content">
          <span>1.1.1 Niet-tekstuele content</span>
        </div>
        <input type="checkbox" />
      </summary>
      <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">
        https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
      </a>
      <div class="extended-details">
      <p>
        Alle inhoud moet als tekst zijn beschreven. Tekst kan zoals visueel,
        auditief en tactiel worden weergegeven. Informatie kan hierdoor
        gepresenteerd worden in een vorm die het beste aansluit bij de behoeften
        van gebruikers.
      </p>
      <ul>
        <li>
          <div>
            <IconLibrary name="heart" />
            <h3>impact op gebruiker</h3>
          </div>
          <p>
            Mensen met visuele beperkingen kunnen moeite hebben met het
            begrijpen van de inhoud, aangezien schermlezers de niet-tekstuele
            inhoud niet kunnen interpreteren.
          </p>
        </li>
        <li>
          <div>
            <IconLibrary name="beaker" />
            <h3>hoe te testen</h3>
          </div>
          <ol>
            <li><p>1 Open website in browser.</p></li>
            <li><p>2 Rechtermuis klik, selecteer "Inspecteer" of "Bron bekijken".</p></li>
            <li><p>3 Zoek naar img, video tags in de html code.</p></li>
            <li><p>4 Controleer of alt of aria-label attributen aanwezig zijn.</p></li>
          </ol>
        </li>
      </ul>
      <section class="scan-solutions">
        <h3>Hoe kun je dit oplossen</h3>
        <p><b>Voeg alternatieve tekst toe</b> (criterium 1.1.1)</p>
        <p>
          Zorg dat er alternatieve tekst beschikbaar is voor alle inhoud zonder
          tekst. Dat zijn onder andere afbeeldingen, icoontjes en grafieken.
          Beschrijf wat er te zien is. Mensen die blind zijn laten deze
          beschrijving voorlezen via hun schermlezer. Alternatieve tekst kan ook
          handig zijn voor iedereen die twijfelt over de betekenis van de
          inhoud.
        </p>
      </section>
    </div>
    </details>
  </section>
</article>

<style>
  .content-wrapper {
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: 40px;
    background-color: var(--color-background-section);
  }

  .guideline-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: solid  1px var(--color-border);
  }


  .title-wrapper{
    display: flex;
  }

  .guideline-details{
    padding-top: 20px;
  }

  .guideline-title meter{
    height: 30px;
    width: 200px;
  }

  .summary-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-left: var(--average-padding);
    cursor: pointer;
    position: relative; 
  }

  .summary-flex::before {
    content: "▶"; 
    position: absolute;
    left: 5px; 
    transition: transform 0.3s ease;
    font-size: 14px;
  }

  details[open] > .summary-flex::before {
    transform: rotate(90deg);
  }

  .summary-content {
    display: flex;
    flex-direction: column;
  }

  .summary-flex input[type="checkbox"] {
    height: 25px;
    width: 25px;
    border: solid 2px var(--color-primary);
    appearance: none; 
    border-radius: 5px;
  }

  .summary-flex input[type="checkbox"]:checked {
    background-color: var(--color-primary);
  }

  details a{
    padding-left: var(--average-padding);
    color: var(--color-regular-text);
    text-decoration: none;
    cursor: pointer;
    font-size: var(--font-size-small);
  }

  details a:hover{
    color: var(--color-primary);
  }

  .extended-details{
    padding: 0 110px 0 0;
  }

  .extended-details > p{
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .extended-details ul{
    display: flex;
  }

  .extended-details ul li{
    list-style: none;
    width: 50%;
  }

  .guideline-details ul li div{
    display: flex;
    gap: 2px;
    margin-bottom: 20px;
  }

  .extended-details ul li p,
  .extended-details ol li p,
  .extended-details p {
    font-size: var(--font-size-regular);
  }

  .scan-solutions {
    border-radius: var(--section-border-radius);
    border: var(--color-primary) 2px solid;
    background-color: var(--color-primary-highlight);
    padding: 20px 20px 40px 20px;
  }

  .scan-solutions h3{
    color: var(--color-primary);
    margin-bottom: 20px;
  }

</style>
