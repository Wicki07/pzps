(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
"Pełny zakres badań wymaganych do uzyskania orzeczenia o zdolności do sportu trzeba wykonać:": "Przy każdej wizycie u lekarza sportowego.",
  "W skurczu izometrycznym:": "Zmienia się długość mięśnia.",
  "W skład ściany przedniej jamy brzusznej wchodzą:": "Mięsień biodrowy.",
  "Pojemność tlenowa krwi wynosi:": "20 ml O2 na 100 ml krwi.",
  "Problemy jakimi zajmuje się medycyna sportowa to:": "Przygotowanie sportowca do podróży i ocena wpływu warunków środowiskowych na zdrowie i wydolność zawodnika.",
  "Hematokryt wynosi średnio:": "42 % u kobiet i 55 % u mężczyzn.",
  "Procesy anaboliczne to:": "Procesy endoergiczne (syntez) do których potrzebna jest energia z ATP.",
  "Po stwierdzeniu, że poszkodowany jest nieprzytomny:": "Sprawdzamy oddech i przystępujemy do sztucznych oddechów i pośredniego masażu serca.",
  "W cyklu treningowym, kolejny trening powinien być zaplanowany:": "Moment superkompensacji jest bez znaczenia w planowaniu treningu.",
  "Pierwszą czynnością w przypadku oparzenia termicznego jest:": "Zakładamy jałowy opatrunek z gazy na oparzone miejsce i czekamy na pogotowie.",
  "Wskaż efekty treningu fizycznego:": "Poprawa termoregulacji, zwiększenie otłuszczenia ciała, spadek hemoglobiny.",
  "Nacisk zawodnika na podłoże podczas wyskoku do bloku może być:": "Wyłącznie mniejszy od ciężaru ciała.",
  "Do cech budowy kręgu szczytowego należy:": "Brak wyrostka kolczystego.",
  "U człowieka dorosłego wentylacja minutowa płuc w spoczynku wynosi około:": "250-300 mL · min-1.",
  "Po około 25 roku życia zmniejsza się:": "Tylko wydolność anaerobowa.",
  "Ruchy w stawie biodrowym to wszystkie z wyjątkiem:": "Odwodzenie.",
  "Niekwasomlekowa faza długu tlenowego trwa około:": "60 min.",
  "Do grupy bocznej mięśni przedramienia należy:": "Prostownik promieniowy krótki nadgarstka.",
  "Największy wpływ na poziom maksymalnego minutowego poboru tlenu ma:": "Maksymalna pojemność minutowa serca.",
  "W płaszczyźnie czołowej zachodzą ruchy:": "Zginania i prostowania.",
  "Piłka siatkowa jest dyscypliną sportową o podłożu energetycznym:": "Tlenowym.",
  "W przypadku pełnosprawnych zawodników orzeczenie o zdolności do sportu może wydać:": "Każdy lekarz.",
  "Satysfakcjonujący poziom maksymalnego minutowego poboru tlenu u siatkarzy powinien wynosić:": "Powyżej 60 ml/kg/min.",
  "Do oceny zdolności wytrzymałościowych w grach zespołowych można zastosować test:": "Yo-Yo.",
  "Bóle w dolnym odcinku kręgosłupa są spowodowane:": "Stanami przeciążeniowymi mięśni rotatorów oraz mięśnia 4-głowego.",
  "Mięśnie nadgrzebieniowy i podgrzebieniowy:": "Przyczepiają się do powierzchni żebrowej łopatki.",
  "Jaki jest wpływ wysiłku fizycznego o charakterze wytrzymałościowym na wydzielanie GH:": "Wzrasta wydzielanie GH.",
  "Opóźniona bolesność mięśnia spowodowana jest przez:": "Wzrost pH w mięśniu.",
  "Test harwardzki (harvard step-test) służy do oceny:": "Sprawności termoregulacji.",
  "W stawie skokowym górnym można wykonywać ruchy:": "Przywodzenia, odwodzenia, nawracania i odwracania.",
  "W utrzymaniu stałego pH płynów ustrojowych biorą udział:": "Sprawnie działające płuca.",
  "Wskaźnikiem oceniającym potencjał fosfagenowy zawodnika mierzony w teście Wingate jest:": "Czas utrzymania mocy szczytowej."
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
