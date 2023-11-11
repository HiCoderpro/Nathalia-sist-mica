document.addEventListener('DOMContentLoaded', function () {
    // Define a data final para o contador (ano, mês, dia, horas, minutos, segundos)
    const countDownDate = new Date("December 01, 2023 00:00:00").getTime();

    // Atualiza o contador a cada segundo
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza os elementos HTML com os valores calculados
        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        // Se o contador terminar, exibe uma mensagem
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRADO";
        }
    }, 1000);

    // Função auxiliar para formatar o tempo (adiciona um zero à esquerda se for menor que 10)
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
});
//Global Penta Continental Union