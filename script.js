// ===  WKLEJ CAŁOŚĆ OD TEJ LINII  ===========================================
(() => {
    let amountAutoSelected = 0;
    const CORRECTS = {
	"Na końcu tylnym żebra znajduje się:": "Głowa żebra.",
	"Markerami uszkodzenia komórek mięśni we krwi są:": "Wszystkie wymienione.",
	"Maksymalny sprint trwający 6 sekund wymaga od zawodnika wysokiej wydolności:": "Anaerobowej fosfagenowej.",
	"Specyfika komunikacji z dziećmi polega na uwzględnieniu:": "Podejścia opartego na współpracy z dzieckiem.",
	"Zjawisko załamania wiąże się ze stanem podaktywności organizmu. Oznacza to, że:": "Organizm nie jest wystarczająco pobudzony, aby optymalnie funkcjonować.",
	"Rysunek 4 przedstawia rozegranie ataku w systemie:": "Po wystawie zawodnika linii ataku ze zmianą stref.",
	"Wskaż zasadę obowiązującą zawodnika środkowego w przypadku ataku z akcji C (haczyk):": "Środkowy wykonuje rozbieg dokładnie w ten sam sposób jak przy akcji \"1\", tzn. bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy zawsze wykonuje rozbieg przed zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R).",
	"Który z systemów rozbiegu do ataku w 1 tempo jest łatwiejszy do zastosowania dla zawodnika rozgrywającego:": "System płynny.",
	"Która z zasad ustawiania bloku przez zawodnika skrzydłowego przedstawiona jest na rysunkach 30 i 31:": "Ustawienie na kierunek rozbiegu atakującego.",
	"Która z zasad obowiązujących skrzydłowego przy ustawianiu bloku w strefach II lub IV jest najtrudniejsza do realizacji:": "Ustawienie szwu dwubloku na piłkę.",
	"Sprzężenie zwrotne w korekcie błędów to:": "Wszystkie odpowiedzi są właściwe.",
	"Wskaż ćwiczenie zawierające błąd w nauczaniu pozycji przygotowawczej zagrywki rotacyjnej w wyskoku, metodą analityczną:": "Przyjmowanie pozycji do wykonania zagrywki, przodem do kierunku zagrywania z lewą nogą z przodu, piłka w lewej dłoni, 2-krokowe przemieszczenie (pierwszy krok prawą nogą – drugi lewą).",
	"Cztery fazy (części) czynności zbicia w nauczaniu ataku metodą kompleksową to:": "Rozbieg (dojście), wyskok, uderzenie, lądowanie.",
	"Generalną zasadą planowania procesu szkoleniowego jest:": "Planowanie od tyłu.",
	"Czy docelowo na etapie młodzika można wyodrębnić specjalizację środkowego:": "Tak, ale pozostawić mu opcję ataku w II lub III tempo.",
	"W ustawieniu czterech zawodników do przyjęcia odpowiedzialność w strefach lub w pasach zależy od:": "Trajektorii zagrywki.",
	"Jaka powinna być właściwa kolejność metodyki nauczania wystawienia:": "Sukcesywnie przechodzimy od nauki odbić do wystawienia piłki.",
	"Który sposób poruszania się w obronie jest najszybszy na krótkim dystansie:": "Pad boczny.",
	"Jakie wskazówki decydują o „dostrojeniu” swojej pozycji w obronie:": "Praca ręki atakującego.",
	"Która pozycja początkowa wynika ze specjalizacji zawodnika środkowego:": "Pozycja w bloku.",
	"Siatkówka plażowa. Wystawę sposobem oburącz górnym stosujemy, gdy:": "Tor lotu i warunki pogodowe gwarantują możliwość czystego odbicia piłki.",
	"Co to jest TLC i ile wynosi.":"Pojemność całkowita płuc, 6000 ml.",
	"Ogólny wydatek energetyczny związany z aktywnością fizyczną:":"Wszystkie odpowiedzi są prawdziwe.",
	"Efekty zastosowania twórczych wyobrażeń w treningu umiejętności psychologicznych to:":"Wyobrażanie sobie strategii używanych podczas realnego startu.",
	"W czasie prawidłowego wydechu służącego regulacji pobudzenia organizmu biorą udział:":"Mięsień prosty brzucha.",
	"Z czego wynika wewnętrzna struktura okresu startowego?":"Z kalendarza zawodów.",
	"Który z wymienionych elementów niekorzystnie wpływa na jakość uderzenia w zagrywce szybującej bez wyskoku:":"Uderzenie rozluźnioną dłonią w środek piłki.",
	"W ustawieniu do przyjęcia zagrywki na rysunku 3:":"Przyjmuje trzech zawodników, wystawiający wchodzi z pozycji 6.",
	"Zdanie najdokładniej opisujące rytm rozbiegu do ataku to:":"Długi, spokojny krok lewą nogą i przyspieszenie w dwóch ostatnich krokach (prawa/lewa).",
	"Współpracę atakującego z rozgrywającym - w przypadku ataku z piłki wysokiej ze strefy II - najdokładniej opisuje zdanie:":"Cisza – to sygnał dla zawodnika rozgrywającego, że piłka ma być wystawiona wysoko.",
	"Rysunek 29 przedstawia zasadę obowiązującą środkowego przy przyjęciu niedokładnym, wskaż prawidłową:":"Przyjęcie bliżej strefy IV, atakujący zmienia akcję bazową z \"1\" na \"2\" graną w systemie płynnym.",
	"Pozycje wyjściowe do bloku określane jako ustawienie wąsko stosowane są w sytuacji gdy:":"Przeciwnik gra często przez środek siatki.",
	"Który z wymienionych błędów w technice wykonania bloku dotyczy postawy gotowości:":"Zbyt szerokie rozstawienie łokci oraz ustawienie zbyt daleko od siatki lub za blisko siatki.",
	"Które z podanych ćwiczeń nie jest przygotowującym do nauki zagrywki dolnej:":"Zagrywka na niewielkie odległości.",
	"Zawodniczka stosująca w obronie rzut siatkarski z przetoczeniem przez plecy powinna odbić się:":"Z nogi wykrocznej.",
	"Rysunek 6 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II z założeniem:":"Asekuracji mieszanej nieblokującym i środkowym obrony.",
	"Który z systemów należy stosować u początkujących w drużynie szkolnej:":"Asekuracja mieszana, blok pojedynczy.",
	"Rysunek 1 przedstawia ustawienie drużyny w obronie przy bloku w strefie IV, z asekuracją:":"Skrzydłowym obrony.",
	"Który z wymienionych czynników określa podstawowe zadanie trenera:":"Wszystkie czynniki są ważne.",
	"W jakim cyklu rozgrywane są Mistrzostwa Europy kadetów:":"Co 2 lata.",
	"W której z faz ruchu można rozdzielić naukę ataku podczas ćwiczeń analitycznych:":"W pozycji do ataku z łokciem za głową.",
	"Podczas nauki kiwnięcia największą uwagę zwracamy na:":"Element zaskoczenia.",
	"Jaki rodzaj bloku przy szybkiej piłce do skrzydła jest najbardziej przewidywalny dla obrońców:":"Blok podwójny otwarty.",
	"Jaki punkt strategiczny stanowi podstawę ataku kombinacyjnego:":"Rozciągnięcie bloku.",
	"Który z punktów anatomicznych nie zawiera się w linii pionowej przy prawidłowej postawie ciała:":"Rzepka.",
	"Przyczyny zmęczenia to:": "Wszystkie odpowiedzi są prawidłowe.",
	"Do kości twarzoczaszki zaliczamy wszystkie z wyjątkiem:": "Kości nosowe, łzowe, sitowe.",
	"Podstawowe cele w żywieniu sportowców w okresie treningowym to:": "Wszystkie odpowiedzi są prawdziwe.",
	"Co jest najistotniejsze w procesie kierowania treningiem sportowym?": "Relacja trener-zawodnik.",
	"Która z metod treningowych nie wymaga określenia wszystkich czterech parametrów tj. czasu trwania wysiłku, liczby powtórzeń, intensywności, czasu i charakteru przerw wypoczynkowych:": "Zmienna.",
	"Jakie ćwiczenia mogą ograniczać rozwój gibkości?": "Siłowe.",
	"Rysunek 22 przedstawia sposób wykonania rozbiegu do ataku z jednej nogi dla akcji bazowej:": "Akcja \"B\" /baza B.",
	"Prawidłowy opis sposobu naskoku do ataku w 1 tempo jest następujący:": "W momencie wyskoku tułów zwrócony w kierunku strefy V (zawodnik praworęczny) – rozbieg pod kątem 60˚.",
	"W technice blokowania wyróżnia się następujące po sobie fazy:": "Dojścia (nie zawsze występuje), wyskoku, blokowania, lądowania.",
	"Celem bloku pasywnego jest:": "Osłabienie siły ataku tak, aby można było obronić piłkę.",
	"Które zdanie najlepiej charakteryzuje taktykę regulującą zasady współpracy w obronie, określaną jako taktyka - patrz i reaguj:": "Zawodnicy w poszczególnych sytuacjach przewidują (czytają) działania atakujących i w danej sytuacji wykonują indywidualne zadania.",
	"Prawidłowa zasada ustawienia zawodnika w przypadku nagrania piłki sytuacyjnej sposobem dolnym oburącz to:": "Ustawienie zawodnika w kierunku nadlatującej piłki.",
	"Rysunek 36 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II na kierunku 0, w systemie:": "Obrona systemem 1:1:4 – obrońcy 1-0-3.",
	"Analizy główne w programie data volley można tworzyć według:": "Wszystkie odpowiedzi są właściwe.",
	"Prognozowanie w procesie planowania szkolenia to:": "Wyznaczenie realnego celu - sportowego lub szkoleniowego.",
	"Który element taktyki gry funkcjonuje praktycznie tylko w wieku młodzika:": "Przyjęcie „W” w 5 przyjmujących.",
	"Jakie działanie w przyjęciu zagrywki na poziomie juniora można traktować jako strategiczne:": "Zajęcie pozycji wyjściowej uwzględniającej system gry w przyjęciu zagrywki .",
	"Który ze składników dobrego treningu jest decydujący w osiąganiu sukcesów:": "Umiejętności trenera.",
	"Utrzymanie kombinacyjnej gry przy dograniu dalej od siatki jest uwarunkowane:": "Koordynacją działań całego zespołu.",
	"Kto jest odpowiedzialny podczas przyjęcia zagrywki za piłki spadające pomiędzy zawodnikami:": "Zawodnik lepszy w przyjęciu.",
	"Jaki rodzaj treningu indywidualnego zawodnika środkowego jest najbardziej skuteczny:": "Sekwencyjne wykonywanie 2-3 elementów.",
	"Potencjalne efekty Kinesio Tapingu to:": "Wszystkie odpowiedzi są prawidłowe.",
	"Systemy do trójwymiarowej rejestracji ruchu (3D) umożliwiają:": "Rejestrację trajektorii dowolnego punktu ciała.",
	"Kształtowanie nawyku ruchowego przebiega kolejno w:": "4 fazach: generalizacja, hamowanie, stabilizacja, automatyzacja.",
	"Emocje wpływają na poziom wykonania zadania sportowego u dzieci, ponieważ:": "Dziecko martwi się tym, że zawiedzie oczekiwania osób dorosłych.",
	"Wybierz zdanie fałszywe na temat lęku w sporcie:": "Sportowcy o wysokim poziomie lęku – cechy nie będą reagować lękiem w sytuacjach silnie zagrażających.",
	"Znajomość podstawowych zasad poprawnego komunikowania się zmniejsza prawdopodobieństwo pojawienia się konfliktów, ponieważ:": "Rozmówcy poznają samych siebie, są wnikliwymi obserwatorami, szanują swojego rozmówcę.",
	"Czym jest kontrola treningu?": "Procesem zbierania informacji o treningu, zawodach, odnowie.",
	"Prawidłowy opis fazy przyjęcia i fazy podania piłki podczas wystawiania w przód jest następujący:": "Przyjęcie przodem do kierunku nagrania, podanie przodem do kierunku wystawy.",
	"Rysunek 15 przedstawia następujące fazy rozbiegu do ataku z piłki przyspieszonej:": "Dostosowanie do linii bocznej krokiem dostawnym lub biegowym; zatrzymanie z prawą nogą z przodu, gdy piłka wpada w ręce rozgrywającego.",
	"Rysunek 14 przedstawia:": "Moment rozpoczęcia rozbiegu do ataku z piłki wysokiej ( w trzecim tempie) ze strefy II.",
	"Wskaż błąd w technice wykonania zagrywki rotacyjnej bez wyskoku:": "Podrzut piłki za nisko, do przodu lub na wysokość lewego ramienia, piłka podrzucona bez rotacji.",
	"W nauczaniu zbicia tenisowego najlepiej stosować metodę:": "Mieszaną, izolującą fazę ruchu ramienia uderzającego oraz fazę rozbiegu.",
	"Kombinacja pipe (połączenie ataku w pierwszym tempie z atakiem przyjmującego ze strefy VI – warianty 1/VI, 2/VI lub 7/VI) nie jest skutecznym rozwiązaniem w momencie, gdy:": "Piłkę broni przyjmujący linii obrony w pozycji o zachwianej równowadze.",
	"Rysunek 2 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II, z asekuracją:": "Nieblokującym.",
	"Zawodnik nieblokujący w strefie IV, w przypadku bloku na kierunku 1 w strefie II, do pozycji bazowej w obronie przemieszcza się:": "Krokiem dostawnym zakończonym skrzyżnym, cały czas utrzymując kontakt wzrokowy z piłką.",
	"Analizę statystyczną w piłce siatkowej stosuje się by:": "Wszystkie odpowiedzi są prawidlowe.",
	"Styl charakteryzujący się tym, że trener podejmuje jak najmniej decyzji to:": "Styl liberalny.",
	"Która podstawowa zasada w przyjęciu zagrywki obowiązuje na początku nauczania w wieku młodzika:": "Ustawienie w strefach.",
	"Która z wymienionych wskazówek odnosi się do nauczania i doskonalenia wystawienia w późniejszym okresie szkolenia (po etapie młodzika):": "Stopniowe ograniczanie ruchu ramion podczas wystawienia.",
	"Jakich rodzajów ćwiczeń dotyczą sekwencje działań w ataku i obronie:": "Ćwiczenia syntetyczne.",
	"Który z zawodników zawsze asekuruje blisko atakującego ze skrzydła (ze strefy I lub II) w grze kombinacyjnej:": "Rozgrywający.",
	"Jakie działanie obrońcy na pozycji środka obrony wynika ze współpracy z blokiem:": "Ustawienie się na „szwie” bloku.",
	"Punktem docelowym planowania treningu w piłce siatkowej jest:": "Określenie systemu gry zespołu.",
	"Który z mięśni może przejąć funkcję mięśni pośladkowych wielkich:": "Prostownik grzbietu.",
	"Siatkówka plażowa. Taktykę gry z zawodnikiem ustawionym za blokiem stosujemy, gdy:": "Dysponujemy wysokim i bardzo dobrym blokującym.",
	"W przypadku ogólnego wychłodzenia ciała:": "Wszystkie odpowiedzi są fałszywe.",
	"Typowe elementy gry w piłce siatkowej oparte są na podłożu energetycznym:": "Beztlenowym fosfagenowym.",
	"Siła mięśniowa determinowana jest:": "Siłą bodźca, przekrojem fizjologicznym, stopniem rozciągnięcia, typem komórek mięśniowych i temperaturą.",
	"Przed rozpoczęciem meczu na boisku znalazł się zawodnik niewpisany na kartce z ustawieniem. Jakie są konsekwencje?": "Trener może zadecydować o pojawieniu się na boisku zawodnika wpisanego na kartce z ustawieniem, wówczas nie przeprowadza się zmiany regulaminowej",
	"Jakie jest główne zadanie części końcowej jednostki treningowej?": "Doprowadzenie organizmu ćwiczących do względnego stanu równowagi funkcjonalnej.",
	"Która z faz kształtowania nawyku ruchowego ma miejsce zarówno w nauczaniu jak i doskonaleniu techniki?": "Automatyzacji.",
	"Co jest podstawą rozwoju wytrzymałości?": "Wydolność.",
	"Dlaczego kształtowanie koordynacji odbywa się metodą powtórzeniową?": "Ćwiczenia koordynacyjne stosunkowo szybko prowadzą do zmęczenia.",
	"W ustawieniu do przyjęcia zagrywki na rysunku 8:": "Jest to ustawienie błędne ze względu na przepisy.",
	"Opis techniki odbicia w tył sposobem oburącz górnym powinien być następujący:": "W fazie przyjęcia ustawienie takie jak podczas odbicia do przodu, w fazie podania następuje wyprost ramion w kierunku w górę w tył (za głowę) przy możliwym równoczesnym niewielkim odchyleniu tułowia.",
	"W systemie zdobywania punktu po zagrywce własnej punkty zdobywane są:": "Wszystkie odpowiedzi sa prawidłowe.",
	"Wskaż zdanie opisujące prawidłową technikę ataku w drugim tempie:": "Rozpoczęcie rozbiegu do ataku z piłki przyspieszonej (super) równo z wystawieniem (gdy piłka przyjęta jest w dłoniach rozgrywającego).",
	"Odwrotny naskok to błąd w technice wykonania ataku (zawodnik praworęczny), charakteryzujący się:": "Odwrotnym ustawieniem stóp podczas naskoku - lewa/prawa.",
	"Kolejność nauczania odbić górnych jest następująca:": "Odbicie oburącz górne w przód i w tył w miejscu - odbicie oburącz górne w przód i w tył po przemieszczeniu - odbicie oburącz górne w przód i w tył w wyskoku.",
	"Zadania zawodnika rozgrywającego podczas gry to między innymi:": "Wbiegnięcie do wystawy po przyjęciu zagrywki z lewej strony w ustawieniach R4, R5.",
	"Która z zasad jest najistotniejsza podczas treningu z początkującymi:": "Zasada dostosowania ćwiczeń i obciążeń do wieku zawodników.",
	"Który z elementów zagrywki w wieku kadeta wymaga największych umiejętności:": "Stosowanie zagrywki taktycznej, wykorzystując słabości rywala.",
	"Który z zawodników w obronie z obrotem zapoczątkowuje ruch:": "Broniący po prostej.",
	"Podczas przemieszczania w bloku do wystawionej piłki zawodnik powinien:": "Dostosować się do tempa wystawionej piłki.",
	"Jaki jest zasadniczy powód brany pod uwagę przy ograniczeniu szerokości strefy do przyjęcia:": "Ogólnie słabsze umiejętności w przyjęciu.",
	"Jaki rodzaj ćwiczeń jest charakterystyczny dla treningu wszechstronnego:": "Ćwiczenia rozwijające wrodzone zdolności ruchowe.",
	"Siatkówka plażowa. Zagrywka słoneczna charakteryzuje się:": "Bardzo wysokim torem lotu piłki.",
	"Które wykonanie zagrywki jest nieprawidłowe?": "Zawodnik rozsunął panele reklamowe za boiskiem i wykonał zagrywkę spomiędzy nich",
	"Ćwiczenia oddechowe, jako podstawowa forma relaksacji służą:": "Lepszemu utlenieniu układu nerwowego.",
	"Wybierz zadanie fałszywe:": "Wzorce zachowań traumatycznych powstałe u dzieci w wyniku traumy są szkodliwe dla ich całego życia.",
	"W którym momencie struktury makrocyklu odbywa się utrwalenie i uplastycznienie wariantów taktycznych?": "Okresie startowym.",
	"Co jest istotą treningu plyometrycznego?": "Zwiększenie mocy wykorzystując pracę mięśni w cyklu rozciągnięcie – skurcz.",
	"Drużyna początkujących, grająca na dwóch rozgrywających, powinna wykorzystać następujący system:": "Z wystawiającym w linii ataku.",
	"Postawa siatkarska jest to układ ciała poprzedzający wykonanie:": "Jakiegokolwiek elementu techniki.",
	"Uproszczenia przepisów w grze uproszczonej to:": "Łapanie i rzucanie piłki, większa liczba odbić w jednej akcji (więcej niż 3), dopuszczenie dodatkowych odbić nad sobą przez jednego zawodnika.",
	"Podstawową zasadą ustawienia w obronie przez zawodnika strefy V (atak ze strefy IV po przekątnej) jest:": "Obrona piłki pomiędzy nogami lub ze swojej lewej strony.",
	"Jaką technikę obrony powinien zastosować obrońca w przypadku, gdy czas lotu piłki jest wydłużony:": "Obronę po biegu i doskoku.",
	"Przewidując (czytając) działania przeciwnika w grze, w przypadku, gdy piłka została wystawiona za antenkę obrońca ustawiony po prostej:": "Powinien dostosować się i wykonać ruch do środka boiska.",
	"W przygotowaniu statystyk przykładem współczynnika jakościowego jest:": "Współczynnik efektywności gry.",
	"Umiejętności gry można najlepiej rozwijać:": "Ucząc przez grę.",
	"Która umiejętność zagrywania powinna być częścią planu gry każdego zespołu:": "Umiejętność wykorzystania zagrywki taktycznej.",
	"Jaki element treningu taktycznego szczególnie podnosi wartość bojową w zespole:": "Współdziałanie w drużynie.",
	"Z której pozycji zawodnik wykonuje bezpośredni ruch do piłki:": "Pozycja dostosowania.",
	"Wprowadzenie danego systemu gry powinno wynikać:": "Z indywidualnych umiejętności wszystkich zawodników zespołu.",
	"Jakie działanie zawodnika atakującego w treningu indywidualnym jest priorytetowe:": "Atak z II linii.",
	"Jaki warunek odróżnia zadanie bloku „miękkiego” od agresywnego (atakującego):": "Ochronić strefę boiska przeciwko mocnym atakom w głąb boiska.",
	"Jaki mięsień jest usprawniany podczas ćwiczenia izolowanego ruchu w stawie biodrowym:": "Grupa tylna mięśni uda.",
	"Przyczep końcowy mięśnia zębatego przedniego to:": "Brzeg przyśrodkowy łopatki.",
	"Najefektywniejszą drogą oddawania ciepła podczas pracy fizycznej jest:": "Parowanie.",
	"Która z sytuacji nie jest błędem?": "Rozgrywający kiwa piłkę nad siatką, przy czym kontakt z piłką ma miejsce nad jego boiskiem, ale po kiwce dłoń zawodnik sięga na stronę przeciwnika",
	"Kwestionariusz radzenia sobie w sytuacjach stresowych - CISS mierzy następujące style radzenia sobie ze stresem:": "Styl skoncentrowany na zadaniu, styl skoncentrowany na emocjach i styl skoncentrowany na unikaniu.",
	"Które z cech motorycznych warunkują poziom skoczności?": "Szybkość i siła.",
	"Etapy w szkoleniu sportowym siatkarza:": "Wszechstronny, ukierunkowany, specjalistyczny, mistrzowski.",
	"Który okres rozwojowy nazywany jest złotym wiekiem rozwoju sprawności?": "Okres młodszy szkolny.",
	"Cechą charakterystyczną akcji A /bazy A/ krótkiej z tyłu atakowanej z jednej nogi jest:": "Środkowa odbija się z lewej nogi przed lub na wysokości rozgrywającej.",
	"Pierwszą fazę rozbiegu do ataku z piłki przyspieszonej opisuje stwierdzenie:": "Przyjęcie/dogranie lub obserwacja/ocena przyjętej piłki; szybkie dostosowanie do linii bocznej krokiem dostawnym lub biegowym; zatrzymanie z prawą nogą z przodu, gdy dogrywana piłka zaczyna opadać.",
	"W zbiciu tenisowym - u początkujących - ruch powinien odbywać się w płaszczyźnie:": "Strzałkowej w ruchu tułowia i ramienia.",
	"Który z wymienionych rodzajów blokowania jest właściwy:": "Wszystkie odpowiedzi są właściwe.",
	"Nauczanie zagrywki szybującej w wyskoku metodą analityczną, po pokazie i objaśnieniu, odbywa się w następujących etapach:": "Nauka pozycji przygotowawczej – nauka ruchu ramienia uderzającego – nauka podrzutu – zagrywka w pełnej formie – zagrywka kierunkowa.",
	"Wskaż ćwiczenie nauczające zbicia metodą analityczną w kompleksie: rozbieg – wyskok – lądowanie:": "Z ustawienia z prawą nogą z przodu, wykonanie wzdłuż wyklejonej lub narysowanej linii długiego kroku lewą nogą, naskoku (prawa/ lewa noga), wyskoku i lądowania w miejscu, z którego nastąpił wyskok.",
	"Zagrywka powinna być absolutnie pewna (nie zepsuta), gdy:": "Wszystkie odpowiedzi są właściwe.",
	"W grze obronnej od początku szkolenia zawodnicy powinni dążyć do takiego ustawiania na boisku, aby obrona odbywała się:": "W możliwie stabilnej postawie.",
	"Wyższość ćwiczeń przeplatanych nad powtarzanymi w nauczaniu ruchu polega na:": "Większym efekcie nauczania po jakimś czasie.",
	"W jakiej sytuacji dopuszczamy wyjście zawodnika do ataku poza linię boczną boiska:": "Atak zawodnika praworęcznego z lewego skrzydła.",
	"W jakich sytuacjach zawodnik skrzydłowy nieblokujący przemieszcza się za blok do obrony:": "Wystawiona piłka jest niedociągnięta do skrzydła.",
	"Która zmienna kształtowania siły w piłce siatkowej jest najważniejsza:": "Technika wykonania cwiczenia.",
	"Co oznacza druga cyfra (np. 4-2) w określeniu systemu gry danego zespołu w ataku:": "Liczbę zawodników wystawiających.",
	"Które z ćwiczeń zalicza się do grupy ćwiczeń funkcjonalnych:": "Przysiad jednonóż.",
	"Siatkówka plażowa. Rozegranie piłki jest skuteczne, gdy:": "Piłka wystawiana jest niskim szybkim torem lotu.",
	"Urazy w sporcie dzielimy na:": "Wszystkie odpowiedzi są prawidłowe.",
	"Mięsień piszczelowy przedni:": "Prostuje i odwraca stopę.",
	"Na powierzchni żebrowej łopatki znajduje się:": "Dół podłopatkowy.",
	"Zasada PRICE stosowana jest:": "Przy uszkodzeniach zamkniętych tkanek miękkich narządu ruchu.",
	"Które ze zdań jest prawdziwe odnośnie protestu?": "Oficjalny protest zapisywany jest w protokole zawodów wyłącznie po zakończeniu meczu",
	"Efektywna regulacja nastroju powinna dotyczyć następujących wymiarów nastroju:": "Kontrolowania energii, zmęczenia, gniewu.",
	"Kontrola i kierowanie stresem polega na:": "Odwołaniu się do asertywności.",
	"Wybitny talent to ten, który:": "Uczy się techniki szybko, doładnie i trwale.",
	"Z którą z cech motorycznych szybkość ma najmniejszy związek?": "Wytrzymałość.",
	"Jakie jest główne zadanie okresu przejściowego?": "Czasowe obniżenie formy sportowej.",
	"Do sposobów przemieszczania się w piłce siatkowej należy zaliczyć:": "Wypad, naskok, pad.",
	"Wskaż zasadę obowiązującą zawodnika środkowego w przypadku ataku z akcji 2 (krótka z tyłu):": "Bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy zawsze wykonuje rozbieg za zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R).",
	"Strefa bloku - prosta - to określenie:": "Blok na kierunku 1.",
	"Pozycje wyjściowe do bloku określane jako ustawienie wąsko w lewo – nie są stosowane w sytuacji gdy:": "Przeciwnik posiada mocnego atakującego w strefie II lub I.",
	"Nauczanie blokowania grupowego rozpoczyna się od:": "Nauki bloku podwójnego w miejscu.",
	"Która z form nauczania techniki piłki siatkowej pozwala na tworzenie warunków, w których ćwiczący wykonywać będą zadania odwzorowujące części akcji:": "Forma fragmentów gry.",
	"Od którego z wymienionych czynników zależy wybór, do którego z zawodników skrzydłowych należy wystawić piłkę w kontrataku:": "Wszystkie wymienione są ważne.",
	"Pozycja bazowa w obronie pola oznacza miejsce na boisku, w którym znajduje się zawodnik w momencie gdy:": "Przeciwnik kończy ruch prowadzenia ręki do ataku.",
	"Rysunek 34 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II z założeniem:": "Blokowania kierunku po przekątnej i asekuracji nieblokującym.",
	"Programowanie w procesie planowania szkolenia to:": "Określenie drogi realizacji wyznaczonego celu (harmonogramu kolejnych działań).",
	"Jaki rodzaj ćwiczeń nie powinien mieć miejsca w treningu zespołu:": "Przenoszenie gotowych wzorów z innych treningów.",
	"Który z wymienionych sposobów ataku wprowadzonego w wieku juniora jest kombinacją:": "Atak „pipe”.",
	"Która z pozycji w grze „czwórkami” nie występuje w grze „trójkami”:": "Środkowy obrony, przyjmujący.",
	"Która z cech wystawiającego jest podstawą jego rozwoju:": "Zaangażowanie i zdolność do współpracy.",
	"Jaki rodzaj koncentracji występuje u atakującego przy przenoszeniu wzroku na wystawioną piłkę:": "Wąska - zewnętrzna.",
	"Jakie zadanie ma wprowadzenie w formacji 4-2 systemu „mieszanego”:": "Wprowadzenie do gry środkowego.",
	"Która z czynności przyjmującego powinna być nadrzędna w treningu indywidualnym przyjmującego:": "Atak po przyjęciu.",
	"Który rodzaj treningu prowadzi do znacznej poprawy szybkości działania oraz poszczególnych składowych szybkości:": "Trening kompleksowy zbliżony do profilu gry.",
	"Jaki typ kombinacji dominuje w grze doświadczonych zespołów:": "Kombinacje równoległe z większą ilością zawodników.",
	"Które z wymienionych działań wpływa bezpośrednio na skuteczność obrony:": "Dostosowanie do piłki.",
	"Siatkówka plażowa. Zawodnik wykonujący zagrywkę powinien brać pod uwagę:": "Ustawienie zespołu przyjmującego zagrywkę.",
	"Ilość krwi tłoczona przez serce człowieka w spoczynku wynosi w trakcie 1 minuty:": "Od 4 do 6 litrów.",
	"Na poniższych zdjęciach numery na koszulkach zawodniczek odpowiadają ich pozycjom na boisku (2, 3, 4). Czy i w jaki sposób popełniają one błąd ustawienia?": "Nie ma błędu ustawienia",
	"Które wymiary uwagi opisuje Model Koncentracji Nideffera:": "Koncentrację szeroką, wąską, zewnętrzną i wewnętrzną.",
	"W czasie treningu wyobrażeniowego sportowiec powinien:": "Zawsze rozpoczynać od relaksacji.",
	"Rzut siatkarski - jest techniką stosowaną:": "Do obrony piłek trudnych, spadających w odległości uniemożliwiającej obronę w postawie stabilnej.",
	"W zbiciu tenisowym pracę ramienia uderzającego charakteryzują kolejne fazy wykonywane w płaszczyźnie strzałkowej:": "Zamach - z tyłu, przodem, w górę , za głowę: ugięcie ramienia w stawie łokciowym: ruch obrotowy w stawie ramiennym w przód z jednoczesnym wyprostem ramienia w stawie łokciowym; uderzenie w piłkę następuje z przodu ponad głową",
	"Techniczne formy atakowania jednorącz to (wszystkie części odpowiedzi muszą być prawidłowe):": "Plasowanie, kiwnięcie.",
	"Który rysunek przedstawia prawidłowy sposób wykonania rozbiegu do ataku z jednej nogi dla akcji bazowej B:": "Rysunek 28.",
	"W nauczaniu odbić górnych metodą analityczną po pokazie i objaśnieniu, należy uwzględnić następujące etapy:": "Nauczanie: ustawienia dłoni - fazy przyjęcia – fazy podania – odbić piłki.",
	"Zaletą nauczania w formie ścisłej jest to, iż:": "Ćwiczący koncentrują uwagę na poprawnym wykonaniu zadanego ruchu.",
	"W celu zorganizowania skutecznego kontrataku na niższym poziomie gry, zadaniem rozgrywającego jest:": "Wystawić w stabilnej pozycji wysoką piłkę do skrzydłowych.",
	"Zaznacz prawidłową kolejność nauczania taktyki gry:": "Indywidualna, grupowa, zespołowa.",
	"Dokonując analizy statystycznej zagrywki nie zwracamy uwagi na:": "Czas wykonania zagrywki po gwizdku sędziego.",
	"Tworząc drużynę każdy trener powinien zaczynać pracę kolejno od:": "Wyboru misji (cel, strategia, wartości, postawy), wyboru personelu, wyboru zawodników.",
	"Jaki zakres informacji w przewidywaniu ataku, powinien być przekazywany blokującemu w pierwszej kolejności, w wieku juniora:": "Obserwacja nóg atakującego.",
	"Jaki rodzaj pracy powinien być dominujący w programie I klasy gimnazjum:": "Ćwiczenia analityczne.",
	"Jaki system ataku po zagrywce rywala zalecany jest w wieku kadeta:": "Kombinacja 2-ch zawodników.",
	"Jaka jest różnica pomiędzy pomocami sportowymi a trenażerami:": "Wykorzystanie ich zależy od pomysłowości trenera.",
	"Bezpośrednim źródłem energii do pracy komórek mięśniowych jest:": "ATP.",
	"Mechaniczna sztywność mięśnia podczas czynnościowego rozciągania:": "Rośnie.",
	"Średnia ilość elementów morfotycznych w 1 mm3 wynosi:": "WBC 7,5 tyś; RBC 5 mln; PLT 250 tyś.",
	"Które z poniższych zdań nie jest prawdziwe w kontekście charakterystyki odbicia piłki?": "W bloku mogą nastąpić po sobie kolejne dotknięcia piłki wykonane przez jednego lub kilku zawodników, pod warunkiem że kontakt z piłką ma miejsce w jednym zagraniu, ale każde odbicie poza pierwszym zaliczane jest do limitu odbić zespołu",
	"Zawodnicy pokonują swój lęk przed porażką:": "Stawiając sobie realistyczne cele.",
	"Które zdanie najlepiej opisuje odbicie górne oburącz:": "Dłonie ponad głową, nogi ugięte.",
	"Który ze sposobów ustawiania bloku w strefach zewnętrznych daje gwarancję stabilniejszego bloku:": "Po kroku dostawnym z ustawienia szerokiego.",
	"Nauczanie odbić górnych metodą analityczną uwzględnia - po pokazie i objaśnieniu - następujące, kolejne etapy:": "Nauczanie: ułożenia ramion i rąk, przyjęcia piłki, podania piłki, odbić w miejscu.",
	"Które zdanie najlepiej opisuje pojęcie skraju bloku:": "Jest to umowna linia łącząca uderzaną piłkę (obok bloku) i obrońcę.",
	"Zawodnik nieblokujący w strefie IV, w przypadku, gdy rozgrywający zespołu przeciwnego jest w pierwszej linii, do pozycji bazowej w obronie przemieszcza się:": "Biegnąc w tył w skos, cały czas utrzymując kontakt wzrokowy z piłką.",
	"Jaki rodzaj pracy powinien być dominujący w programie II klasy gimnazjum:": "Ćwiczenia syntetyczne.",
	"Który z elementów nauki blokowania powinien być uczony w ostatniej kolejności:": "Dwublok.",
	"Które działanie w planowaniu treningu stanowi bazę do konstruowania ćwiczeń:": "Określenie sytuacji taktycznej dla zawodnika.",
	"Która grupa ćwiczeń w procesie nauczania gry wymaga udziału całego zespołu:": "Ćwiczenia globalne.",
	"Nadrzędnym celem podnoszenia skuteczności działania w piłce siatkowej jest:": "Skuteczność działania w różnych grach.",
	"Który element techniki, podczas treningu indywidualnego zawodnika przyjmującego, najlepiej łączyć z przyjęciem zagrywki:": "Atak.",
	"Sarkomer zbudowany jest:": "Z aktyny i miozyny.",
	"Skutkami mechanizmów negatywnego stymulowania nie jest dotknięta płaszczyzna:": "Pasma brzuszno–pępkowego.",
	"Rysunek 17 przedstawia środkowego atakującego w 1 tempo w systemie płynnym:": "Akcja \"7\": krótka przesunięta - środkowy wykonuje rozbieg przed rozgrywającym około 1,5 do 2 metrów bez względu na miejsce dogrania piłki.",
	"Akcja bazowa 7 (krótka przesunięta) może być rozegrana:": "Wszystkie odpowiedzi są poprawne.",
	"Blokując piłki atakowane w pierwszym tempie zawodnik nie powinien:": "Skoczyć po atakującym.",
	"Następstwem którego błędu w technice ataku jest odbicie w dal:": "Naskoku na śródstopie w fazie rozbiegu.",
	"Rysunek 48 przedstawia ustawienie w obronie zespołu przy bloku pojedynczym w strefie III i obronę systemem 1:2:3. Jaki jest kierunek bloku:": "Kierunek 5.",
	"Przewidując (czytając) działania przeciwnika w grze, w przypadku gdy piłka została wystawiona za wąsko do skrzydła i jest zasłonięta przez blok, obrońca ustawiony po prostej powinien:": "Dostosować się i wykonać ruch wzdłuż linii bocznej.",
	"Podczas trwania meczu zadaniem statystyka jest:": "Wszystkie odpowiedzi są prawdziwe.",
	"Planując proces szkoleniowy, ramy czasowe okresu startowego wyznaczamy w oparciu o:": "Kalendarz zawodów - terminy rozpoczęcia i zakończenia.",
	"W której fazie wprowadzania planu gry zawodnicy otrzymują indywidualne cele taktyczne:": "Tworzenie wstępnego planu gry.",
	"Które z wymienionych działań powoduje niedokładność przyjęcia zawodnika I linii:": "Brak skupienia się na przyjęciu do końca wykonania ruchu.",
	"Który z wymienionych mięśni jest najważniejszy z punktu widzenia stabilizacji:": "Mięsień pośladkowy wielki.",
	"Oznaką przykurczu jakiego mięśnia jest uniesienie pięt podczas wykonywania przysiadu:": "Płaszczkowatego.",
	"Siatkówka plażowa. Do zagrania skutecznych plasów zawodnik potrzebuje:": "Uderzenia dłonią i odpowiedniej pracy nadgarstka.",
	"ATP w mięśniach powstaje na drodze przemian:": "Zarówno tlenowych jak i beztlenowych.",
	"Potencjał siłowy mięśni zawodnika najlepiej charakteryzuje wartość:": "Maksymalnego momentu siły oporu.",
	"Wskaż zdanie najdokładniej opisujące podrzut piłki do zagrywki rotacyjnej dla zawodnika praworęcznego:": "Z pozycji wyjściowej krok lewą nogą i jednoczesny wysoki wyrzut piłki ręką uderzającą z rotacją postępującą.",
	"Na rysunku 16 środkowy wykonuje rozbieg do ataku w 1 tempo w systemie stałym:": "Akcja \"1\" (krótka) - środkowy wykonuje rozbieg w osi boiska.",
	"Która z zasad obowiązujących środkowego przy przyjęciu dokładnym, jest zasadą nadrzędną:": "Atak w 1 tempo ustalonej akcji (np. akcje \"1\", \"C\"- haczyk, \"2\", \"7\").",
	"Środkowy atakujący w 1 tempie:": "Po zagrywce przeciwnika obserwuje całe boisko oraz tor lotu zagranej piłki, jednocześnie przemieszczając się krokiem dostawnym lub biegowym z pozycji wyjściowej.",
	"W szkoleniu młodzieży, po rozpoznaniu błędu i ocenie jego ważności, trener nie powinien:": "Korygować wszytkich błędów jednocześnie.",
	"Który z wymienionych argumentów jest charakterystyczny dla podejścia tradycyjnego w nauczaniu piłki siatkowej:": "Naucza się specyficznych elementów gry i dopiero potem łączy je w całość.",
	"W nauczaniu zagrywki najlepiej stosować metodę:": "Syntetyczną w nauczaniu zagrywki dolnej, gdyż jest to łatwa czynność ruchowa.",
	"Zachowanie w kontrataku zawodnika środkowego bloku w sytuacji, gdy blokuje on w strefie IV, jest następujące:": "Dojście do bloku – wyskok/lądowanie, po lądowaniu zwrot przez prawe ramię, dostosowanie w tył skos krokiem dostawnym, obserwując całe boisko oraz tor lotu piłki, w momencie gdy piłka dogrywana jest ,,zawieszona’’ w najwyższym punkcie lub zaczyna opadać, rozpoczęcie rozbiegu.",
	"Zawodniczka stosująca w obronie rzut siatkarski z przetoczeniem przez plecy, po przemieszczeniu do pozycji bazowej w strefie V, powinna wykonać pierwszy krok:": "Prawą nogą.",
	"Który ze sposobów przemieszczania stosowany jest na krótkich odcinkach:": "Krok dostawny.",
	"Która z umiejętności ulega największej ewolucji w procesie nauczania:": "Rozwój sposobów uderzania piłki w określonym kierunku.",
	"Które ze zdań niezgodne jest z określeniem relacji strategii i taktyki:": "Strategia i taktyka to określenia jednoznaczne.",
	"Który rodzaj treningu w szkoleniu młodzieży obejmuje ćwiczenia siłowe, zwinnościowe i koordynacyjne:": "Trening ukierunkowany.",
	"Zachowanie rytmu dojścia do ataku przy zmianie odległości do miejsca wyskoku, polega na:": "Zwiększeniu lub zmniejszeniu proporcjonalnie wszystkich kroków.",
	"Które z podanych wytycznych dla blokującego są podstawą do skutecznego stosowania pozostałych działań:": "Znajomość gry rywala oraz charakterystyki konkretnego zawodnika.",
	"Analiza fazowa ruchu w siatkówce nie umożliwia określenia:": "Położenia ogólnego środka ciężkości zawodnika.",
	"Który z poniższych przypadków jest przykładem prośby nieuzasadnionej nie skutkującej sankcjami dla zespołu?": "Kapitan zespołu poprosił o przerwę dla odpoczynku, chociaż trener siedział na ławce rezerwowych",
	"Na czym polega planowanie właściwe treningu?": "Rozłożeniu metod, form i środków w określonym czasie: makrocyklu, okresie, mezocyklu.",
	"Pozycje wyjściowe do bloku określane jako ustawienie wąsko w prawo – nie są stosowane w sytuacji gdy:": "Przeciwnik posiada mocnego przyjmującego w strefie IV.",
	"Kolejność nauczania zagrywki szybującej w wyskoku to:": "Zagrywka szybująca w wyskoku po dwukrokowym rozbiegu, z odbicia obunóż (piłka trzymana oburącz) - zagrywka szybująca w wyskoku po 2-krokowym rozbiegu, z odbicia jednonóż ( piłka trzymana przed tułowiem jednorącz) od dołu ręką przeciwną uderzającej – obydwa warianty ze stopniowym wydłużaniem rozbiegu.",
	"Które z podanych ćwiczeń nie jest przygotowującym do nauki odbić dolnych:": "Odbicia wielokrotne ponad głową po koźle.",
	"Która z form nauczania jest najbardziej atrakcyjna dla uczniów:": "Forma gry.",
	"Którą z poniższych zasad, współpracując w obronie, stosują zawodnicy (rysunek 47): nieblokujący w strefie IV ze skrzydłowym w strefie V, w przypadku bloku w strefie II na kierunku 1 - zasłaniający prostą:": "Zawodnik 4 – broni piłki atakowane po ostrym skosie i spadające wzdłuż siatki oraz do środka boiska / Zawodnik 5 - broni piłki atakowane skosie i po przekątnej.",
	"W ustawieniu drużyny w obronie na rysunku 38 przedstawiona jest sytuacja:": "Blok na kierunku 1 w strefie IV/ blok zamknięty, obrona systemem 2:0:4.",
	"Zawodnik atakujący jest zawodnikiem linii obrony w ustawieniach:": "R2, R3, R4.",
	"Środkowy pierwszy jest zawodnikiem linii ataku w ustawieniach:": "R3, R4, R5.",
	"Rozgrywający wbiegając po zagrywce na pozycję wyjściową powinien obserwować:": "Piłkę.",
	"W którym z poniższych przypadków zespół nie straci punktu w wyniku kary?": "Dwaj zawodnicy jednego zespołu pobili się",
	"Podstawowy wymiar najtrafniej opisujący stan umysłu w przepływie to:": "Jasne cele.",
	"Która z prób sprawnościowych w naborze do SMS odbywa się na boisku siatkarskim?": "Bieg zwinnościowy ze zmianą kierunków.",
	"Który z treningów siły jest wskazany dla młodocianych siatkarzy?": "Trening obwodowy.",
	"Jakie okresy treningowe występują w makrocyklu?": "Przygotowawczy, startowy, przejściowy.",
	"Ilu wystawiających musi być w drużynie, która atakować będzie wyłącznie w systemie po wystawie zawodnika z linii ataku:": "Co najmniej dwóch.",
	"Środkowy zmienia akcję bazową, tak aby stanowić zagrożenie (otwiera siatkę) w sytuacji gdy:": "Piłka przyjęta jest wzdłuż siatki bliżej strefy IV lub strefy II.",
	"Niewłaściwy sposób wykonania rozbiegu do ataku w 1 tempo ze strefy III to:": "Rozbieg czterokrokowy.",
	"Rysunek 21 przedstawia moment odbicia do ataku z jednej nogi dla akcji bazowej:": "Akcja \"A\" /baza A.",
	"Która z zasad nauczania zakłada dobór treści zajęć dostosowany do określonego poziomu umiejętności ćwiczących:": "Zasada stopniowania trudności.",
	"Które z wymienionych cech są charakterystyczne dla planu szkoleniowego:": "Celowość, wykonalność.",
	"Które z podanych poniżej wydarzeń pojawiło się najwcześniej:": "Puchar Świata kobiet.",
	"Czy całościowa forma zagrywki rotacyjnej w wyskoku powinna być uwzględniona w metodyce nauczania w wieku młodzika:": "Nie, tylko po dojściu w przód, stopniowo zwiększając wysokość podrzutu, ale bez wyskoku.",
	"Podstawowym zadaniem broniącego w minisiatkówce, w grze 2x2, jest:": "Dostosowanie pozycji w obronie do atakującego.",
	"Które z umiejętności decydują o jakości przyjęcia zagrywki:": "Mentalne nastawienie do przyjęcia.",
	"Jakie zadanie ma łączenie poprzez trening różnych dyspozycji w interdyspozycje do gry:": "Uzyskanie umiejętności sprawnego działania w osiągnięciu celów gry.",
	"Które z działań w taktyce indywidualnej rozgrywającego „ustawia grę”:": "Utrzymanie stałego zagrożenia atakiem w I tempo lub atakiem z drugiej piłki.",
	"Siatkówka plażowa. Pierwsze medale dla Polski w rozgrywkach międzynarodowych zdobyli :": "Tomasz Sińczak i Rafał Szternel – brązowy medal Mistrzostw Świata U-18 Pattaya Tajlandia.",
	"Zadaniem której z form nauczania jest dostosowanie stopnia trudności gry do aktualnego poziomu umiejętności uczniów:": "Gry uproszczonej.",
	"Zaletą zabawowej formy nauczania jest to, iż:": "Nauczanie odbywa się w warunkach rywalizacji i zabawy, co uatrakcyjnia zajęcia.",
	"Nauczanie umiejętności technicznych i taktycznych, w których nacisk położony jest na uczenie się gry, określa się mianem:": "Podejścia całościowego.",
	"Nauczanie gry w siatkówkę powinno odbywać się:": "Na takich samych zasadach, niezależnie czy szkolimy dzieci, młodzież, dorosłych, amatorów, czy profesjonalistów.",
	"Rozpoczynając pracę z drużyną, trenerzy powinni zaczynać od:": "Wyobrażenia sobie gry zespołu, który będą prowadzić.",
	"Celem gry szkolnej jest:": "Doskonalenie wybranego elementu techniki lub taktyki indywidualnej.",
	"Który z wymienionych argumentów jest charakterystyczny dla podejścia całościowego w nauczaniu piłki siatkowej:": "Naucza się gry, a dopiero potem doskonali poszczególne jej części.",
	"Przykładowe przepisy w grze szkolnej to:": "Obowiązek stosowania wyłącznie odbić górnych - ograniczenie pola, w które należy trafić zagrywką - wskazanie obowiązkowego kierunku atakowania (np. po prostej).",
	"Stosowanie w szkoleniu siatkarza zasady poglądowości gwarantuje, że:": "Przekazywanie wiadomości poprzez różnego rodzaju środki wizualne (np. pokaz) ułatwia opanowanie umiejętności.",
    "W której formie nauczania w treningu, trenerzy skupiają uwagę zawodników na kluczowych elementach gry:": "W grze szkolnej.",
    "Która z form nauczania odbywa się z udziałem przeciwnika:": "Gra właściwa.",
	"Środki wspomagające to:": "Wszystkie odpowiedzi są prawdziwe.",
	"Wysiłek o intensywności wynoszącej 75%VO2max to wysiłek o intensywności:": "Submaksymalnej.",
	"Wybierz właściwą odpowiedź dotyczącą urazów i obrażeń ostrych w siatkówce:": "Wszystkie odpowiedzi są fałszywe.",
	"Przyczep końcowy mieśnia najszerszego grzbietu to:": "Grzebień guzka mniejszego.",
	"Oznaczenie stężenia mleczanu we krwi:": "Wszystkie odpowiedzi są prawdziwe,",
	"Substratem energetycznym uwalniającym najwięcej energii z 1 grama są:": "Tłuszcze.",
	"II próg mleczanowy koreluje ze zdolnościami:": "Wytrzymałościowymi.",
	"Powierzchnia stawowa stawu ramienno-łokciowego leży na:": "Bloczku kości ramiennej.",
	"Wydolność aerobowa mierzona jest przez pomiar:": "Maksymalnego minutowego poboru tlenu.",
	"Łąkotki stawu kolanowego:": "Wszystkie powyższe odpowiedzi są prawidłowe.",
	"Do rotatorów zewnętrznych podudzia zaliczamy:": "Mięsień dwugłowy uda.",
	"Skurcz ekscentryczny charakteryzuje się:": "Przyczepy mięśnia w czasie pracy oddalają się.",
	"Proces rehydratacji (nawodnienia) zachodzi najszybciej jeśli:": "Wszystkie odpowiedzi są prawdziwe.",
	"Bezpośrednio po jednorazowym wysiłku występuje:": "Zmęczenie ostre.",
	"Do celów odnowy biologicznej zaliczamy:": "Wszystkie odpowiedzi są prawdziwe.",
	"Do pomiaru maksymalnego minutowego poboru tlenu (wydolności tlenowej) należy zastosować test:": "Stopniowany.",
	"Fizykalne zabiegi odnawiająco–hartujące to:": "Wszystkie odpowiedzi są prawdziwe.",
	"Czynniki determinujące wydolność fizyczną to:": "Wszystkie odpowiedzi są prawidłowe.",
	"Nasilenie pracy serca powodują:": "Tyroksyna, glukagon, adrenalina.",
	"Możliwe efekty treningu hipoksycznego to:": "Wszystkie odpowiedzi są prawidłowe.",
	"Dobrymi markerami przetrenowania są pomiary we krwi:": "Zarówno stężenia testosteronu i kortyzolu.",
	"Do rotatorów wewnętrznych stawu biodrowego należy:": "Mięsień pośladkowy średni.",
	"Uzyskanie bezpłatnej porady sportowo-lekarskiej jest możliwe:": "Przez dzieci i młodzież do ukończenia 21 roku życia i zawodników do 23 roku życia w poradni mającej kontrakt z NFZ, pod warunkiem dostarczenia skierowania od lekarza pierwszego kontaktu (rodzinnego).",
	"Do oceny mocy wybicia w wyskoku można użyć testu:": "Bosco.",
	"I próg metaboliczny występuje przy intensywności pracy:": "40-60% VO2max.",
	"W utrzymaniu stałego pH płynów ustrojowych biorą udział:": "Wszystkie wymienione.",
	"Ruchy w stawie biodrowym to wszystkie z wyjątkiem:": "Unoszenie.",
	"Pojemność tlenowa krwi wynosi:": "20 ml O2 na 100 ml krwi.",
	"Bóle w dolnym odcinku kręgosłupa są spowodowane:": "Stanami przeciążeniowymi mięśni i więzadeł odcinka lędźwiowego kręgosłupa.",
	"Hematokryt wynosi średnio:": "42 % u kobiet i 47 % u mężczyzn.",
	"Do cech budowy kręgu szczytowego należy:": "Wszystkie powyższe odpowiedzi są prawidłowe.",
	"Wskaż efekty treningu fizycznego:": "Zwiększenie masy mięśni, poprawa koordynacji, zwiększenie objętości krwi.",
	"Nacisk zawodnika na podłoże podczas wyskoku do bloku może być:": "Mniejszy, większy jak i równy ciężarowi ciała.",
	"Po około 25 roku życia zmniejsza się:": "Tylko wydolność aerobowa.",
	"Do oceny zdolności wytrzymałościowych w grach zespołowych można zastosować test:": "Yo-Yo.",
	"Po stwierdzeniu, że poszkodowany jest nieprzytomny:": "Wzywamy pomoc, sprawdzamy oddech i przystępujemy do pośredniego masażu serca i sztucznych oddechów.",
	"W płaszczyźnie czołowej zachodzą ruchy:": "Odwodzenia i przywodzenia.",
	"Największy wpływ na poziom maksymalnego minutowego poboru tlenu ma:": "Maksymalna pojemność minutowa serca.",
	"Intensywność rozgrzewki powinna wynosić:": "40-60%VO2max.",
    "W przypadku pełnosprawnych zawodników orzeczenie o zdolności do sportu może wydać:": "Specjalista medycyny sportowej lub lekarz z certyfikatem PTMS.",
	"Do grupy bocznej mięśni przedramienia należy:": "Prostownik promieniowy krótki nadgarstka.",
	"Procesy anaboliczne to:": "Procesy endoergiczne (syntez) do których potrzebna jest energia z ATP.",
	"U człowieka dorosłego wentylacja minutowa płuc w spoczynku wynosi około:": "6-8 L· min-1.",
    "W skład ściany przedniej jamy brzusznej wchodzą:": "Mięsień prosty brzucha.",
    "Pierwszą czynnością w przypadku oparzenia termicznego jest:": "Polewanie skóry czystą, chłodną wodą przez około 20 minut celem odebrania ciepła z tkanek.",
	"Opóźniona bolesność mięśnia spowodowana jest przez:": "Mechaniczne uszkodzenia tkanki mięśniowej i łącznej.",
	"Satysfakcjonujący poziom maksymalnego minutowego poboru tlenu u siatkarzy powinien wynosić:": "Powyżej 60 ml/kg/min.",
	"Mięśnie nadgrzebieniowy i podgrzebieniowy:": "Przyczepiają się do guzka większego kości ramiennej.",
	"Niekwasomlekowa faza długu tlenowego trwa około:": "3 min.",
	"Jaki jest wpływ wysiłku fizycznego o charakterze wytrzymałościowym na wydzielanie GH:": "Wszystkie odpowiedzi są prawdziwe.",
	"W skurczu izometrycznym:": "Zmienia się napięcie mięśnia.",
    "W cyklu treningowym, kolejny trening powinien być zaplanowany:": "W szczytowym momencie superkompensacji.",
    "Test harwardzki (harvard step-test) służy do oceny:": "Wydolności fizycznej.",
    "W stawie skokowym górnym można wykonywać ruchy:": "Zginania i prostowania.",
	"Piłka siatkowa jest dyscypliną sportową o podłożu energetycznym:": "Anaerobowo-aerobowym.",
	"Problemy jakimi zajmuje się medycyna sportowa to:": "Wszystkie odpowiedzi są prawdziwe.",
	"Wskaźnikiem oceniającym potencjał fosfagenowy zawodnika mierzony w teście Wingate jest:": "Moc szczytowa (maksymalna).",
    "Pełny zakres badań wymaganych do uzyskania orzeczenia o zdolności do sportu trzeba wykonać:": "Co 2 lata."
};

    const allQuestions = {
  "Powierzchnia stawowa stawu ramienno-łokciowego leży na:": [
    "Guzowatości kości łokciowej.",
    "Wszystkie powyższe odpowiedzi są prawidłowe.",
    "Głowie kości łokciowej.",
    "Bloczku kości ramiennej."
  ],
  "Do celów odnowy biologicznej zaliczamy:": [
    "Hartowanie (uodparnianie) organizmu na zmiany warunków środowiskowych.",
    "Aktywizację procesów wypoczynkowych.",
    "Profilaktykę i zmniejszenie skutków przeciążeń powolnych.",
    "Wszystkie odpowiedzi są prawdziwe."
  ],
  "W cyklu treningowym, kolejny trening powinien być zaplanowany:": [
    "Po zakończeniu superkompensacji.",
    "Moment superkompensacji jest bez znaczenia w planowaniu treningu.",
    "W szczytowym momencie superkompensacji.",
    "Przed wystąpieniem superkompensacji."
  ],
  "Dobrymi markerami przetrenowania są pomiary we krwi:": [
    "Nie ma wskaźników przetrenowania.",
    "Zarówno stężenia testosteronu i kortyzolu.",
    "Tylko stężenie tylko kortyzolu.",
    "Tylko stężenie testosteronu."
  ],
  "ATP w mięśniach powstaje na drodze przemian:": [
    "Zarówno tlenowych jak i beztlenowych.",
    "ATP w mięśniach nie powstaje.",
    "Tylko tlenowych.",
    "Tylko beztlenowych."
  ],
  "Potencjał siłowy mięśni zawodnika najlepiej charakteryzuje wartość:": [
    "Spadku siły mięśniowej w działaniu długotrwałym.",
    "Maksymalnego momentu siły oporu.",
    "Maksymalnej szybkości narastania siły mięśniowej.",
    "Maksymalnej siły oporu."
  ],
  "Średnia ilość elementów morfotycznych w 1 mm3 wynosi:": [
    "PLT 10 tyś; WBC 5 tyś, RBC 4 mln.",
    "RBC 5 tyś; WBC 200 tyś; PLT 4 mln.",
    "WBC 7,5 tyś; RBC 5 mln; PLT 250 tyś.",
    "PLT 4,5 mln; RBC 300 tyś; WBC 5 tyś."
  ],
  "Systemy do trójwymiarowej rejestracji ruchu (3D) umożliwiają:": [
    "Ocenę kosztu energetycznego rejestrowanego ruchu.",
    "Obliczenie wewnętrznej pracy mechanicznej wykonanej przez mięśnie.",
    "Rejestrację trajektorii dowolnego punktu ciała.",
    "Pomiar sił działających na dowolny punkt ciała."
  ],
  "W przypadku ogólnego wychłodzenia ciała:": [
    "Podajemy poszkodowanemu gorące, słodkie napoje z alkoholem.",
    "Zawsze wzywamy pomoc, układamy poszkodowanego w pozycji bocznej ustalonej i czekamy na przyjazd karetki.",
    "Wszystkie odpowiedzi są fałszywe.",
    "Wzywamy pomoc, sprawdzamy oddech i przystępujemy do sztucznych oddechów i pośredniego masażu serca."
  ],
  "Mechaniczna sztywność mięśnia podczas czynnościowego rozciągania:": [
    "Rośnie.",
    "Maleje.",
    "Pozostaje bez zmian.",
    "Może zwiększać się bądź zmienijszeć w zależności od kierunku ruchu."
  ],
  "Jaki jest wpływ wysiłku fizycznego o charakterze wytrzymałościowym na wydzielanie GH:": [
    "Wzrost stężenia GH zależy od intensywności wysiłku i od czasu trwania wysiłku.",
    "Zjawisko to występuje w czasie wysiłku i bezpośrednio po jego zakończeniu.",
    "Wszystkie odpowiedzi są prawdziwe.",
    "Wzrasta wydzielanie GH."
  ],
  "Urazy w sporcie dzielimy na:": [
    "Ostre i przewlekłe.",
    "Typowo sportowe.",
    "Wszystkie odpowiedzi są prawidłowe.",
    "Przypadkowe."
  ],
  "Która z sytuacji nie jest błędem?": [
    "Po ataku piłka odbiła się od dłoni blokujących i wysokim łukiem leciała daleko za boisko. Atakujący usiłując nie wkroczyć na boisko przeciwnika przebiegł schylony po linii środkowej i wbiegł w wolną strefę przeciwnika pod siatką",
    "Piłka po bloku opadała wzdłuż siatki. Zawodnik zespołu blokującego sięgnął pod siatką i wykonał ruch, jakby chciał dotknąć piłkę, co zmyliło obrońcę próbującego piłkę podbić",
    "Po bloku spadająca po stronie zespołu atakującego piłką uderzyła w stopę opadającego blokującego, która znajdowała się nad boiskiem przeciwnika",
    "Zawodnik po obronie padem „wślizgnął” się na boisko przeciwnika, przy czym stopy pozostały nad jego częścią boiska. Nie dotknął żadnego przeciwnika, a gra kontynuowana była w innej części boiska. Pozostawił jednak sporą mokrą plamę w polu ataku przeciwnika, gdy się wycofywał na swoje pole gry"
  ],
  "Które ze zdań nie jest prawdziwe odnośnie składu i lokalizacji zespołu?": [
    "W rozgrywkach szczebla centralnego PZPS może zostać wpisanych do protokołu zawodów i brać udział w meczu maksymalnie 14 zawodników",
    "Wolno grać w okularach",
    "Libero może być kapitanem zespołu.",
    "Zawodnicy mogą rozgrzewać się z użyciem piłek tylko pomiędzy setami"
  ],
  "W którym z poniższych przypadków zespół nie straci punktu w wyniku kary za opóźnianie?": [
    "Zawodnik poprosił o zgodę na zawiązanie buta. Zespół miał już wcześniej karę za opóźnianie",
    "Do strefy zmian wszedł zawodnik, który seta rozpoczynał jako zawodnik rezerwowy i zagrał już w tym secie. Sekretarz wychwycił błąd przed dokonaniem zmiany. Zespół miał już upomnienie za opóźnianie",
    "Trener poprosił o przerwę dla odpoczynku po gwizdku sędziego na zagrywkę. Był to pierwszy tego typu przypadek w meczu, ale zespół miał już upomnienie za opóźnianie z powodu opóźniania wznowienia gry",
    "Trzeci raz w meczu sędziowie odrzucili prośbę trenera (o przerwę dla odpoczynku, o zmianę zawodników), bo zgłaszał je zbyt późno (po sygnale sędziego na wykonanie zagrywki)"
  ],
  "Wyróżniamy następujące rodzaje celów sportowych:": [
    "Cele zmienne i cele stałe.",
    "Cele mistrzowskie i cele wynikowe.",
    "Cele wewnętrzne i zewnętrzne.",
    "Cele uniwersalne i cele ograniczone."
  ],
  "Jaki styl zachowania na boisku powinni przyjąć zawodnicy w sytuacji zagrożenia:": [
    "Styl kierujący: zawodnik kieruje innymi zawodnikami a nie swoim zachowaniem.",
    "Styl syntetyczny: zawodnik koncentruje się przede wszystkim na pozytywnych emocjach.",
    "Styl mistrzowski: zawodnik doświadcza emocji pozytywnych i negatywnych, ale potrafi skoncentrować się na zadaniu i utrzymuje optymalny poziom wykonania.",
    "Styl wynikowy: zawodnik koncentruje się na wyniku a nie na wykonaniu."
  ],
  "Wybierz zdanie fałszywe:": [
    "Doradzanie w sporcie powinno służyć podnoszeniu pewności siebie i poczucia bezpieczeństwa zawodnika.",
    "Doradzanie w sporcie powinno służyć faworyzowaniu zawodników.",
    "Doradzanie w sporcie powinno służyć przekonaniu zawodnika o jego przydatności do zespołu.",
    "Doradzanie w sporcie powinno służyć nabywaniu nowej wiedzy i umiejętności."
  ],
  "Narzędzia i metody zapobiegania i leczenia syndromu wypalenia w sporcie to:": [
    "Traktowanie wypoczynku, jako równie ważnego jak trening.",
    "Trening umiejętności fizycznych.",
    "Formułowanie wysokich celów wynikowych.",
    "Wzięcie całkowitej odpowiedzialności za siebie i zawodnika."
  ],
  "Technika wizualizacji sprzyja wspieraniu rehabilitacji zawodnika w trakcie kontuzji, ponieważ sportowcy używają poniższych rodzajów wyobrażeń:": [
    "Wyobrażeń motywacyjnych.",
    "Wyobrażeń poznawczych i motywacyjnych.",
    "Wyobrażeń poznawczych.",
    "Wyobrażeń poznawczych specyficznych i wyobrażeń motywacyjnych specyficznych."
  ],
  "Do jakiej grupy ćwiczeń należy zaliczyć sporty uzupełniające?": [
    "Wszechstronne.",
    "Ukierunkowane.",
    "Regenerujące.",
    "Podtrzymujące."
  ],
  "Które rodzaje treningu realizowane są w przekroju całej kariery zawodnika?": [
    "Wszechstronny, ukierunkowany, specjalistyczny.",
    "Ogólnorozwojowy i specjalistyczny.",
    "Funkcjonalny.",
    "Techniczny i taktyczny."
  ],
  "Co jest najistotniejsze w procesie kierowania treningiem sportowym?": [
    "Wyznaczenie głównych zadań zawodnikom w cyklu.",
    "Relacja trener-zawodnik.",
    "Realizowanie zadań w treningu, zawodach i odnowie.",
    "Kształtowanie się trendu wyników sportowych."
  ],
  "Podstawową cechą charakteryzującą dobrego trenera jest:": [
    "Wiedza fachowa.",
    "Systematyczność i celowość działania.",
    "Umiejętność organizacji zajęć.",
    "Auotrytet."
  ],
  "Jakie jest główne zadanie okresu przygotowawczego?": [
    "Budowanie formy sportowej.",
    "Przygotowanie sprawnościowe.",
    "Trening specjalistyczny.",
    "Doskonalenie techniki i taktyki."
  ],
  "Wybitny talent to ten, który:": [
    "Uczy się szybko i dokładnie.",
    "Uczy się szybko i trwale.",
    "Uczy się techniki szybko, doładnie i trwale.",
    "Uczy się dokładnie i trwale."
  ],
  "Koordynacja ruchowa jest funkcją?": [
    "Zwinności i zręczności.",
    "Gibkości i sprawności układu nerwowego.",
    "Budowy somatycznej i szybkości.",
    "Doświadczeń ruchowych i wytrenowania."
  ],
  "Którą z metod treningu kształtuje się skoczność?": [
    "Powtórzeniową.",
    "Interwałową.",
    "Zmienną.",
    "Ciągłą."
  ],
  "Elementy gry w piłkę siatkową to:": [
    "Przyjęcie, odbicie oburącz górnym, atak.",
    "Przyjęcie, rozegranie, atak.",
    "Wszystkie odpowiedzi są poprawne.",
    "Sposoby poruszania się, odbicia, zagrywki."
  ],
  "W systemie zdobywania punktu po zagrywce własnej punkty zdobywane są:": [
    "Atakiem po obronie (kontratakiem).",
    "Wszystkie odpowiedzi sa prawidłowe.",
    "Blokiem.",
    "Zagrywką."
  ],
  "W ustawieniu do przyjęcia zagrywki na rysunku 3:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Przyjmuje czterech zawodników, wystawiający wchodzi z pozycji 3.",
    "Jest to ustawienie błędne ze względu na przepisy.",
    "Przyjmuje trzech zawodników, wystawiający wchodzi z pozycji 6."
  ],
  "Wskaż zdanie najdokładniej opisujące podrzut piłki do zagrywki rotacyjnej dla zawodnika praworęcznego:": [
    "Z pozycji wyjściowej krok lewą nogą i jednoczesny wysoki wyrzut piłki ręką uderzającą bez rotacji.",
    "Z pozycji wyjściowej krok prawą nogą i jednoczesny wysoki wyrzut piłki ręką uderzającą z rotacją postępującą.",
    "Z pozycji wyjściowej krok lewą nogą i jednoczesny wysoki wyrzut piłki ręką uderzającą z rotacją postępującą.",
    "Wszystkie odpowiedzi prawidłowe."
  ],
  "Na rysunku 16 środkowy wykonuje rozbieg do ataku w 1 tempo w systemie stałym:": [
    "Akcja \"1\" (krótka) - środkowy wykonuje rozbieg na rozgrywającego.",
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Akcja \"2\" (krótka z tyłu).",
    "Akcja \"1\" (krótka) - środkowy wykonuje rozbieg w osi boiska."
  ],
  "Która z zasad obowiązujących środkowego przy przyjęciu dokładnym, jest zasadą nadrzędną:": [
    "Przyjęcie bliżej strefy IV, atakujący zmienia akcję bazową z \"1\" na \"2\" graną w systemie płynnym.",
    "Przy przyjęciu niedokładnym zakaz grania 1-go tempa.",
    "Atak w 1 tempo ustalonej akcji (np. akcje \"1\", \"C\"- haczyk, \"2\", \"7\").",
    "W przypadku przyjęcia/dogrania w okolice 2-3 m zadaniem środkowego jest płynne przejście do ataku \"7\" (przesunięta-\"suw\")."
  ],
  "Współpracę atakującego z rozgrywającym - w przypadku ataku z piłki przyspieszonej - najdokładniej opisuje zdanie:": [
    "Po ocenie przyjęcia, atakujący nie sygnalizuje głosem jakie chce otrzymać wystawienie.",
    "Rozgrywający umawia się przed akcją z atakującym, że wystawi piłkę przyspieszoną.",
    "Po ocenie przyjęcia, atakujący sygnalizuje głosem jakie chce otrzymać wystawienie - krzycząc - super!!!",
    "Atakujący sygnalizuje głosem jakie chce otrzymać wystawienie - krzycząc - rzuć!!!"
  ],
  "Naskok do ataku (odbicie z jednej nogi) w przypadku ataku z jednej nogi w akcji bazowej A i B następuje:": [
    "Gdy piłka jest w rękach rozgrywającej.",
    "Po wystawieniu piłki.",
    "Zanim piłka dojdzie do rąk rozgrywającej.",
    "Wszystkie odpowiedzi są poprawne."
  ],
  "Rysunek 21 przedstawia moment odbicia do ataku z jednej nogi dla akcji bazowej:": [
    "Akcja \"B\" /baza B.",
    "Akcja \"A\" /baza A.",
    "Akcja \"1\" /baza 1.",
    "Akcja \"C\" /baza C."
  ],
  "Środkowy atakujący w 1 tempie:": [
    "Po zagrywce przeciwnika czeka na pozycji wyjściowej do momentu, gdy przyjmujący przyjmie piłkę i w tym momencie rozpoczyna rozbieg do ataku.",
    "Po zagrywce przeciwnika obserwuje całe boisko oraz tor lotu zagranej piłki, jednocześnie przemieszczając się krokiem dostawnym lub biegowym z pozycji wyjściowej.",
    "Po zagrywce przeciwnika obserwuje wyłącznie piłkę.",
    "Wszystkie odpowiedzi są nieprawidłowe."
  ],
  "Wskaż zasadę obowiązującą zawodnika środkowego w przypadku ataku z akcji C (haczyk):": [
    "Środkowy wykonuje rozbieg dokładnie w ten sam sposób jak przy akcji \"1\", tzn. bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy zawsze wykonuje rozbieg przed zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R).",
    "Wszystkie odpowiedzi są poprawne.",
    "Środkowy wykonuje rozbieg dokładnie w ten sam sposób jak przy akcji \"7\", tzn. bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy wykonuje rozbieg 3 m przed zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R).",
    "Bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy zawsze wykonuje rozbieg za zawodnikiem rozgrywającym (około 1,5-2 m za zawodnikiem R)."
  ],
  "Właściwy rytm rozbiegu do ataku należy opisać w następujący sposób:": [
    "Atakujący - ma zadanie rozpoczynać wolno i szybko kończyć.",
    "Wszystkie odpowiedzi sa niewłaściwe.",
    "Atakujący - ma zadanie rozpoczynać wolno i wolno kończyć.",
    "Atakujący - ma zadanie rozpoczynać szybko i szybko kończyć."
  ],
  "Blokując piłki atakowane w pierwszym tempie zawodnik nie powinien:": [
    "Skoczyć razem z atakującym.",
    "Skoczyć po atakującym.",
    "Skoczyć przed atakującym w I tempo.",
    "Wszystkie odpowiedzi są nieprawidłowe."
  ],
  "Która z zasad ustawiania bloku przez zawodnika skrzydłowego przedstawiona jest na rysunkach 30 i 31:": [
    "Ustawienie na piłkę.",
    "Ustawienie na kierunek rozbiegu atakującego.",
    "Ustawienie szwu dwubloku na piłkę.",
    "Wszystkie odpowiedzi są poprawne."
  ],
  "W przypadku zastosowania bloku taktycznego ręce blokujących:": [
    "Powinny być przełożone na drugą stronę siatki.",
    "Pozostają po naszej stronie siatki, dłonie lekko odchylone do tyłu.",
    "Wszystkie odpowiedzi są właściwe.",
    "Przełożone ramiona tworzą nierówną płaszczyznę."
  ],
  "Pozycję wyjściową do bloku najtrafniej opisuje zdanie:": [
    "Postawa rozkroczno-wykroczna, tułów wyprostowany, ramiona uniesione, ugięte w stawach łokciowych, dłonie powyżej głowy, łokcie ułożone swobodnie przed sobą.",
    "Nogi w rozkroku na szerokości bioder, stopy równolegle, tułów wyprostowany, ramiona uniesione, ugięte w stawach łokciowych, dłonie powyżej głowy, łokcie ułożone swobodnie przed sobą.",
    "Nogi w rozkroku na szerokości bioder, stopy równolegle, tułów wyprostowany, ramiona uniesione, ugięte w stawach łokciowych, dłonie powyżej głowy, łokcie ułożone szeroko.",
    "Nogi w rozkroku szerzej niż biodra,stopy równolegle, tułów wyprostowany, ramiona opuszczone, ugięte w stawach łokciowych, dłonie na wysokości bioder."
  ],
  "Które z podanych ćwiczeń nie jest przygotowującym do nauki odbić dolnych:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Odbicia wielokrotne ponad głową po koźle.",
    "Odbicia piłki tenisowej deseczkami lub paletkami trzymanymi oburącz.",
    "Ustawianie płaszczyzny odbicia w ustawieniu przodem do ściany, w klęku obunóż."
  ],
  "Wskaż błąd w technice wykonania zagrywki rotacyjnej bez wyskoku:": [
    "Przemieszczenie doskokiem (naskokiem) – postawienie kolejno prawej i lewej nogi.",
    "Uderzenie ze wspięciem na palce z wykorzystaniem pracy ramion, dłoń nakrywa piłkę nadając jej rotację postępującą (podobnie jak przy ataku).",
    "Podrzut piłki za nisko, do przodu lub na wysokość lewego ramienia, piłka podrzucona bez rotacji.",
    "Za wysoki podrzut piłki ręką uderzającą (lub oburącz) z rotacją postępującą."
  ],
  "Nauczanie blokowania grupowego rozpoczyna się od:": [
    "Nauki bloku podwójnego w strefie III po dojściu zawodników skrzydłowych.",
    "Nauki bloku podwójnego w miejscu.",
    "Nauki bloku potrójnego.",
    "Nauki bloku podwójnego w strefach II lub IV po dojściu blokującego ze strefy III."
  ],
  "Który z wymienionych błędów w technice wykonania bloku dotyczy postawy gotowości:": [
    "Nieodpowiednie tempo i miejsce wyskoku do bloku.",
    "Zbyt szerokie rozstawienie łokci oraz ustawienie zbyt daleko od siatki lub za blisko siatki.",
    "Prowadzenie ramion zza głowy w przód.",
    "Rozluźnione dłonie, przedramiona, ramiona."
  ],
  "W szkoleniu młodzieży, po rozpoznaniu błędu i ocenie jego ważności, trener nie powinien:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Korygować jednego błędu w tym samym czasie.",
    "Eliminować najważniejszego błędu.",
    "Korygować wszytkich błędów jednocześnie."
  ],
  "Który z wymienionych argumentów jest charakterystyczny dla podejścia tradycyjnego w nauczaniu piłki siatkowej:": [
    "Naucza się specyficznych elementów gry i dopiero potem łączy je w całość.",
    "Trener liczy się z opinią zawodników.",
    "Trening zawiera elementy zabawy.",
    "Naucza się gry, a dopiero potem doskonali poszczególne części."
  ],
  "W nauczaniu zagrywki najlepiej stosować metodę:": [
    "Wszystkie odpowiedzi są poprawne.",
    "Mieszaną w nauczaniu zagrywki tenisowej, izolującą fazę ruchu ramienia uderzającego",
    "Syntetyczną w nauczaniu zagrywki dolnej, gdyż jest to łatwa czynność ruchowa.",
    "Syntetyczną w nauczaniu zagrywki w wyskoku, gdyż jest to trudna czynność ruchowa."
  ],
  "Uproszczenia przepisów w grze uproszczonej to:": [
    "Wszystkie odpowiedzi są poprawne.",
    "Obowiązek stosowania wyłącznie odbić górnych - ograniczenie pola, w które należy trafić zagrywką - wskazanie obowiązkowego kierunku atakowania (np. \"po prostej\").",
    "Przybliżenie pola zagrywki (np. do 3 m od siatki), zagrywanie rzutem piłki, zagrywanie odbiciem oburącz.",
    "Łapanie i rzucanie piłki, większa liczba odbić w jednej akcji (więcej niż 3), dopuszczenie dodatkowych odbić nad sobą przez jednego zawodnika."
  ],
  "Zachowanie w kontrataku zawodnika środkowego bloku w sytuacji, gdy blokuje on w strefie IV, jest następujące:": [
    "Dojście do bloku – wyskok/lądowanie, po lądowaniu zwrot przez prawe ramię, dostosowanie w tył skos krokiem dostawnym, obserwując całe boisko oraz tor lotu piłki, w momencie gdy piłka dogrywana jest ,,zawieszona’’ w najwyższym punkcie lub zaczyna opadać, rozpoczęcie rozbiegu.",
    "Wszystkie odpowiedzi są właściwe.",
    "Dojście do bloku – wyskok/lądowanie, po lądowaniu zwrot przez lewe ramię, dostosowanie w tył skos krokiem dostawnym, obserwując całe boisko oraz tor lotu piłki, w momencie gdy piłka dogrywana jest ,,zawieszona’’ w najwyższym punkcie lub zaczyna opadać, rozpoczęcie rozbiegu.",
    "Dojście do bloku – wyskok/lądowanie, po lądowaniu zwrot przez prawe ramię, dostosowanie w tył skos krokiem dostawnym za linię boczną, obserwując całe boisko oraz tor lotu piłki, rozpoczęcie rozbiegu gdy piłka jest na rękach przyjmującego."
  ],
  "W organizacji kontrataku, przy dokładnym dograniu piłki, zadaniem środkowego jest:": [
    "Wystawa sytuacyjna wszystkich piłek.",
    "Podejście do asekuracji.",
    "Stanowić zagrożenie atakiem na swojej pozycji.",
    "Odpowiedzialność za dogranie wszystkich przebijanych piłek."
  ],
  "Sposób rozbiegu do ataku z piłki sytuacyjnej zależy od:": [
    "Miejsca, z którego wystawiana jest piłka.",
    "Tego, czy zawodnik będzie atakował przy bloku podwójnym lub potrójnym.",
    "Wszystkie odpowiedzi są właściwe.",
    "Sposobu, jakim wystawia rozgrywający (oburącz górnym czy dolnym)."
  ],
  "Współpracę zawodników skrzydłowego i środkowego obrony przy piłkach atakowanych po prostej (rysunek 46), w sytuacji bloku podwójnego w strefie IV na kierunku 2 (przekątna zasłonięta), charakteryzuje zasada:": [
    "Zawodnik 5 – broni piłki lecące bezpośrednio w niego / Zawodnik 6 – ustawienie na skraju bloku (ręka zewnętrzna skrzydłowego) broni piłki atakowane po prostej, lecące powyżej linii bioder, z prawej strony zawodnika skrzydłowego.",
    "Zawodnik 5 – broni piłki lecące bezpośrednio w niego lub reaguje w przód do piłki odbitej od bloku i lecącej w bok / Zawodnik 6 – ustawienie na skraju bloku (ręka wewnętrzna skrzydłowego.",
    "Żadna z wymienionych zasad nie dotyczy opisanej sytuacji.",
    "Zawodnik 5 – wbiega do asekuracji za blok / Zawodnik 6 – ustawienie na skraju bloku (ręka zewnętrzna skrzydłowego)."
  ],
  "Które zdanie najlepiej opisuje pojęcie skraju bloku:": [
    "Zadna odpowiedź nie jest właściwa.",
    "Jest to umowna linia łącząca dwóch zawodników blokujących.",
    "Jest to umowna linia łącząca uderzaną piłkę (obok bloku) i obrońcę.",
    "Jest to umowna linia łącząca blokującego i obrońcę."
  ],
  "Prawidłowa zasada ustawienia zawodnika w przypadku nagrania piłki sytuacyjnej sposobem dolnym oburącz to:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Ustawienie zawodnika w kierunku nadlatującej piłki.",
    "Ustawienie stóp zawodnika w kierunku celu podania piłki.",
    "Ustawienie zawodnika bokiem do kierunku podania piłki."
  ],
  "Zawodnik broniący w strefie I atak po skosie, powinien zatrzymać się w pozycji bazowej w momencie:": [
    "Kontaktu dłoni atakującego z piłką.",
    "W momencie, gdy piłka jest w dłoniach rozgrywającego.",
    "Rozpoczęcia rozbiegu do ataku przez zawodnika atakującego.",
    "Zakończenia rozbiegu do ataku przez atakującego."
  ],
  "Zawodniczka stosująca w obronie rzut siatkarski z przetoczeniem przez plecy, po przemieszczeniu do pozycji bazowej w strefie V, powinna wykonać pierwszy krok:": [
    "Prawą nogą.",
    "Wykonuje przetoczenie bezpośrednio z pozycji bazowej.",
    "Lewą nogą.",
    "Zadna odpowiedź nie jest prawidłowa."
  ],
  "Jaką technikę obrony powinien zastosować obrońca w przypadku, gdy czas lotu piłki jest wydłużony:": [
    "Obronę w padzie w przód.",
    "Obronę po biegu i doskoku.",
    "Obronę w rzucie.",
    "Obronę w padzie bokiem z przewrotem przez bark."
  ],
  "Zadaniem obrońcy w strefie VI – przy bloku podwójnym na kierunku 2, w strefie II (blok zasłaniający strefę VI) jest:": [
    "Ustawienie się na \"skraju bloku\", który w tym przypadku wyznacza wewnętrzna ręka skrzydłowego bloku.",
    "Ustawienie się na \"skraju bloku\", który w tym przypadku wyznacza wewnętrzna ręka środkowego bloku.",
    "Ustawienie się na \"skraju bloku\", który w tym przypadku wyznacza zewnętrzna ręka środkowego bloku.",
    "Ustawienie się na \"skraju bloku\", który w tym przypadku wyznacza zewnętrzna ręka skrzydłowego bloku."
  ],
  "Przyjmujący drugi jest zawodnikiem linii ataku w ustawieniach:": [
    "Żadna z odpowiedzi nie jest prawidłowa.",
    "R4, R5, R6.",
    "R1, R2, R3.",
    "R2, R3, R4."
  ],
  "W których strefach na boisku ustawiony jest zawodnik libero podczas przyjęcia zagrywki:": [
    "Wszystkie odpowiedzi są poprawne.",
    "I, VI i V.",
    "I i VI.",
    "I, II i V."
  ],
  "Analizy główne w programie data volley można tworzyć według:": [
    "Strefy.",
    "Zdobyczy punktowych.",
    "Elementu.",
    "Wszystkie odpowiedzi są właściwe."
  ],
  "Generalną zasadą planowania procesu szkoleniowego jest:": [
    "Planowanie dyrektywne.",
    "Planowanie od początku.",
    "Nie ma generalnej zasady w planowaniu szkolenia.",
    "Planowanie od tyłu."
  ],
  "Prognozowanie w procesie planowania szkolenia to:": [
    "Wyznaczenie realnego celu - sportowego lub szkoleniowego.",
    "Wszystkie odpowiedzi są właściwe.",
    "Określenie drogi realizacji wyznaczonego celu.",
    "Właściwe rozłożenie metod, form i środków w określonym czasie makrocyklu, mezocyklu, mikrocyklu, jednostce treningowej."
  ],
  "Które określenie charakteryzuje przygotowanie wszechstronne:": [
    "Szybsza poprawa wyników sportowych.",
    "Wolniejsza poprawa wyników sportowych.",
    "Podstawa przyszłego rozwoju sportowego.",
    "Dłuższa kariera sportowa."
  ],
  "Który z elementów planowania i realizacji treningu dotyczy cykli treningowych:": [
    "Indywidualizacja procesu treningowego.",
    "Struktura treningu.",
    "Środki treningowe.",
    "Metody treningowe."
  ],
  "Który ze sposobów informacji zwrotnej przy doskonaleniu ruchu jest najbardziej skuteczny:": [
    "Cykliczna informacja zwrotna.",
    "Informacja na żądanie ucznia.",
    "Ciągła informacja zwrotna.",
    "Sporadyczna informacja zwrotna."
  ],
  "Który z wymienionych sposobów ataku wprowadzonego w wieku juniora jest kombinacją:": [
    "Atak z I strefy w II tempo.",
    "Atak na „suw”.",
    "Atak środkowego w systemie stałym.",
    "Atak „pipe”."
  ],
  "Jaki rodzaj treningu najlepiej pozwala na wychwycenie popełnianych błędów przez zawodnika?": [
    "Trening indywidualny.",
    "Trening ogólnorozwojowy.",
    "Trening taktyki zespołowej.",
    "Trening taktyki indywidualnej."
  ],
  "Kto wybiera trenerów do prowadzenia kadry wojewódzkiej KNO:": [
    "WZPS.",
    "Zarząd PZPS.",
    "Wydział Szkolenia.",
    "Wydział ds. Młodzieży."
  ],
  "Jaki rodzaj pracy powinien być dominujący w programie II klasy gimnazjum:": [
    "Gra uproszczona.",
    "Ćwiczenia globalne.",
    "Ćwiczenia analityczne.",
    "Ćwiczenia syntetyczne."
  ],
  "Jakie działanie w przyjęciu zagrywki na poziomie juniora można traktować jako strategiczne:": [
    "Zajęcie pozycji wyjściowej uwzględniającej system gry w przyjęciu zagrywki .",
    "Opanowanie technik sytuacyjnych.",
    "Umiejętność oceny możliwości przyjęcia sposobem oburącz górnym.",
    "Kształtowanie współpracy zawodników przyjmujących."
  ],
  "Który ze sposobów przemieszczania stosowany jest na krótkich odcinkach:": [
    "Krok skrzyżny.",
    "Krok łączony.",
    "Krok biegowy.",
    "Krok dostawny."
  ],
  "Która z umiejętności ulega największej ewolucji w procesie nauczania:": [
    "Rozwój sposobów uderzania piłki w określonym kierunku.",
    "Maksymalizowanie możliwości mocnego ataku.",
    "Rozwój wspomagających technik ataku.",
    "Dostosowanie momentu startu do piłek o różnych trajektoriach."
  ],
  "Który z podanych sposobów przemieszczania wymaga opanowania pozostałych:": [
    "Ćwiczenia przemieszczania ze zmianą kierunku.",
    "Ćwiczenia ze zmianą sposobu przemieszczania.",
    "Ćwiczenia ze zmianą kierunku i sposobu przemieszczania.",
    "Ćwiczenia ze zmianą rytmu przemieszczania."
  ],
  "Które ze zdań niezgodne jest z określeniem relacji strategii i taktyki:": [
    "Strategia poprzedza planowanie treningu.",
    "Strategia i taktyka to określenia jednoznaczne.",
    "Strategia to sztuka projektowania a taktyka to urzeczywistnianie tych planów.",
    "Działania taktyczne stosowane są w ramach strategii trenowania."
  ],
  "Który z elementów nauki blokowania powinien być uczony w ostatniej kolejności:": [
    "Dwublok.",
    "Samoasekuracja.",
    "Wyskok i ułożenie ramion nad siatką.",
    "Przewidywanie kierunku ataku."
  ],
  "Jakie są podstawowe zadania upraszczania przepisów gry:": [
    "Niwelowanie różnic w poziomie gry zawodników.",
    "Poprawienie warunków organizacyjnych.",
    "Sprzyjanie ciągłości gry oraz zachowanie zasady wyrównanych szans.",
    "Zapobieganie krótkiej wymianie piłek."
  ],
  "Który rodzaj treningu w szkoleniu młodzieży obejmuje ćwiczenia siłowe, zwinnościowe i koordynacyjne:": [
    "Trening wszechstronny.",
    "Trening właściwej specjalizacji.",
    "Trening ukierunkowany.",
    "Trening wstępnej specjalizacji."
  ],
  "Na czy polega zasada funkcjonowania systemu gry w ataku i kontrataku:": [
    "Na poprawności wykonania kolejnych elementów, które warunkują osiągnięcie celu.",
    "Każdy zawodnik kolejno bezwarunkowo odpowiada za osiągnięcie celu.",
    "Na doskonaleniu kolejnych elementów gry.",
    "Każdy zawodnik kolejno warunkowo odpowiada za osiągnięcie celu."
  ],
  "Jakie powinno być zachowanie broniącego po prostej w sytuacji częściowego zasłaniania prostej przez blok:": [
    "Pozostaje na miejscu.",
    "Podchodzi do asekuracji.",
    "Idzie wzdłuż linii wychodząc z „cienia bloku”.",
    "Przechodzi na „dziurę w bloku”."
  ],
  "W jakim przypadku powinna być stosowana obrona polem:": [
    "Piłki atakowanej przez rozgrywającego.",
    "Piłki uderzanej bez wyskoku z głębi pola.",
    "Braku możliwości mocnego ataku.",
    "Piłki przebijanej dołem lub palcami z dalszej odległości od siatki."
  ],
  "Jakie działanie obrońcy na pozycji środka obrony wynika ze współpracy z blokiem:": [
    "Ustawienie się na „szwie” bloku.",
    "Ustawienie się w przewidzianej pozycji na boisku.",
    "Ustawienie się w przewidzianej pozycji poza boiskiem.",
    "Ustawienie się na przewidywanym kierunku ataku."
  ],
  "Jaka jest różnica pomiędzy pomocami sportowymi a trenażerami:": [
    "Wykorzystanie ich zależy od pomysłowości trenera.",
    "Dają relacje zwrotna o działaniu.",
    "Zbudowane specjalnie dla danego zadania.",
    "Zastępują działanie zawodnika."
  ],
  "Zachowanie rytmu dojścia do ataku przy zmianie odległości do miejsca wyskoku, polega na:": [
    "Zwiększeniu lub zmniejszeniu pierwszego kroku.",
    "Zwiększeniu lub zmniejszeniu proporcjonalnie wszystkich kroków.",
    "Stosowaniu stałej długości kroków i odbicia w kierunku piłki.",
    "Zwiększeniu lub zmniejszeniu długości naskoku."
  ],
  "Co oznacza druga cyfra (np. 4-2) w określeniu systemu gry danego zespołu w ataku:": [
    "Liczbę zawodników atakujących.",
    "Liczbę zawodników wystawiających.",
    "Pozycję zawodników wystawiających.",
    "Ogólną liczbę zawodników."
  ],
  "Który z rodzajów treningu pozwala na utrzymanie wyższej intensywności w grze:": [
    "Trening gibkościowy.",
    "Trening wytrzymałościowy.",
    "Trening siłowy.",
    "Trening koordynacyjny."
  ],
  "Jakie działanie w obronie wymaga często największych przemieszczeń pod presją czasu:": [
    "Zajęcie pozycji wyjściowej do obrony ataku w I tempo.",
    "Dostosowanie do ataku ze skrzydła.",
    "Zmiana na pozycję wyjściową przeciw atakowi ze skrzydła.",
    "Dostosowanie do ataku w I tempo."
  ],
  "Jaki rodzaj ćwiczeń jest charakterystyczny dla treningu wszechstronnego:": [
    "Ćwiczenia rozwijające wrodzone zdolności ruchowe.",
    "Rozpoznanie kierunkowych predyspozycji i uzdolnień.",
    "Kształtowanie nawyków higieniczno-zdrowotnych.",
    "Rozbudzenie zainteresowań sportem i dyscypliną."
  ],
  "Podstawowym celem naboru jest:": [
    "Formowaniu grupy ćwiczebnej.",
    "Ciągłość procesu.",
    "Sposób oceny zawodników.",
    "Etapowość procesu."
  ],
  "Którego z rywali, blokujący powinien utrzymywać cały czas w peryferycznym widzeniu:": [
    "Partnera w bloku.",
    "„Swojego” atakującego w zespole rywala.",
    "Rozgrywającego.",
    "Przyjmującego/broniącego piłkę."
  ],
  "Które z przedstawionych działań w grze obronnej wpływa na pozostałe:": [
    "Przewidywanie kierunku mocnego ataku.",
    "Mentalne nastawienie do aktywnego poszukiwania piłki.",
    "Właściwa postawa gotowości.",
    "Zwinność i szybkość reakcji."
  ],
  "Które z podanych wytycznych dla blokującego są podstawą do skutecznego stosowania pozostałych działań:": [
    "„Czytanie” atakującego.",
    "Obserwacja rozwoju sytuacji w ataku.",
    "Znajomość gry rywala oraz charakterystyki konkretnego zawodnika.",
    "„Czytanie” rozgrywającego."
  ],
  "Czym się różnią indywidualne umiejętności taktyczne od taktyki zespołowej:": [
    "Dotyczą rozwiązań sytuacyjnych, pojawiających się podczas gry.",
    "Pozwalają kontrolować grę.",
    "Są równorzędne, ale tyko przy zagrywce własnej.",
    "Wynikają z działań rywala."
  ],
  "Jakie przepisy są wspólne dla siatkówki plażowej i halowej:": [
    "Zaliczenie odbicia piłki od bloku jako pierwszego odbicia.",
    "Wymiary boiska.",
    "Masa piłki.",
    "Brak jest linii środkowej boiska."
  ],
  "Siatkówka plażowa. Zawodnik wykonujący zagrywkę powinien brać pod uwagę:": [
    "Sposób wykonania zagrywki przez przeciwnika.",
    "Ustawienie zespołu przyjmującego zagrywkę.",
    "Ustawienie partnera z zespołu w obronie.",
    "Informacje uzyskane od trenera tuż przed wykonaniem zagrywki."
  ],
  "Siatkówka plażowa. Przyjmujący zagrywkę wykonaną z wiatrem powinien:": [
    "Przyjąć piłkę nad siebie.",
    "\"Wgrać\" ją mocno do siatki.",
    "Pracą nóg i rąk zamortyzować piłkę.",
    "Dograć piłkę wysoko."
  ],
  "Na końcu tylnym żebra znajduje się:": [
    "Trzon żebra.",
    "Kąt żebra.",
    "Bruzda żebra.",
    "Głowa żebra."
  ],
  "Do kości twarzoczaszki zaliczamy wszystkie z wyjątkiem:": [
    "Kości nosowe, łzowe, jarzmowe.",
    "Kości nosowe, łzowe, gnykowa.",
    "Kości nosowe, łzowe, sitowe.",
    "Kości nosowe, łzowe, żuchwa."
  ],
  "Ogólny wydatek energetyczny związany z aktywnością fizyczną:": [
    "Wpływa na wysokość ogólnej dobowej przemiany materii",
    "Określa się go doświadczalnie najczęściej przy zastosowaniu metodyki kalorymetrii pośredniej.",
    "Określa się go również doświadczalnie na podstawie szybkości akcji serca.",
    "Wszystkie odpowiedzi są prawdziwe."
  ],
  "Intensywność rozgrzewki powinna wynosić:": [
    "Poniżej 40%VO2max.",
    "Powyżej 80%VO2max.",
    "Nie ma to znaczenia.",
    "40-60%VO2max."
  ],
  "Nacisk zawodnika na podłoże podczas wyskoku do bloku może być:": [
    "Wyłącznie większy od ciężaru ciała.",
    "Wyłącznie mniejszy od ciężaru ciała.",
    "Równy ciężarowi ciała.",
    "Mniejszy, większy jak i równy ciężarowi ciała."
  ],
  "Przyczep końcowy mięśnia zębatego przedniego to:": [
    "Wyrostek kruczy.",
    "Grzebień guzka większego.",
    "Brzeg przyśrodkowy łopatki.",
    "Wyrostek barkowy."
  ],
  "Wskaż efekty treningu fizycznego:": [
    "Bradykardia, podwyższenie poziomu lipidów we krwi, wzrost poziomu hemoglobiny.",
    "Poprawa termoregulacji, zwiększenie otłuszczenia ciała, spadek hemoglobiny.",
    "Zwiększenie masy mięśni, poprawa koordynacji, zwiększenie objętości krwi.",
    "Zwiększenie siły, wzrost spoczynkowego tętna, pogrubienie chrząstek stawowych."
  ],
  "W stawie skokowym górnym można wykonywać ruchy:": [
    "Przywodzenia, odwodzenia, nawracania i odwracania.",
    "Zginania i prostowania.",
    "Zginania, prostowania, nawracania i odwracania.",
    "Nawracania i odwracania."
  ],
  "Typowe elementy gry w piłce siatkowej oparte są na podłożu energetycznym:": [
    "Tlenowym.",
    "Beztlenowym fosfagenowym.",
    "Beztlenowym glikolitycznym.",
    "Oksydacja wolnych kwasów tłuszczowych."
  ],
  "Do rotatorów wewnętrznych stawu biodrowego należy:": [
    "Mięsień pośladkowy wielki.",
    "Mięsień biodrowo-lędźwiowy.",
    "Mięsień biodrowy.",
    "Mięsień pośladkowy średni."
  ],
  "Bezpośrednio po jednorazowym wysiłku występuje:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Zmęczenie ostre.",
    "Przetrenowanie.",
    "Zmęczenie przewlekłe."
  ],
  "Które zdanie dotyczące korzystania z regulaminowych przerw w grze jest nieprawdziwe?": [
    "Zespół może skorzystać z przerwy dla odpoczynku po zakończeniu przerwy technicznej, przed wznowieniem gry",
    "Po zakończeniu wymiany zespół „A” dokonał zmiany zawodników. Następnie zespół „B” także dokonał zmiany. Zespół „A” może przed wznowieniem gry poprosić o przerwę dla odpoczynku",
    "Trener może dokonać w ramach jednej przerwy zmiany zawodników i zmiany powrotnej między tymi samymi zawodnikami",
    "Zespół „A” może skorzystać z dwóch przerw dla odpoczynku bez wznawiania gry"
  ],
  "Które z poniższych stwierdzeń nie jest prawdziwe w kontekście przepisów dotyczących zawodników Libero?": [
    "Zespół miał jednego Libero, który doznał kontuzji. Trener redesygnował do roli Libero nowego zawodnika. Jeżeli i on będzie kontuzjowany, to trener może redesygnować kolejnego zawodnika jako nowego Libero",
    "Jeżeli w zespole jest dwóch Libero, nie mogą oni mieć koszulek w różnych kolorach (każda z nich odróżniająca Libero od „zwykłych” zawodników)",
    "Trener nie jest zadowolony z gry Libero. Ma wówczas prawo zgłosić go jako niezdolnego do gry i wyznaczyć innego zawodnika do roli Libero",
    "Libero może rozegrać palcami sposobem górnym i piłka z tego rozegrania może być atakowana powyżej górnej taśmy siatki, jeżeli w momencie odbicia Libero był w strefie obrony"
  ],
  "Podstawowy rozgrywający zespołu został zmieniony przez drugiego rozgrywającego. Następnie miała miejsce zmiana powrotna, która był szóstą zmianą w tym zespole w tym secie. Chwilę później zawodnik rozgrywający doznał kontuzji. Libero zespołu przebywał w tym momencie na ławce. Jakie pole manewru ma trener zespołu?": [
    "Trener może dokonać zmiany kontuzjowanego z dowolnym zawodnikiem nieprzebywającym na boisku w momencie kontuzji z wyjątkiem Libero oraz drugiego rozgrywającego",
    "Nie ma żadnego pola manewru, bo wykorzystał sześć zmian i w tym zmianę rozgrywającego. Kontuzjowanemu zostanie przyznana 3-minutwa przerwa i jeśli po tym czasie zawodnik nie będzie mógł grać, to zespół przegra seta jako zdekompletowany",
    "Trener może dokonać zmiany kontuzjowanego z dowolnym zawodnikiem nieprzebywającym na boisku w momencie kontuzji z wyjątkiem Libero",
    "Trener może dokonać zmiany kontuzjowanego tylko z drugim rozgrywającym"
  ],
  "Najczęściej spotykane reakcje w sytuacji konfliktu to:": [
    "Unikanie odpowiedzialności, negatywne domniemania, zmiana tematu konfliktu.",
    "Prowadzenie rozmówcy, negatywne domniemania.",
    "Negowanie istnienia konfliktu, pozytywne domniemania, przyjazne pytania.",
    "Wrogie pytania, pożądanie za rozmówcą, żartowanie."
  ],
  "Wybierz zdanie fałszywe na temat lęku w sporcie:": [
    "Sportowcy o wysokim poziomie lęku – cechy nie będą reagować lękiem w sytuacjach silnie zagrażających.",
    "Formowanie się osobowości lękowej wiąże się z wczesnym okresem dzieciństwa.",
    "Lęk - cecha odpowiada za różnice indywidualne.",
    "Lęk – stan odpowiada za zmienność wyników z sytuacji na sytuację ."
  ],
  "Wykorzystując wiedzę na temat teorii motywacji osiągnięć J.W.Atkinsona wybierz zdanie prawdziwe:": [
    "Osoby, u których motyw dążenia do sukcesu( Ms) jest wyższy niż motyw do unikania niepowodzenia (Maf), podnoszą swój poziom aspiracji po osiągnięcie sukcesu a obniżają go po niepowodzeniu.",
    "Osoby, u których motyw dążenia do sukcesu (Ms) jest niższy niż motyw do unikania niepowodzenia (Maf), podnoszą swój poziom aspiracji po osiągnięciu sukcesu a obniżają po niepowodzeniu.",
    "Osoby, u których motyw dążenia do sukcesu (Ms) jest wyższy niż motyw do unikania niepowodzenia( Maf) preferują zadania o wysokim stopniu trudności.",
    "Osoby, u których motyw dążenia do sukcesu (Ms) jest niższy niż motyw do unikania niepowodzenia( Maf) są bardziej wytrwałe przy początkowym zadaniu związanym z osiągnięciem."
  ],
  "Najważniejsze aspekty motywacji osiągnięć w sporcie to:": [
    "Uzależnienie od autorytetu, wiara w sukces, odwaga.",
    "Zaangażowanie, elastyczność, niezależność.",
    "Internalizacja, flow, nastawienie na brak rywalizacji.",
    "Brak samokontroli, wytrwałość, flow."
  ],
  "Czym jest kontrola treningu?": [
    "Sprawdzaniem poziomu wytrenowania zawodników.",
    "Procesem zbierania informacji o treningu, zawodach, odnowie.",
    "Zapisem i oceną wykonanej pracy na treningu.",
    "Rejestracją i analizą gry."
  ],
  "Planowanie makrocyklu powinno rozpoczynać się od:": [
    "Wyznaczenia ram czasowych okresu przygotowawczego.",
    "Określenia globalnych wielkości obciążeń: dni, treningi, godziny, kilometry, powtórzenia.",
    "Wyznaczenia ram czasowych okresu startowego w oparciu o kalendarz zawodów.",
    "Wyznaczenia celu głównego i celów pośrednich oraz terminów i miejsc ich realizacji."
  ],
  "Na czym polega trening strumieniowy?": [
    "Kikakrotnym powtarzaniu obwodu ćwiczebnego bez przerw między obwodami.",
    "Aktywizacja ćwiczących zgodnie z zasadami aktywności i świadomości.",
    "Systematycznym i kolejnym ćwiczeniu poszczególnych grup mięśniowych.",
    "Systematycznym powtarzaniu poszczególnych rodzajów ćwiczeń."
  ],
  "Który z elementów przygotowania psychicznego zawodników kształtuje ich cechy charakteru?": [
    "Kształtowanie motywów.",
    "Kształtowanie odporności psychicznej.",
    "Kształtowanie umiejętności zmian napięcia emocjonalnego.",
    "Przygotowanie wolicjonalne."
  ],
  "Fazę podrzutu w zagrywce szybującej (bez rotacji) bez wyskoku najlepiej charakteryzuje zdanie:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Podrzut pionowy, nieduży, bez rotacji piłki.",
    "Jednorącz, na stronę ramienia uderzającego, z przodu tułowia, z wysokości barku, nie wyżej niż maksymalny zasięg zagrywającego.",
    "Możliwość wykonania małego kroku lewą nogą w momencie podrzutu piłki."
  ],
  "Rysunek 4 przedstawia rozegranie ataku w systemie:": [
    "Po wystawie zawodnika linii ataku ze zmianą stref.",
    "Po wystawie zawodnika linii obrony bez zmiany stref.",
    "Po wystawie zawodnika linii obrony ze zmianą stref.",
    "Po wystawie zawodnika linii ataku bez zmiany stref."
  ],
  "Opis techniki odbicia w tył sposobem oburącz górnym powinien być następujący:": [
    "W fazie przyjęcia ustawienie takie jak podczas odbicia do przodu, w fazie podania następuje wyprost ramion w kierunku w górę w tył (za głowę) przy możliwym równoczesnym niewielkim odchyleniu tułowia.",
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "W fazie przyjęcia następuje odchylenie tułowia w tył, a w fazie podania wyprost ramion w kierunku w górę w tył (za głowę).",
    "W fazie przyjęcia ustawienie takie jak podczas odbicia do przodu, w fazie podania następuje wyprost ramion w kierunku w górę w tył (za głowę), a następnie odchylenie tułowia w tył."
  ],
  "Drużyna początkujących, grająca na dwóch rozgrywających, powinna wykorzystać następujący system:": [
    "Z wystawiającym w linii obrony.",
    "Z wystawiającym w linii ataku.",
    "Wejście czwartego.",
    "Żaden z wymienionych systemów."
  ],
  "Na rycinie 2 kierunek uderzenia atakująca reguluje poprzez:": [
    "Zmianę kierunku rozbiegu (praca ramienia prostopadła do linii barków).",
    "Zmianę ustawienia tułowia w czasie lotu i ruch skrętny dłoni.",
    "Zmianę prowadzenia ramienia uderzającego ze stałego ustawienia tułowia.",
    "Pracę ręki atakującej prostopadle do barków, ze skrętem nadgarstka na zewnątrz."
  ],
  "Techniczne formy atakowania jednorącz to (wszystkie części odpowiedzi muszą być prawidłowe):": [
    "Zbicie kierowane, minięcie.",
    "Zbicie hakiem, zbicie tenisowe.",
    "Ścięcie, plasowanie.",
    "Plasowanie, kiwnięcie."
  ],
  "Który rysunek przedstawia prawidłowy sposób wykonania rozbiegu do ataku z jednej nogi dla akcji bazowej B:": [
    "Żaden z przedstawionych rysunków.",
    "Rysunek 26.",
    "Rysunek 28.",
    "Rysunek 27."
  ],
  "Technikę wykonania ostatniego kroku dojścia do zbicia należy opisać jako:": [
    "Naskok na wyprostowane nogi, do ugięcia we wszystkich stawach, połączony z zamachem ramion w tył; jednoczesny kontakt obu stóp z podłożem - \"na śródstopie\".",
    "Doskok na ugięte we wszystkich stawach nogi, połączony z zamachem ramion w górę; jednoczesny kontakt obu stóp z podłożem - kolejno: przez pięty, na śródstopie.",
    "Naskok na ugięte we wszystkich stawach nogi, połączony z zamachem ramion w tył; jednoczesny kontakt obu stóp z podłożem - kolejno: przez pięty, na śródstopie.",
    "Doskok na ugięte we wszystkich stawach nogi, połączony z zamachem ramion przed tułowiem; jednoczesny kontakt obu stóp z podłożem - kolejno: przez pięty, na śródstopie."
  ],
  "Wskaż zdanie opisujące prawidłową technikę ataku w trzecim tempie:": [
    "Rozpoczęcie rozbiegu do ataku z piłki wysokiej przed wystawieniem po ocenie trajektorii lotu piłki dogrywanej do rozgrywającego (gdy piłka dogrywana jest w najwyższym punkcie trajektorii lotu).",
    "Rozpoczęcie rozbiegu do ataku z piłki wysokiej w momencie, gdy piłka zaczyna spadać (piłka wystawiona jest w najwyższym punkcie trajektorii lotu).",
    "Żadne zdanie nie opisuje prawidłowo techniki ataku w trzecim tempie.",
    "Rozpoczęcie rozbiegu do ataku z piłki wysokiej równo z wystawieniem (gdy piłka przyjęta jest w dłoniach rozgrywającego)."
  ],
  "Wskaż zasadę obowiązującą zawodnika środkowego w przypadku ataku z akcji 2 (krótka z tyłu):": [
    "Bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy zawsze wykonuje rozbieg za zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R).",
    "Środkowy wykonuje rozbieg za zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R) wyłącznie przy przyjęciu bliżej strefy II.",
    "Środkowy wykonuje rozbieg za zawodnikiem rozgrywającym (jest ,,powiązany’’ z zawodnikiem R) wyłącznie przy przyjęciu w oś boiska.",
    "Bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki, środkowy zawsze wykonuje rozbieg za zawodnikiem rozgrywającym (około 1,5-2 m za zawodnikiem R)."
  ],
  "Które zdanie opisuje współpracę atakującego z rozgrywającym – w przypadku ataku z piłki szybkiej:": [
    "Gdy atakujący oceni, że piłka przyjęta jest niedokładnie, krzyczy do rozgrywającego - super!!! Jest to sygnał dla zawodnika rozgrywającego, że piłka ma być szybka (wystawiona w pierwszym tempie).",
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Gdy atakujący oceni, że piłka przyjęta jest niedokładnie, krzyczy do rozgrywającego - quick!!! Jest to sygnał dla zawodnika rozgrywającego, że piłka ma być szybka (wystawiona w pierwszym tempie).",
    "Gdy atakujący oceni, że piłka przyjęta jest dokładnie, krzyczy do rozgrywającego - quick!!! Jest to sygnał dla zawodnika rozgrywającego, że piłka ma być szybka (wystawiona w pierwszym tempie)."
  ],
  "Który ze sposobów ustawiania bloku w strefach zewnętrznych daje gwarancję stabilniejszego bloku:": [
    "Po kroku dostawnym z ustawienia wąskiego.",
    "Po kroku dostawnym z ustawienia szerokiego.",
    "Po kroku skrzyżnym z ustawienia wąskiego.",
    "Żaden z wymienionych sposobów nie gwarantuje stabilności w bloku."
  ],
  "Strefa bloku - prosta - to określenie:": [
    "Bloku zasłaniającego strefę I.",
    "Blok na kierunku 2.",
    "Blok na kierunku 1.",
    "Blok na kierunku 0."
  ],
  "Podstawowym priorytetem trenera A. Anastasiego w systemie organizacji blokowania w grze Reprezentacji Polski dla zawodnika środkowego było:": [
    "Blokowanie zawodnika rozgrywającego.",
    "Obowiązkowe przemieszczenie do dwubloku w strefie II.",
    "Ustawienie w osi boiska – obowiązek przemieszczenia się za piłką bez względu na miejsce przyjęcia piłki.",
    "Ustawienie w osi boiska – brak przemieszczenia za piłką bez względu na miejsce przyjęcia piłki."
  ],
  "Rysunek 4a przedstawia blokowanie systemem:": [
    "Każdy swego.",
    "Z przekazywaniem.",
    "W strefach.",
    "Tandem."
  ],
  "Wskaż błąd, który pojawia się jako pierwszy w nauczaniu zagrywki rotacyjnej w wyskoku:": [
    "Niewłaściwy podrzut piłki ( np. wyrzut piłki z ugiętej ręki, piłka podrzucona za nisko, na wysokość lewego ramienia, piłka podrzucona bez rotacji, piłka nie podrzucona w boisko).",
    "Niewłaściwy moment wyrzutu piłki (za wcześnie).",
    "Nieprawidłowe ustawienie stóp w postawie przygotowawczej.",
    "Brak nakrycia dłonią piłki w momencie uderzenia."
  ],
  "Wskaż błąd, który pojawia się w fazie uderzenia, w technice wykonania zagrywki szybującej bez wyskoku:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Uderzenie piłki za głową lub na wysokości głowy.",
    "Uderzenie w piłkę nasadą dłoni lub palcami, dłoń w momencie uderzenia w piłkę rozluźniona, a kontakt z piłką zbyt długi.",
    "Uderzenie w piłkę ramieniem ugiętym w stawie łokciowym."
  ],
  "Nauczanie zagrywki dolnej metodą analityczną odbywa się w następujących etapach:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Nauka pozycji przygotowawczej - nauka ruchu ramienia uderzającego - nauka podrzutu - zagrywka w pełnej formie.",
    "Zagrywka piłki po koźle - zagrywka piłki trzymanej - zagrywka piłki podrzucanej.",
    "Zagrywka z bliższej odległości - zagrywka lżejszą piłką- zagrywka zza linii końcowej."
  ],
  "Cztery fazy (części) czynności zbicia w nauczaniu ataku metodą kompleksową to:": [
    "Rozbieg (dojście), wyskok, uderzenie, lądowanie.",
    "Dobieg, odbicie, uderzenie, lądowanie.",
    "Rozbieg (dojście), podskok, uderzenie, lądowanie.",
    "Rozbieg (dojście), wyskok, ścięcie, lądowanie."
  ],
  "Wskaż ćwiczenie zawierające błąd w nauczaniu pozycji przygotowawczej zagrywki rotacyjnej w wyskoku, metodą analityczną:": [
    "Przyjmowanie pozycji do wykonania zagrywki, przodem do kierunku zagrywania z prawą nogą z przodu, za linią końcową w odległości umożliwiającej wykonanie zagrywki, 3-krokowe przyspieszające przemieszczenie ( pierwszy krok lewą nogą – drugi prawą- trzeci lewą ).",
    "Przyjmowanie pozycji do wykonania zagrywki, przodem do kierunku zagrywania z lewą nogą z przodu, piłka w prawej dłoni, 2-krokowe przemieszczenie (pierwszy krok prawą nogą – drugi lewą).",
    "Wszystkie odpowiedzi są błędne.",
    "Przyjmowanie pozycji do wykonania zagrywki, przodem do kierunku zagrywania z lewą nogą z przodu, piłka w lewej dłoni, 2-krokowe przemieszczenie (pierwszy krok prawą nogą – drugi lewą)."
  ],
  "W której formie nauczania w treningu, trenerzy skupiają uwagę zawodników na kluczowych elementach gry:": [
    "W grze zabawowej.",
    "W grze szkolnej.",
    "W grze właściwej.",
    "W grze uproszczonej."
  ],
  "Nauczanie odbić górnych metodą analityczną uwzględnia - po pokazie i objaśnieniu - następujące, kolejne etapy:": [
    "Nauczanie: ułożenia ramion i rąk, przyjęcia piłki, podania piłki, odbić w miejscu.",
    "Wszystkie odpowiedzi są prawidłowe.",
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Nauczanie odbić: po własnym podrzucie, piłek dorzucanych, po dojściu."
  ],
  "Nauczanie gry w siatkówkę powinno odbywać się:": [
    "Na zasadach zróżnicowanych w zależności od tego, czy szkolimy, dzieci, młodzież, czy dorosłych.",
    "Na takich samych zasadach, niezależnie czy szkolimy dzieci, młodzież, dorosłych, amatorów, czy profesjonalistów.",
    "Wszystkie odpowiedzi są właściwe.",
    "Na takich samych zasadach , ale tylko dzieci i młodzież."
  ],
  "W fazie Break Point efektywność gry w obronie nie może być zwiększona poprzez:": [
    "Organizowanie gry w obronie (blok-obrona) z uwzględnieniem różnych schematów gry.",
    "Przygotowanie pierwszej akcji w obronie wykorzystując zagrywkę.",
    "Organizowanie przyjęcia zagrywki.",
    "Wszystkie odpowiedzi są prawidłowe."
  ],
  "W celu zorganizowania skutecznego kontrataku na niższym poziomie gry, zadaniem rozgrywającego jest:": [
    "Przyspieszać wystawę.",
    "Zaskakiwać skrzydłowych niekonwencjonalnym wystawieniem.",
    "Wystawić w niestabilnej pozycji wysoką piłkę do skrzydłowych.",
    "Wystawić w stabilnej pozycji wysoką piłkę do skrzydłowych."
  ],
  "Od którego z wymienionych czynników zależy wybór, do którego z zawodników skrzydłowych należy wystawić piłkę w kontrataku:": [
    "Od założeń, jakie zostały przyjęte przed rozpoczęciem gry.",
    "Wszystkie wymienione są ważne.",
    "Aktualnej pozycji zawodnika na boisku.",
    "Od czasu, jaki posiada zawodnik na wykonanie rozbiegu."
  ],
  "Zawodnik skrzydłowy obrony w strefie V, broniąc piłki atakowane po prostej ze strefy II, przemieszcza się z pozycji wyjściowej do pozycji bazowej:": [
    "Krokiem dostawnym w tył skos - ruch dostosowania rozpoczyna noga lewa.",
    "Krokiem dostawnym w tył skos - ruch dostosowania rozpoczyna noga prawa.",
    "Krokiem skrzyżnym zakończonym naskokiem.",
    "Przeskokiem."
  ],
  "Zasada ustawiania się w obronie na ,,skraju bloku” jest korzystna, ponieważ:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Zawodnik może lepiej obserwować piłkę.",
    "Zawodnik ustawiony na ,,skraju bloku’’ eliminuje jeden kierunek możliwości działania atakującego.",
    "Zawodnik ma większą kontrolę nad podejmowanym działaniem (eliminuje „zgadywanie”)."
  ],
  "Rysunek 6 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II z założeniem:": [
    "Asekuracji środkowym obrony.",
    "Asekuracji mieszanej nieblokującym i środkowym obrony.",
    "Asekuracji nieblokującym.",
    "Asekuracji mieszanej nieblokującym i skrzydłowym obrony."
  ],
  "Schemat działania zawodnika w grze obronnej to kolejno:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Ustawienie od razu w pozycji bazowej.",
    "Przemieszczenie za blok.",
    "Pozycja wyjściowa – przemieszczenie – pozycja bazowa – reakcja na piłkę."
  ],
  "Rysunek 48 przedstawia ustawienie w obronie zespołu przy bloku pojedynczym w strefie III i obronę systemem 1:2:3. Jaki jest kierunek bloku:": [
    "Kierunek 0.",
    "Kierunek 5.",
    "Kierunek 6.",
    "Kierunek 1."
  ],
  "Które zdanie najlepiej charakteryzuje taktykę regulującą zasady współpracy w obronie, określaną jako taktyka - patrz i reaguj:": [
    "Pierwszeństwo w obronie ma zawodnik dysponujący lepszą techniką.",
    "Broni gracz najbardziej oddalony od strefy, z której wyprowadzany jest atak.",
    "Zawodnicy w poszczególnych sytuacjach przewidują (czytają) działania atakujących i w danej sytuacji wykonują indywidualne zadania.",
    "Broni gracz, który ma piłkę z prawej strony."
  ],
  "Rysunek 33 przedstawia schemat ustawienia obrońców na pozycjach wyjściowych w sytuacji:": [
    "Gdy przeciwnik gra często przez środek.",
    "Systemu stosowanego na najwyższym poziomie.",
    "Gry na niskim poziomie i stosowania asekuracji środkiem obrony.",
    "Najczęściej stosowanego systemu."
  ],
  "Analiza rozkładu ataku w opracowaniach statystyki meczowej uwzględnia:": [
    "Osobną analizę ustawienia R1.",
    "Wszystkie odpowiedzi są poprawne.",
    "Przyjęcie zagrywki.",
    "Podział na ustawienia z atakującym w linii ataku i w linii obrony."
  ],
  "Dokonując analizy ustawienia zespołu w bloku i obronie:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Poszukuje się różnic w ustawieniu bloku i obrony w zależności od strefy wykonania ataku.",
    "Nie zwraca się uwagi na to, czy zawodnikiem linii obrony jest libero, czy środkowy.",
    "Nie zwraca się uwagi na ustawienie zawodnika rozgrywającego w obronie."
  ],
  "Akcja bazowa dotyczy analizy gry:": [
    "Ataku na bloku pojedyńczym.",
    "Tylko w końcówkach setów.",
    "Wszystkie odpowiedzi są poprawne.",
    "Zawodnika rozgrywającego."
  ],
  "Umiejętności gry można najlepiej rozwijać:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Ucząc poszczególnych elementów techniki.",
    "Ucząc przez grę.",
    "Stosując atrakcyjne zajęcia w formie zabaw."
  ],
  "W którym przypadku demokratyzacja modelu kierowania winna być głębsza:": [
    "Im wyższe są wartości moralne i doświadczenie sportowe zawodników.",
    "Im niższe są wartości moralne i doświadczenie sportowe zawodników.",
    "W początkowym etapie tworzenia grupy",
    "W przypadku pracy z młodzieżą."
  ],
  "Jeżeli podczas treningu u zawodnika pojawiają się błędy w wykonaniu ruchu to:": [
    "Naukę prowadzimy na końcu treningu.",
    "Wprowadzamy liczenie punktów, gdy ruch lub umiejętność jest poprawna.",
    "Naukę elementu lub umiejętności rozkładamy na kilka części.",
    "Przestrzegamy równowagi pomiędzy nauczaniem częściami a całością."
  ],
  "Jaki element techniczny nie jest podstawą do opanowania innych elementów gry:": [
    "Przyjęcie.",
    "Wystawienie.",
    "Zagrywka.",
    "Blok."
  ],
  "Który element taktyki gry funkcjonuje praktycznie tylko w wieku młodzika:": [
    "Przyjęcie „W” w 5 przyjmujących.",
    "Gra na dwóch rozgrywających 4-2.",
    "Obrona w strefach i pasach.",
    "Blok pojedynczy na skrzydłach."
  ],
  "Który z wprowadzonych sposobów ataku w wieku juniora jest priorytetowy:": [
    "Uderzenie z prowadzeniem ramienia pod kątem do tułowia.",
    "Gra środkowego w systemie „stałym”.",
    "Atak z piłki „quick”.",
    "Atak o blok i ponowienie ataku."
  ],
  "Jaki rodzaj pracy powinien być dominujący w programie I klasy gimnazjum:": [
    "Gra zadaniowa.",
    "Ćwiczenia analityczne.",
    "Ćwiczenia syntetyczne.",
    "Ćwiczenia globalne."
  ],
  "System gry w obronie w wieku kadeta zmienia się w zależności od:": [
    "Ataku w I tempo.",
    "Ataku z drugiej piłki.",
    "Ataku z II linii.",
    "Wprowadzenia piłek przyspieszonych do skrzydła."
  ],
  "Który z elementów zagrywki w wieku kadeta wymaga największych umiejętności:": [
    "Stosowanie zagrywki taktycznej, wykorzystując słabości rywala.",
    "Wprowadzenie zagrywki bezrotacyjnej (szybującej) w wyskoku.",
    "Zwiększanie stopnia trudności zagrywki z dążeniem do płaskiego toru lotu.",
    "Wprowadzenie zagrywki rotacyjnej w wyskoku."
  ],
  "Jaki rodzaj koncentracji występuje u atakującego przy przenoszeniu wzroku na wystawioną piłkę:": [
    "Szeroka - wewnętrzna.",
    "Szeroka - zewnętrzna.",
    "Wąska - zewnętrzna.",
    "Wąska - wewnętrzna."
  ],
  "Która z wymienionych wskazówek odnosi się do nauczania i doskonalenia wystawienia w późniejszym okresie szkolenia (po etapie młodzika):": [
    "\"Wejście\" kciuków pod piłkę podczas wystawienia.",
    "Wspięcie na palce podczas wystawienia.",
    "Wystawienie piłki ponad czołem.",
    "Stopniowe ograniczanie ruchu ramion podczas wystawienia."
  ],
  "Która czynność wykonywana w obronie jest konsekwencją wcześniejszych działań:": [
    "Utrzymanie pozycji aktywnej w gotowości do startu.",
    "Aktywny ruch do piłki zamiast czekania.",
    "Szybkość i zwinność broniącego.",
    "Obserwacja atakującego i ramienia uderzającego."
  ],
  "Jakie nowe podejście metodyczne uwzględnia program szkolenia siatkarza:": [
    "Od ćwiczeń globalnych poprzez ćwiczenia syntetyczne do analitycznych.",
    "Od ćwiczeń syntetycznych poprzez ćwiczenia analityczne do globalnych.",
    "Od ćwiczeń analitycznych poprzez ćwiczenia syntetyczne do globalnych.",
    "Od ćwiczeń globalnych poprzez ćwiczenia analityczne do syntetycznych."
  ],
  "Utrzymanie kombinacyjnej gry przy dograniu dalej od siatki jest uwarunkowane:": [
    "Umiejętnościami wystawiającego.",
    "Koordynacją działań całego zespołu.",
    "Umiejętnościami atakujących.",
    "Miejscem wystawienia piłki."
  ],
  "Przyjęcie zagrywki w 4 zawodników nie jest zasadne w wypadku:": [
    "Gry bez ataku w I tempo.",
    "Gry bez ataku z II linii.",
    "Gry na dwóch rozgrywających w II linii.",
    "Gry na jednego rozgrywającego z atakiem z II linii."
  ],
  "Obrona ataku w I tempo z „dziurą” w bloku polega na:": [
    "Obronie przez środkowego obrony.",
    "Obronie w zależności od sytuacji.",
    "Podwojeniu obrony w „dziurze” bloku.",
    "Obronie przez skrzydło obrony."
  ],
  "Słaby punkt obrony przy zawodniku „6” cofniętym do linii końcowej to:": [
    "Obrona piłek uderzanych do środka boiska.",
    "Obrona piłek padających do rogów boiska.",
    "Obrona piłek odbitych daleko od bloku .",
    "Przegląd sytuacji."
  ],
  "Który z zawodników w obronie skrzydłami jest zwolniony za obronę piłek blisko siatki:": [
    "Wolny od bloku.",
    "Broniący w środku pola.",
    "Broniący po skosie.",
    "Broniący po prostej."
  ],
  "Na podstawie analiz wynika, że w ustawieniu 1 zawodnik atakujący, po przyjęciu zagrywki:": [
    "Zawsze zmienia pozycję do ataku ze strefy II.",
    "Najlepiej atakuje ze strefy IV.",
    "Przeważnie nie potrafi dobrze atakować ze strefy IV.",
    "Z reguły kiwa każdą wystawioną piłkę."
  ],
  "Podaj kolejność kształtowania siły w procesie szkoleniowym:": [
    "Faza anatomiczna, moc, hipertrofia, wytrzymałość siłowa.",
    "Adaptacja dynamiczna, hipertrofia, wytrzymałość siłowa, siła dynamiczna.",
    "Adaptacja anatomiczna, wytrzymałość siłowa, hipertrofia, siła maksymalna, siła dynamiczna.",
    "Hipertrofia, siła dynamiczna, adaptacja anatomiczna, siła dynamiczna."
  ],
  "Zdolnośći koordynacyjne kształtuje się za pomocą jednej z metod szkoleniowych. Jest to metoda:": [
    "Interwałowa.",
    "Ciągła.",
    "Powtórzeniowa.",
    "Analityczna."
  ],
  "W szkoleniu młodzieży ćwiczenia analityczne stosuje się:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "We fragmentach gry.",
    "W doskonaleniu systemów gry.",
    "W nauce danego elementu technicznego."
  ],
  "Formacja gry 3 x 3 ma swoje ograniczenia w stosowaniu, jako:": [
    "Etap łączenia funkcji wystawienia i ataku.",
    "Etap selekcji wystawiających.",
    "Etap nauki podstaw wystawienia.",
    "Etap specjalizacji wystawiających."
  ],
  "Który z elementów taktyki zespołowej jest szczególnie dostosowany do gry rywala:": [
    "Taktyka asekuracji własnego ataku.",
    "Taktyka kontrataku.",
    "Taktyka ataku .",
    "Taktyka obrony."
  ],
  "Czy dla siatkarza, do treningu barku, bardziej przydatny jest hantel czy guma thera-band:": [
    "Guma thera-band.",
    "Hantel.",
    "Ani jeden, ani drugi.",
    "Oba przybory."
  ],
  "Które z wymienionych działań powoduje niedokładność przyjęcia zawodnika I linii:": [
    "Brak skupienia się na przyjęciu do końca wykonania ruchu.",
    "Niska pozycja w przyjęciu.",
    "Inny kierunek przemieszczania do przyjęcia niż do ataku.",
    "Przyjęcie z boku tułowia."
  ],
  "Jakie są główne zadania taktyki indywidualnej w ataku:": [
    "Wykorzystanie sytuacji w bloku.",
    "„Smart system”.",
    "Wykorzystanie sytuacji w obronie.",
    "Wykorzystanie piłek sytuacyjnych."
  ],
  "Kiedy rozegrano Pierwsze Mistrzostwa Europy w siatkówce plażowej:": [
    "W 1993 roku.",
    "W 1989 roku.",
    "W 1996 roku.",
    "W 1997 roku."
  ],
  "Siatkówka plażowa. Jakie czynniki mają wpływ na wybór miejsca i sposobu wykonania zagrywki:": [
    "Słońce, siła i kierunek wiatru.",
    "Wilgotność powietrza.",
    "Gramatura piasku (wielkość ziaren piasku) .",
    "Zachowanie publiczności."
  ],
  "Problemy jakimi zajmuje się medycyna sportowa to:": [
    "Monitorowanie stanu zdrowia sportowca, bezpieczeństwo w sporcie i udzielanie pierwszej pomocy.",
    "Stosowanie dopingu w sporcie",
    "Wszystkie odpowiedzi są prawdziwe.",
    "Przygotowanie sportowca do podróży i ocena wpływu warunków środowiskowych na zdrowie i wydolność zawodnika."
  ],
  "Na powierzchni żebrowej łopatki znajduje się:": [
    "Dół nadgrzebieniowy.",
    "Dół podłopatkowy.",
    "Grzebień łopatki.",
    "Wszystkie powyższe odpowiedzi są prawidłowe."
  ],
  "Do grupy bocznej mięśni przedramienia należy:": [
    "Zginacz łokciowy nadgarstka.",
    "Zginacz promieniowy nadgarstka.",
    "Prostownik promieniowy krótki nadgarstka.",
    "Prostownik łokciowy nadgarstka."
  ],
  "Zasada PRICE stosowana jest:": [
    "Przy uszkodzeniach zamkniętych i otwartych tkanek miękkich narządu ruchu.",
    "W przypadku każdego uszkodzenia pourazowego w sporcie.",
    "Wszystkie odpowiedzi są fałszywe.",
    "Przy uszkodzeniach zamkniętych tkanek miękkich narządu ruchu."
  ],
  "Pełny zakres badań wymaganych do uzyskania orzeczenia o zdolności do sportu trzeba wykonać:": [
    "Co 6 miesięcy.",
    "Co 12 miesięcy.",
    "Przy każdej wizycie u lekarza sportowego.",
    "Co 2 lata."
  ],
  "Analiza fazowa ruchu w siatkówce nie umożliwia określenia:": [
    "Liczby i częstotliwości kroków podczas np. rozbiegu.",
    "Położenia ogólnego środka ciężkości zawodnika.",
    "Czasu trwania odbicia do bloku.",
    "Struktury czasowej zagrywki."
  ],
  "Wysiłek o intensywności wynoszącej 75%VO2max to wysiłek o intensywności:": [
    "Supramaksymalnej.",
    "Maksymalnej.",
    "Submaksymalnej.",
    "Wszystkie odpowiedzi są błędne."
  ],
  "Oznaczenie stężenia mleczanu we krwi:": [
    "Może służyć także jako marker do planowania i prowadzenia treningu sportowego z określoną intensywnością.",
    "Zależy od zasobów i rodzaju źródeł energetycznych oraz czasu i intensywności wysiłku.",
    "Stężenie mleczanu po wysiłkach o charakterze beztlenowym zależy m.in. od specyfiki treningowej i stopnia wytrenowania zawodnika.",
    "Wszystkie odpowiedzi są prawdziwe,"
  ],
  "Niekwasomlekowa faza długu tlenowego trwa około:": [
    "10 min.",
    "30 min.",
    "60 min.",
    "3 min."
  ],
  "Jakie są konsekwencje błędu rotacji?": [
    "Zespół, który zagrywał tkwiąc w błędzie rotacji straci punktu zdobyte od momentu powstania błędu – ale tylko, jeśli można ustalić moment powstania błędu",
    "Zagrywać będzie zespół przeciwny",
    "Wszystkie odpowiedzi są prawidłowe",
    "Zespół przeciwny zdobywa punkt"
  ],
  "Na poniższych zdjęciach numery na koszulkach zawodniczek odpowiadają ich pozycjom na boisku (2, 3, 4). Czy i w jaki sposób popełniają one błąd ustawienia?": [
    "Tak, zawodniczka lewego ataku znajduje się na prawo od zawodniczki prawego ataku",
    "Tak, stopa zawodniczki prawego ataku nie może być bliżej lewej linii bocznej niż obie stopy zawodniczki środkowej",
    "Tak, prawa stopa zawodniczki lewego ataku znajduje się bliżej prawej linii bocznej od obu stóp zawodniczki środkowej",
    "Nie ma błędu ustawienia"
  ],
  "Który z poniższych przypadków jest przykładem prośby nieuzasadnionej nie skutkującej sankcjami dla zespołu?": [
    "Trener poprosił o trzecią przerwę dla odpoczynku w secie i została ona przyznana. Po dłuższej chwili zespołom kazano powrócić na boisko",
    "Kapitan zespołu poprosił o przerwę dla odpoczynku, chociaż trener siedział na ławce rezerwowych",
    "Drugi raz w meczu trener poprosił o przerwę dla odpoczynku po gwizdku sędziego I na zagrywkę",
    "Zespół poprosił o zmianę zawodnika, przy czym na boisko miał wejść zawodnik niewpisany do protokołu zawodów"
  ],
  "W sytuacji pomocy zawodnikowi po kontuzji należy zastosować:": [
    "Technikę wyobrażeń dotyczących celów wynikowych.",
    "Technikę wyobrażeń dotyczących wzmocnienia negatywnych emocji.",
    "Technikę wyobrażeń dotycząca kontroli pozytywnych emocji.",
    "Technikę wyobrażeń koncentrujących się na przezwyciężaniu lęku przed ponowną kontuzją."
  ],
  "W profilu umiejętności stosowanym w pracy trenera należy uwzględnić:": [
    "Aspekty fizyczne, techniczne, koordynacyjne, strategiczne i psychologiczne.",
    "Aspekty psychologiczne, fizyczne, strategiczne i techniczne.",
    "Aspekty fizyczne i aspekty strategiczne.",
    "Aspekty psychologiczne."
  ],
  "Trzy style komunikacji motywującej to:": [
    "Podążanie, prowadzenie, kierowanie.",
    "Słuchanie, podążanie, kierowanie.",
    "Słuchanie, informowanie, prowadzenie.",
    "Słuchanie, informowanie, kierowanie."
  ],
  "W czasie prawidłowego wydechu służącego regulacji pobudzenia organizmu biorą udział:": [
    "Mięsień prosty brzucha.",
    "Mięśnie karku.",
    "Przepona.",
    "Mięśnie międzyżebrowe zewnętrzne."
  ],
  "Najczęściej wykorzystywane zasady komunikacji interpersonalnej w relacji trener-zawodnik to:": [
    "Założenie, że zawodnicy mają podobne lub takie same doświadczenia.",
    "Formułowanie przede wszystkim celów wynikowych.",
    "Negatywne wzmacnianie niewłaściwych zachowań zawodników.",
    "Podawanie racjonalnych powodów dla wyznaczonych reguł."
  ],
  "W którym okresie w makrocyklu występuje mikrocykl wprowadzający?": [
    "Startowym.",
    "We wszystkich okresach.",
    "Przygotowawczym.",
    "Przejściowym."
  ],
  "Czym jest dokumentacja szkoleniowa?": [
    "Sprawozdaniem z realizacj szkolenia po zakończeniu makrocyklu.",
    "Planem szkoleniowym złożonym w klubie.",
    "Zapisem pracy w dzienniku treningowym.",
    "Uporządkowanym zbiorem informacji dotyczących przedsięwzięć organizacyjno-szkoleniowych."
  ],
  "Obciążenie wewnętrzne określa:": [
    "Zespół reakcji organizmu na obciążenie zewnętrzne.",
    "Częstość skurczów serca.",
    "Wielkość napięcia mięśniowego.",
    "Stężenie mleczanu."
  ],
  "Która z definicji treningu sportowego w pełni oddzwierciedla jego istotę?": [
    "Zespół oddziaływań trenera na zawodnika.",
    "Uporządkowany zestaw ćwiczeń skierowany na realizację zadania szkoleniowego.",
    "Jednostka treningowa, zajęcia szkoleniowe.",
    "Trening sportowy jest procesem specjalizacji, który nie zaburzając harmonijnego rozwoju osobowości zawodnika zmierza do rozwinięcia tych jego cech fizycznych, psychicznych i sprawnościowych, które umożliwią mu osiągnięcie najwyższego wyniku sportowego."
  ],
  "Na czym polega planowanie właściwe treningu?": [
    "Rozłożeniu metod, form i środków w określonym czasie: makrocyklu, okresie, mezocyklu.",
    "Wyznaczeniu realnego celu.",
    "Skoordynowanie zamierzeń z aktualnymi możliwościami zawodników oraz warunkami treningu.",
    "Określeniu drogi realizacji celu."
  ],
  "Jakie okresy treningowe występują w makrocyklu?": [
    "Wstępny, ukierunkowany, specjalistyczny.",
    "Przygotowawczy, startowy, przejściowy.",
    "Przedstartowy, główny, roztrenowania,",
    "Ogólnorozwojowy, specjalny, startowy."
  ],
  "Które zdanie nie opisuje fazy podrzutu i rozbiegu w zagrywce szybującej w wyskoku:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Dwukrokowe przemieszczenie (z pozycji przygotowawczej – pierwszy krok lewą nogą – dostawienie lewej - wyskok).",
    "Dwukrokowe przemieszczenie (z pozycji przygotowawczej – pierwszy krok prawą nogą – dostawienie lewej - wyskok).",
    "Dwukrokowe przemieszczenie (z pozycji przygotowawczej – pierwszy krok prawą nogą – lewą nogą z jednoczesnym odbiciem z jednej nogi)."
  ],
  "W ustawieniu do przyjęcia zagrywki na rysunku 8:": [
    "Przyjmuje czterech zawodników, wystawiającym jest nr 5.",
    "Przyjmuje czterech zawodników, wystawiającym jest nr 3.",
    "Jest to ustawienie błędne ze względu na przepisy.",
    "Przyjmuje trzech zawodników, wystawiającym jest nr 3."
  ],
  "Do sposobów przemieszczania się w piłce siatkowej należy zaliczyć:": [
    "Wypad, naskok, pad.",
    "Piwot, pad siatkarski, obrót.",
    "Krok dostawny, krok skrzyżny, zwód pojedynczy.",
    "Wszystkie odpowiedzi są nieprawidłowe."
  ],
  "W zbiciu tenisowym pracę ramienia charakteryzuje ruch wykonany w płaszczyźnie strzałkowej zakończony:": [
    "Uderzeniem w piłkę z przodu, ponad lewym barkiem.",
    "Uderzeniem w piłkę z tyłu, ponad głową.",
    "Uderzeniem w piłkę w najwyższym punkcie, wyprostowanym ramieniem, otwartą dłonią z aktywnym ruchem nadgarstka (dłoń nakrywa piłkę).",
    "Uderzeniem w piłkę w najwyższym punkcie dosiężnym przed sobą."
  ],
  "Które zdanie nie opisuje dokładnie momentu wyskoku do ataku w 1 tempie:": [
    "Wyskok do ataku rozpoczynany w momencie gdy dogrywana piłka zaczyna opadać w kierunku dłoni rozgrywającego.",
    "Wyskok do ataku rozpczynany w momencie, gdy dogrywana piłka jest w dłoniach rozgrywającego.",
    "Wszystkie odpowiedzi są prawidłowe.",
    "Wyskok do ataku rozpoczynany w momencie gdy wystawiona piłka zaczyna opuszczać dłonie rozgrywającego."
  ],
  "Niewłaściwy sposób wykonania rozbiegu do ataku w 1 tempo ze strefy III to:": [
    "Rozbieg do miejsca wyskoku ze stopniowym zwiększaniem prędkości i przyspieszeniem w ostatnich dwóch krokach; w przypadku rozbiegu trzykrokowego – z pozycji przygotowawczej z prawą nogą z przodu, krok lewą nogą i naskok prawa-lewa.",
    "Rozbieg czterokrokowy.",
    "Wszystkie odpowiedzi są prawidłowe.",
    "Rozbieg dwukrokowy - z pozycji przygotowawczej z lewą nogą z przodu, naskok prawa-lewa."
  ],
  "Cechą charakterystyczną akcji A /bazy A/ krótkiej z tyłu atakowanej z jednej nogi jest:": [
    "Zadaniem rozgrywającej jest wystawić piłkę od siatki, za plecy do antenki.",
    "Środkowa odbija się z lewej nogi przed lub na wysokości rozgrywającej.",
    "Wszystkie odpowiedzi są prawidłowe.",
    "Środkowa wykonuje rozbieg za rozgrywającą około 1,5 do 2 metrów bez względu na miejsce dogrania piłki."
  ],
  "Rysunek 14 przedstawia:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Moment rozpoczęcia rozbiegu do ataku z piłki wysokiej ( w trzecim tempie) ze strefy II.",
    "Moment rozpoczęcia rozbiegu do ataku z piłki szybkiej (w pierwszym tempie) ze strefy II.",
    "Moment rozpoczęcia rozbiegu do ataku z piłki przyspieszonej (w drugim tempie) ze strefy II."
  ],
  "W zbiciu tenisowym - u początkujących - ruch powinien odbywać się w płaszczyźnie:": [
    "Poprzecznej w ruchu tułowia i ramienia.",
    "Strzałkowej w ruchu tułowia i ramienia.",
    "Strzałkowej w ruchu tułowia, czołowej w ruchu ramienia.",
    "Czołowej w ruchu tułowia i ramienia."
  ],
  "Rysunek 11 przedstawia:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Moment rozpoczęcia rozbiegu do ataku z piłki przyspieszonej (w drugim tempie).",
    "Moment rozpoczęcia rozbiegu do ataku z piłki wysokiej (w trzecim tempie).",
    "Moment rozpoczęcia rozbiegu do ataku z piłki szybkiej (w pierwszym tempie)."
  ],
  "Rodzaje tempa bloku to:": [
    "Normalne. Nisko.",
    "Wszystkie odpowiedzi są właściwe.",
    "Nie skaczemy. Razem.",
    "Późno. Czekaj. Razem."
  ],
  "W sygnalizacji zawodników w bloku – cała dłoń lub ugięte dwa palce - oznaczają:": [
    "Blok na kierunku 1.",
    "Blok potrójny.",
    "Blok na kierunku 0.",
    "Blok na kierunku 2."
  ],
  "W technice blokowania wyróżnia się następujące po sobie fazy:": [
    "Wszystkie odpowiedzi są poprawne.",
    "Wyskoku, uniesienia ramion, blokowania, lądowania.",
    "Dojścia (nie zawsze występuje), uniesienia ramion, wyskoku, blokowania, lądowania.",
    "Dojścia (nie zawsze występuje), wyskoku, blokowania, lądowania."
  ],
  "Pozycje wyjściowe do bloku określane jako ustawienie wąsko w prawo – nie są stosowane w sytuacji gdy:": [
    "Przy założeniu gry opcją do strefy II/I.",
    "Przeciwnik posiada mocnego przyjmującego w strefie IV.",
    "Przeciwnik posiada mocnego atakującego w strefie II lub I.",
    "Wszystkie odpowiedzi są właściwe."
  ],
  "Które z ćwiczeń służy nauczaniu odbić dolnych:": [
    "Wszystkie odpowiedzi są właściwe.",
    "Odbicia wielokrotne ponad głową po koźle.",
    "Odbicia dolne piłki z pianki.",
    "Odbicia piłki tenisowej deseczkami lub paletkami trzymanymi oburącz."
  ],
  "Właściwa kolejność nauczania ataku jednorącz, od minisiatkówki do poziomu mistrzowskiego to:": [
    "Atak z piłki szybkiej (\"quick\"), atak z piłki przyspieszonej (\"super\"), atak z piłki wysokiej.",
    "Atak z piłki szybkiej (\"quick\"), atak z piłki wysokiej, atak z piłki przyspieszonej (\"super\").",
    "Atak z piłki wysokiej, atak z piłki przyspieszonej (\"super\"), atak z piłki szybkiej (\"quick\").",
    "Wszystkich rodzajów ataku należy nauczać jednocześnie."
  ],
  "Nauczanie blokowania metodą analityczną odbywa się w następujących etapach (po pokazie i objaśnieniu):": [
    "Nauczanie blokowania w miejscu, po przemieszczeniu się.",
    "Nauczanie blokowania pojedynczego, podwójnego, potrójnego.",
    "Nauczanie blokowania: piłki zawieszonej, piłki przerzucanej, piłki atakowanej.",
    "Nauczanie: postawy, ruchu ramion, wyskoku i lądowania."
  ],
  "Kolejność nauczania zagrywki szybującej w wyskoku to:": [
    "Zagrywka szybująca w wyskoku po dwukrokowym rozbiegu, z odbicia jednonóż (piłka trzymana przed tułowiem jednorącz) od dołu ręką przeciwną uderzającej - zagrywka szybująca w wyskoku po 2-krokowym rozbiegu, z odbicia obunóż (piłka trzymana oburącz).",
    "Zagrywka szybująca w wyskoku po dwukrokowym rozbiegu, z odbicia obunóż (piłka trzymana oburącz) - zagrywka szybująca w wyskoku po 2-krokowym rozbiegu, z odbicia jednonóż ( piłka trzymana przed tułowiem jednorącz) od dołu ręką przeciwną uderzającej – obydwa warianty ze stopniowym wydłużaniem rozbiegu.",
    "Zagrywka szybująca w wyskoku po czterokrokowym rozbiegu, z odbicia obunóż (piłka trzymana oburącz) - zagrywka szybująca w wyskoku po 4-krokowym rozbiegu, z odbicia jednonóż ( piłka trzymana przed tułowiem jednorącz) od dołu ręką przeciwną uderzającej.",
    "Żadna odpowiedź nie jest właściwa."
  ],
  "Która z form nauczania jest najbardziej atrakcyjna dla uczniów:": [
    "Forma fragmentów gry.",
    "Forma gry.",
    "Forma zabawowa.",
    "Forma ścisła."
  ],
  "W nauczaniu zbicia tenisowego najlepiej stosować metodę:": [
    "Mieszaną, izolującą fazę ruchu ramienia uderzającego oraz fazę rozbiegu.",
    "Syntetyczną, gdyż jest to łatwa czynność ruchowa.",
    "Wszystkie odpowiedzi są poprawne.",
    "Analityczną, gdyż jest to trudna czynność ruchowa."
  ],
  "Ryzyko podczas zagrywki powinno być proporcjonalne do:": [
    "Potrzeby utrudnienia gry przeciwnikowi w poszczególnych fazach meczu.",
    "Do poziomu sportowego przeciwnika.",
    "Indywidualnych możliwości zagrywającego.",
    "Wszystkie odpowiedzi są właściwe."
  ],
  "Rysunek 36 przedstawia ustawienie drużyny w obronie przy bloku pojedynczym w strefie II na kierunku 0, w systemie:": [
    "Obrona systemem 1:0:4 – obrońcy 2-0-2.",
    "Obrona systemem 1:0:4 – obrońcy 1-0-3.",
    "Obrona systemem 1:1:4 – obrońcy 2-0-2.",
    "Obrona systemem 1:1:4 – obrońcy 1-0-3."
  ],
  "Zawodniczka stosująca w obronie rzut siatkarski z przetoczeniem przez plecy powinna odbić się:": [
    "Z obu nóg jednocześnie.",
    "Z nogi wykrocznej.",
    "Żadna odpowiedź nie jest prawidłowa.",
    "Z nogi zakrocznej."
  ],
  "Którą z poniższych zasad, współpracując w obronie, stosują zawodnicy (rysunek 47): nieblokujący w strefie IV ze skrzydłowym w strefie V, w przypadku bloku w strefie II na kierunku 1 - zasłaniający prostą:": [
    "Zawodnik 4 – broni piłki atakowane po ostrym skosie i spadające wzdłuż siatki oraz do środka boiska / Zawodnik 5 - broni piłki atakowane skosie i po przekątnej.",
    "Zawodnik 4 - wbiega do asekuracji za blok / Zawodnik 5 - broni piłki atakowane skosie i po przekątnej.",
    "Żadna z wymienionych zasad nie dotyczy opisanej sytuacji.",
    "Zawodnik 4 – broni piłki atakowane po ostrym skosie i spadające wzdłuż siatki oraz do środka boiska / Zawodnik 5 - wbiega do asekuracji za blok."
  ],
  "W ustawieniu drużyny w obronie na rysunku 38 przedstawiona jest sytuacja:": [
    "Blok na kierunku 2 w strefie IV/ blok zamknięty, obrona systemem 2:0:4.",
    "Blok na kierunku 1 w strefie IV/ blok zamknięty, obrona systemem 2:0:4.",
    "Blok na kierunku 1 w strefie IV/ blok zamknięty, obrona systemem 2:1:3.",
    "Blok na kierunku 1 w strefie IV/ blok zamknięty, obrona systemem 2:2:2."
  ],
  "Zawodnik w obronie, przyjmując określoną postawę, powinien w każdej akcji mieć możliwość:": [
    "Szybkiego wbiegnięcia za blok (w ciemno).",
    "Obrony sytuacyjnej.",
    "Obrony w zachwianej równowadze.",
    "Obrony mocnego ataku oraz dobiegnięcia do piłki kiwanej."
  ],
  "Zawodnik atakujący jest zawodnikiem linii obrony w ustawieniach:": [
    "R5, R6, R1.",
    "R2, R3, R4.",
    "Wszystkie odpowiedzi są poprawne.",
    "R1, R3, R6."
  ],
  "Środkowy pierwszy jest zawodnikiem linii ataku w ustawieniach:": [
    "R1, R2, R4.",
    "R3, R4, R5.",
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "R6, R1, R5."
  ],
  "W przygotowaniu statystyk przykładem współczynnika jakościowego jest:": [
    "Współczynnik efektywności gry.",
    "Współczynnik udziału w grze.",
    "Wszystkie odpowiedzi są prawdziwe.",
    "Żaden z wymienionych."
  ],
  "Autokratyczny styl kierowania zespołem charakteryzuje się:": [
    "Trenerzy uznają swą odpowiedzialność kierowniczą i przewodzą grupie w osiąganiu założonych przez nich celów (własnych).",
    "Sprawy dyscyplinarne rozwiązywane są w momencie, gdy jest to konieczne.",
    "Styl ten podnosi świadomość zawodników oraz poczucie odpowiedzialności.",
    "Nie uwzględnianiem opinii i przekonań członków drużyny."
  ],
  "Który czynnik należy brać pod uwagę w różnicowaniu treningu wszechstronnego:": [
    "Nabywanie i doskonalenie umiejętności oraz sprawności specjalnej.",
    "Kryterium rozwoju biologicznego.",
    "Dotychczas ukształtowany poziom potencjału ruchowego.",
    "Prognozowane wymogi zamierzonej specjalizacji."
  ],
  "Jaki rodzaj treningu jest bazą dla treningu specjalistycznego:": [
    "Trening taktyczny.",
    "Trening psychologiczny i teoretyczny.",
    "Trening techniczny.",
    "Trening fizyczny."
  ],
  "Które z podanych poniżej wydarzeń pojawiło się najwcześniej:": [
    "Wprowadzenie do gry Libero.",
    "Puchar Świata kobiet.",
    "Liga Światowa.",
    "Grand Prix siatkarek."
  ],
  "Jaki rodzaj pracy powinien być dominujący w programie III klasy gimnazjum:": [
    "Ćwiczenia analityczne.",
    "Gra z dorzuceniem.",
    "Ćwiczenia globalne.",
    "Ćwiczenia syntetyczne."
  ],
  "Czy całościowa forma zagrywki rotacyjnej w wyskoku powinna być uwzględniona w metodyce nauczania w wieku młodzika:": [
    "Tak, pełna zagrywka w wyskoku.",
    "Nie, tylko po dojściu w przód, stopniowo zwiększając wysokość podrzutu, ale bez wyskoku.",
    "Nie, tylko uderzenie rotacyjne z miejsca.",
    "Nie, tylko zagrywka szybująca."
  ],
  "Który z etapów szkolenia S.O.S. nie jest finansowany z budżetu państwa:": [
    "Szkoły Gimnazjalne z programem S.O.S.",
    "SMS PZPS.",
    "Szkoły Ponadgimnazjalne z programem S.O.S.",
    "Akademia S.O.S."
  ],
  "Która podstawowa zasada w przyjęciu zagrywki obowiązuje na początku nauczania w wieku młodzika:": [
    "Obrona w pasach.",
    "Ustawienie po łuku.",
    "Ustawienie w strefach.",
    "Ścieżki przemieszczania."
  ],
  "Na którym etapie nauczania znane działania wykonywane są w losowej kolejności:": [
    "Etap II.",
    "Etap IV.",
    "Etap III.",
    "Etap I."
  ],
  "Do jakiego sposobu obrony powinno się dążyć w minisiatkówce, w grze 4x4:": [
    "Obrona dwoma zawodnikami z przodu z obrotem.",
    "Obrona jednym zawodnikiem z przodu wg rotacji.",
    "Obrona jednym stałym zawodnikiem z przodu.",
    "Obrona dwoma zawodnikami z przodu poprzez „czytanie” atakującego."
  ],
  "Jaki typ kombinacji dominuje w grze doświadczonych zespołów:": [
    "Kombinacje krzyżujących się dróg większej ilości zawodników.",
    "Kombinacje równoległe z większą ilością zawodników.",
    "Kombinacje równoległe z dwoma zawodnikami.",
    "Kombinacje krzyżujących się dróg dwóch zawodników."
  ],
  "W grze obronnej system opisany jako 2:1:3 oznacza:": [
    "Opis sposobu ustawienia zawodników w obronie względem bloku.",
    "Opis sposobu asekuracji bloku.",
    "W kolejności liczbę zawodników broniących pola, asekurujących i blokujących.",
    "W kolejności liczbę zawodników blokujących, asekurujących i broniących pola."
  ],
  "Jaki element treningu taktycznego szczególnie podnosi wartość bojową w zespole:": [
    "Techniczne rozwiązanie zadań taktycznych.",
    "Współdziałanie w drużynie.",
    "Doskonalenie elastyczności drużyny.",
    "Równomierne wydatkowanie energii."
  ],
  "Która z zasad minisiatkówki dotyczy gry 3 x 3:": [
    "Wszyscy atakują w każdym ustawieniu",
    "Nie uznaje się błędu ustawienia zawodników I i II linii",
    "Zawodnik zagrywający nie może atakować piłki powyżej górnej taśmy siatki",
    "Atakować może tylko jeden zawodnik w każdym ustawieniu"
  ],
  "Która umiejętność zagrywania powinna być częścią planu gry każdego zespołu:": [
    "Umiejętność wykorzystania zagrywki taktycznej.",
    "Posiadanie umiejętności wykonania różnych typów zagrywek.",
    "Opanowanie umiejętności wykonania zagrywki rotacyjnej.",
    "Opanowanie umiejętności wykonania zagrywki szybującej."
  ],
  "Jaki jest nadrzędny element skutecznego przyjęcia:": [
    "Postawa w przyjęciu.",
    "Wczesny ruch do piłki.",
    "Sposób przemieszczenia.",
    "Ułożenie ramion do przyjęcia."
  ],
  "Które parametry piłki do gry są zgodne z przepiami FIVB:": [
    "Obwód 62-64 cm, waga 260-280 g, ciśnienie 0,3-0,325 kg/cm2.",
    "Obwód 65-67 cm, waga 260-280 g, ciśnienie 0,33-0,355 kg/cm2.",
    "Obwód 65-67 cm, waga 220-250 g, ciśnienie 0,3-0,325 kg/cm2.",
    "Obwód 65-67 cm, waga 260-280 g, ciśnienie 0,3-0,325 kg/cm2."
  ],
  "Kto odpowiada w asekuracji atakującego ze skrzydła za piłki spadające do 2 m od siatki:": [
    "Libero.",
    "Rozgrywający.",
    "Najbliższy zawodnik.",
    "Atakujący."
  ],
  "Jaki warunek odróżnia zadanie bloku „miękkiego” od agresywnego (atakującego):": [
    "Podbić piłkę w kierunku zawodników swojego zespołu.",
    "Ochronić strefę boiska przeciwko mocnym atakom w głąb boiska.",
    "Ochronić część boiska bliżej siatki, przeciwko mocnym atakom, z góry w dół.",
    "Zetknąć się z piłką i zmniejszyć jej szybkość."
  ],
  "Rozgrywający wbiegając po zagrywce na pozycję wyjściową powinien obserwować:": [
    "Blokujących.",
    "Piłkę.",
    "Przyjmujących.",
    "Strefę do której wbiega."
  ],
  "Wskaż podobieństwo obrony „polem” i obrony piłki „za darmo”:": [
    "Gra bez bloku.",
    "Brak udziału w przyjęciu rozgrywającego.",
    "Sposób dogrywania piłki.",
    "Skuteczność wyprowadzenia ataku."
  ],
  "Która wskazówka przy „czytaniu” atakującego powinna być przyswojona najwcześniej:": [
    "Dystans piłki od siatki.",
    "Wzajemna relacja zawodnika i piłki.",
    "Sposób rozbiegu atakującego.",
    "Równowaga ciała w powietrzu."
  ],
  "W treningu siłowym liczba 3-5 serii na ćwiczenie po 8-12 powtórzeń, to proces kształtowania:": [
    "Adaptacji anatomicznej.",
    "Hipertrofii.",
    "Mocy.",
    "Siły dynamicznej."
  ],
  "Metodą, którą kształtujemy szybkość w piłce siatkowej jest:": [
    "Metoda ciągła.",
    "Metoda syntetyczna.",
    "Metoda powtórzeniowa.",
    "Metoda interwałowa."
  ],
  "Jaki sposób przyjęcia powinien być priorytetowym podczas treningu libero:": [
    "Przyjęcie dołem przed sobą.",
    "Przyjęcie na palce.",
    "Przyjęcie techniką \"sytuacyjną\".",
    "Przyjęcie dołem z boku."
  ],
  "Które z wymienionych działań wpływa bezpośrednio na skuteczność obrony:": [
    "Obserwacja i przewidywanie.",
    "Pozycja i postawa.",
    "Dostosowanie do piłki.",
    "Brak reakcji na piłkę."
  ],
  "Siatkówka plażowa. Wystawa sposobem oburącz dolnym zapewnia:": [
    "Możliwość wystawy na dowolną odległość.",
    "Dużą precyzję odbijanej piłki.",
    "\"Bezrotacyjność\" odbicia piłki.",
    "Skrócenie odległości wystawianej piłki do atakującego."
  ],
  "Siatkówka plażowa. Pierwsze medale dla Polski w rozgrywkach międzynarodowych zdobyli :": [
    "Michał Kądzioła i Jakub Szałankiewicz srebrny medal Mistrzostw Świata w Rzymie.",
    "Tomasz Sińczak i Rafał Szternel – brązowy medal Mistrzostw Świata U-18 Pattaya Tajlandia.",
    "Grzegorz Fijałek i Mariusz Prudel – brązowy medal World Tour w Marsylii.",
    "Monika Brzostek i Kinga Kołosińska – brązowy medal Mistrzostw Europy w Klagenfurcie."
  ],
  "Siatkówka plażowa. Wystawę sposobem oburącz górnym stosujemy, gdy:": [
    "Zawsze, gdy wystawiamy piłkę.",
    "Wystawiana jest piłka z kontry.",
    "Tor lotu i warunki pogodowe gwarantują możliwość czystego odbicia piłki.",
    "Piłka jest \"wgrana\" wysoko na górną część siatki."
  ],
  "Środki wspomagające to:": [
    "Wszystkie odpowiedzi są prawdziwe.",
    "Tylko legalne (nie zabronione) środki i metody.",
    "Środki i metody nielegalne, zabronione, znajdujące się na liście WADA.",
    "Legalne i nielegalne środki ergogeniczne."
  ],
  "Proces rehydratacji (nawodnienia) zachodzi najszybciej jeśli:": [
    "Wszystkie odpowiedzi są prawdziwe.",
    "Podawane płyny są o odpowiednim ciśnieniu osmotycznym podobnym do ciśnienia osmotycznego krwi.",
    "Wraz z wodą podawane są roztwory elektrolitów (chlorki potasu i sodu) oraz glukozy.",
    "Podawane płyny są izotoniczne."
  ],
  "Bóle w dolnym odcinku kręgosłupa są spowodowane:": [
    "Stanami przeciążeniowymi mięśni i więzadeł odcinka lędźwiowego kręgosłupa oraz mięśni rotatorów.",
    "Stanami przeciążeniowymi mięśni rotatorów oraz mięśnia 4-głowego.",
    "Wszystkie odpowiedzi są fałszywe.",
    "Stanami przeciążeniowymi mięśni i więzadeł odcinka lędźwiowego kręgosłupa."
  ],
  "Do pomiaru maksymalnego minutowego poboru tlenu (wydolności tlenowej) należy zastosować test:": [
    "Wingate.",
    "Bosco.",
    "Stopniowany.",
    "Harwardzki."
  ],
  "Wydolność aerobowa mierzona jest przez pomiar:": [
    "Maksymalnego minutowego poboru tlenu.",
    "Maksymalnej siły mięśni.",
    "Maksymalnej mocy mięśni.",
    "Submaksymalnej częstości skurczów serca."
  ],
  "Przed rozpoczęciem meczu na boisku znalazł się zawodnik niewpisany na kartce z ustawieniem. Jakie są konsekwencje?": [
    "Trener może zadecydować o pojawieniu się na boisku zawodnika wpisanego na kartce z ustawieniem, a w tym celu przeprowadzana jest zmiana regulaminowa",
    "Sekretarz poprawia zapis na kartce z ustawieniem oraz w protokole zawodów na zgodny ze stanem na boisku – bez pytania trenera zespołu",
    "Trener może zdecydować o pozostawieniu tego zawodnika na boisku, zapis na kartce z ustawieniem jest korygowany",
    "Trener może zadecydować o pojawieniu się na boisku zawodnika wpisanego na kartce z ustawieniem, wówczas nie przeprowadza się zmiany regulaminowej"
  ],
  "W którym z poniższych przypadków zespół nie straci punktu w wyniku kary?": [
    "W żadnym z tych przypadków zespół nie straci punktu",
    "Dwaj zawodnicy jednego zespołu pobili się",
    "Po tym jak zawodnikowi nr 3 sędzia pokazał czerwoną kartkę, zawodnik nr 9 wdał się w dyskusję z przeciwnikiem (zachował się grubiańsko)",
    "Po tym, jak sędzia pokazał zawodnikowi nr 5 żółtą kartkę, kapitan zespołu zaprotestował przeciwko decyzji sędziego machając rękoma i wyrażając sprzeciw okrzykiem"
  ],
  "Które wykonanie zagrywki jest nieprawidłowe?": [
    "Zawodnik po gwizdku sędziego I zorientował się, że nie on ma wykonać zagrywkę. Przywołał właściwego zawodnika, przekazał mu piłkę i wbiegł na boisko. Zagrywka została wykonana w ciągu 8 sekund od gwizdka sędziego",
    "Po gwizdku sędziego I zagrywający wyszedł z pola zagrywki i stamtąd rozpoczął rozbieg. Odbicie do zagrywki z wyskoku nastąpiło już w polu zagrywki",
    "Zawodnik rozsunął panele reklamowe za boiskiem i wykonał zagrywkę spomiędzy nich",
    "Zawodnik wykonał zagrywkę łokciem"
  ],
  "Najskuteczniejsze działania integrujące i budujące więzi w sytuacji rozwiązywania konfliktów to:": [
    "Przyjęcie odpowiedzialności, podkreślenie wspólnoty, brak wsparcia osobistego.",
    "Wsparcie osobiste, uściślenie zarzutów, brak prośby o odsłonięcie rozmówcy.",
    "Odsłonięcie rozmówcy, wsparcie osobiste, uściślenie zarzutów.",
    "Odsłanianie się, brak wsparcia osobistego, podkreślenie wspólnoty."
  ],
  "Według koncepcji Selingmana zawodnicy tłumaczą swoje sukcesy/porażki poniższymi wymiarami:": [
    "Personalizacja, stałość, zasięg.",
    "Samokontrola, personalizacja, zaangażowanie.",
    "Zasięg, zaangażowanie, niezależność.",
    "Personalizacja, stałość, zaangażowanie."
  ],
  "Do najważniejszych etapów treningu umiejętności psychologicznych należy:": [
    "Opanowanie technik włączania się w bodżce negatywne.",
    "Opanowanie technik budowania pewności siebie w oparciu o negatywny dialog wewnętrzny.",
    "Opanowanie technik prawidłowego formułowania celów wynikowych.",
    "Opanowanie technik relaksacji autogennej i progresywnej."
  ],
  "Cele pedagogiczne funkcjonowania młodego zespołu to:": [
    "Kształtowanie ducha gry zespołowej i współpracy.",
    "Kształtowanie świadomości kontuzji.",
    "Przekazywanie wiedzy na temat psychologii wychowawczej.",
    "Pozytywne wzmacnianie zdolności młodych zawodników."
  ],
  "Podstawowy wymiar najtrafniej opisujący stan umysłu w przepływie to:": [
    "Utrata podświadomości.",
    "Jasne cele.",
    "Koncentracja na przeszłości.",
    "Niejednoznaczna informacja zwrotna."
  ],
  "W czym przejawia się zasada indywidualizacji?": [
    "Doborze ćwiczeń.",
    "Liczbie powtórzeń, tempie wykonania, liczbie serii.",
    "Regulacji masy ciała.",
    "Dostosowanie rozwiązań metodycznych do możliwości i potrzeb zawodników."
  ],
  "Selekcja kierowana polega na:": [
    "Parametrów somatycznych zawodników.",
    "Samoocenie i samokontroli zawodników.",
    "Doświadczeniu i wiedzy praktycznej oraz intuicji trenera prowadzącego szkolenie.",
    "Sformalizowany system norm i ich wartości w przechodzeniu kolejnych etapów szkolenia."
  ],
  "Która z prób sprawnościowych w naborze do SMS odbywa się na boisku siatkarskim?": [
    "Bieg na 10 m ze startu zatrzymanego.",
    "Bieg zwinnościowy ze zmianą kierunków.",
    "Rzut piłką lekarską.",
    "Zasięg oburącz w wyskoku z miejsca."
  ],
  "Który z treningów siły jest wskazany dla młodocianych siatkarzy?": [
    "Trening kulturystyczny.",
    "Trening obwodowy.",
    "Trening ciężkoatletyczny.",
    "Trening izometryczny."
  ],
  "Które z cech motorycznych warunkują poziom skoczności?": [
    "Koordynacja ruchowa i szybkość.",
    "Szybkość i wytrzymałość.",
    "Szybkość i siła.",
    "Siła i gibkość."
  ],
  "Który okres rozwojowy nazywany jest złotym wiekiem rozwoju sprawności?": [
    "Okres młodszy szkolny.",
    "Okres dojrzałości.",
    "Okres młodzieńczy.",
    "Okres starszy szkolny."
  ],
  "Ilu wystawiających musi być w drużynie, która atakować będzie wyłącznie w systemie po wystawie zawodnika z linii ataku:": [
    "Jeden.",
    "Co najmniej dwóch.",
    "Czterech.",
    "Co najmniej trzech."
  ],
  "Sposoby przemieszczania się po boisku w piłce siatkowej to:": [
    "Piwot, rzut siatkarski, rozbieg.",
    "Wyskok, pad siatkarski, obrót.",
    "Wypad, doskok, pad siatkarski.",
    "Krok dostawny, krok skrzyżny, zwód podwójny przodem."
  ],
  "Systemy rozbiegu do ataku w 1 tempo to:": [
    "System stały i płynny.",
    "Nie istnieje żaden system.",
    "System stabilny i płynny.",
    "System stały i zmienny."
  ],
  "Warianty ataku w 1 tempo ustala:": [
    "Zawodnik przyjmujący.",
    "Trener - to on w pierwszej kolejności wywołuje akcje po przyjęciu zagrywki.",
    "Zawodnik środkowy – to on w pierwszej kolejności wywołuje akcje po przyjęciu zagrywki.",
    "Zawodnik rozgrywający – to on w pierwszej kolejności wywołuje akcje po przyjęciu zagrywki."
  ],
  "Środkowy zmienia akcję bazową, tak aby stanowić zagrożenie (otwiera siatkę) w sytuacji gdy:": [
    "Piłka przyjęta jest w strefę \"0\".",
    "Piłka przyjęta jest wzdłuż siatki bliżej strefy IV lub strefy II.",
    "Środkowy nie może zmieniać akcji bazowej.",
    "W każdym kolejnym kontrataku."
  ],
  "Zdanie najdokładniej opisujące rytm rozbiegu do ataku to:": [
    "Długi krok lewą nogą i spokojne przemieszczenie w dwa ostatnie kroki (prawa/lewa).",
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Krótki krok lewą nogą i przyspieszenie w dwóch ostatnich krokach (prawa/lewa).",
    "Długi, spokojny krok lewą nogą i przyspieszenie w dwóch ostatnich krokach (prawa/lewa)."
  ],
  "Pozycje wyjściowe do bloku po zmianie stref to:": [
    "Wąsko w prawo, wąsko na środku.",
    "Wąsko w lewo, nogi ugięte.",
    "Szeroko, ciasno.",
    "Wąsko, szeroko."
  ],
  "Wskaż właściwy sposób ustawiania bloku w strefie II lub IV przez zawodnika skrzydłowego:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Po kroku skrzyżnym z ustawienia wąskiego.",
    "Po kroku dostawnym z ustawienia szerokiego.",
    "Po kroku dostawnym z ustawienia wąskiego."
  ],
  "Kolejność nauczania odbić górnych jest następująca:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Odbicie oburącz górne w przód i w tył w miejscu - odbicie oburącz górne w przód i w tył po przemieszczeniu - odbicie oburącz górne w przód i w tył w wyskoku.",
    "Odbicie oburącz górne w przód i w tył w wyskoku - odbicie oburącz górne w przód i w tył po przemieszczeniu - odbicie oburącz górne w przód i w tył w miejscu.",
    "Odbicie oburącz górne w przód i w tył po przemieszczeniu - odbicie oburącz górne w przód i w tył w miejscu - odbicie oburącz górne w przód i w tył w wyskoku."
  ],
  "Które z ćwiczeń nie jest przygotowującym do nauki odbić górnych:": [
    "Podrzut i chwyt piłki oburącz ponad głową.",
    "Po podrzucie obrót, chwyt piłki.",
    "Wszystkie odpowiedzi są właściwe.",
    "Odbicia wielokrotne ponad głową."
  ],
  "Wskaż ćwiczenie zawierające błąd w nauczaniu ruchu ramienia uderzającego przy zagrywce szybującej bez wyskoku:": [
    "Ćwiczący z piłką, ręka ugięta w stawie łokciowym",
    "Ddoprowadzanie ramienia do piłki znajdującej się nad barkiem ręki uderzającej, trzymanej przez współćwiczącego lub trenera, stojącego na podwyższeniu.",
    "Z ustawienia przodem do ściany, w postawie rozkroczno-wykrocznej, z nogą wykroczną jednoimienną do ręki uderzającej, ręka uderzająca uniesiona do góry, nieznacznie ugięta w stawie łokciowym, zamach i uderzenie dłonią w ścianę lub drabinki na maksymalnym zasięgu.",
    "Z ustawienia przodem do ściany, w postawie rozkroczno-wykrocznej, z nogą wykroczną przeciwną do ręki uderzającej, ręka uderzająca uniesiona do góry, nieznacznie ugięta w stawie łokciowym, zamach i uderzenie dłonią w ścianę lub drabinki na maksymalnym zasięgu."
  ],
  "Która z zasad nauczania zakłada dobór treści zajęć dostosowany do określonego poziomu umiejętności ćwiczących:": [
    "Zasada świadomości i aktywności.",
    "Zasada stopniowania trudności.",
    "Zasada wszechstronności.",
    "Zasada poglądowości."
  ],
  "System gry w obronie to współdziałanie zawodników:": [
    "Rozgrywających - atakujących.",
    "Wszystkie odpowiedzi są błędne.",
    "Blokujących – broniących w polu – asekurujących.",
    "Atakujących – blokujących – broniących w polu."
  ],
  "Która z zasad organizacji kontrataku obowiązuje w przypadku obrony przez zawodnika rozgrywającego:": [
    "Wystawia ten, kto ma piłkę z prawej strony.",
    "Wystawia zawodnik strefy II.",
    "Wystawia środkowy ataku, jeżeli piłka spada w polu ataku.",
    "Wystawia zawodnik strefy IV."
  ],
  "Taktykę indywidualną ataku z piłki sytuacyjnej ze skrzydła opisuje zdanie:": [
    "Niedokładnie wystawioną piłkę kiwamy na libero.",
    "Podejmujemy ryzyko w każdej akcji.",
    "Piłkę niedokładnie wystawioną atakujemy \"mądrze\", najczęściej do strefy I na atakującego lub rozgrywającego drużyny przeciwnej.",
    "Każdą piłkę atakujemy po bloku w aut."
  ],
  "W grze obronnej od początku szkolenia zawodnicy powinni dążyć do takiego ustawiania na boisku, aby obrona odbywała się:": [
    "W możliwie stabilnej postawie.",
    "W zachwianej równowadze, ponieważ jest to obrona widowiskowa.",
    "Wyłącznie sposobem oburącz dolnym.",
    "Wyłącznie sposobem oburącz górnym."
  ],
  "Przewidując (czytając) działania przeciwnika w grze, w przypadku gdy piłka została wystawiona za wąsko do skrzydła i jest zasłonięta przez blok, obrońca ustawiony po prostej powinien:": [
    "Dostosować się i wykonać ruch do środka boiska.",
    "Dostosować się i wykonać ruch wzdłuż linii bocznej.",
    "Przemieścić się do asekuracji za każdym razem.",
    "Zawodnik pozostaje na swojej pozycji."
  ],
  "Schemat ustawienia obrońców na pozycjach wyjściowych przedstawiony na rysunku 33a stosowany jest:": [
    "Wyłącznie na poziomie kadeta.",
    "Wyłącznie na poziomie młodzika.",
    "Wyłącznie na poziomie juniora",
    "Jako najczęściej występujący system."
  ],
  "W pozycji bazowej obrońca, który prawidłowo zareagował (przewidział działania przeciwnika), powinien:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Być w ciągłym ruchu.",
    "Zatrzymać się.",
    "Wykonać naskok na pięty."
  ],
  "Rola pierwszego przyjmującego w grze. Wskaż zdanie prawdziwe:": [
    "Jest zawodnikiem obrony w ustawieniach R4, R5, R6.",
    "Wykonuje atak po przyjęciu zagrywki również z prawego skrzydła.",
    "Wszystkie odpowiedzi są prawdziwe.",
    "Jest zawodnikiem linii ataku w ustawieniach R1, R2, R3."
  ],
  "W którym ustawieniu lub ustawieniach zawodnik przyjmujący grający w linii ataku ustawiony jest do przyjęcia zagrywki na prawej stronie boiska:": [
    "R 6.",
    "R 1 i R 6",
    "R 1.",
    "R 1 i R 2."
  ],
  "Stosunek ilości wszystkich działań w danym elemencie wykonanym przez zawodnika do ilości wszystkich działań w tym samym elemencie wykonanym przez zespół wyraża:": [
    "Współczynnik udziału w grze.",
    "Współczynnik skuteczności.",
    "Wszystkie odpowiedzi są prawdziwe.",
    "Współczynnik \"WEG\"."
  ],
  "Które z wymienionych cech są charakterystyczne dla planu szkoleniowego:": [
    "Plastyczność, przebojowość.",
    "Celowość, wykonalność.",
    "Niezmienialność, niewymierność.",
    "Wszystkie odpowiedzi są prawidłowe."
  ],
  "Plan organizacji szkolenia składa się z dwóch części, wskaż właściwe:": [
    "Przygotowawcza, startowa.",
    "Papierowa, elektroniczna.",
    "Opisowa, graficzna.",
    "Wstępna, końcowa."
  ],
  "Wyższość ćwiczeń przeplatanych nad powtarzanymi w nauczaniu ruchu polega na:": [
    "Możliwości dokonywania poprawek w następnej próbie.",
    "Większej dokładności nauczania w danym momencie.",
    "Większym efekcie nauczania po jakimś czasie.",
    "Szybszej możliwości opanowania podstawowego wzorca ruchu."
  ],
  "Który system jako pierwszy pozwala na wprowadzanie specjalizacji środkowego:": [
    "System mieszany.",
    "System 4-2 z rozgrywającym z II linii.",
    "System 3-3.",
    "System 4-2 z rozgrywającym w I linii."
  ],
  "Jaki zakres informacji w przewidywaniu ataku, powinien być przekazywany blokującemu w pierwszej kolejności, w wieku juniora:": [
    "Obserwacja nóg atakującego.",
    "Ocena miejsca wystawienia.",
    "Świadomość wyniku i tempa gry.",
    "Obserwacja ręki i dłoni atakującego."
  ],
  "Jaki sposób gry wprowadzany jest w kategorii juniora:": [
    "Kombinacja „pipe”.",
    "Przyjęcie zagrywki przez trzech zawodników.",
    "Szybka piłka do skrzydła „quick”.",
    "Specjalizacja atakującego."
  ],
  "Podstawowym zadaniem broniącego w minisiatkówce, w grze 2x2, jest:": [
    "Stała pozycja w obronie.",
    "Dostosowanie pozycji w obronie do atakującego.",
    "Gra bez specjalizacji funkcji.",
    "Gra bez specjalizacji pozycji."
  ],
  "Które z umiejętności decydują o jakości przyjęcia zagrywki:": [
    "Sytuacyjne techniki przyjęcia.",
    "Mentalne nastawienie do przyjęcia.",
    "Technika przyjęcia piłki szybującej i rotacyjnej.",
    "Płynne przejście od przyjęcia do ataku."
  ],
  "Na jaki element w nauczaniu bloku zwraca się uwagę po opanowaniu innych wcześniejszych elementów bloku:": [
    "Przemieszczanie.",
    "Przełożenie ramion.",
    "Położenie dłoni.",
    "Postawa wyjściowa."
  ],
  "Który rodzaj asekuracji jest najczęściej stosowany przez zespoły grające atak z „pipe”:": [
    "2-3 stały.",
    "3-2 stały.",
    "1-3 z libero z tyłu.",
    "1-3 z libero z przodu."
  ],
  "Zmiana założeń zespołowych gry w etapach szkolenia młodzieży zależy od rozwoju umiejętności:": [
    "Gry w obronie.",
    "Gry w bloku.",
    "Gry w ataku.",
    "Zagrywki."
  ],
  "Jakie działanie zawodnika atakującego w treningu indywidualnym jest priorytetowe:": [
    "Atak z II linii.",
    "Blokowanie w sytuacji 1 na 1.",
    "Zagrywka tenisowa z wyskoku.",
    "Asekuracja piłki."
  ],
  "System obrony 1 -1 -2 oznacza:": [
    "Dwóch broniących po skosie, jeden po prostej i jeden w asekuracji.",
    "Jeden broniący po skosie, dwóch w głębi pola i jeden w asekuracji.",
    "Jeden broniący po prostej, jeden na „szwie” bloku i dwóch po skosie.",
    "Jeden broniący po skosie, jeden na „szwie” bloku i dwóch po prostej."
  ],
  "Jakie zadania ma zawodnik lepiej przyjmujący ustawiony do przyjęcia w trzech zawodników:": [
    "Bierze piłki na styku (\"pomiędzy\").",
    "Reaguje na piłkę.",
    "Nie przemieszcza się w kierunku przyjęcia.",
    "Jest współodpowiedzialny, gdy piłka spadnie \"pomiędzy\"."
  ],
  "Jaką rolę w treningu spełnia atrapa bloku:": [
    "Ułatwia wykonanie czynności.",
    "Przekazuje informację zwrotną o działaniu.",
    "Zastępuje działanie zawodnika.",
    "Umożliwia pomiar."
  ],
  "Który rodzaj treningu prowadzi do znacznej poprawy szybkości działania oraz poszczególnych składowych szybkości:": [
    "Trening techniczny.",
    "Trening kompleksowy zbliżony do profilu gry.",
    "Trening motoryczny.",
    "Trening psychologiczny."
  ],
  "Przejście z fazy ataku do fazy obrony następuje w momencie:": [
    "Po przejściu piłki nad siatką na stronę rywala.",
    "Po wystawieniu piłki przez własny zespół .",
    "Po zaatakowaniu piłki przez własny zespół.",
    "Po przejściu piłki na własną połowę."
  ],
  "Która z zasad zwiększania kompetencji bloku w kolejnych latach szkolenia jest istotna:": [
    "Ustawienie bloku naprzeciwko atakowanej piłki.",
    "Ustawienie bloku na kierunku rozbiegu atakującego.",
    "Ustawienie bloku w kontekście boiska z uwzględnieniem broniących w polu.",
    "Wszystkie odpowiedzi są prawidłowe."
  ],
  "Jakie zadanie ma łączenie poprzez trening różnych dyspozycji w interdyspozycje do gry:": [
    "Zwiększenie sumy działania poszczególnych dyspozycji.",
    "Uzyskanie umiejętności sprawnego działania w osiągnięciu celów gry.",
    "Rozwój każdej dyspozycji z osobna.",
    "Nie ma to większego znaczenia."
  ],
  "Jaka umiejętność przyjmującego wynika z „głębokiego widzenia”:": [
    "Dostosowanie trajektorii przyjęcia.",
    "Czucie „kątów” przyjęcia.",
    "Wczesny ruch do piłki.",
    "Dostosowanie ustawienia do przewidywanej zagrywki."
  ],
  "Które z działań w taktyce indywidualnej rozgrywającego „ustawia grę”:": [
    "Ukrywanie zamiarów.",
    "Utrzymanie stałego zagrożenia atakiem w I tempo lub atakiem z drugiej piłki.",
    "Rozegranie sytuacyjne i kombinacyjne.",
    "Utrzymanie widzenia peryferycznego."
  ],
  "Siatkówka plażowa. Zagrywka słoneczna charakteryzuje się:": [
    "Bardzo wysokim torem lotu piłki.",
    "Szybującym torem lotu piłki.",
    "Dużą rotacją.",
    "Podatnością na wpływ wiatru."
  ]
}; // tablica z wszystkimi pytaniami

const allAnswers = {
  "Analiza fazowa ruchu w siatkówce nie umożliwia określenia:": [
    "Struktury czasowej zagrywki.",
    "Liczby i częstotliwości kroków podczas np. rozbiegu."
  ],
  "Do rotatorów wewnętrznych stawu biodrowego należy:": [
    "Mięsień pośladkowy średni."
  ],
  "Po około 25 roku życia zmniejsza się:": [
    "Tylko wydolność aerobowa."
  ],
  "Oznaczenie stężenia mleczanu we krwi:": [
    "Stężenie mleczanu po wysiłkach o charakterze beztlenowym zależy m.in. od specyfiki treningowej i stopnia wytrenowania zawodnika.",
    "Może służyć także jako marker do planowania  i prowadzenia treningu sportowego z określoną intensywnością."
  ],
  "Do oceny mocy wybicia w wyskoku można użyć testu:": [
    "Bosco."
  ],
  "W przypadku pełnosprawnych zawodników orzeczenie o zdolności do sportu może wydać:": [
    "Tylko specjalista medycyny sportowej."
  ],
  "Ruchy w stawie biodrowym to wszystkie z wyjątkiem:": [
    "Unoszenie."
  ],
  "Do oceny zdolności wytrzymałościowych w grach zespołowych można zastosować test:": [
    "RAST."
  ],
  "Jaka jest właściwa kolejność w ceremoniale przedmeczowym?": [
    "Pomiar wysokości siatki, rozgrzewka przy siatce,  losowanie, dostarczenie kartek z ustawieniem początkowym, przywitanie się zespołów"
  ],
  "Przeciwnik wygrał losowanie i wskazał stronę boiska, na której chce rozpocząć mecz. Co może wybrać w tym momencie kapitan drugiego zespołu?": [
    "Nie może wybrać żadnej z powyższych opcji"
  ],
  "Do najważniejszych etapów treningu umiejętności psychologicznych należy:": [
    "Opanowanie technik relaksacji autogennej i progresywnej.",
    "Opanowanie technik włączania się w bodżce negatywne."
  ],
  "Jaki styl zachowania na boisku powinni przyjąć zawodnicy w sytuacji zagrożenia:": [
    "Styl kierujący: zawodnik kieruje innymi zawodnikami a nie swoim zachowaniem."
  ],
  "Zawodnicy czynnie uprawiający sport kierują się poniższymi motywami działalności sportowej:": [
    "Chęcią pokonania lęku przed porażką."
  ],
  "Technika wizualizacji sprzyja wspieraniu rehabilitacji zawodnika w trakcie kontuzji, ponieważ sportowcy używają poniższych rodzajów wyobrażeń:": [
    "Wyobrażeń poznawczych specyficznych i wyobrażeń motywacyjnych specyficznych."
  ],
  "Koordynacja ruchowa jest funkcją?": [
    "Gibkości i sprawności układu nerwowego."
  ],
  "Które mezocykle pełnią główną rolę w okresie przygotowawczym?": [
    "Kontrolno-przygotowawczy, przedstartowy."
  ],
  "Które rodzaje treningu realizowane są w przekroju całej kariery zawodnika?": [
    "Techniczny i taktyczny."
  ],
  "Do jakiej grupy ćwiczeń należy zaliczyć sporty uzupełniające?": [
    "Wszechstronne."
  ],
  "W czym przejawia się zasada indywidualizacji?": [
    "Regulacji masy ciała.",
    "Doborze ćwiczeń."
  ],
  "Który z parametrów treningu nie jest korzystny dla właściwego treningu szybkości?": [
    "Zmęczenie."
  ],
  "Która z definicji treningu sportowego w pełni oddzwierciedla jego istotę?": [
    "Jednostka treningowa, zajęcia szkoleniowe.",
    "Zespół oddziaływań trenera na zawodnika."
  ],
  "Sposoby przemieszczania się po boisku w piłce siatkowej to:": [
    "Piwot, rzut siatkarski, rozbieg.",
    "Wyskok, pad siatkarski, obrót."
  ],
  "Które zdanie najlepiej opisuje odbicie dolne oburącz:": [
    "Ramiona wyprostowane, nogi ugięte, tułów pochylony w przód."
  ],
  "Które zdanie nie opisuje fazy podrzutu i rozbiegu w zagrywce szybującej w wyskoku:": [
    "Wszystkie odpowiedzi są nieprawidłowe.",
    "Dwukrokowe przemieszczenie (z pozycji przygotowawczej – pierwszy krok lewą nogą – dostawienie lewej - wyskok)."
  ],
  "Który rysunek przedstawia prawidłowe miejsce odbicia do ataku z jednej nogi dla akcji bazowej C:": [
    "Rysunek 24."
  ],
  "Rozbieg do ataku w 1 tempo w systemie stałym charakteryzuje:": [
    "W przypadku akcji \"7\" środkowy wykonuje rozbieg trzy metry od linii bocznej."
  ],
  "Wskaż zdanie opisujące prawidłową technikę ataku w trzecim tempie:": [
    "Rozpoczęcie rozbiegu do ataku z piłki wysokiej przed wystawieniem po ocenie trajektorii lotu piłki dogrywanej do rozgrywającego (gdy piłka dogrywana jest w najwyższym punkcie trajektorii lotu)."
  ],
  "W przypadku przyjęcia wzdłuż siatki, bliżej strefy II lub strefy IV, atakujący zmienia akcję bazową wg klucza:": [
    "Z \"2\" na \"1\" w przypadku przyjęcia/dogrania bliżej strefy II."
  ],
  "Rysunek 18 przedstawia sytuację, w której środkowy atakujący w 1 tempo w systemie płynnym:": [
    "Bez względu na rodzaj i dokładność przyjęcia lub dogrania piłki zawsze wykonuje rozbieg przed lub za zawodnikiem rozgrywającym ( jest ,,powiązany’’ z zawodnikiem R)."
  ],
  "Pozycje wyjściowe do bloku określane jako ustawienie wąsko w prawo – nie są stosowane w sytuacji gdy:": [
    "Przeciwnik posiada mocnego atakującego w strefie II lub I.",
    "Przy założeniu gry opcją do strefy II/I."
  ],
  "W sygnalizacji zawodników w bloku – cała dłoń lub ugięte dwa palce - oznaczają:": [
    "Blok na kierunku 1.",
    "Blok potrójny."
  ],
  "Strefa bloku - przekątna - to określenie:": [
    "Blok na kierunku 0."
  ],
  "Wskaż zdanie, w którym nie występują błędy w technice odbić dolnych:": [
    "Zbyt obszerny zakres ruchu ramion w stawach ramiennych (zbyt wysokie unoszenie ramion)."
  ],
  "Wskaż błędy występujące w technice odbić górnych:": [
    "Niewłaściwe miejsce kontaktu z piłką, np. odbicie na wysokości klatki piersiowej."
  ],
  "Wskaż błąd, który pojawia się w fazie uderzenia, w technice wykonania zagrywki szybującej bez wyskoku:": [
    "Wszystkie odpowiedzi są właściwe."
  ],
  "Następstwem którego z błędów, w technice wykonania zagrywki szybującej w wyskoku, jest zagrywka w aut lub w siatkę:": [
    "Niewłaściwe miejsce kontaktu z piłką w fazie uderzenia, np. uderzenie piłki za głową lub za nisko na wysokości głowy."
  ],
  "Przykładowe przepisy w grze szkolnej to:": [
    "Łapanie i rzucanie piłki, większa liczba odbić w jednej akcji (więcej niż 3), dopuszczenie dodatkowych odbić nad sobą przez jednego zawodnika.",
    "Wszystkie odpowiedzi są poprawne.",
    "Przybliżenie pola zagrywki (np. do 3 m od siatki), zagrywanie rzutem piłki, zagrywanie odbiciem oburącz.",
    "Obowiązek stosowania wyłącznie odbić górnych - ograniczenie pola, w które należy trafić zagrywką - wskazanie obowiązkowego kierunku atakowania (np. po prostej).",
    "Wszystkie odpowiedzi są poprawne."
  ],
  "System gry w obronie to współdziałanie zawodników:": [
    "Rozgrywających - atakujących.",
    "Wszystkie odpowiedzi są błędne."
  ],
  "W fazie Break Point efektywność gry w obronie nie może być zwiększona poprzez:": [
    "Przygotowanie pierwszej akcji w obronie wykorzystując zagrywkę."
  ],
  "Którą strategię w systemie zdobywania punktów przy zagrywce własnej, powinien zastosować zespół posiadający dobry blok i obronę:": [
    "Należy zagrać tak, aby zdobyć punkt."
  ],
  "Którą z poniższych zasad, współpracując w obronie, stosują zawodnicy (rysunek 47): nieblokujący w strefie IV ze skrzydłowym w strefie V, w przypadku bloku w strefie II na kierunku 1 - zasłaniający prostą:": [
    "Zawodnik 4 – broni piłki atakowane po ostrym skosie i spadające wzdłuż siatki oraz do środka boiska / Zawodnik 5 - broni piłki atakowane skosie i po przekątnej.",
    "Zawodnik 4 - wbiega do asekuracji  za blok / Zawodnik 5 - broni piłki atakowane skosie i po przekątnej."
  ],
  "Zawodnik broniący w strefie I atak po skosie, powinien zatrzymać się w pozycji bazowej w momencie:": [
    "Rozpoczęcia rozbiegu do ataku przez zawodnika atakującego.",
    "Kontaktu dłoni atakującego z piłką."
  ],
  "W przygotowaniu statystyk stosunek działań zakończonych sukcesem do sumy wszystkich działań w tym elemencie wyraża:": [
    "Wspołczynnik skuteczności."
  ],
  "Analiza rozkładu ataku w opracowaniach statystyki meczowej uwzględnia:": [
    "Wszystkie odpowiedzi są poprawne."
  ],
  "Symbol = w języku Data Volley oznacza:": [
    "Wszystkie odpowiedzi są prawdziwe."
  ],
  "Wskaż, który z celów sportu jest najważniejszy wg trenerów:": [
    "Wszystkie wymienione cele są ważne."
  ],
  "Demokratyczy styl kierowania zespołem charakteryzuje się tym, że:": [
    "Wszyscy członkowie grupy są równoprawni przy podejmowaniu decyzji i rozwiązywaniu problemów dotyczących grupy."
  ],
  "Jaki element techniczny nie jest podstawą do opanowania innych elementów gry:": [
    "Blok."
  ],
  "Jaki rodzaj treningu jest bazą dla treningu specjalistycznego:": [
    "Trening fizyczny.",
    "Trening taktyczny."
  ],
  "Które ze stwierdzeń charakteryzuje nowoczesne podejście do treningu:": [
    "Ciągłe powtarzanie ćwiczeń technicznych prowadzi do sukcesu."
  ],
  "W złotym wieku sprawności u dzieci następuje wysoka dynamika przyrostu cech motorycznych. Odnosi się to szczególnie do:": [
    "Zwinności."
  ],
  "Która z przedstawionych umiejętności nie jest zgodna z Programem szkolenia kadeta:": [
    "Wystawienie piłki przyspieszonej (super)"
  ],
  "Podczas nauki i doskonalenia zagrywki priorytetem jest:": [
    "Zajęcie właściwej pozycji."
  ],
  "Jaki element podczas nauki ataku najmniej wpływa na szybkość uderzanej piłki:": [
    "Przyspieszenie ręki do piłki."
  ],
  "Który ze sposobów zagrywania powinien być nauczany jako pierwszy:": [
    "Zagrywka rotacyjna z miejsca."
  ],
  "Jaka forma realizacji zadań odróżnia grę od fragmentów gry:": [
    "Realizacja zadań poprzez symulowanie akcji."
  ],
  "Czym uwarunkowany jest poprawny kąt dojścia atakującego do siatki w grze 6x6:": [
    "Rodzajem ataku."
  ],
  "Który z wymienionych trenażerów pełni inną funkcję niż pozostałe:": [
    "Atrapa bloku."
  ],
  "Jaki element taktyki indywidualnej zagrywającego jest najczęściej wykorzystywany podczas gry:": [
    "Kierunek  zagrywki."
  ],
  "W jakim zasięgu stosowana jest najczęściej obrona padem:": [
    "Długim (odległość równa wysokości zawodnika + 2 m)."
  ],
  "W szkoleniu młodzieży ćwiczenia analityczne stosuje się:": [
    "W doskonaleniu systemów gry."
  ],
  "Co jest podstawą pracy na treningach z rozgrywającym:": [
    "Wychwycenie problemów rozgrywającego."
  ],
  "W treningu siłowym liczba 3-5 serii na ćwiczenie po 8-12 powtórzeń, to proces kształtowania:": [
    "Adaptacji anatomicznej.",
    "Hipertrofii.",
    "Mocy."
  ],
  "W którym roku odbyły się w Polsce Mistrzostwa Świata w siatkówce plażowej mężczyzn:": [
    "W 1998 roku."
  ],
  "Siatkówka plażowa. Jakim systemem rozgrywane są turnieje finałowe Mistrzostw Polski seniorów i seniorek:": [
    "Systemem \"każdy z każdym\"."
  ],
  "Siatkówka plażowa. Pierwsze medale dla Polski w rozgrywkach międzynarodowych zdobyli :": [
    "Michał Kądzioła i Jakub Szałankiewicz srebrny medal  Mistrzostw Świata w Rzymie.",
    "Grzegorz Fijałek i Mariusz Prudel – brązowy medal World Tour w Marsylii.",
    "Michał Kądzioła i Jakub Szałankiewicz srebrny medal  Mistrzostw Świata w Rzymie."
  ],
  "Problemy jakimi zajmuje się medycyna sportowa to:": [
    "Monitorowanie stanu zdrowia sportowca, bezpieczeństwo w sporcie i udzielanie pierwszej pomocy."
  ],
  "Do grupy bocznej mięśni przedramienia należy:": [
    "Zginacz łokciowy nadgarstka."
  ],
  "Pełny zakres badań wymaganych do uzyskania orzeczenia o zdolności do sportu trzeba wykonać:": [
    "Co 6 miesięcy."
  ],
  "Wysiłek o intensywności wynoszącej 75%VO2max to wysiłek o intensywności:": [
    "Submaksymalnej.",
    "Supramaksymalnej."
  ],
  "Niekwasomlekowa faza długu tlenowego trwa około:": [
    "10 min."
  ],
  "Jakie są konsekwencje błędu rotacji?": [
    "Zespół, który zagrywał tkwiąc w błędzie rotacji straci punktu zdobyte od momentu powstania błędu – ale tylko, jeśli można ustalić moment powstania błędu"
  ],
  "Który z poniższych przypadków jest przykładem prośby nieuzasadnionej nie skutkującej sankcjami dla zespołu?": [
    "Trener poprosił o trzecią przerwę dla odpoczynku w secie i została ona przyznana. Po dłuższej chwili zespołom kazano powrócić na boisko"
  ],
  "W sytuacji pomocy zawodnikowi po kontuzji należy zastosować:": [
    "Technikę wyobrażeń dotyczących celów wynikowych."
  ],
  "W profilu umiejętności stosowanym w pracy trenera należy uwzględnić:": [
    "Aspekty fizyczne, techniczne, koordynacyjne, strategiczne i psychologiczne."
  ],
  "Trzy style komunikacji motywującej to:": [
    "Podążanie, prowadzenie, kierowanie."
  ],
  "Najczęściej wykorzystywane zasady komunikacji interpersonalnej w relacji trener-zawodnik to:": [
    "Założenie, że zawodnicy mają podobne lub takie same doświadczenia."
  ],
  "W którym okresie w makrocyklu występuje mikrocykl wprowadzający?": [
    "Startowym."
  ],
  "Czym jest dokumentacja szkoleniowa?": [
    "Sprawozdaniem z realizacj szkolenia po zakończeniu makrocyklu."
  ],
  "Który z elementów przygotowania psychicznego zawodników kształtuje ich cechy charakteru?": [
    "Kształtowanie motywów."
  ],
  "Obciążenie wewnętrzne określa:": [
    "Zespół reakcji  organizmu na obciążenie zewnętrzne."
  ],
  "Na czym polega planowanie właściwe treningu?": [
    "Określeniu drogi realizacji celu."
  ],
  "Jakie okresy treningowe występują w makrocyklu?": [
    "Przedstartowy, główny, roztrenowania,",
    "Wstępny, ukierunkowany, specjalistyczny."
  ],
  "W zbiciu tenisowym pracę ramienia charakteryzuje ruch wykonany w płaszczyźnie strzałkowej zakończony:": [
    "Uderzeniem w piłkę z przodu, ponad lewym barkiem."
  ],
  "Które zdanie nie opisuje dokładnie momentu wyskoku do ataku w 1 tempie:": [
    "Wyskok do ataku rozpoczynany w  momencie gdy dogrywana piłka zaczyna opadać w kierunku dłoni rozgrywającego."
  ],
  "Niewłaściwy sposób wykonania rozbiegu do ataku w 1 tempo ze strefy III to:": [
    "Wszystkie odpowiedzi są prawidłowe.",
    "Rozbieg do miejsca wyskoku ze stopniowym zwiększaniem prędkości i przyspieszeniem w ostatnich dwóch krokach; w przypadku rozbiegu trzykrokowego – z pozycji przygotowawczej z prawą nogą z przodu, krok lewą nogą  i naskok prawa-lewa."
  ],
  "Właściwy rytm rozbiegu do ataku należy opisać w następujący sposób:": [
    "Atakujący - ma zadanie rozpoczynać wolno i szybko kończyć."
  ],
  "Rysunek 11 przedstawia:": [
    "Moment rozpoczęcia rozbiegu do ataku z piłki wysokiej (w trzecim tempie).",
    "Wszystkie odpowiedzi są nieprawidłowe."
  ],
  "Rodzaje tempa bloku to:": [
    "Normalne. Nisko."
  ],
  "Które z ćwiczeń służy nauczaniu odbić dolnych:": [
    "Wszystkie odpowiedzi są właściwe."
  ],
  "Właściwa kolejność nauczania ataku jednorącz, od minisiatkówki do poziomu mistrzowskiego to:": [
    "Atak z piłki szybkiej (\"quick\"), atak z piłki przyspieszonej (\"super\"), atak z piłki wysokiej."
  ],
  "Nauczanie blokowania metodą analityczną odbywa się w następujących etapach (po pokazie i objaśnieniu):": [
    "Nauczanie blokowania piłki zawieszonej – piłki przerzucanej – piłki atakowanej.",
    "Nauczanie blokowania w miejscu, po przemieszczeniu się."
  ],
  "Kolejność nauczania zagrywki szybującej w wyskoku to:": [
    "Zagrywka szybująca w wyskoku po dwukrokowym rozbiegu, z odbicia jednonóż (piłka trzymana przed tułowiem jednorącz) od dołu ręką przeciwną uderzającej  - zagrywka szybująca w wyskoku po 2-krokowym rozbiegu, z odbicia obunóż (piłka trzymana oburącz)."
  ],
  "Które z podanych ćwiczeń nie jest przygotowującym do nauki odbić dolnych:": [
    "Wszystkie odpowiedzi są właściwe."
  ],
  "Która z form nauczania jest najbardziej atrakcyjna dla uczniów:": [
    "Forma fragmentów gry."
  ],
  "Ryzyko podczas zagrywki powinno być proporcjonalne do:": [
    "Potrzeby utrudnienia gry przeciwnikowi w poszczególnych fazach meczu."
  ],
  "W ustawieniu drużyny w obronie na rysunku 38 przedstawiona jest sytuacja:": [
    "Blok na kierunku 2 w strefie IV/ blok zamknięty, obrona systemem 2:0:4."
  ],
  "Zawodnik w obronie, przyjmując określoną postawę, powinien w każdej akcji mieć możliwość:": [
    "Szybkiego wbiegnięcia za blok (w ciemno)."
  ],
  "Współpracę zawodników skrzydłowego i środkowego obrony przy piłkach atakowanych po prostej (rysunek 46), w sytuacji bloku podwójnego w strefie IV na kierunku 2 (przekątna zasłonięta), charakteryzuje zasada:": [
    "Zawodnik 5 – broni piłki lecące bezpośrednio w niego / Zawodnik 6 – ustawienie na skraju bloku (ręka zewnętrzna skrzydłowego) broni piłki atakowane po prostej, lecące powyżej linii bioder, z prawej strony zawodnika skrzydłowego."
  ],
  "Rysunek 33 przedstawia schemat ustawienia obrońców na pozycjach wyjściowych w sytuacji:": [
    "Gdy przeciwnik gra często przez środek."
  ],
  "Zawodnik atakujący jest zawodnikiem linii obrony w ustawieniach:": [
    "R5, R6, R1."
  ],
  "Środkowy pierwszy jest zawodnikiem linii ataku w ustawieniach:": [
    "R1, R2, R4."
  ],
  "Autokratyczny styl kierowania zespołem charakteryzuje się:": [
    "Trenerzy uznają swą odpowiedzialność kierowniczą i przewodzą grupie w osiąganiu założonych przez nich celów (własnych)."
  ],
  "Który czynnik należy brać pod uwagę w różnicowaniu treningu wszechstronnego:": [
    "Nabywanie i doskonalenie umiejętności oraz sprawności specjalnej.",
    "Kryterium rozwoju biologicznego."
  ],
  "Które z podanych poniżej wydarzeń pojawiło się najwcześniej:": [
    "Grand Prix siatkarek.",
    "Wprowadzenie do gry Libero."
  ],
  "Jaki rodzaj pracy powinien być dominujący w programie III klasy gimnazjum:": [
    "Ćwiczenia analityczne."
  ],
  "Czy całościowa forma zagrywki rotacyjnej w wyskoku powinna być uwzględniona w metodyce nauczania w wieku młodzika:": [
    "Nie, tylko uderzenie rotacyjne z miejsca.",
    "Tak, pełna zagrywka w wyskoku."
  ],
  "Który z etapów szkolenia S.O.S. nie jest finansowany z budżetu państwa:": [
    "Szkoły Gimnazjalne z programem S.O.S."
  ],
  "Na którym etapie nauczania znane działania wykonywane są w losowej kolejności:": [
    "Etap II."
  ],
  "Do jakiego sposobu obrony powinno się dążyć w minisiatkówce, w grze 4x4:": [
    "Obrona dwoma zawodnikami z przodu z obrotem."
  ],
  "W grze obronnej system opisany jako 2:1:3 oznacza:": [
    "W kolejności liczbę zawodników broniących pola, asekurujących i blokujących.",
    "Opis sposobu ustawienia zawodników w obronie względem bloku."
  ],
  "Która z zasad minisiatkówki dotyczy gry 3 x 3:": [
    "Atakować może tylko jeden zawodnik w każdym ustawieniu",
    "Wszyscy atakują w każdym ustawieniu"
  ],
  "Jaki jest nadrzędny element skutecznego przyjęcia:": [
    "Postawa w przyjęciu."
  ],
  "Które parametry piłki do gry są zgodne z przepiami FIVB:": [
    "Obwód 62-64 cm, waga 260-280 g, ciśnienie 0,3-0,325 kg/cm2."
  ],
  "Kto odpowiada w asekuracji atakującego ze skrzydła za piłki spadające do 2 m od siatki:": [
    "Libero."
  ],
  "Rozgrywający wbiegając po zagrywce na pozycję wyjściową powinien obserwować:": [
    "Blokujących."
  ],
  "Wskaż podobieństwo obrony „polem” i obrony piłki „za darmo”:": [
    "Gra bez bloku."
  ],
  "Jakie działanie w obronie wymaga często największych przemieszczeń pod presją czasu:": [
    "Zajęcie pozycji wyjściowej do obrony ataku w I tempo."
  ],
  "Która wskazówka przy „czytaniu” atakującego powinna być przyswojona najwcześniej:": [
    "Dystans piłki od siatki."
  ],
  "Metodą, którą kształtujemy szybkość w piłce siatkowej jest:": [
    "Metoda ciągła."
  ],
  "Jakie są główne zadania taktyki indywidualnej w ataku:": [
    "Wykorzystanie sytuacji w bloku."
  ],
  "Jaki sposób przyjęcia powinien być priorytetowym podczas treningu libero:": [
    "Przyjęcie dołem przed sobą."
  ],
  "Siatkówka plażowa. Wystawa sposobem oburącz dolnym zapewnia:": [
    "Możliwość wystawy na dowolną odległość."
  ],
  "Środki wspomagające to:": [
    "Wszystkie odpowiedzi są prawdziwe."
  ],
  "W cyklu treningowym, kolejny trening powinien być zaplanowany:": [
    "Po zakończeniu superkompensacji."
  ],
  "Nacisk zawodnika na podłoże podczas wyskoku do bloku może być:": [
    "Wyłącznie większy od ciężaru ciała."
  ],
  "Proces rehydratacji (nawodnienia) zachodzi najszybciej jeśli:": [
    "Wszystkie odpowiedzi są prawdziwe."
  ],
  "Bóle w dolnym odcinku kręgosłupa są spowodowane:": [
    "Stanami przeciążeniowymi mięśni i więzadeł odcinka lędźwiowego kręgosłupa oraz mięśni rotatorów."
  ],
  "Do pomiaru maksymalnego minutowego poboru tlenu (wydolności tlenowej) należy zastosować test:": [
    "Wingate."
  ],
  "Wydolność aerobowa mierzona jest przez pomiar:": [
    "Maksymalnego minutowego poboru tlenu."
  ],
  "W którym z poniższych przypadków zespół nie straci punktu w wyniku kary?": [
    "W żadnym z tych przypadków zespół nie straci punktu"
  ],
  "Najskuteczniejsze działania integrujące i budujące więzi w sytuacji rozwiązywania konfliktów to:": [
    "Przyjęcie odpowiedzialności, podkreślenie wspólnoty, brak wsparcia osobistego."
  ],
  "Według koncepcji Selingmana zawodnicy tłumaczą swoje sukcesy/porażki poniższymi wymiarami:": [
    "Personalizacja, stałość, zasięg."
  ],
  "Cele pedagogiczne funkcjonowania młodego zespołu to:": [
    "Kształtowanie ducha gry zespołowej i współpracy."
  ],
  "Podstawowy wymiar najtrafniej opisujący stan umysłu w przepływie to:": [
    "Utrata podświadomości."
  ],
  "Selekcja kierowana polega na:": [
    "Parametrów somatycznych zawodników."
  ],
  "Która z prób sprawnościowych w naborze do SMS odbywa się na boisku siatkarskim?": [
    "Bieg na 10 m ze startu zatrzymanego."
  ],
  "Który z treningów siły jest wskazany dla młodocianych siatkarzy?": [
    "Trening kulturystyczny."
  ],
  "Ilu wystawiających musi być w drużynie, która atakować będzie wyłącznie w systemie po wystawie zawodnika z linii ataku:": [
    "Jeden."
  ],
  "Systemy rozbiegu do ataku w 1 tempo to:": [
    "System stały i płynny."
  ],
  "Warianty ataku w 1 tempo ustala:": [
    "Zawodnik przyjmujący."
  ],
  "Środkowy zmienia akcję bazową, tak aby stanowić zagrożenie (otwiera siatkę) w sytuacji gdy:": [
    "Piłka przyjęta jest w strefę \"0\"."
  ],
  "Rysunek 21 przedstawia moment odbicia do ataku z jednej nogi dla akcji bazowej:": [
    "Akcja \"B\" /baza B."
  ],
  "Pozycje wyjściowe do bloku po zmianie stref to:": [
    "Wąsko w prawo, wąsko na środku."
  ],
  "Podstawowym priorytetem trenera A. Anastasiego w systemie organizacji blokowania w grze Reprezentacji Polski dla zawodnika środkowego było:": [
    "Blokowanie zawodnika rozgrywającego."
  ],
  "Wskaż właściwy sposób ustawiania bloku w strefie II lub IV przez zawodnika skrzydłowego:": [
    "Wszystkie odpowiedzi są prawidłowe."
  ],
  "Które z ćwiczeń nie jest przygotowującym do nauki odbić górnych:": [
    "Podrzut i chwyt piłki oburącz ponad głową."
  ],
  "Wskaż ćwiczenie zawierające błąd w nauczaniu ruchu ramienia uderzającego przy zagrywce szybującej bez wyskoku:": [
    "Ćwiczący z piłką, ręka ugięta w stawie łokciowym"
  ],
  "Która z zasad nauczania zakłada dobór treści zajęć dostosowany do określonego poziomu umiejętności ćwiczących:": [
    "Zasada świadomości i aktywności.",
    "Zasada poglądowości.",
    "Zasada stopniowania trudności.",
    "Zasada wszechstronności.",
    "Zasada wszechstronności."
  ],
  "Która z zasad organizacji kontrataku obowiązuje w przypadku obrony przez zawodnika rozgrywającego:": [
    "Wystawia ten, kto ma piłkę z prawej strony."
  ],
  "Taktykę indywidualną ataku z piłki sytuacyjnej ze skrzydła opisuje zdanie:": [
    "Niedokładnie wystawioną piłkę kiwamy na libero."
  ],
  "Schemat ustawienia obrońców na pozycjach wyjściowych przedstawiony na rysunku 33a stosowany jest:": [
    "Wyłącznie na poziomie kadeta."
  ],
  "W pozycji bazowej obrońca, który prawidłowo zareagował (przewidział działania przeciwnika), powinien:": [
    "Wszystkie odpowiedzi są prawidłowe."
  ],
  "Rola pierwszego przyjmującego w grze. Wskaż zdanie prawdziwe:": [
    "Jest zawodnikiem obrony w ustawieniach R4, R5, R6."
  ],
  "W którym ustawieniu lub ustawieniach zawodnik przyjmujący grający w linii ataku ustawiony jest do przyjęcia zagrywki na prawej stronie boiska:": [
    "R 6."
  ],
  "Stosunek ilości wszystkich działań w danym elemencie wykonanym przez zawodnika do ilości wszystkich działań w tym samym elemencie wykonanym przez zespół wyraża:": [
    "Współczynnik udziału w grze."
  ],
  "Które z wymienionych cech są charakterystyczne dla planu szkoleniowego:": [
    "Plastyczność, przebojowość."
  ],
  "Plan organizacji szkolenia składa się z dwóch części, wskaż właściwe:": [
    "Przygotowawcza, startowa."
  ],
  "Który system jako pierwszy pozwala na wprowadzanie specjalizacji środkowego:": [
    "System mieszany."
  ],
  "Który z wprowadzonych sposobów ataku w wieku juniora jest priorytetowy:": [
    "Uderzenie z prowadzeniem ramienia pod kątem do tułowia."
  ],
  "Jaki sposób gry wprowadzany jest w kategorii juniora:": [
    "Kombinacja „pipe”."
  ],
  "Podstawowym zadaniem broniącego w minisiatkówce, w grze 2x2, jest:": [
    "Stała pozycja w obronie."
  ],
  "Które z umiejętności decydują o jakości przyjęcia zagrywki:": [
    "Sytuacyjne techniki przyjęcia."
  ],
  "Na jaki element w nauczaniu bloku zwraca się uwagę po opanowaniu innych wcześniejszych elementów bloku:": [
    "Przemieszczanie."
  ],
  "Który rodzaj asekuracji jest najczęściej stosowany przez zespoły grające atak z „pipe”:": [
    "2-3 stały."
  ],
  "Zmiana założeń zespołowych gry w etapach szkolenia młodzieży zależy od rozwoju umiejętności:": [
    "Gry w obronie."
  ],
  "System obrony 1 -1 -2 oznacza:": [
    "Dwóch broniących po skosie, jeden po prostej i jeden w asekuracji."
  ],
  "Jakie zadania ma zawodnik lepiej przyjmujący ustawiony do przyjęcia w trzech zawodników:": [
    "Bierze piłki na styku (\"pomiędzy\")."
  ],
  "Jaką rolę w treningu spełnia atrapa bloku:": [
    "Ułatwia wykonanie czynności."
  ],
  "Podstawowym celem naboru jest:": [
    "Formowaniu grupy ćwiczebnej."
  ],
  "Który z elementów taktyki zespołowej jest szczególnie dostosowany do gry rywala:": [
    "Taktyka asekuracji własnego ataku."
  ],
  "Przejście z fazy ataku do fazy obrony następuje w momencie:": [
    "Po przejściu piłki nad siatką na stronę rywala."
  ],
  "Która z zasad zwiększania kompetencji bloku w kolejnych latach szkolenia jest istotna:": [
    "Ustawienie bloku naprzeciwko atakowanej piłki."
  ],
  "Jakie zadanie ma łączenie poprzez trening różnych dyspozycji w interdyspozycje do gry:": [
    "Zwiększenie sumy działania poszczególnych dyspozycji."
  ],
  "Jaka umiejętność przyjmującego wynika z „głębokiego widzenia”:": [
    "Dostosowanie trajektorii przyjęcia."
  ],
  "Które z działań w taktyce indywidualnej rozgrywającego „ustawia grę”:": [
    "Ukrywanie zamiarów."
  ],
  "Siatkówka plażowa. Jakie czynniki mają wpływ na wybór miejsca i sposobu wykonania zagrywki:": [
    "Słońce, siła i kierunek wiatru."
  ],
  "Stosowanie w szkoleniu siatkarza zasady poglądowości gwarantuje, że:": [
    "Zdobyte wiadomości i opanowane umiejętności będą utrwalane (doskonalone) w toku kolejnych zajęć treningowych.",
    "Przekazywanie wiadomości poprzez różnego rodzaju środki wizualne (np. pokaz) ułatwia opanowanie umiejętności.",
    "Oddziałujemy przez ćwiczenia na wszystkie grupy mięśniowe, równomiernie rozwijając organizm.",
    "Dostosowujemy trudność zadań stawianych zawodnikom do ich możliwości.",
    "Przekazywanie wiadomości poprzez różnego rodzaju środki wizualne (np. pokaz) ułatwia opanowanie umiejętności."
  ],
  "Zaletą zabawowej formy nauczania jest to, iż:": [
    "Jest to jedyna forma nauczania, która daje możliwość stosowania zasady indywidualizacji w nauczaniu czynności ruchowych.",
    "Nauczanie odbywa się w warunkach rywalizacji i zabawy, co uatrakcyjnia zajęcia.",
    "Wszystkie odpowiedzi są poprawne."
  ],
  "Nauczanie umiejętności technicznych i taktycznych, w których nacisk położony jest na uczenie się gry, określa się mianem:": [
    "Podejścia nowoczesnego.",
    "Podejścia preferowanego.",
    "Podejścia całościowego.",
    "Podejścia tradycyjnego."
  ],
  "Która z form nauczania odbywa się z udziałem przeciwnika:": [
    "Gra właściwa.",
    "Forma fragmentów gry.",
    "Gra szkolna.",
    "Gra uproszczona.",
    "Gra szkolna."
  ],
  "W której formie nauczania w treningu, trenerzy skupiają uwagę zawodników na kluczowych elementach gry:": [
    "W grze właściwej.",
    "W grze uproszczonej.",
    "W grze szkolnej.",
    "W grze zabawowej.",
    "W grze uproszczonej."
  ],
  "Nauczanie gry w siatkówkę powinno odbywać się:": [
    "Na zasadach zróżnicowanych w zależności od tego, czy szkolimy, dzieci, młodzież, czy dorosłych.",
    "Wszystkie odpowiedzi są właściwe.",
    "Na takich samych zasadach, niezależnie czy szkolimy dzieci, młodzież, dorosłych, amatorów, czy profesjonalistów.",
    "Na takich samych zasadach , ale tylko dzieci i młodzież."
  ],
  "Który z wymienionych argumentów jest charakterystyczny dla podejścia całościowego w nauczaniu piłki siatkowej:": [
    "Trener podejmuje wszystkie decyzje.",
    "Treningi są często nudne i demotywujące zawodników.",
    "Naucza się specyficznych elementów gry i dopiero potem łączy je w całość.",
    "Naucza się gry, a dopiero potem doskonali poszczególne jej części."
  ],
  "Celem gry szkolnej jest:": [
    "Przeprowadzenie zawodów drużyn szkolnych.",
    "Doskonalenie wybranego elementu techniki lub taktyki indywidualnej.",
    "Podniesienie poziomu atrakcyjności zajęć.",
    "Umożliwienie rywalizacji w zespołach młodzieżowych."
  ],
  "Rozpoczynając pracę z drużyną, trenerzy powinni zaczynać od:": [
    "Wyobrażenia sobie gry zespołu, który będą prowadzić.",
    "Skopiowania gry zespołu, który odnosi sukcesy.",
    "Usystematyzowania ćwiczeń, które będą stosować w procesie szkoleniowym.",
    "Wszystkie odpowiedzi są nieprawidłowe."
  ]
}; // tablica z odpowiedziami do pytań

    console.log(Object.keys(CORRECTS).length + "/850")
    /* kolejność liter dla odpowiedzi */
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
    /* tablica z zapamiętanymi pytaniami */
    const history = [];

    function autoSelectCorrect() {
        const question = document.querySelector('#contentQuestion span')?.innerText.trim() || '';
        const correct  = CORRECTS[question];
        const answers = Array.from(document.querySelectorAll('#contentAnswers .box_answer'))
            .map(box => box.querySelector('.btn')?.innerText.trim() || '')
        if (!correct) {
            // zaznaczamy losowo jedną odpwiedź, jeśli nie ma poprawnej, z jeszcze nie zaznaczonych(allAnswers)
            const boxes = Array.from(document.querySelectorAll('#contentAnswers .box_answer'));
            if (boxes.length > 0) {
                const firstBox = boxes.find(box => !box.querySelector('input').checked && !allAnswers[question]?.includes(box.querySelector('.btn').innerText.trim()));
                if (firstBox) {
                    const input = firstBox.querySelector('input'); 
                    if (input && !input.checked) input.click(); // klikamy, żeby zadziałały skrypty strony
                    allAnswers[question] = allAnswers[question] || [];
                    allAnswers[question].push(firstBox.querySelector('.btn').innerText.trim());
                } else {
                    // jeślie nie ma firstBox, to zaznaczamy losowo jedną z jeszcze nie zaznaczonych
                    const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
                    const input = randomBox.querySelector('input');
                    if (input && !input.checked) input.click(); 
                    allAnswers[question] = allAnswers[question] || [];
                    allAnswers[question].push(randomBox.querySelector('.btn').innerText.trim());

                }
            }

        }

        Array.from(document.querySelectorAll('#contentAnswers .box_answer')).forEach(box => {
            const btnText = box.querySelector('.btn')?.innerText.trim() || '';
            if (btnText == correct) {
                const input = box.querySelector('input');
                if (input && !input.checked) input.click(); // klikamy, żeby zadziałały skrypty strony
                return;
            }
        });
        renderSummary();
        allQuestions[question] = answers;
        // przejście do następnego pytania
        const nextButton = document.getElementById("btnnext");
        if (nextButton && !nextButton.classList.contains("disabled")) {
            setTimeout(() => {
                nextButton.click()
            }, 500); 
        }
    }

    /** Pobiera dane z aktualnie wyświetlanego pytania i zapisuje je w history[] */
    function captureCurrent() {
        const opt   = document.querySelector('#questions option.selected');
        const nr    = opt ? opt.textContent.split('.')[0].replace('#', '').trim() : (history.length + 1);
        const query = document.querySelector('#contentQuestion span')?.innerText.trim() || '';

        const answers = Array.from(document.querySelectorAll('#contentAnswers .box_answer'))
            .map((box, i) => ({
                letter : LETTERS[i],
                text   : box.querySelector('.btn')?.innerText.trim() || '',
                checked: box.querySelector('input').checked
            }));

        history.push({ nr, query, answers });        // zapisz pod właściwym numerem
        renderSummary();
    }

    /** Renderuje całe podsumowanie do konsoli i (jednorazowo) na stronę */
    function renderSummary() {
        let json = null;
        console.log(history);
        json = history.reduce((acc, q) => {
            q.answers.forEach(a => {
                if (a.checked && !(q.query.trim().replace(/ {2,}/g, ' ') in CORRECTS)) {
                    acc[q.query] = a.text;
                }
            });
            return acc;
        }, {});
        console.clear()
        console.log(Object.keys(CORRECTS).length + "/850")
        console.log(json)
        console.log("Auto zaznaczone: " + amountAutoSelected);

        let pre = document.getElementById('examSummary');
        if (!pre) {
            pre = document.createElement('pre');
            pre.id = 'examSummary';
            pre.style.whiteSpace = 'pre-wrap';
            pre.style.padding = '1rem';
            pre.style.border = '1px solid #aaa';
            pre.style.background = '#fff';
            pre.style['padding-left'] = '300px'
            document.body.appendChild(pre);
        }
        /* wyświetl podsumowanie w elemencie <pre> */
        const allQuestionsText = JSON.stringify(allQuestions, null, 2);
        const allAnswersText = JSON.stringify(allAnswers, null, 2);
        pre.innerHTML = (json ? JSON.stringify(json, null, 2) : '') + '\n\n' + allQuestionsText + '\n\n' + allAnswersText;
    }

    /** Podpinamy się pod przyciski „Następne” i „Poprzednie” */
    ['btnnext', 'btnprev'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                /* zapisz stan _przed_ zmianą pytania */
                captureCurrent();
                /* poczekaj, aż strona załaduje kolejne pytanie i zaktualizuj podsumowanie */
                setTimeout(() => {
                    autoSelectCorrect();  // <<< zaznaczamy poprawną
                    renderSummary();      // <<< aktualizujemy podsumowanie
                }, 300);
            }, true);                                      // używamy fazy „capture”
        }
    });

    /* zapisz i wyświetl już pierwsze pytanie */
    autoSelectCorrect();
})();
