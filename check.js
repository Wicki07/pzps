(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
  "Wysiłek o intensywności wynoszącej 75%VO2max to wysiłek o intensywności:": "Supramaksymalnej.",
  "Problemy jakimi zajmuje się medycyna sportowa to:": "Stosowanie dopingu w sporcie",
  "W płaszczyźnie czołowej zachodzą ruchy:": "Zginania i prostowania.",
  "Satysfakcjonujący poziom maksymalnego minutowego poboru tlenu u siatkarzy powinien wynosić:": "Około 15 ml/kg/min.",
  "I próg metaboliczny występuje przy intensywności pracy:": "100-120% VO2max.",
  "Przyczep końcowy mieśnia najszerszego grzbietu to:": "Wyrostek kruczy.",
  "W stawie skokowym górnym można wykonywać ruchy:": "Zginania, prostowania, nawracania i odwracania.",
  "W cyklu treningowym, kolejny trening powinien być zaplanowany:": "Przed wystąpieniem superkompensacji.",
  "Co to jest TLC i ile wynosi.": "Pojemność całkowita płuc, 6000 ml.",
  "Ogólny wydatek energetyczny związany z aktywnością fizyczną:": "Wszystkie odpowiedzi są prawdziwe.",
  "Oznaczenie stężenia mleczanu we krwi:": "Może służyć także jako marker do planowania i prowadzenia treningu sportowego z określoną intensywnością.",
  "Pierwszą czynnością w przypadku oparzenia termicznego jest:": "Zakładamy jałowy opatrunek z gazy na oparzone miejsce i czekamy na pogotowie.",
  "Które zdanie dotyczące korzystania z regulaminowych przerw w grze jest nieprawdziwe?": "Po zakończeniu wymiany zespół „A” dokonał zmiany zawodników. Następnie zespół „B” także dokonał zmiany. Zespół „A” może przed wznowieniem gry poprosić o przerwę dla odpoczynku",
  "Zawodnik rozgrywający, będący w tym momencie zawodnikiem linii obrony, po złym przyjęciu zagrywki w swoim zespole – piłka poleciała nad siatkę, gdzie została zaatakowana przez przeciwnika – stanął na trzecim metrze od siatki i podniósł w górę ręce, sięgając wyżej niż siatka. Piłka uderzyła go w dłonie. Które z poniższych zdań jest prawdziwe?": "Wszystkie odpowiedzi są prawidłowe",
  "Przed rozpoczęciem meczu na boisku znalazł się zawodnik niewpisany na kartce z ustawieniem. Jakie są konsekwencje?": "Trener może zdecydować o pozostawieniu tego zawodnika na boisku, zapis na kartce z ustawieniem jest korygowany",
  "Podstawowy wymiar najtrafniej opisujący stan umysłu w przepływie to:": "Utrata podświadomości.",
  "Efekty zastosowania twórczych wyobrażeń w treningu umiejętności psychologicznych to:": "Wyobrażanie sobie strategii używanych podczas realnego startu.",
  "Ambicję zawodnika w rozumieniu motywacji osiągnięć charakteryzuje:": "Satysfakcja, ukierunkowanie na cel, niechęć porównywania się z innymi.",
  "W czasie prawidłowego wydechu służącego regulacji pobudzenia organizmu biorą udział:": "Mięsień prosty brzucha.",
  "Technika wizualizacji sprzyja wspieraniu rehabilitacji zawodnika w trakcie kontuzji, ponieważ sportowcy używają poniższych rodzajów wyobrażeń:": "Wyobrażeń poznawczych.",
  "Która z faz kształtowania nawyku ruchowego ma miejsce zarówno w nauczaniu jak i doskonaleniu techniki?": "Plastyczności.",
  "Czym jest kontrola treningu?": "Sprawdzaniem poziomu wytrenowania zawodników.",
  "Etapy w szkoleniu sportowym siatkarza:": "Młodzik, kadet, junior.",
  "Z czego wynika wewnętrzna struktura okresu startowego?": "Z kalendarza zawodów.",
  "Która z metod oceny techniki stosowana jest w początkowej fazie szkolenia młodocianych zawodników?": "Rejestracja filmowa.",
  "Najważniejsze elementy warsztatu trenerskiego to:": "Formy i środki treningu.",
  "Jakie jest główne zadanie części końcowej jednostki treningowej?": "Podsumowanie wyniku zajęć.",
  "Która z definicji treningu sportowego w pełni oddzwierciedla jego istotę?": "Uporządkowany zestaw ćwiczeń skierowany na realizację zadania szkoleniowego.",
  "Który z wymienionych elementów niekorzystnie wpływa na jakość uderzenia w zagrywce szybującej bez wyskoku:": "Uderzenie rozluźnioną dłonią w środek piłki.",
  "W zagrywce tenisowej uderzenie w piłkę następuje:": "Z przodu, ponad głową, nasadą dłoni (zagrywka \"bezrotacyjna\").",
  "W ustawieniu do przyjęcia zagrywki na rysunku 3:": "Przyjmuje trzech zawodników, wystawiający wchodzi z pozycji 6.",
  "W zagrywce szybującej bez wyskoku (górnej z miejsca) pozycja wyjściowa u praworęcznych to:": "Stopy w rozkroku, z przodu noga lewa, piłka trzymana w lewej ręce, prawa ręka uniesiona do góry, łokieć zgięty na wysokości głowy.",
  "Miejsce naskoku do ataku (mężczyźni) w 1 tempo to:": "Około 1 m od siatki.",
  "Atakujący ze strefy II poprzez ustawienie tułowia w kierunku strefy V może:": "Wszystkie odpowiedzi nieprawidłowe.",
  "Zdanie najdokładniej opisujące rytm rozbiegu do ataku to:": "Długi, spokojny krok lewą nogą i przyspieszenie w dwóch ostatnich krokach (prawa/lewa).",
  "Współpracę atakującego z rozgrywającym - w przypadku ataku z piłki wysokiej ze strefy II - najdokładniej opisuje zdanie:": "Cisza – to sygnał dla zawodnika rozgrywającego, że piłka ma być wystawiona wysoko.",
  "Rysunek 22 przedstawia sposób wykonania rozbiegu do ataku z jednej nogi dla akcji bazowej:": "Akcja \"1\" /baza 1.",
  "Rozbieg do ataku w 1 tempo w systemie płynnym charakteryzuje zdanie:": "Wszystkie odpowiedzi są poprawne.",
  "Rysunek 15 przedstawia następujące fazy rozbiegu do ataku z piłki przyspieszonej:": "Wszystkie odpowiedzi są nieprawidłowe.",
  "Rysunek 29 przedstawia zasadę obowiązującą środkowego przy przyjęciu niedokładnym, wskaż prawidłową:": "Przyjęcie bliżej strefy IV, atakujący zmienia akcję bazową z \"1\" na \"2\" graną w systemie płynnym.",
  "Pozycję wyjściową do bloku najtrafniej opisuje zdanie:": "Nogi w rozkroku na szerokości bioder, stopy równolegle, tułów wyprostowany, ramiona uniesione, ugięte w stawach łokciowych, dłonie powyżej głowy, łokcie ułożone szeroko.",
  "W sygnalizacji zawodników w bloku – cała dłoń lub ugięte dwa palce - oznaczają:": "Blok potrójny.",
  "Celem bloku pasywnego jest:": "W wyniku tego bloku zespół zdobywa punkt.",
  "Pozycje wyjściowe do bloku określane jako ustawienie wąsko stosowane są w sytuacji gdy:": "Przeciwnik gra często przez środek siatki.",
  "Które z ćwiczeń nie dotyczy nauki podrzutu do zagrywki rotacyjnej bez wyskoku:": "Podrzut oburącz, z jednoczesnym zamachem w tył, a następnie chwyt oburącz nad barkiem ramienia uderzającego.",
  "Który z wymienionych błędów w technice wykonania bloku dotyczy postawy gotowości:": "Zbyt szerokie rozstawienie łokci oraz ustawienie zbyt daleko od siatki lub za blisko siatki.",
  "Które z podanych ćwiczeń nie jest przygotowującym do nauki zagrywki dolnej:": "Zagrywka na niewielkie odległości.",
  "Nauczanie blokowania grupowego rozpoczyna się od:": "Nauki bloku potrójnego.",
  "Wskaż błąd, który pojawia się jako pierwszy w nauczaniu zagrywki rotacyjnej w wyskoku:": "Niewłaściwy podrzut piłki ( np. wyrzut piłki z ugiętej ręki, piłka podrzucona za nisko, na wysokość lewego ramienia, piłka podrzucona bez rotacji, piłka nie podrzucona w boisko).",
  "Celem gry szkolnej jest:": "Podniesienie poziomu atrakcyjności zajęć.",
  "Zaletą nauczania w formie ścisłej jest to, iż:": "Nauczanie odbywa się w warunkach rywalizacji, co uatrakcyjnia zajęcia.",
  "Nauczanie gry w siatkówkę powinno odbywać się:": "Na zasadach zróżnicowanych w zależności od tego, czy szkolimy, dzieci, młodzież, czy dorosłych.",
  "W celu zorganizowania skutecznego kontrataku na niższym poziomie gry, zadaniem rozgrywającego jest:": "Wystawić w niestabilnej pozycji wysoką piłkę do skrzydłowych.",
  "Udział zawodników w poszczególnych formacjach obronnych nie jest zależny od:": "Liczby zawodników zaangażowanych w blokowanie ataku przeciwnika.",
  "Która z zasad organizacji kontrataku obowiązuje w przypadku obrony przez zawodnika rozgrywającego:": "Wystawia ten, kto ma piłkę z prawej strony.",
  "Zawodniczka stosująca w obronie rzut siatkarski z przetoczeniem przez plecy powinna odbić się:": "Z nogi wykrocznej.",
  "Rysunek 35 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie IV na kierunku 2, w systemie:": "Żaden z wymienionych systemów nie jest właściwy.",
  "Rysunek 6 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II z założeniem:": "Asekuracji mieszanej nieblokującym i środkowym obrony.",
  "Który z systemów należy stosować u początkujących w drużynie szkolnej:": "Asekuracja mieszana, blok pojedynczy.",
  "Rysunek 1 przedstawia ustawienie drużyny w obronie przy bloku w strefie IV, z asekuracją:": "Skrzydłowym obrony.",
  "Zawodnik nieblokujący w strefie IV, w przypadku, gdy rozgrywający zespołu przeciwnego jest w pierwszej linii, do pozycji bazowej w obronie przemieszcza się:": "Krokiem dostawnym zakończonym skrzyżnym, cały czas utrzymując kontakt wzrokowy z piłką.",
  "Którą z poniższych zasad, współpracując w obronie, stosują zawodnicy (rysunek 47): nieblokujący w strefie IV ze skrzydłowym w strefie V, w przypadku bloku w strefie II na kierunku 1 - zasłaniający prostą:": "Zawodnik 4 - wbiega do asekuracji za blok / Zawodnik 5 - broni piłki atakowane skosie i po przekątnej.",
  "Analizy główne w programie data volley można tworzyć według:": "Zdobyczy punktowych.",
  "Obserwacja czynności ruchowych podczas gry może obejmować:": "Miejsce i kierunek wykonania.",
  "Dokonując analizy ustawienia zespołu w bloku i obronie:": "Wszystkie odpowiedzi są prawidłowe.",
  "Planując proces szkoleniowy, ramy czasowe okresu startowego wyznaczamy w oparciu o:": "Terminy, liczbę i rodzaje działań kontrolnych.",
  "Który z wymienionych czynników określa podstawowe zadanie trenera:": "Wszystkie czynniki są ważne.",
  "W jakim cyklu rozgrywane są Mistrzostwa Europy kadetów:": "Co 2 lata.",
  "Jaki element techniczny nie jest podstawą do opanowania innych elementów gry:": "Zagrywka.",
  "Która z zasad prowadzenia treningu odpowiada mentalności dzieci:": "Tendencyjna rywalizacja.",
  "Podstawowym zadaniem w nauczaniu bloku w wieku młodzika jest:": "Ustawianie bloku podwójnego na całej siatce.",
  "Który z wprowadzonych sposobów ataku w wieku juniora jest priorytetowy:": "Gra środkowego w systemie „stałym”.",
  "Czy całościowa forma zagrywki rotacyjnej w wyskoku powinna być uwzględniona w metodyce nauczania w wieku młodzika:": "Nie, tylko uderzenie rotacyjne z miejsca.",
  "W złotym wieku sprawności u dzieci następuje wysoka dynamika przyrostu cech motorycznych. Odnosi się to szczególnie do:": "Zwinności.",
  "Jaki rodzaj treningu najlepiej pozwala na wychwycenie popełnianych błędów przez zawodnika?": "Trening taktyki indywidualnej.",
  "Jaki rodzaj koncentracji występuje u blokującego przy ocenie możliwości atakującego przeciwnika:": "Wąska - zewnętrzna.",
  "Który z elementów nauki blokowania powinien być uczony w ostatniej kolejności:": "Samoasekuracja.",
  "Jakie nowe podejście metodyczne uwzględnia program szkolenia siatkarza:": "Od ćwiczeń syntetycznych poprzez ćwiczenia analityczne do globalnych.",
  "Który ze sposobów zagrywania powinien być nauczany jako pierwszy:": "Zagrywka rotacyjna z miejsca.",
  "W której z faz ruchu można rozdzielić naukę ataku podczas ćwiczeń analitycznych:": "W pozycji do ataku z łokciem za głową.",
  "Zasada budowania ćwiczeń syntetycznych polega na:": "Łączeniu różnych faz nauczania ruchu.",
  "Jaki system ataku po zagrywce rywala zalecany jest w wieku kadeta:": "Kombinacje 3-ch zawodników.",
  "Podczas nauki kiwnięcia największą uwagę zwracamy na:": "Element zaskoczenia.",
  "W jakim przypadku powinna być stosowana obrona polem:": "Piłki przebijanej dołem lub palcami z dalszej odległości od siatki.",
  "Który z zawodników w obronie z obrotem zapoczątkowuje ruch:": "Wolny od bloku.",
  "Jaki element taktyki indywidualnej zagrywającego jest najczęściej wykorzystywany podczas gry:": "Trajektoria zagrywki.",
  "Jaki rodzaj bloku przy szybkiej piłce do skrzydła jest najbardziej przewidywalny dla obrońców:": "Blok podwójny otwarty.",
  "Jaki punkt strategiczny stanowi podstawę ataku kombinacyjnego:": "Rozciągnięcie bloku.",
  "Jakie zadanie ma łączenie poprzez trening różnych dyspozycji w interdyspozycje do gry:": "Rozwój każdej dyspozycji z osobna.",
  "Przy szybkiej grze, wysoko dograna piłka powinna być wystawiana :": "W niskim podskoku.",
  "Która wskazówka przy „czytaniu” atakującego powinna być przyswojona najwcześniej:": "Wzajemna relacja zawodnika i piłki.",
  "Który ze sposobów asekuracji w obronie pozwala na najlepsze dostosowanie do zmieniającej się sytuacji:": "Asekuracja środkiem obrony.",
  "Nadrzędnym celem podnoszenia skuteczności działania w piłce siatkowej jest:": "Dokonywanie wyborów we fragmentach gry.",
  "Jakie wskazówki decydują o „dostrojeniu” swojej pozycji w obronie:": "Praca ręki atakującego.",
  "Który z punktów anatomicznych nie zawiera się w linii pionowej przy prawidłowej postawie ciała:": "Rzepka.",
  "Która pozycja początkowa wynika ze specjalizacji zawodnika środkowego:": "Pozycja w bloku.",
  "Które z przedstawionych działań w grze obronnej wpływa na pozostałe:": "Przewidywanie kierunku mocnego ataku.",
  "Siatkówka plażowa. Zawodnicy za pomocą palców obu dłoni przekazują sobie ważne informacje, które dotyczą:": "Spodziewanej formy ataku zespołu przeciwnego.",
  "Siatkówka plażowa. Której zasady nie powinien stosować zawodnik w obronie:": "Wykorzystuj do obrony swoje ciało jak tarczę.",
  "Siatkówka plażowa. Jakie czynniki mają wpływ na wybór miejsca i sposobu wykonania zagrywki:": "Wilgotność powietrza."
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
