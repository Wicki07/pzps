(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
    "Na końcu tylnym żebra znajduje się": "Głowa żebra.",
    "Markerami uszkodzenia komórek mięśni we krwi są": "Wszystkie wymienione.",
    "Maksymalny sprint trwający 6 sekund wymaga od zawodnika wysokiej wydolności": "Anaerobowej fosfagenowej.",
    "Specyfika komunikacji z dziećmi polega na uwzględnieniu": "Podejścia opartego na współpracy z dzieckiem.",
    "Zjawisko załamania wiąże się ze stanem podaktywności organizmu. Oznacza to, że": "Organizm nie jest wystarczająco pobudzony, aby optymalnie funkcjonować.",
    "Rysunek 4 przedstawia rozegranie ataku w systemie": "Po wystawie zawodnika linii ataku ze zmianą stref.",
    "Wskaż zasadę obowiązującą zawodnika środkowego w przypadku ataku z akcji C (haczyk)": "Środkowy wykonuje rozbieg dokładnie w ten sam sposób jak przy akcji \"1\", tzn. …",
    "Który z systemów rozbiegu do ataku w 1 tempo jest łatwiejszy do zastosowania dla zawodnika rozgrywającego": "System płynny.",
    "Która z zasad ustawiania bloku przez zawodnika skrzydłowego przedstawiona jest na rysunkach 30 i 31": "Ustawienie na kierunek rozbiegu atakującego.",
    "Która z zasad obowiązujących skrzydłowego przy ustawianiu bloku w strefach II lub IV jest najtrudniejsza do realizacji": "Ustawienie szwu dwubloku na piłkę.",
    "Sprzężenie zwrotne w korekcie błędów to": "Wszystkie odpowiedzi są właściwe.",
    "Wskaż ćwiczenie zawierające błąd w nauczaniu pozycji przygotowawczej zagrywki rotacyjnej w wyskoku, metodą analityczną": "Przyjmowanie pozycji do wykonania zagrywki, …",
    "Cztery fazy (części) czynności zbicia w nauczaniu ataku metodą kompleksową to": "Rozbieg (dojście), wyskok, uderzenie, lądowanie.",
    "Generalną zasadą planowania procesu szkoleniowego jest": "Planowanie od tyłu.",
    "Czy docelowo na etapie młodzika można wyodrębnić specjalizację środkowego": "Tak, ale pozostawić mu opcję ataku w II lub III tempo.",
    "W ustawieniu czterech zawodników do przyjęcia odpowiedzialność w strefach lub w pasach zależy od": "Trajektorii zagrywki.",
    "Jaka powinna być właściwa kolejność metodyki nauczania wystawienia": "Sukcesywnie przechodzimy od nauki odbić do wystawienia piłki.",
    "Który sposób poruszania się w obronie jest najszybszy na krótkim dystansie": "Pad boczny.",
    "Jakie wskazówki decydują o „dostrojeniu” swojej pozycji w obronie": "Praca ręki atakującego.",
    "Która pozycja początkowa wynika ze specjalizacji zawodnika środkowego": "Pozycja w bloku.",
    "Siatkówka plażowa. Wystawę sposobem oburącz górnym stosujemy, gdy": "Tor lotu i warunki pogodowe gwarantują możliwość czystego odbicia piłki."
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
    const q = firstTd.textContent.trim().replace(/:$/, '');
    if (q in questions) {
      /* 3a. Usuń cały wiersz z DOM */
      tr.remove();
      rowsRemoved++;

      /* 3b. Usuń odpowiadający wpis ze słownika */
      delete questions[q];
      keysRemoved++;
    }
  });

  /* === 4. Raport końcowy === */
  console.log(`Usunięto z tabeli ${rowsRemoved} wiersz(y).`);
  console.log(`Usunięto ze słownika ${keysRemoved} klucz(e).`);
  console.log('Pozostałe pytania/odpowiedzi:', JSON.stringify(questions));
})();
