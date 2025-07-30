(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
    "f8906e24fdf0": {
      "text": "Podstawowym narzędziem ekspresji w ciele jest oddech i mięśnie.",
      "question": "Wybierz zdanie prawdziwe:"
    }
  }

  /* === 2. Znalezienie tabeli === */
  const table = document.querySelector('td.summary-filelist table');
  if (!table) {
    console.warn('Nie znaleziono tabeli!');
    return;
  }

  /* === 3. Usuwanie wierszy + kluczy === */
  let rowsRemoved = 0, keysRemoved = 0;

  [...table.querySelectorAll('tr')].forEach(tr => {
    const firstTd = tr.querySelector('td');
    if (!firstTd) return;

    // Tekst pytania – bez spacji i końcowego dwukropka
    const q = firstTd.textContent.trim().replace(/ {2,}/g, ' ');
    const questionKey = Object.keys(questions).find(key => questions[key].question === q);
    if (!questionKey) return;
    delete questions[questionKey];
  });

  /* === 4. Raport końcowy === */
  console.log(`Usunięto ze słownika ${keysRemoved} klucz(e).`);
  console.log(`Ilość odpowiedzi ${Object.keys(questions).length}`);
  console.log(`Ilość odpowiedzi ${Object.keys(questions).map(e => e + "\n")}`);
  console.log('Pozostałe pytania/odpowiedzi:', JSON.stringify(questions, null, "\t"));
})();
