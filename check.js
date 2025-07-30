(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
  "W skurczu izometrycznym:": "Wszystkie powyższe odpowiedzi są błędne.",
  "Pełny zakres badań wymaganych do uzyskania orzeczenia o zdolności do sportu trzeba wykonać:": "Co 12 miesięcy.",
  "Problemy jakimi zajmuje się medycyna sportowa to:": "Wszystkie odpowiedzi są prawdziwe.",
  "Pierwszą czynnością w przypadku oparzenia termicznego jest:": "Smarujemy tłuszczem oparzone miejsce.",
  "W cyklu treningowym, kolejny trening powinien być zaplanowany:": "W szczytowym momencie superkompensacji.",
  "Niekwasomlekowa faza długu tlenowego trwa około:": "60 min.",
  "Test harwardzki (harvard step-test) służy do oceny:": "Sprawności termoregulacji.",
  "Jaki jest wpływ wysiłku fizycznego o charakterze wytrzymałościowym na wydzielanie GH:": "Wszystkie odpowiedzi są prawdziwe.",
  "Satysfakcjonujący poziom maksymalnego minutowego poboru tlenu u siatkarzy powinien wynosić:": "Powyżej 60 ml/kg/min.",
  "Opóźniona bolesność mięśnia spowodowana jest przez:": "Wzrost pH w mięśniu.",
  "Wskaźnikiem oceniającym potencjał fosfagenowy zawodnika mierzony w teście Wingate jest:": "Moc średnia.",
  "W stawie skokowym górnym można wykonywać ruchy:": "Przywodzenia, odwodzenia, nawracania i odwracania.",
  "Mięśnie nadgrzebieniowy i podgrzebieniowy:": "Przyczepiają się do powierzchni żebrowej łopatki.",
  "Piłka siatkowa jest dyscypliną sportową o podłożu energetycznym:": "Aerobowo-anaerobowym."
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
