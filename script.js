// --- CONFIGURAÇÕES DAS IMAGENS DE FUNDO ---
// Você pode trocar estas URLs por quaisquer imagens que preferir!
const imagemDia = 'https://sdmntprwestus.oaiusercontent.com/files/00000000-f69c-6230-bfd7-190f973741bc/raw?se=2025-09-29T23%3A03%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=f744d41e-e9d5-5057-968a-e6f399acd948&skoid=9063adf3-a524-4acf-b70a-8731b33f2f50&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-29T18%3A28%3A14Z&ske=2025-09-30T18%3A28%3A14Z&sks=b&skv=2024-08-04&sig=pM%2BQoHDrpi/uxtaKoBqEiPWJwhAHWcv99dHizmw3nlM%3D';
const imagemNoite = 'https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-7430-61fa-a393-c4a45a981718/raw?se=2025-09-29T22%3A59%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=1f3e0cc1-7e09-5939-9881-be29c0548807&skoid=9063adf3-a524-4acf-b70a-8731b33f2f50&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-29T18%3A28%3A36Z&ske=2025-09-30T18%3A28%3A36Z&sks=b&skv=2024-08-04&sig=biGSoM7aj7mo%2BI2GiTIKajidetcHjuBeo39RD53i26s%3D';

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