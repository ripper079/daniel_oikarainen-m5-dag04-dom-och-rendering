// Dag 4: DOM. Kör npm run dev och titta i Console (F12).
// querySelector kan ge null om elementet saknas. Hantera det med if eller ?. (TypeScript kräver det).
// Tips: document.querySelector<HTMLElement>("#id") säger vilken sorts element du får.
import { meny } from "./data";
import { visaMeny, uppdateraRubrik, markeraDagensRatt } from "./ui";
import { billigast } from "./meny";

// DEL 1: utforska DOM:en ----------------------------------------------
// 1. Hämta h1 med document.querySelector("h1") och skriv ut dess textContent.
const headerOne = document.querySelector("h1");
//console.log(`Innehållet rubriken innehar: ${rubrik.textContent}`);
console.log(`Innehållet rubriken innehar: ${headerOne?.textContent ?? "Data värde saknas"}`);

// 2. Ändra texten i #hero-rubrik till "Välkommen in!"
const heroTitle = document.querySelector("#hero-rubrik")!;
heroTitle.textContent = "Välkommen in!";
// 3. Hämta alla länkar i menyn med document.querySelectorAll("nav a").
const menuLinks = document.querySelectorAll("nav a")!;
//    Loopa med for...of och skriv ut varje länks href och text.
for (const link of menuLinks){
    console.log(`HREF: ${ link.getAttribute("href")} - Text: ${ link.textContent}`);
}
// 4. Skapa ett nytt p-element (document.createElement), ge det texten
//    "Dagens tips: prova en kardemummabulle." och lägg det sist i #hero med append.
const heroParagraph = document.createElement("p");
heroParagraph.textContent = "Dagens tips: prova en kardemummabulle."
const heroSection = document.getElementById("hero")!;
heroSection.append(heroParagraph);
// 5. Lägg klassen "dagens" på #hero med classList.add. Ta bort den med classList.remove.
heroSection.classList.add("dagens");
heroSection.classList.remove("dagens"); //Notera att attributet class finns kvar UTAN värde
// 6. Säkerhetsförsök: sätt p.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">'
//heroParagraph.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">';
//    Vad händer i Console? Byt sedan till p.textContent med samma text. Vad händer nu?
//heroParagraph.textContent = '<img src="x" onerror="console.log(\'Attack!\')">';
//En kör som HTML, så kod körs
//den andra visat den enbart som text

// TODO


// DEL 2: koppla ihop med funktionerna i ui.js ----------------------------
// 7. Hämta #meny-lista och #meny-rubrik.
const menuListTitle = document.querySelector<HTMLElement>("#meny-rubrik")!;
const menuList = document.querySelector<HTMLElement>("#meny-lista")!;
visaMeny(menuList, meny);
uppdateraRubrik(menuListTitle, meny.length);

//const idBilligasteRatt = 1;
const idBilligasteRatt = billigast(meny)?.id;
markeraDagensRatt(menuList, idBilligasteRatt);

// 8. Anropa visaMeny med menyn, och uppdateraRubrik med antalet rätter.
// 9. Dagens rätt = den billigaste lunchen. Använd filter och billigast (från meny.js)
//    och markeraDagensRatt.
// TODO