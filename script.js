// ===  WKLEJ CAŁOŚĆ OD TEJ LINII  ===========================================
(() => {
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
          "Który z punktów anatomicznych nie zawiera się w linii pionowej przy prawidłowej postawie ciała:":"Rzepka."
    };
    console.log(Object.keys(CORRECTS).length + "/850")
    /* kolejność liter dla odpowiedzi */
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
    /* tablica z zapamiętanymi pytaniami */
    const history = [];
    
    function autoSelectCorrect() {
        const question = document.querySelector('#contentQuestion span')?.innerText.trim() || '';
        const correct  = CORRECTS[question];
        if (!correct) return;                             // nie ma w bazie – pomijamy

        Array.from(document.querySelectorAll('#contentAnswers .box_answer')).forEach(box => {
            const btnText = box.querySelector('.btn')?.innerText.trim() || '';
            if (btnText === correct) {
                const input = box.querySelector('input');
                if (input && !input.checked) input.click(); // klikamy, żeby zadziałały skrypty strony
            }
        });
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
        const text = history
            .filter(Boolean)                               // pomiń puste elementy
            .map((q, index) => {
                const head = `${index + 1}. ${q.query}`;
                const body = q.answers
                    .map(a => `    ${a.letter} ${a.checked ? '<b>' + a.text + '</b>' : a.text}`)
                    .join('\n');
                return `${head}\n${body}`;
            })
            .join('\n\n');
        if (history.length >= 99) {
            json = history.reduce((acc, q) => {
                q.answers.forEach(a => {
                    if (a.checked && !q.query.trim().replace(/ {2,}/g, ' ') in CORRECTS) {
                        acc[q.query] = a.text;
                    }
                });
                return acc;
            }, {});
        }
        console.clear();
        console.log(Object.keys(CORRECTS).length + "/850")
        console.log(text);

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
        pre.innerHTML = text + "\n\n" + (json ? JSON.stringify(json, null, 2) : '');
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
    renderSummary();
})();
