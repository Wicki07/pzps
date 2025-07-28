// ===  WKLEJ CAŁOŚĆ OD TEJ LINII  ===========================================
(() => {
    /* kolejność liter dla odpowiedzi */
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
    /* tablica z zapamiętanymi pytaniami */
    const history = [];

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
                    if (a.checked) {
                        acc[a.text] = a.text;
                    }
                });
                return acc;
            }, {});
        }
        console.clear();
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
                setTimeout(renderSummary, 300);
            }, true);                                      // używamy fazy „capture”
        }
    });

    /* zapisz i wyświetl już pierwsze pytanie */
    renderSummary();
})();
