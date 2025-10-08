

// Prosta funkcja witająca
function przywitaj(imie) {
  return `Cześć, ${imie}! Miło było Cię widzieć na tej stronie `;
}

// Funkcja, która uruchamia się po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  console.log("Plik JS został poprawnie załadowany ✅");

  // Wstawiamy komunikat do body strony
  const div = document.createElement("div");
  div.style.margin = "20px";
  div.style.padding = "10px";
  div.style.border = "1px solid limegreen";
  div.style.color = "limegreen";
  div.style.fontFamily = "monospace";
  div.textContent = przywitaj("Jarek");

  document.body.appendChild(div);
});
