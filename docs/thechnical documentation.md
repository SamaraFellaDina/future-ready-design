# Technische documentatie

## inhoud

### code structuur

### componenten

* ok dus als eerst heb je in de src folder een routes en lib folder. de lib folder vind je de componenten.

* vervolgens binnen de lib folder vind je eerst 2 js files die data fetched (clientside) en een index.js die alle componenten export.

* Het belangrijkste in de lib map zijn de pages folder en reusablecomponenten folder.

* De pages folder bevat meerdere folders die de zelfde naam heeft als de pagina waar hij bij hoort. dit hebben we gedaan zodat meerdere developers aan een deel van een pagina kan werken zonder elkaar in de weg te zitten. Dus in plaats van dat we alle gedeeltes van een pagina in 1 file stoppen, doen we dat in meerdere files ,zodat het makkelijker is om met meerdere aan 1 page te werken.

* De reusable components zijn componenten die op meerdere paginas kan komen. zoals header footers. Maar ook icons grafieken.

* Het is belangrijk om te weten dat de charts leeg zijn wanneer je ze op de pagina gebruikt, en dat je ze vervolgens kunt vullen met dynamische data.

* Als laatst de benaming van componenten zijn altijd met een hoofdletter en files die betsaan uit 2 worden doen we de camelcase methode.

### cms configuratie

* wij maken gebruik van 2 end points

__frd_sites__

voorbeeld

```json
{
"data": [
{
"url": "https://nieuwekijk.nl/",
"title": "Nieuwekijk",
"id": 11,
"scans": [
11,
12,
13,
14,
15
]
},
]}
```

__frd_scan__

```json
{
"data": [
{
"date": "2024-08-01T00:00:00",
"title": "Automatisch scan resultaat",
"result": [
{
"title": "Ontdekte fouten",
"amount": 66
},
{
"title": "Contrast fouten",
"amount": 12
},
{
"title": "Structurele fouten",
"amount": 32
},
{
"title": "Ontbrekende alt-teksten",
"amount": 8
},
{
"title": "Ontbrekende aria-labels",
"amount": 14
}
],
"description": "Uw webpagina voldoet niet aan de WCAG richtlijnen.\n\nEr zijn meerdere fouten ontdekt die verholpen moeten worden om de toegankelijkheid te waarborgen.",
"id": 11,
"score": 54,
"frd_site_id": 11
},
]}
```

### external api

wij halen onze data van de directus api

https://fdnd-agency.directus.app