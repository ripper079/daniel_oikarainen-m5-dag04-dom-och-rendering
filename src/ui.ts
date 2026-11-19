// Dag 4: Funktioner som bygger sidans innehåll med DOM. Gör alla tester gröna på tests.html.
// Röda understrykningar tills du skrivit return är normalt. ratt.bild och ratt.beskrivning är valfria (string | undefined): använd ?? "" för att få en text.
// Regel: använd createElement och textContent. Använd INTE innerHTML med data.
import { formateraPris } from "./pris";
import type { Ratt } from "./typer";

// 1. Bygger ett kort för en rätt och returnerar det (anropar inte append själv).
//    <article data-id="1">
//      <img src="..." alt="Illustration av kardemummabulle">
//      <h3>Kardemummabulle</h3>
//      <p>Beskrivning</p>
//      <p class="pris">35 kr</p>
//    </article>
export function skapaRattKort(ratt: Ratt): HTMLElement {
  // TODO
  //Create each element part for part, and also add the attributes
  //Mental Note - Loke how the interface Ratt look like, wrapping with if may be needed
  const card: HTMLElement = document.createElement("article");
  card.dataset.id = `${ratt.id}`;

  const imageCard = document.createElement("img");
  if (ratt.bild) imageCard.src = ratt.bild;
  if (ratt.beskrivning) imageCard.alt = ratt.beskrivning;
  
  const titleCard = document.createElement("h3");
  titleCard.textContent = ratt.namn;

  const descriptionCard = document.createElement("p");
  if (ratt.beskrivning)  descriptionCard.textContent = ratt.beskrivning;

  const priceCard = document.createElement("p");
  priceCard.classList.add("pris");
  priceCard.textContent = `${ratt.pris} kr`;

  card.append(imageCard, titleCard, descriptionCard, priceCard);

  return card;
}

// 2. Töm containern och lägg in ett kort per rätt.
//    Är listan tom: visa <p class="tom">Inga rätter hittades.</p> istället.
export function visaMeny(container: HTMLElement, ratter: Ratt[]): void {
  // TODO
}

// 3. Sätt rubrikens text: "Meny (8 rätter)". Ett enda: "Meny (1 rätt)".
export function uppdateraRubrik(element: HTMLElement, antal: number): void {
  // TODO
}

// 4. Markera EN rätt som dagens rätt: klassen "dagens" ska finnas på kortet med rätt
//    data-id, och inte på något annat kort. Anropas igen = markeringen flyttas.
export function markeraDagensRatt(container: HTMLElement, id: number): void {
  // TODO
}
