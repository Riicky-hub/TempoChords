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
            }
            if(minuto === 1) {
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