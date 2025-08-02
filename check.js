(() => {
  /* === 1. Słownik pytań/odpowiedzi === */
  const questions = {
  "71dd8c80b550": {
    "text": "Mięsień czworogłowy uda.",
    "question": "Jaki mięsień jest usprawniany podczas ćwiczenia izolowanego ruchu w stawie biodrowym:"
  },
  "c54db0837d12": {
    "text": "Ze środkowym.",
    "question": "Z kim szczególnie powinien prowadzić współpracę zawodnik atakujący podczas treningu indywidualnego:"
  },
  "9fb0c1b6bec4": {
    "text": "Asekuracji jako „wolny od bloku”.",
    "question": "Jaka pozycja startowa jest najczęściej stosowana w treningu indywidualnym rozgrywającego:"
  },
  "c4c5a9c0e993": {
    "text": "Przewidywanie kierunku mocnego ataku.",
    "question": "Które z przedstawionych działań w grze obronnej wpływa na pozostałe:"
  },
  "de9ce962af9c": {
    "text": "Przyjęcie dołem z boku.",
    "question": "Jaki sposób przyjęcia powinien być priorytetowym podczas treningu libero:"
  },
  "65f2b7ec996d": {
    "text": "Opadać.",
    "question": "W którą stronę powinna przesuwać się skóra przy napinaniu brzucha:"
  },
  "d8663639ef81": {
    "text": "Znajomość gry rywala oraz charakterystyki konkretnego zawodnika.",
    "question": "Które z podanych wytycznych dla blokującego są podstawą do skutecznego stosowania pozostałych działań:"
  },
  "e10a428933d4": {
    "text": "Pozwalają kontrolować grę.",
    "question": "Czym się różnią indywidualne umiejętności taktyczne od taktyki zespołowej:"
  },
  "70493e26cfd8": {
    "text": "Dostosowanie ustawienia do przewidywanej zagrywki.",
    "question": "Jaka umiejętność przyjmującego wynika z „głębokiego widzenia”:"
  },
  "9849d721cde6": {
    "text": "Wykorzystanie sytuacji w bloku.",
    "question": "Jakie są główne zadania taktyki indywidualnej w ataku:"
  },
  "d52e64e685e2": {
    "text": "W pozycji neutralnej.",
    "question": "W jakiej pozycji powinna być ustawiona miednica podczas wykonywania ćwiczenia most:"
  },
  "1f639eae261e": {
    "text": "Umiejętność blokowania w sytuacji 1 x 1 z założeniem reagowania na piłkę.",
    "question": "Która z umiejętności jest najtrudniejszym zadaniem środkowego bloku:"
  },
  "ac2cbf635850": {
    "text": "Zgięcie nogi w stawie biodrowym w pozycji leżącej.",
    "question": "Które z ćwiczeń zalicza się do grupy ćwiczeń funkcjonalnych:"
  },
  "469cff364212": {
    "text": "Pozycja w ustawieniach do przyjęcia zagrywki.",
    "question": "Która pozycja początkowa wynika ze specjalizacji zawodnika środkowego:"
  },
  "ca3620925f9f": {
    "text": "Kolejne wystawienie z różnych pozycji w różne miejsca.",
    "question": "Które z ćwiczeń dla zawodnika rozgrywającego powinno być szczególnie połączone z zadaniem obserwacji własnego zespołu i rywala:"
  },
  "22126c44f3e0": {
    "text": "Seryjne wykonywanie danego elementu w określonej sytuacji.",
    "question": "Jaki rodzaj treningu indywidualnego zawodnika środkowego jest najbardziej skuteczny:"
  },
  "3f4a9f1b17b8": {
    "text": "Mmięsień prosty brzucha.",
    "question": "Który z mięśni może przejąć funkcję mięśni pośladkowych wielkich:"
  },
  "da3401e05211": {
    "text": "Przyjęcie z boku tułowia.",
    "question": "Które z wymienionych działań powoduje niedokładność przyjęcia zawodnika I linii:"
  },
  "7705ad9a36bc": {
    "text": "Wysoko na środek z boku tułowia.",
    "question": "Przyjęcie lub obrona mocnej piłki powinny być skierowane:"
  },
  "b56e81bcf07b": {
    "text": "Piszczelowego tylnego.",
    "question": "Oznaką przykurczu jakiego mięśnia jest uniesienie pięt podczas wykonywania przysiadu:"
  },
  "9b2f73906c91": {
    "text": "Pozycja i postawa.",
    "question": "Które z wymienionych działań wpływa bezpośrednio na skuteczność obrony:"
  },
  "08626b45bd0d": {
    "text": "Ani jeden, ani drugi.",
    "question": "Czy dla siatkarza, do treningu barku, bardziej przydatny jest hantel czy guma thera-band:"
  },
  "d23f3b812e7d": {
    "text": "Mięsień przywodziciel krótki.",
    "question": "Który z wymienionych mięśni jest najważniejszy z punktu widzenia stabilizacji:"
  },
  "bbbb5d7f212e": {
    "text": "W stawie skokowym.",
    "question": "Ruch w którym stawie powinien zapoczątkować wykonywanie przysiadu:"
  },
  "8a2ca0ad4d2d": {
    "text": "Atak.",
    "question": "Który element techniki, podczas treningu indywidualnego zawodnika przyjmującego, najlepiej łączyć z przyjęciem zagrywki:"
  },
  "8ca2cabc8ea6": {
    "text": "Ukrywanie zamiarów.",
    "question": "Które z działań w taktyce indywidualnej rozgrywającego „ustawia grę”:"
  },
  "7498ab8848e4": {
    "text": "Płatek ucha.",
    "question": "Który z punktów anatomicznych nie zawiera się w linii pionowej przy prawidłowej postawie ciała:"
  }
}

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
