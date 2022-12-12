## Libraries and frameworks

När man bygger på kod som utvecklats av andra brukar det delas in i två
kategorier: libraries och frameworks

Libraries (bibliotek) är en samling mer eller besläktade funktioner du kan använda i
din egen kod, t.ex. “Hämta ut det högsta värdet ur den här listan” eller “byt ut
innehållet i det här HTML-elementet”

Frameworks (ramverk) är kod som “kör din kod”. Du skriver instruktionerna för vad du vill ska hända, men ramverket sätter ihop slutresultatet

## Libraries

Libraries är en samling funktioner som man kan använda i sin kod

Du har själv organiserat din kod, men använder delar från det här biblioteket för att
underlätta för dig

Det kan vara kod som hjälper dig med en viss sorts sortering av data, eller som
automatiskt sätter ihop ett element

Exempel på populära bibliotek är t.ex. Underscore eller MomentJS

## Frameworks

Ett ramverk består också av funktioner du kan använda, men du behöver anpassa
dig mer efter ramverket

Så ramverket sätter upp "ramarna" för hur du arbetar med det

Populära ramverk är t.ex. React\*, Vue och Angular
(vissa anser att React bättre beskrivs som library)

![alt text](/libraries_frameworks/diagram_frame.jpg)
![alt text](/libraries_frameworks/diagram_lib.jpg)

## Att inkludera ett library i ett projekt

Det vanligaste idag är att vi använder en kombination av verktyg såsom package managers, bundlers och transpilers när vi utvecklar våra projekt.
Om man inte använder en package manager behöver man läsa in libraryt på annat vis. Det går ofta att läsa från en extern källa (ofta från ett s.k. CDN - Content Delivery Network), med en helt vanlig script-tagg:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## GitHub och NPM

De flesta libraries och frameworks som används inom Javascript är open source och tillgängliga via någon typ av plattform för open source-kod, och pakethanterare.
GitHub är den absolut största platsen för open source-projekt, och NPM den största pakethanteraren för Javascript. Det går oftast att hitta de flesta projekten på båda ställena och är en bra utgångspunkt för att se hur populärt ett library är, hitta dokumentation, och se hur levande projektet är.
