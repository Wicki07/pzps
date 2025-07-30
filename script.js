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
    const CORRECTS      = {};          // tu zapisywane są już poznane poprawne odpowiedzi
    const allQuestions  = {};          // hasz => { question, answers[] }
    const allAnswers    = {};          // question (raw) => zapamiętane strzały
    const LETTERS       = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const history       = [];

    let amountAutoSelected  = 0;
    let wasFinalButtonClicked = false;

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
        if (nextButton) {
            if (wasFinalButtonClicked) return;
            if (nextButton.classList.contains("disabled")) {
                wasFinalButtonClicked = true;
            }
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
            + JSON.stringify(allQuestions, null, 2) + '\n\n'
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
                if (wasFinalButtonClicked) return;
                await autoSelectCorrect();  // zaznacz nową / losową
            }, 300);
        }, true); // faza capture
    });

    /* -------------------------------------------------------------
       8. Start: pierwsze pytanie
     ------------------------------------------------------------- */
    await autoSelectCorrect();
})();
