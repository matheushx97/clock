// --- CONFIGURAÇÕES DAS IMAGENS DE FUNDO ---
// Você pode trocar estas URLs por quaisquer imagens que preferir!
const imagemDia = 'https://drive.google.com/file/d/10R9sq7W5vhP3goKohJLO8baP1aNRTriv/view?usp=sharing';
const imagemNoite = 'https://raw.githubusercontent.com/matheushx97/clock/refs/heads/main/night.png';

// --- Seletores de Elementos do DOM ---
const hoursMinutesElement = document.getElementById('hours-minutes');
const secondsElement = document.getElementById('seconds');
const dateElement = document.getElementById('date');
const bodyElement = document.body;

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// --- FUNÇÃO PARA ATUALIZAR O RELÓGIO E DATA ---
function updateTime() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    hoursMinutesElement.textContent = `${hours}:${minutes}`;
    secondsElement.textContent = seconds;

    const dayOfWeek = diasDaSemana[now.getDay()];
    const dayOfMonth = now.getDate();
    const month = meses[now.getMonth()];
    const year = now.getFullYear();
    
    dateElement.textContent = `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
}

// --- FUNÇÃO PARA ATUALIZAR O FUNDO DE TELA ---
function updateBackground() {
    const currentHour = new Date().getHours();
    
    // Define "dia" como sendo entre 6h e 18h
    if (currentHour >= 6 && currentHour < 18) {
        bodyElement.style.backgroundImage = `url('${imagemDia}')`;
    } else {
        bodyElement.style.backgroundImage = `url('${imagemNoite}')`;
    }
}

// --- INICIALIZAÇÃO ---

// Atualiza o relógio a cada segundo
updateTime();
setInterval(updateTime, 1000);

// Atualiza o fundo de tela assim que a página carrega
updateBackground();
// E verifica a cada minuto se precisa trocar a imagem (não precisa ser a cada segundo)

setInterval(updateBackground, 60000);

