Az oldal készítője:
Besze Zsolt

A weboldal URL címe: https://beszezsolt.github.io/webfejlesztes/

A weboldal témája:
A weboldalam a Star Wars filmek világának fénykardjait mutatja be.

A javascript kódom:
Az jsscript.js file egy olyan kódot tartalmaz, aminek a célja egy oldal-háttérszín/témaválasztó rendszer. Néhány weboldalon szokott lenni egy beállítás, amivel váltani lehet világos és sötét mód között. Az én weboldalamra is egy ilyesmi funckiót dolgoztam ki, mindezt összekötve a Star Wars univerzumában létező Erő sötét és világos oldalával. Az index.html-en a felhasználónak választania kell a két oldal közül, majd a választása alapján (többek között) a weboldal színtémája módosul. A választását egy local storage-ban lévő változóban tároltam. Az összes többi weblap navigációs részénél pedig van egy gomb, amivel utólag bármikor módosíthatja döntését. Ebben a javascript fileban van még egy függvény, ami kviz.html oldalon szereplő dátum típusú űrlapelemben lefixálja az évszámot a jelenlegi évre. Ezt követ egy függvény, ami pedig kiértékeli, lepontozza a kitöltött kvízt.
Emellett az index.html-en kívül minden lap kódjában szerepel egy nagyon rövid js kód, ez arra szolgál, hogy ne lehessen "kikerülni" az index.html-t.

Jquery:
Galéria: A szinei.html odlalon jquery segítségével hoztam létre egy képgalériát. Ehhez külön írtam egy kódot, ami a galéria után következő szöveg tartalmát változtatja meg az éppen aktuálisan megjelenített kép (indexe) alapján. Az eseménykezeléshez, vagyis az aktuális kép "figyeléséhez", az alábbi linken elérhető dokumentációból vettem segítséget, amit a kódban is jelöltem:
https://galleriajs.github.io/docs/api/events.html
Űrlapvalidálás: A kviz.html-en két űrlap szerepel, ezeket validáltam le a jquery-s plugin segítségével.


CSS:
A css kódomban lévő tooltip teljes formázását az alábbi linkről másoltam át, amit a kódban is jelöltem:
https://www.w3schools.com/css/css_tooltip.asp

Fonttípus:
Egy soloist nevű betűtípust haszáltam a címsorokra (csak a h1 tagek), minden másra garamondot, ami az alapértelmezett fonttípusok között szerepel.