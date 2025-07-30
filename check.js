(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
    "bd76e3426887": {
      "text": "Libero może być kapitanem zespołu.",
      "question": "Które ze zdań nie jest prawdziwe odnośnie składu i lokalizacji zespołu?"
    },
    "b05c8069f640": {
      "text": "Trener może dokonać zmiany kontuzjowanego z dowolnym zawodnikiem nieprzebywającym na boisku w momencie kontuzji z wyjątkiem Libero",
      "question": "Podstawowy rozgrywający zespołu został zmieniony przez drugiego rozgrywającego. Następnie miała miejsce zmiana powrotna, która był szóstą zmianą w tym zespole w tym secie. Chwilę później zawodnik rozgrywający doznał kontuzji. Libero zespołu przebywał w tym momencie na ławce. Jakie pole manewru ma trener zespołu?"
    },
    "f825ef38de15": {
      "text": "W bloku mogą nastąpić po sobie kolejne dotknięcia piłki wykonane przez jednego lub kilku zawodników, pod warunkiem że kontakt z piłką ma miejsce w jednym zagraniu, ale każde odbicie poza pierwszym zaliczane jest do limitu odbić zespołu",
      "question": "Które z poniższych zdań nie jest prawdziwe w kontekście charakterystyki odbicia piłki?"
    },
    "ab26e3348904": {
      "text": "Oficjalny protest zapisywany jest w protokole zawodów wyłącznie po zakończeniu meczu",
      "question": "Które ze zdań jest prawdziwe odnośnie protestu?"
    }
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
