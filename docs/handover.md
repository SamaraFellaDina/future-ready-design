# handover

## inhoud
- [intro](https://github.com/SamaraFellaDina/future-ready-design/blob/sammy-release-candidate/docs/handover.md#intro)
- [Q&A](https://github.com/SamaraFellaDina/future-ready-design/blob/sammy-release-candidate/docs/handover.md#qa)
  - [Wat is de huidige status van dit project?](https://github.com/SamaraFellaDina/future-ready-design/blob/sammy-release-candidate/docs/handover.md#wat-is-de-huidige-status-van-dit-project)
  - [Wat zijn de belangrijkste features die al werken?](https://github.com/SamaraFellaDina/future-ready-design/blob/sammy-release-candidate/docs/handover.md#wat-zijn-de-belangrijkste-features-die-al-werken)
  - [Wat zijn de grootste aandachtspunten of uitdagingen?](https://github.com/SamaraFellaDina/future-ready-design/blob/sammy-release-candidate/docs/handover.md#wat-zijn-de-grootste-aandachtspunten-of-uitdagingen)
  - [Wat wordt aangeraden als eerste stap voor het volgende team?](https://github.com/SamaraFellaDina/future-ready-design/blob/sammy-release-candidate/docs/handover.md#wat-wordt-aangeraden-als-eerste-stap-voor-het-volgende-team)

## Intro
Hi! leuk dat je mee wilt werken aan dit project! Wij (@SamaraFellaDina , @J3SS3HVA , @Khdulkadir ) hebben voormalig aan dit project gewerkt. In dit document gaan wij langs de verschillende onderwerpen die relevant zijn voor dit project. 

Wil je meer informatie over het project vinden? Zie dan ook onze `readme.md`

## Q&A
### Wat is de huidige status van dit project
Wij hebben de volgende dingen kunnen ontwerpen volgens de schetsen van de opdrachtgever:
* de [homepagina](https://accessdash.agency.fdnd.nl)
* de [scanresultaat](https://accessdash.agency.fdnd.nl/nieuwekijk/overzicht) pagina, waar je alle resultaten van één specifieke website kan zien
* de [checklistresultaten](https://accessdash.agency.fdnd.nl/details) pagina, waar je een checklist kan vinden van één specifieke website. In deze checklist staan de waag richtlijnen
* de [overzicht](https://accessdash.agency.fdnd.nl/nieuwekijk/overzicht) pagina, waarbij je de details krijgt te zien van een gescande pagina

Dit zijn de huidige pagina's die we hebben weten op te maken en alles neer te zetten. Deze pagina's zijn:
* responsive
* Progressive enhanced
* Toegankelijk
* W3C validatie
Dit zijn een aantal testen die wij vooraf hebben gedaan om het zo optimaal mogelijk te testen. 

### Wat zijn de belangrijkste features die al werken?
* verschillende grafieken
  * Wij hebben een [donutchart](https://github.com/fdnd-agency/future-ready-design/blob/main/src/lib/ReusableComponents/Charts/DonutChart.svelte) gemaakt, die we voor meerdere pagina's gebruiken. Je kan de data hierin dynamisch maken. Deze donutchart reageert op het percentage en veranderd van kleur, gebaseerd op het percentage.
  * Verder hebben wij ook een werkende [linechart](https://github.com/fdnd-agency/future-ready-design/blob/main/src/lib/ReusableComponents/Charts/LineChart.svelte) die nu word gebruikt om de scans over een heel jaar te laten zien. 
  * Tot slot hebben we ook een [grafiek](https://github.com/fdnd-agency/future-ready-design/blob/main/src/lib/ReusableComponents/Charts/LineChart.svelte) die data weergeeft met daarnaast een icoon voor verduidelijking
* Een [Iconlibrary](https://github.com/fdnd-agency/future-ready-design/blob/main/src/lib/ReusableComponents/IconLibrary.svelte), waarin een icoon kan worden aangeroepen en worden geplaatst. Zo hoef je minder te focussen op het inladen hiervan. 
* Ook hebben me een [lay-out](https://github.com/fdnd-agency/future-ready-design/blob/main/src/lib/ReusableComponents/WarningSign.svelte) gemaakt om meldingen in te weergeven. Je kan hierbij een beoordeling meegeven. Waarop het component reageert door de juiste kleur en icoon mee te geven.

### Wat zijn de grootste aandachtspunten of uitdagingen?

* Wij hebben een aantal code conventies ingevoegd aan het project. Echter voldoen we niet overal aan lijkt mij. Probeer hier op te letten
* We hebben ook conventies over workflow (#233). Probeer deze regels goed te handhaven
* De api waar we nu mee werken heeft een aantal interessante aandachtspunten
  * De data die nu word opgehaald is dummy data, ondanks dat is de data niet helemaal goed en optimaal. Wij hebben eerder een [data model](https://github.com/users/SamaraFellaDina/projects/15/views/1?filterQuery=data+sch&pane=issue&itemId=81050867&issue=SamaraFellaDina%7Close-your-head-the-client-case%7C18) geschetst. Zorg dat dit meer word toegepast en maak eventueel toepassingen. 
  * Sommige data halen we nu lokaal op, om de demo te verduidelijken 
  * Tijdens dit project hebben wij veel code weten te refactoren. waarbij we tegen een probleem aan liepen dat we veel [variabele](https://github.com/users/SamaraFellaDina/projects/15/views/1?filterQuery=naamgeving&pane=issue&itemId=93514969&issue=SamaraFellaDina%7Cfuture-ready-design%7C157) gebruiken voor het ophalen van data. We gebruiken verschillende benamingen voor het ophalen van deze data. Dit moet efficiënter kunnen. Voor nu werkt het, alleen kan dit veel netter ingedeeld worden
* Wij hebben onze eigen componenten structuur gemaakt. 
  * Voorheen hadden we met een atomic design gewerkt  

### Wat wordt aangeraden als eerste stap voor het volgende team?
* optimaliseer de data
  * beveilig deze data met een `.env`
  * maak een duidelijke flow in data. 
* Nadat wij verschillende testen hadden gedaan, kwamen wij erachter dat de ui niet helemaal fijn mee te werken valt. Wij hebben met de opdrachtgever al besproken hoe dit unieker gemaakt kan worden. Maar denk na over een manier hoe dit meer eigen kan worden
  * zie de [sprint review](https://github.com/SamaraFellaDina/future-ready-design/issues/196)
  * ook hebben we met een aantal mensen die bekend zijn in het veld, besproken over wat de website nodig heeft
  * [feedback van Charley](https://github.com/SamaraFellaDina/future-ready-design/issues/195)
  * [Feedback from Susan](https://github.com/SamaraFellaDina/future-ready-design/issues/194)
  * [Feedback from Julia](https://github.com/SamaraFellaDina/future-ready-design/issues/193)
  * [feedback from Cyd](https://github.com/SamaraFellaDina/future-ready-design/issues/192)
