// Temporizador
(function() {
    const data = new Date;
    let minuto = data.getMinutes;
    let segundo = data.getSeconds;
    const relogio = document.querySelector('h2.temporizador__relogio');
    minuto = 0;
    segundo = 0;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundo++;
            if(segundo === 60) {
                segundo = 0;
                minuto++;
                clearInterval(timer);
                relogio.classList.add('tempOneMinute');
            }
            const minutoPronto = minuto <= 9 ? `0${minuto}` : minuto;
            const segundoPronto = segundo <= 9 ? `0${segundo}` : segundo; 
            relogio.innerHTML = `${minutoPronto}:${segundoPronto}`;
        }, 1000);
    }
    document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('btnComecar')) {
            if(minuto === 0) {
                iniciaRelogio();
                relogio.classList.remove('tempPause');
            }
        }
        if(el.classList.contains('btnPausar')) {
            if(minuto === 0) {
                clearInterval(timer);
                relogio.classList.add('tempPause');
            }
        }
        if(el.classList.contains('btnReiniciar')) {
            clearInterval(timer);
            relogio.innerHTML = `00:00`;
            minuto = 0;
            segundo = 0;
            relogio.classList.remove('tempOneMinute');
            relogio.classList.remove('tempPause');
        }
    })
})();
// Resultados
(function() {
    const input = document.querySelector('input#chords');
    const btn = document.querySelector('button.addChords');
    const ul = document.querySelector('ul.lista__list');
    
    function criaDiv() {
        const divList = document.createElement('div');
        divList.classList.add('lista__list--div')
        return divList;
    }
    function criaEl() {
        let elResultado = document.createElement('li');
        return elResultado;
    }
    function criaBtn() {
        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fa-solid', 'fa-circle-minus', 'btnDelete');
        return deleteBtn;
    }
    const criaResultado = function() {
        const resultado = input.value;
        const el = criaEl();
        const btn = criaBtn();
        const div = criaDiv();
        ul.appendChild(div);
        div.appendChild(el);
        div.appendChild(btn);
        if(resultado <= 29) {
            el.innerHTML = `Seu resultado foi ${resultado} acordes em 1 minuto: Precisa de mais prática`;
            el.classList.add('lista__list--item', 'item--bad');
        }
        if(resultado <= 49) {
            el.innerHTML = `Seu resultado foi ${resultado} acordes em 1 minuto: Continue praticando`;
            el.classList.add('lista__list--item', 'item--mid');
        }
        if(resultado > 50) {
            el.innerHTML = `Seu resultado foi ${resultado} acordes em 1 minuto: Parabéns`;
            el.classList.add('lista__list--item', 'item--good');
        }
        if(resultado < 1 || resultado > 90) {
            el.innerHTML = `Por favor, coloque um número válido`;
            el.classList.add('lista__list--item', 'item--null');
        }
    }
    btn.addEventListener('click', () => {
        criaResultado();
        input.value = '';
    });
    input.addEventListener('keypress', function(e) {
        if(e.keyCode === 13) {
            criaResultado();
            input.value = '';
        }
    })
    document.body.addEventListener('click', (e) => {
        const clicked = e.target;
        if(e.target.classList.contains('btnDelete')) {
            clicked.parentElement.remove();
        }
    });
})();