(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
  "Środki wspomagające to:": "Tylko legalne (nie zabronione) środki i metody.",
  "W cyklu treningowym, kolejny trening powinien być zaplanowany:": "Moment superkompensacji jest bez znaczenia w planowaniu treningu.",
  "Nacisk zawodnika na podłoże podczas wyskoku do bloku może być:": "Wyłącznie mniejszy od ciężaru ciała.",
  "Wysiłek o intensywności wynoszącej 75%VO2max to wysiłek o intensywności:": "Maksymalnej.",
  "Proces rehydratacji (nawodnienia) zachodzi najszybciej jeśli:": "Podawane płyny są o odpowiednim ciśnieniu osmotycznym podobnym do ciśnienia osmotycznego krwi.",
  "Bóle w dolnym odcinku kręgosłupa są spowodowane:": "Stanami przeciążeniowymi mięśni rotatorów oraz mięśnia 4-głowego.",
  "Do pomiaru maksymalnego minutowego poboru tlenu (wydolności tlenowej) należy zastosować test:": "Bosco.",
  "Wydolność aerobowa mierzona jest przez pomiar:": "Maksymalnej siły mięśni.",
  "W którym z poniższych przypadków zespół nie straci punktu w wyniku kary?": "Dwaj zawodnicy jednego zespołu pobili się",
  "Najskuteczniejsze działania integrujące i budujące więzi w sytuacji rozwiązywania konfliktów to:": "Wsparcie osobiste, uściślenie zarzutów, brak prośby o odsłonięcie rozmówcy.",
  "Według koncepcji Selingmana zawodnicy tłumaczą swoje sukcesy/porażki poniższymi wymiarami:": "Samokontrola, personalizacja, zaangażowanie.",
  "Do najważniejszych etapów treningu umiejętności psychologicznych należy:": "Opanowanie technik budowania pewności siebie w oparciu o negatywny dialog wewnętrzny.",
  "Cele pedagogiczne funkcjonowania młodego zespołu to:": "Kształtowanie świadomości kontuzji.",
  "Podstawowy wymiar najtrafniej opisujący stan umysłu w przepływie to:": "Jasne cele.",
  "W czym przejawia się zasada indywidualizacji?": "Liczbie powtórzeń, tempie wykonania, liczbie serii.",
  "Selekcja kierowana polega na:": "Samoocenie i samokontroli zawodników.",
  "Która z prób sprawnościowych w naborze do SMS odbywa się na boisku siatkarskim?": "Bieg zwinnościowy ze zmianą kierunków.",
  "Który z treningów siły jest wskazany dla młodocianych siatkarzy?": "Trening obwodowy.",
  "Jakie okresy treningowe występują w makrocyklu?": "Przygotowawczy, startowy, przejściowy.",
  "Ilu wystawiających musi być w drużynie, która atakować będzie wyłącznie w systemie po wystawie zawodnika z linii ataku:": "Co najmniej dwóch.",
  "Sposoby przemieszczania się po boisku w piłce siatkowej to:": "Piwot, rzut siatkarski, rozbieg.",
  "Rysunek 11 przedstawia:": "Moment rozpoczęcia rozbiegu do ataku z piłki przyspieszonej (w drugim tempie).",
  "Systemy rozbiegu do ataku w 1 tempo to:": "Nie istnieje żaden system.",
  "Warianty ataku w 1 tempo ustala:": "Trener - to on w pierwszej kolejności wywołuje akcje po przyjęciu zagrywki.",
  "Środkowy zmienia akcję bazową, tak aby stanowić zagrożenie (otwiera siatkę) w sytuacji gdy:": "Piłka przyjęta jest wzdłuż siatki bliżej strefy IV lub strefy II.",
  "Niewłaściwy sposób wykonania rozbiegu do ataku w 1 tempo ze strefy III to:": "Rozbieg czterokrokowy.",
  "Rysunek 21 przedstawia moment odbicia do ataku z jednej nogi dla akcji bazowej:": "Akcja \"A\" /baza A.",
  "Pozycje wyjściowe do bloku po zmianie stref to:": "Wąsko w lewo, nogi ugięte.",
  "Podstawowym priorytetem trenera A. Anastasiego w systemie organizacji blokowania w grze Reprezentacji Polski dla zawodnika środkowego było:": "Obowiązkowe przemieszczenie do dwubloku w strefie II.",
  "Wskaż właściwy sposób ustawiania bloku w strefie II lub IV przez zawodnika skrzydłowego:": "Po kroku skrzyżnym z ustawienia wąskiego.",
  "Nauczanie blokowania metodą analityczną odbywa się w następujących etapach (po pokazie i objaśnieniu):": "Nauczanie blokowania pojedynczego, podwójnego, potrójnego.",
  "Które z ćwiczeń nie jest przygotowującym do nauki odbić górnych:": "Po podrzucie obrót, chwyt piłki.",
  "Wskaż ćwiczenie zawierające błąd w nauczaniu ruchu ramienia uderzającego przy zagrywce szybującej bez wyskoku:": "Ddoprowadzanie ramienia do piłki znajdującej się nad barkiem ręki uderzającej, trzymanej przez współćwiczącego lub trenera, stojącego na podwyższeniu.",
  "Która z zasad nauczania zakłada dobór treści zajęć dostosowany do określonego poziomu umiejętności ćwiczących:": "Zasada stopniowania trudności.",
  "System gry w obronie to współdziałanie zawodników:": "Rozgrywających - atakujących.",
  "Która z zasad organizacji kontrataku obowiązuje w przypadku obrony przez zawodnika rozgrywającego:": "Wystawia zawodnik strefy II.",
  "Taktykę indywidualną ataku z piłki sytuacyjnej ze skrzydła opisuje zdanie:": "Podejmujemy ryzyko w każdej akcji.",
  "Zawodnik broniący w strefie I atak po skosie, powinien zatrzymać się w pozycji bazowej w momencie:": "W momencie, gdy piłka jest w dłoniach rozgrywającego.",
  "Schemat ustawienia obrońców na pozycjach wyjściowych przedstawiony na rysunku 33a stosowany jest:": "Wyłącznie na poziomie młodzika.",
  "W pozycji bazowej obrońca, który prawidłowo zareagował (przewidział działania przeciwnika), powinien:": "Być w ciągłym ruchu.",
  "Rola pierwszego przyjmującego w grze. Wskaż zdanie prawdziwe:": "Wykonuje atak po przyjęciu zagrywki również z prawego skrzydła.",
  "W którym ustawieniu lub ustawieniach zawodnik przyjmujący grający w linii ataku ustawiony jest do przyjęcia zagrywki na prawej stronie boiska:": "R 1 i R 6",
  "Stosunek ilości wszystkich działań w danym elemencie wykonanym przez zawodnika do ilości wszystkich działań w tym samym elemencie wykonanym przez zespół wyraża:": "Współczynnik skuteczności.",
  "Które z wymienionych cech są charakterystyczne dla planu szkoleniowego:": "Celowość, wykonalność.",
  "Plan organizacji szkolenia składa się z dwóch części, wskaż właściwe:": "Papierowa, elektroniczna.",
  "Które z podanych poniżej wydarzeń pojawiło się najwcześniej:": "Puchar Świata kobiet.",
  "Który czynnik należy brać pod uwagę w różnicowaniu treningu wszechstronnego:": "Nabywanie i doskonalenie umiejętności oraz sprawności specjalnej.",
  "Który system jako pierwszy pozwala na wprowadzanie specjalizacji środkowego:": "System 4-2 z rozgrywającym z II linii.",
  "Który z wprowadzonych sposobów ataku w wieku juniora jest priorytetowy:": "Gra środkowego w systemie „stałym”.",
  "Czy całościowa forma zagrywki rotacyjnej w wyskoku powinna być uwzględniona w metodyce nauczania w wieku młodzika:": "Nie, tylko po dojściu w przód, stopniowo zwiększając wysokość podrzutu, ale bez wyskoku.",
  "Jaki sposób gry wprowadzany jest w kategorii juniora:": "Przyjęcie zagrywki przez trzech zawodników.",
  "Podstawowym zadaniem broniącego w minisiatkówce, w grze 2x2, jest:": "Dostosowanie pozycji w obronie do atakującego.",
  "W grze obronnej system opisany jako 2:1:3 oznacza:": "Opis sposobu asekuracji bloku.",
  "Która z zasad minisiatkówki dotyczy gry 3 x 3:": "Nie uznaje się błędu ustawienia zawodników I i II linii",
  "Które z umiejętności decydują o jakości przyjęcia zagrywki:": "Mentalne nastawienie do przyjęcia.",
  "Na jaki element w nauczaniu bloku zwraca się uwagę po opanowaniu innych wcześniejszych elementów bloku:": "Przełożenie ramion.",
  "Który rodzaj asekuracji jest najczęściej stosowany przez zespoły grające atak z „pipe”:": "3-2 stały.",
  "Zmiana założeń zespołowych gry w etapach szkolenia młodzieży zależy od rozwoju umiejętności:": "Gry w bloku.",
  "System obrony 1 -1 -2 oznacza:": "Jeden broniący po skosie, dwóch w głębi pola i jeden w asekuracji.",
  "Jakie zadania ma zawodnik lepiej przyjmujący ustawiony do przyjęcia w trzech zawodników:": "Reaguje na piłkę.",
  "Jaką rolę w treningu spełnia atrapa bloku:": "Przekazuje informację zwrotną o działaniu.",
  "Podstawowym celem naboru jest:": "Ciągłość procesu.",
  "Który z elementów taktyki zespołowej jest szczególnie dostosowany do gry rywala:": "Taktyka kontrataku.",
  "W treningu siłowym liczba 3-5 serii na ćwiczenie po 8-12 powtórzeń, to proces kształtowania:": "Adaptacji anatomicznej.",
  "Przejście z fazy ataku do fazy obrony następuje w momencie:": "Po wystawieniu piłki przez własny zespół .",
  "Która z zasad zwiększania kompetencji bloku w kolejnych latach szkolenia jest istotna:": "Ustawienie bloku na kierunku rozbiegu atakującego.",
  "Jakie zadanie ma łączenie poprzez trening różnych dyspozycji w interdyspozycje do gry:": "Uzyskanie umiejętności sprawnego działania w osiągnięciu celów gry.",
  "Jaka umiejętność przyjmującego wynika z „głębokiego widzenia”:": "Czucie „kątów” przyjęcia.",
  "Które z działań w taktyce indywidualnej rozgrywającego „ustawia grę”:": "Utrzymanie stałego zagrożenia atakiem w I tempo lub atakiem z drugiej piłki.",
  "Siatkówka plażowa. Pierwsze medale dla Polski w rozgrywkach międzynarodowych zdobyli :": "Tomasz Sińczak i Rafał Szternel – brązowy medal Mistrzostw Świata U-18 Pattaya Tajlandia."
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
