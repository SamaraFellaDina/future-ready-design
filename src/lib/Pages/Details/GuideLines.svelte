<script>
  import { IconLibrary } from "$lib";

  let value = ""; 
  let meterClass = ""; 

    if (value <= 0.5) {
      meterClass = "meter-red";
    } else if (value <= 0.7) {
      meterClass = "meter-orange";
    } else {
      meterClass = "meter-green";
    }
  
  const GuideLines = 
  [
    {
      title: "Op tijd gebaseerde media",
      indicatorNummer: "1.2",
      value: 10,
      indicatorGuidelines: [
        "1.2.1 Louter-geluid & louter-videobeeld (vooraf opgenomen)",
        "1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)",
        "1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)",
        "1.2.4 Ondertitels voor doven en slechthorenden (live)",
        "1.2.5 Audiodescriptie (vooraf opgenomen)",
        "1.2.6 Gebarentaal (vooraf opgenomen)",
        "1.2.7 Verlengde audiodescriptie (vooraf opgenomen)",
        "1.2.8 Media-alternatief (vooraf opgenomen)"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "1.3",
      value: 45,
      indicatorGuidelines: [
        "1.3.1 Info en relaties",
        "1.3.2 Betekenisvolle volgorde",
        "1.3.3 Zintuiglijke eigenschappen",
        "1.3.4 Weergavestand",
        "1.3.5 Identificeer het doel van de input",
        "1.3.6 Identificeer het doel"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "1.4",
      value: 45,
      indicatorGuidelines: [
        "1.4.1 Info en relaties",
        "1.4.2 Betekenisvolle volgorde",
        "1.4.3 Zintuiglijke eigenschappen",
        "1.4.4 Weergavestand",
        "1.4.5 Identificeer het doel van de input",
        "1.4.6 Identificeer het doel",
        "1.4.7 Identificeer het doel",
        "1.4.8 Identificeer het doel"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "2.1",
      value: 45,
      indicatorGuidelines: [
        "2.1.1 Info en relaties",
        "2.1.2 Betekenisvolle volgorde",
        "2.1.3 Zintuiglijke eigenschappen",
        "2.1.4 Weergavestand",
        "2.1.5 Identificeer het doel van de input",
        "2.1.6 Identificeer het doel",
        "2.1.7 Identificeer het doel"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "3.1",
      value: 45,
      indicatorGuidelines: [
        "3.1.1 Info en relaties",
        "3.1.2 Betekenisvolle volgorde",
        "3.1.3 Zintuiglijke eigenschappen",
        "3.1.4 Weergavestand",
        "3.1.5 Identificeer het doel van de input",
        "3.1.6 Identificeer het doel",
        "3.1.7 Identificeer het doel"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "3.2",
      value: 45,
      indicatorGuidelines: [
        "3.2.1 Info en relaties",
        "3.2.2 Betekenisvolle volgorde",
        "3.2.3 Zintuiglijke eigenschappen",
        "3.2.4 Weergavestand",
        "3.2.5 Identificeer het doel van de input",
        "3.2.6 Identificeer het doel",
        "3.2.7 Identificeer het doel"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "4.1",
      value: 45,
      indicatorGuidelines: [
        "4.1.1 Info en relaties",
        "4.1.2 Betekenisvolle volgorde",
        "4.1.3 Zintuiglijke eigenschappen",
        "4.1.4 Weergavestand"
      ]
    },
    {
      title: "Aanpasbaar",
      indicatorNummer: "4.2",
      value: 45,
      indicatorGuidelines: [
        "4.2.1 Info en relaties",
        "4.2.2 Betekenisvolle volgorde",
        "4.2.3 Zintuiglijke eigenschappen"
      ]
    }
  ];
</script>

<section class="guideline-wrapper">
  {#each GuideLines as guide}
    <article>
      <section>
        <div>
          <h2>{guide.title}</h2>
          <p>{guide.indicatorNummer}</p>
          <IconLibrary name="eye" />
        </div>
        <meter class={meterClass} value={guide.value} low="50" high="99" optimum="100" max="100"></meter>
      </section>

      <section>
        {#each guide.indicatorGuidelines as guideline}
        <details>
          <summary>
            <span>
              <span>{guideline}</span>
              <IconLibrary name="warning" />
            </span>
            <label>
              <input type="checkbox" aria-label="fixed indicator" />
            </label>
          </summary>
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">
            https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
          </a>
          <div class="extended-details">
            <p>Alle inhoud moet als tekst zijn beschreven. Tekst kan zoals visueel,
              auditief en tactiel worden weergegeven. Informatie kan hierdoor
              gepresenteerd worden in een vorm die het beste aansluit bij de
              behoeften van gebruikers.
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
                  <li>
                    <p>
                      1. Open website in browser.
                    </p>
                  </li>
                  <li>
                    <p>
                      2. Rechtermuis klik, selecteer "Inspecteer" of "Bron
                      bekijken".
                    </p>
                  </li>
                  <li>
                    <p>
                      3. Zoek naar img, video tags in de html code.
                    </p>
                  </li>
                  <li>
                    <p>
                      4. Controleer of alt of aria-label attributen aanwezig zijn.
                    </p>
                  </li>
                </ol>
              </li>
            </ul>

            <section>
              <h3>Hoe kun je dit oplossen</h3>
              <p>
                <b>Voeg alternatieve tekst toe</b> (criterium 1.1.1)
              </p>
              <p>
                Zorg dat er alternatieve tekst beschikbaar is voor alle inhoud
                zonder tekst. Dat zijn onder andere afbeeldingen, icoontjes en
                grafieken. Beschrijf wat er te zien is. Mensen die blind zijn laten
                deze beschrijving voorlezen via hun schermlezer. Alternatieve tekst
                kan ook handig zijn voor iedereen die twijfelt over de betekenis van
                de inhoud.
              </p>
            </section>
          </div>
        </details>
        {/each}
      </section>
    </article>
  {/each}
</section>

<style>
  .guideline-wrapper {
    display: block;
    grid-area: 3 / 1 / 4 / 3;
  }
  
  article {
    --average-padding: 20px;
    --average-margin: 20px;
    --average-gap: 5px;
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: 40px;
    background-color: var(--color-background-section);
    margin-bottom: var(--average-margin);
  }

  article > section:first-child {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px var(--color-shadow);
    @media (max-width: 700px){
      flex-direction: column;
      border-bottom: none;
    }
  }

  article > section:first-child > div {
    display: flex;
    padding-bottom: var(--average-padding);
    gap: var(--average-gap);
  }

  :global(article > section:first-child > div svg),
  :global(details summary svg) {
    transform: translateY(2px);
  }

  article > section meter {
    appearance: none;
    border-radius: 4px;
    background: #ccc;
    width: 200px;
    height: 10px;
  }

  article > section meter::-webkit-meter-bar {
    background: #ccc;
    border-radius: 4px;
    height: 10px;
  }

  .meter-green::-webkit-meter-optimum-value {
    background: var(--color-status-good-border);
  }

  .meter-orange::-webkit-meter-suboptimum-value {
    background: var(--color-status-fine-border);
  }

  .meter-red::-webkit-meter-even-less-good-value {
    background: var(--color-status-bad-border);
  }

  .meter-green:-moz-meter-optimum::-moz-meter-bar {
    background: var(--color-status-good-border);
  }

  .meter-orange:-moz-meter-sub-optimum::-moz-meter-bar {
    background: var(--color-status-fine-border);
  }

  .meter-red:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: var(--color-status-bad-border);
  }

  article section:last-child {
    padding-top: var(--average-padding);
  }

  details:nth-child(1) {
    padding-top: 0;
  }

  details {
    padding: var(--average-padding) 0;
    border-bottom: solid 1px var(--color-shadow);
  }

  details summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: var(--average-padding);
    cursor: pointer;
    position: relative;
  }

  details summary::before {
    content: ">";
    position: absolute;
    left: 5px;
    transition: transform 0.3s ease;
    font-size: 14px;
  }

  details[open] > summary::before {
    transform: rotate(90deg);
  }

  details div:first-child {
    display: flex;
    gap: var(--average-gap);
  }

  details summary span {
    font-weight: var(--font-weight-bold);
  }

  details summary input[type="checkbox"] {
    min-height: 25px;
    min-width: 25px;
    border: solid 2px var(--color-primary);
    position: relative;
    appearance: none;
    border-radius: 5px;
  }

  details summary input[type="checkbox"]:checked {
    background-color: var(--color-primary);
  }

  summary input[type="checkbox"]:checked::before {
    content: "✓";
    color: var(--color-primary-highlight);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--font-size-regular);
    font-weight: bold;
  }

  details a {
    padding-left: var(--average-padding);
    color: var(--color-regular-text);
    text-decoration: none;
    cursor: pointer;
    font-size: var(--font-size-small);
    white-space: nowrap;       
    overflow: hidden;          
    text-overflow: ellipsis;    
    display: block;             
    max-width: 100%;     
  }

  details a:hover {
    color: var(--color-primary);
  }

  article section:last-child details .extended-details {
    padding: 0 110px 0 0;

    @media (max-width: 700px) {
      padding: unset;
    }
  }

  .extended-details > p {
    margin-top: 10px;
    margin-bottom: var(--average-margin);
  }

  .extended-details ul {
    display: flex;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  .extended-details ul li {
    list-style: none;
    width: 50%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }

  .extended-details ul > li{
    margin-bottom: var(--average-padding);
  }

  .extended-details ul li div {
    display: flex;
    gap: var(--average-gap);
    margin-bottom: var(--average-margin);
  }

  .extended-details ul li p,
  .extended-details ol li p,
  .extended-details p {
    font-size: var(--font-size-regular);
  }

  .extended-details ol {
    padding-left: var(--average-padding);
    width: 100%;
    @media (max-width: 700px){
      padding-left: unset;
    }
  }

  .extended-details ol li {
    list-style-position: outside;
    padding-bottom: 10px;
    width: 100%;
  }

  details div:last-child section {
    border-radius: var(--section-border-radius);
    border: var(--color-primary) 2px solid;
    background-color: var(--color-primary-highlight);
    padding: var(--average-padding) var(--average-padding) 40px
      var(--average-padding);
  }

  details div:last-child section h3 {
    color: var(--color-primary);
    margin-bottom: var(--average-margin);
  }
</style>