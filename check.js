(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
  "Pełny zakres badań wymaganych do uzyskania orzeczenia o zdolności do sportu trzeba wykonać:": "Co 2 lata."
};

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
    if (q in questions) {

      /* 3b. Usuń odpowiadający wpis ze słownika */
      delete questions[q];
      keysRemoved++;
    } else {
        console.log(q)
        console.log(questions[q])
    }
  });

  /* === 4. Raport końcowy === */
  console.log(`Usunięto ze słownika ${keysRemoved} klucz(e).`);
  console.log(`Ilość odpowiedzi ${Object.keys(questions).length}`);
  console.log(`Ilość odpowiedzi ${Object.keys(questions).map(e => e + "\n")}`);
  console.log('Pozostałe pytania/odpowiedzi:', JSON.stringify(questions, null, "\t"));
})();
