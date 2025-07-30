// ===  WKLEJ CAŁOŚĆ OD TEJ LINII  ===========================================
(async () => {
    /* -------------------------------------------------------------
       1. Minifikowana biblioteka MD5 (pozostaje bez zmian)
     ------------------------------------------------------------- */
    !function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=g(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),c=v(c,f=g(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),c=m(c,f=v(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function i(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function a(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return i(c(a(n=r(n)),8*n.length))}function u(n,t){return function(n,t){var r,e=a(n),o=[],u=[];for(o[15]=u[15]=void 0,16<e.length&&(e=c(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],u[r]=1549556828^e[r];return t=c(o.concat(a(t)),512+8*t.length),i(c(u.concat(t),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);
    //# sourceMappingURL=md5.min.js.map

    /* -------------------------------------------------------------
       2. Stałe i „pamięci”
     ------------------------------------------------------------- */
    const CORRECTS      = {
        "85df9e4de1a9": {
            "text": "Że jego zespół rozpocznie mecz od odbioru zagrywki",
            "question": "Przeciwnik wygrał losowanie i wskazał stronę boiska, na której chce rozpocząć mecz. Co może wybrać w tym momencie kapitan drugiego zespołu?"
        },
        "a264c94f7d52": {
            "text": "Wszystkie odpowiedzi są prawidłowe",
            "question": "Jakie zachowanie zespołu wskazuje na popełnianie błędu zasłony?"
        },
        "bc51b5c6ad7f": {
            "text": "Trener może dokonać w ramach jednej przerwy zmiany zawodników i zmiany powrotnej między tymi samymi zawodnikami",
            "question": "Które zdanie dotyczące korzystania z regulaminowych przerw w grze jest nieprawdziwe?"
        },
        "8574451abc1b": {
            "text": "Rozgrywający nie może teraz odbić piłki zanim nie zrobi tego któryś z jego partnerów",
            "question": "Zawodnik rozgrywający, będący w tym momencie zawodnikiem linii obrony, po złym przyjęciu zagrywki w swoim zespole – piłka poleciała nad siatkę, gdzie została zaatakowana przez przeciwnika – stanął na trzecim metrze od siatki i podniósł w górę ręce, sięgając wyżej niż siatka. Piłka uderzyła go w dłonie. Które z poniższych zdań jest prawdziwe?"
        },
        "8191771519de": {
            "text": "Dwaj zawodnicy jednego zespołu pobili się",
            "question": "W którym z poniższych przypadków zespół nie straci punktu w wyniku kary?"
        },
        "3c5d5f2e7d39": {
            "text": "Trener poprosił o przerwę dla odpoczynku po gwizdku sędziego na zagrywkę. Był to pierwszy tego typu przypadek w meczu, ale zespół miał już upomnienie za opóźnianie z powodu opóźniania wznowienia gry",
            "question": "W którym z poniższych przypadków zespół nie straci punktu w wyniku kary za opóźnianie?"
        },
        "d70a41c29804": {
            "text": "Wszystkie odpowiedzi są prawidłowe",
            "question": "Jakie są konsekwencje błędu rotacji?"
        },
        "8c32c131b8c0": {
            "text": "Jeżeli w zespole jest dwóch Libero, nie mogą oni mieć koszulek w różnych kolorach (każda z nich odróżniająca Libero od „zwykłych” zawodników)",
            "question": "Które z poniższych stwierdzeń nie jest prawdziwe w kontekście przepisów dotyczących zawodników Libero?"
        },
        "0b6ebf730113": {
            "text": "Kapitan zespołu poprosił o przerwę dla odpoczynku, chociaż trener siedział na ławce rezerwowych",
            "question": "Który z poniższych przypadków jest przykładem prośby nieuzasadnionej nie skutkującej sankcjami dla zespołu?"
        },
        "a833c7e80768": {
            "text": "Zawodnik biegnący za piłką może chwycić się słupka, by sobie pomóc w biegu",
            "question": "Piłka po przyjęciu przeleciała nad antenką w stronę wolnej strefy przeciwnika. Które zdanie jest prawdziwe?"
        },
        "33974fdc07bf": {
            "text": "Trener może zadecydować o pojawieniu się na boisku zawodnika wpisanego na kartce z ustawieniem, wówczas nie przeprowadza się zmiany regulaminowej",
            "question": "Przed rozpoczęciem meczu na boisku znalazł się zawodnik niewpisany na kartce z ustawieniem. Jakie są konsekwencje?"
        },
        "4b2e55e8f782": {
            "text": "Pomiar wysokości siatki, losowanie, rozgrzewka przy siatce, dostarczenie kartek z ustawieniem początkowym, przywitanie się zespołów",
            "question": "Jaka jest właściwa kolejność w ceremoniale przedmeczowym?"
        },
        "c06e7c87e8f7": {
            "text": "Nie ma błędu ustawienia",
            "question": "Na poniższych zdjęciach numery na koszulkach zawodniczek odpowiadają ich pozycjom na boisku (2, 3, 4). Czy i w jaki sposób popełniają one błąd ustawienia?"
        },
        "7ae49d11b04a": {
            "text": "Wszystkie powyższe akcje są atakami",
            "question": "Która z akcji nie jest atakiem?"
        },
        "3b9011ae1743": {
            "text": "Po ataku piłka odbiła się od dłoni blokujących i wysokim łukiem leciała daleko za boisko. Atakujący usiłując nie wkroczyć na boisko przeciwnika przebiegł schylony po linii środkowej i wbiegł w wolną strefę przeciwnika pod siatką",
            "question": "Która z sytuacji nie jest błędem?"
        },
        "8180409aadb7": {
            "text": "Po wykonanym ataku zawodnik wykonał jeszcze krok i oparł się klatką piersiową o siatkę, centralnie o taśmę boczną przymocowaną do siatki. Sędzia nie odgwizdał błędu.",
            "question": "W której z sytuacji sędzia popełnił błąd?"
        },
        "ebf4524d86b1": {
            "text": "Rozgrywający kiwa piłkę nad siatką, przy czym kontakt z piłką ma miejsce nad jego boiskiem, ale po kiwce dłoń zawodnik sięga na stronę przeciwnika",
            "question": "Która z sytuacji nie jest błędem?"
        },
        "d3a8d552a949": {
            "text": "Dwie białe taśmy przymocowane są pionowo do siatki dokładnie nad każdą linią boczną.",
            "question": "Które ze zdań jest prawdziwe odnośnie siatki?"
        },
        "6606a942ca50": {
            "text": "Zawodnik rozsunął panele reklamowe za boiskiem i wykonał zagrywkę spomiędzy nich",
            "question": "Które wykonanie zagrywki jest nieprawidłowe?"
        },
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
    };          // tu zapisywane są już poznane poprawne odpowiedzi
    const allQuestions  = {};          // hasz => { question, answers[] }
    const allAnswers    = {
        "8180409aadb7": [
            "po wykonanym bloku punktowym zawodnik ratując się przed utratą równowagi silnie pociągnął za siatkę poza antenką. sędzia nie odgwizdał błędu",
            "w reakcji na wystawę po stronie przeciwnika zawodnik środkowy przemieszczał się do bloku podwójnego. jeszcze przed wyskokiem dotknął dolną taśmę siatki. sędzia odgwizdał błąd dotknięcia siatki",
            "po wykonanym ataku zawodnik wykonał jeszcze krok i oparł się klatką piersiową o siatkę, centralnie o taśmę boczną przymocowaną do siatki. sędzia nie odgwizdał błędu."
        ],
        "ebf4524d86b1": [
            "wystawiona przez przeciwnika piłka znalazła się blisko siatki. blokujący sięgnął na drugą stronę i dotknął piłkę równocześnie z atakującym",
            "blokujący sięga na stronę przeciwnika ponad siatką i dotyka piłki wystawionej przez przeciwnika, której lot jest równoległy do siatki",
            "rozgrywający kiwa piłkę nad siatką, przy czym kontakt z piłką ma miejsce nad jego boiskiem, ale po kiwce dłoń zawodnik sięga na stronę przeciwnika"
        ],
        "f825ef38de15": [
            "jeżeli zawodnik nie jest w bardzo dobrej pozycji do odbicia piłki, sędzia pierwszy powinien być mniej rygorystyczny w ocenie odbicia piłk",
            "nie ma takiego błędu jak „piłka niesiona”",
            "przy odbiciu piłki palcami jednej dłoni zawodnikowi nie można odgwizdać błędu podwójnego odbicia",
            "w bloku mogą nastąpić po sobie kolejne dotknięcia piłki wykonane przez jednego lub kilku zawodników, pod warunkiem że kontakt z piłką ma miejsce w jednym zagraniu, ale każde odbicie poza pierwszym zaliczane jest do limitu odbić zespołu"
        ],
        "c06e7c87e8f7": [
            "tak, stopa zawodniczki prawego ataku nie może być bliżej lewej linii bocznej niż obie stopy zawodniczki środkowej",
            "tak, zawodniczka lewego ataku znajduje się na prawo od zawodniczki prawego ataku",
            "nie ma błędu ustawienia"
        ],
        "bd76e3426887": [
            "w rozgrywkach szczebla centralnego pzps może zostać wpisanych do protokołu zawodów i brać udział w meczu maksymalnie 14 zawodników",
            "zawodnicy mogą rozgrzewać się z użyciem piłek tylko pomiędzy setami",
            "wolno grać w okularach",
            "libero może być kapitanem zespołu."
        ],
        "d3a8d552a949": [
            "dla gry czwórkami w mini siatkówce wysokość siatki jest taka sama dla chłopców, jak dla dziewczynek",
            "przed meczem kadetów wysokość siatki przy antenkach może wynosić 237 cm",
            "dwie białe taśmy przymocowane są pionowo do siatki dokładnie nad każdą linią boczną."
        ],
        "8c32c131b8c0": [
            "trener nie jest zadowolony z gry libero. ma wówczas prawo zgłosić go jako niezdolnego do gry i wyznaczyć innego zawodnika do roli libero",
            "jeżeli w zespole jest dwóch libero, nie mogą oni mieć koszulek w różnych kolorach (każda z nich odróżniająca libero od „zwykłych” zawodników)"
        ],
        "ab26e3348904": [
            "kapitan zespołu nie może własnoręcznie wpisać treści oficjalnego protestu do protokołu zawodów",
            "jeśli kapitan zespołu nie zgadza się z wyjaśnieniami sędziego pierwszego udzielonymi grającemu kapitanowi, może złożyć protest przeciwko danej decyzji i musi natychmiast zgłosić sędziemu pierwszemu, że rezerwuje sobie prawo do wpisania oficjalnego protestu w protokole zawodów po zakończeniu meczu",
            "kapitan zespołu może skutecznie zgłosić chęć wpisania oficjalnego protestu do protokołu zawodów po zakończeniu meczu, ale pod warunkiem, że nastąpi to przed podpisaniem protokołu",
            "oficjalny protest zapisywany jest w protokole zawodów wyłącznie po zakończeniu meczu"
        ],
        "8191771519de": [
            "dwaj zawodnicy jednego zespołu pobili się"
        ],
        "b05c8069f640": [
            "trener może dokonać zmiany kontuzjowanego tylko z drugim rozgrywającym",
            "nie ma żadnego pola manewru, bo wykorzystał sześć zmian i w tym zmianę rozgrywającego. kontuzjowanemu zostanie przyznana 3-minutwa przerwa i jeśli po tym czasie zawodnik nie będzie mógł grać, to zespół przegra seta jako zdekompletowany",
            "trener może dokonać zmiany kontuzjowanego z dowolnym zawodnikiem nieprzebywającym na boisku w momencie kontuzji z wyjątkiem libero oraz drugiego rozgrywającego",
            "trener może dokonać zmiany kontuzjowanego z dowolnym zawodnikiem nieprzebywającym na boisku w momencie kontuzji z wyjątkiem libero"
        ],
        "33974fdc07bf": [
            "trener może zadecydować o pojawieniu się na boisku zawodnika wpisanego na kartce z ustawieniem, a w tym celu przeprowadzana jest zmiana regulaminowa",
            "sekretarz poprawia zapis na kartce z ustawieniem oraz w protokole zawodów na zgodny ze stanem na boisku – bez pytania trenera zespołu",
            "trener może zadecydować o pojawieniu się na boisku zawodnika wpisanego na kartce z ustawieniem, wówczas nie przeprowadza się zmiany regulaminowej"
        ],
        "3b9011ae1743": [
            "po bloku spadająca po stronie zespołu atakującego piłką uderzyła w stopę opadającego blokującego, która znajdowała się nad boiskiem przeciwnika",
            "piłka po bloku opadała wzdłuż siatki. zawodnik zespołu blokującego sięgnął pod siatką i wykonał ruch, jakby chciał dotknąć piłkę, co zmyliło obrońcę próbującego piłkę podbić",
            "po ataku piłka odbiła się od dłoni blokujących i wysokim łukiem leciała daleko za boisko. atakujący usiłując nie wkroczyć na boisko przeciwnika przebiegł schylony po linii środkowej i wbiegł w wolną strefę przeciwnika pod siatką"
        ],
        "a833c7e80768": [
            "trener stojący zgodnie z przepisami przed swoją ławką rezerwowych nie musi się odsunąć, by zrobić miejsce biegnącemu przeciwnikowi",
            "zawodnik biegnący za piłką może chwycić się słupka, by sobie pomóc w biegu"
        ],
        "7ae49d11b04a": [
            "kiwka rozgrywającego w drugim uderzeniu zespołu",
            "złe przyjęcie zagrywki, po którym piłka przelatuje nad siatką na stronę przeciwnika",
            "wszystkie powyższe akcje są atakami"
        ],
        "4b2e55e8f782": [
            "losowanie, dostarczenie kartek z ustawieniem początkowym, pomiar wysokości siatki, rozgrzewka przy siatce, przywitanie się zespołów",
            "przywitanie się zespołów, losowanie, rozgrzewka przy siatce, pomiar wysokości siatki, dostarczenie kartek z ustawieniem początkowym",
            "pomiar wysokości siatki, losowanie, rozgrzewka przy siatce, dostarczenie kartek z ustawieniem początkowym, przywitanie się zespołów"
        ],
        "d70a41c29804": [
            "zagrywać będzie zespół przeciwny",
            "wszystkie odpowiedzi są prawidłowe"
        ],
        "0b6ebf730113": [
            "trener poprosił o trzecią przerwę dla odpoczynku w secie i została ona przyznana. po dłuższej chwili zespołom kazano powrócić na boisko",
            "kapitan zespołu poprosił o przerwę dla odpoczynku, chociaż trener siedział na ławce rezerwowych"
        ],
        "3c5d5f2e7d39": [
            "trener poprosił o przerwę dla odpoczynku po gwizdku sędziego na zagrywkę. był to pierwszy tego typu przypadek w meczu, ale zespół miał już upomnienie za opóźnianie z powodu opóźniania wznowienia gry"
        ],
        "6606a942ca50": [
            "zawodnik po gwizdku sędziego i zorientował się, że nie on ma wykonać zagrywkę. przywołał właściwego zawodnika, przekazał mu piłkę i wbiegł na boisko. zagrywka została wykonana w ciągu 8 sekund od gwizdka sędziego",
            "zawodnik wykonał zagrywkę łokciem",
            "zawodnik rozsunął panele reklamowe za boiskiem i wykonał zagrywkę spomiędzy nich"
        ]
    };          // question (raw) => zapamiętane strzały
    const LETTERS       = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const history       = [];

    let amountAutoSelected  = 0;
    let wasFinalButtonClicked = false;

    console.log(Object.keys(CORRECTS).length + "/850");

    /* -------------------------------------------------------------
       3. Uniwersalna, *deterministyczna* funkcja hashująca
     ------------------------------------------------------------- */
    async function getQuestionKeyBrowser(q) {
        const normalize = s => s
            .trim()              // przycinamy brzegowe spacje
            .replace(/\s+/g,' ') // zbijamy kilkukrotne odstępy do jednego
            .normalize('NFC');   // ujednolicamy diakrytyki (ą == ą)

        const canonical = JSON.stringify({
            question : normalize(q.question),
            answers  : q.answers.map(normalize).sort((a,b) => {
				if (a < b) return -1;
				if (a > b) return 1;
				return 0;
            })
            //  kolejność odpowiedzi zostaje bez zmian; jeżeli nie jest istotna,
            //  użyj `.sort()`
        });

        // md5() jest już w globalnym scope -> wynik 32-znakowy hex
        return md5(canonical).slice(0, 12);   // skracamy do 12 znaków
    }

    /* -------------------------------------------------------------
       4. Główna logika auto-rozwiązywania
     ------------------------------------------------------------- */
    async function autoSelectCorrect() {
        const question = document.querySelector('#contentQuestion span')?.innerText.trim() || '';
        const answers  = Array.from(document.querySelectorAll('#contentAnswers .box_answer'))
            .map(b => b.querySelector('.btn')?.innerText.trim() || '');

        const questionHash = await getQuestionKeyBrowser({ question, answers });
        const correct      = CORRECTS[questionHash];

        /* --- Jeżeli znamy poprawną odpowiedź --- */
        if (correct) {
            Array.from(document.querySelectorAll('#contentAnswers .box_answer')).forEach(box => {
                const btnText = box.querySelector('.btn')?.innerText.trim() || '';
                if (btnText === correct.text) {
                    const inp = box.querySelector('input');
                    if (inp && !inp.checked) inp.click();
                }
            });
        } else {
			let inputChecked = false;
			Array.from(document.querySelectorAll('#contentAnswers .box_answer')).forEach(box => {
				if (inputChecked) return;
				const inp     = box.querySelector('input');
				let   btnText = box.querySelector('.btn')?.innerText.trim() || '';
				btnText = btnText.replace(/\s+/g,' ').toLowerCase();

				if (btnText && !inp.checked && !allAnswers[questionHash]?.includes(btnText)) {
					inp.click();
					inputChecked = true;
					amountAutoSelected++;

					allAnswers[questionHash] = allAnswers[questionHash] || [];
					allAnswers[questionHash].push(btnText);
				}
			});
        }

        renderSummary();

        const nextButton = document.getElementById("btnnext");
        if (nextButton && !nextButton.classList.contains("disabled")) {
            setTimeout(() => {
                nextButton.click()
            }, 500);
        }
    }

    /* -------------------------------------------------------------
       5. Zbieramy historię przejść
     ------------------------------------------------------------- */
    async function captureCurrent() {
        const opt   = document.querySelector('#questions option.selected');
        const nr    = opt ? opt.textContent.split('.')[0].replace('#','').trim() : (history.length+1);
        const query = document.querySelector('#contentQuestion span')?.innerText.trim() || '';

        const answers = Array.from(document.querySelectorAll('#contentAnswers .box_answer'))
            .map((box,i)=>({
                letter : LETTERS[i],
                text   : box.querySelector('.btn')?.innerText.trim() || '',
                checked: box.querySelector('input').checked
            }));

        /* obiekty pomocnicze */
        const _answers      = answers.map(a=>a.text);
        const questionHash  = await getQuestionKeyBrowser({question:query, answers:_answers});
        allQuestions[questionHash] = { question: query, answers: _answers };

        history.push({ nr, query, answers, questionHash });
    }

    /* -------------------------------------------------------------
       6. Wizualne podsumowanie
     ------------------------------------------------------------- */
    function renderSummary() {
        /** buduj JSON z nowo poznanymi poprawnymi odp. */
        const newly = history.reduce((acc,q)=>{
            q.answers.forEach(a=>{
                if(a.checked && !(q.questionHash in CORRECTS)){
                    acc[q.questionHash] = { text:a.text, question:q.query };
                }
            });
            return acc;
        },{});

        let pre = document.getElementById('examSummary');
        if(!pre){
            pre = document.createElement('pre');
            pre.id = 'examSummary';
            pre.style.cssText = 'white-space:pre-wrap;padding:1rem;border:1px solid #aaa;background:#fff;padding-left:300px';
            document.body.appendChild(pre);
        }

        pre.textContent = JSON.stringify(newly, null, 2) + '\n\n'
            // + JSON.stringify(allQuestions, null, 2) + '\n\n'
            + JSON.stringify(allAnswers,   null, 2);

        console.log(Object.keys(CORRECTS).length + "/850");
    }

    /* -------------------------------------------------------------
       7. Hookujemy „Następne” / „Poprzednie”
     ------------------------------------------------------------- */
    ['btnnext','btnprev'].forEach(id=>{
        const btn = document.getElementById(id);
        if(!btn) return;

        btn.addEventListener('click', async ()=>{
            await captureCurrent();         // zapisz stan *przed* zmianą
            setTimeout(async ()=>{
                await autoSelectCorrect();  // zaznacz nową / losową
            }, 300);
        }, true); // faza capture
    });

    /* -------------------------------------------------------------
       8. Start: pierwsze pytanie
     ------------------------------------------------------------- */
    await autoSelectCorrect();
})();
