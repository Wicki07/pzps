(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
  "Jaki jest wpływ wysiłku fizycznego o charakterze wytrzymałościowym na wydzielanie GH:": "Wszystkie odpowiedzi są prawdziwe.",
  "Intensywność rozgrzewki powinna wynosić:": "Nie ma to znaczenia.",
  "Nacisk zawodnika na podłoże podczas wyskoku do bloku może być:": "Mniejszy, większy jak i równy ciężarowi ciała.",
  "Wskaż efekty treningu fizycznego:": "Zwiększenie siły, wzrost spoczynkowego tętna, pogrubienie chrząstek stawowych.",
  "W stawie skokowym górnym można wykonywać ruchy:": "Przywodzenia, odwodzenia, nawracania i odwracania.",
  "Do rotatorów wewnętrznych stawu biodrowego należy:": "Mięsień biodrowy.",
  "Bezpośrednio po jednorazowym wysiłku występuje:": "Zmęczenie przewlekłe.",
  "Które zdanie dotyczące korzystania z regulaminowych przerw w grze jest nieprawdziwe?": "Zespół „A” może skorzystać z dwóch przerw dla odpoczynku bez wznawiania gry",
  "Które z poniższych stwierdzeń nie jest prawdziwe w kontekście przepisów dotyczących zawodników Libero?": "Jeżeli w zespole jest dwóch Libero, nie mogą oni mieć koszulek w różnych kolorach (każda z nich odróżniająca Libero od „zwykłych” zawodników)",
  "Podstawowy rozgrywający zespołu został zmieniony przez drugiego rozgrywającego. Następnie miała miejsce zmiana powrotna, która był szóstą zmianą w tym zespole w tym secie. Chwilę później zawodnik rozgrywający doznał kontuzji. Libero zespołu przebywał w tym momencie na ławce. Jakie pole manewru ma trener zespołu?": "Trener może dokonać zmiany kontuzjowanego z dowolnym zawodnikiem nieprzebywającym na boisku w momencie kontuzji z wyjątkiem Libero oraz drugiego rozgrywającego",
  "Najczęściej spotykane reakcje w sytuacji konfliktu to:": "Negowanie istnienia konfliktu, pozytywne domniemania, przyjazne pytania.",
  "Wyróżniamy następujące rodzaje celów sportowych:": "Cele zmienne i cele stałe.",
  "Wykorzystując wiedzę na temat teorii motywacji osiągnięć J.W.Atkinsona wybierz zdanie prawdziwe:": "Osoby, u których motyw dążenia do sukcesu (Ms) jest niższy niż motyw do unikania niepowodzenia( Maf) są bardziej wytrwałe przy początkowym zadaniu związanym z osiągnięciem.",
  "Najważniejsze aspekty motywacji osiągnięć w sporcie to:": "Brak samokontroli, wytrwałość, flow.",
  "Które rodzaje treningu realizowane są w przekroju całej kariery zawodnika?": "Techniczny i taktyczny.",
  "Jakie jest główne zadanie okresu przygotowawczego?": "Doskonalenie techniki i taktyki.",
  "Planowanie makrocyklu powinno rozpoczynać się od:": "Wyznaczenia ram czasowych okresu startowego w oparciu o kalendarz zawodów.",
  "Koordynacja ruchowa jest funkcją?": "Budowy somatycznej i szybkości.",
  "Na czym polega trening strumieniowy?": "Aktywizacja ćwiczących zgodnie z zasadami aktywności i świadomości.",
  "Do jakiej grupy ćwiczeń należy zaliczyć sporty uzupełniające?": "Wszechstronne.",
  "Który z elementów przygotowania psychicznego zawodników kształtuje ich cechy charakteru?": "Kształtowanie motywów.",
  "Fazę podrzutu w zagrywce szybującej (bez rotacji) bez wyskoku najlepiej charakteryzuje zdanie:": "Wszystkie odpowiedzi są prawidłowe.",
  "Na rycinie 2 kierunek uderzenia atakująca reguluje poprzez:": "Zmianę prowadzenia ramienia uderzającego ze stałego ustawienia tułowia.",
  "Technikę wykonania ostatniego kroku dojścia do zbicia należy opisać jako:": "Doskok na ugięte we wszystkich stawach nogi, połączony z zamachem ramion w górę; jednoczesny kontakt obu stóp z podłożem - kolejno: przez pięty, na śródstopie.",
  "Wskaż zdanie opisujące prawidłową technikę ataku w trzecim tempie:": "Rozpoczęcie rozbiegu do ataku z piłki wysokiej w momencie, gdy piłka zaczyna spadać (piłka wystawiona jest w najwyższym punkcie trajektorii lotu).",
  "Które zdanie opisuje współpracę atakującego z rozgrywającym – w przypadku ataku z piłki szybkiej:": "Gdy atakujący oceni, że piłka przyjęta jest dokładnie, krzyczy do rozgrywającego - quick!!! Jest to sygnał dla zawodnika rozgrywającego, że piłka ma być szybka (wystawiona w pierwszym tempie).",
  "Podstawowym priorytetem trenera A. Anastasiego w systemie organizacji blokowania w grze Reprezentacji Polski dla zawodnika środkowego było:": "Obowiązkowe przemieszczenie do dwubloku w strefie II.",
  "Rysunek 4a przedstawia blokowanie systemem:": "Każdy swego.",
  "Wskaż błąd, który pojawia się jako pierwszy w nauczaniu zagrywki rotacyjnej w wyskoku:": "Nieprawidłowe ustawienie stóp w postawie przygotowawczej.",
  "Wskaż błąd, który pojawia się w fazie uderzenia, w technice wykonania zagrywki szybującej bez wyskoku:": "Uderzenie piłki za głową lub na wysokości głowy.",
  "Nauczanie zagrywki dolnej metodą analityczną odbywa się w następujących etapach:": "Wszystkie odpowiedzi są właściwe.",
  "W której formie nauczania w treningu, trenerzy skupiają uwagę zawodników na kluczowych elementach gry:": "W grze uproszczonej.",
  "Nauczanie gry w siatkówkę powinno odbywać się:": "Na takich samych zasadach , ale tylko dzieci i młodzież.",
  "W fazie Break Point efektywność gry w obronie nie może być zwiększona poprzez:": "Przygotowanie pierwszej akcji w obronie wykorzystując zagrywkę.",
  "Zawodnik skrzydłowy obrony w strefie V, broniąc piłki atakowane po prostej ze strefy II, przemieszcza się z pozycji wyjściowej do pozycji bazowej:": "Krokiem skrzyżnym zakończonym naskokiem.",
  "Zasada ustawiania się w obronie na ,,skraju bloku” jest korzystna, ponieważ:": "Wszystkie odpowiedzi są właściwe.",
  "Schemat działania zawodnika w grze obronnej to kolejno:": "Przemieszczenie za blok.",
  "Rysunek 33 przedstawia schemat ustawienia obrońców na pozycjach wyjściowych w sytuacji:": "Systemu stosowanego na najwyższym poziomie.",
  "Analiza rozkładu ataku w opracowaniach statystyki meczowej uwzględnia:": "Podział na ustawienia z atakującym w linii ataku i w linii obrony.",
  "Dokonując analizy ustawienia zespołu w bloku i obronie:": "Nie zwraca się uwagi na to, czy zawodnikiem linii obrony jest libero, czy środkowy.",
  "Akcja bazowa dotyczy analizy gry:": "Tylko w końcówkach setów.",
  "W którym przypadku demokratyzacja modelu kierowania winna być głębsza:": "W przypadku pracy z młodzieżą.",
  "Jeżeli podczas treningu u zawodnika pojawiają się błędy w wykonaniu ruchu to:": "Naukę prowadzimy na końcu treningu.",
  "Które określenie charakteryzuje przygotowanie wszechstronne:": "Wolniejsza poprawa wyników sportowych.",
  "Jaki element techniczny nie jest podstawą do opanowania innych elementów gry:": "Wystawienie.",
  "Który z wprowadzonych sposobów ataku w wieku juniora jest priorytetowy:": "Uderzenie z prowadzeniem ramienia pod kątem do tułowia.",
  "System gry w obronie w wieku kadeta zmienia się w zależności od:": "Ataku z drugiej piłki.",
  "Która czynność wykonywana w obronie jest konsekwencją wcześniejszych działań:": "Aktywny ruch do piłki zamiast czekania.",
  "Jakie nowe podejście metodyczne uwzględnia program szkolenia siatkarza:": "Od ćwiczeń globalnych poprzez ćwiczenia analityczne do syntetycznych.",
  "Przyjęcie zagrywki w 4 zawodników nie jest zasadne w wypadku:": "Gry na dwóch rozgrywających w II linii.",
  "Obrona ataku w I tempo z „dziurą” w bloku polega na:": "Obronie przez skrzydło obrony.",
  "Słaby punkt obrony przy zawodniku „6” cofniętym do linii końcowej to:": "Obrona piłek padających do rogów boiska.",
  "Który z zawodników w obronie skrzydłami jest zwolniony za obronę piłek blisko siatki:": "Broniący w środku pola.",
  "Na podstawie analiz wynika, że w ustawieniu 1 zawodnik atakujący, po przyjęciu zagrywki:": "Z reguły kiwa każdą wystawioną piłkę.",
  "Podstawowym celem naboru jest:": "Formowaniu grupy ćwiczebnej.",
  "Podaj kolejność kształtowania siły w procesie szkoleniowym:": "Hipertrofia, siła dynamiczna, adaptacja anatomiczna, siła dynamiczna.",
  "Zdolnośći koordynacyjne kształtuje się za pomocą jednej z metod szkoleniowych. Jest to metoda:": "Powtórzeniowa.",
  "W szkoleniu młodzieży ćwiczenia analityczne stosuje się:": "W nauce danego elementu technicznego.",
  "Formacja gry 3 x 3 ma swoje ograniczenia w stosowaniu, jako:": "Etap selekcji wystawiających.",
  "Który z elementów taktyki zespołowej jest szczególnie dostosowany do gry rywala:": "Taktyka obrony.",
  "Czy dla siatkarza, do treningu barku, bardziej przydatny jest hantel czy guma thera-band:": "Hantel.",
  "Jakie są główne zadania taktyki indywidualnej w ataku:": "Wykorzystanie piłek sytuacyjnych.",
  "Siatkówka plażowa. Przyjmujący zagrywkę wykonaną z wiatrem powinien:": "Przyjąć piłkę nad siebie.",
  "Kiedy rozegrano Pierwsze Mistrzostwa Europy w siatkówce plażowej:": "W 1997 roku."
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
