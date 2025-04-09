let historico = [];

function formatar() {
    const input = document.getElementById('input');
    const textoResultado = document.getElementById('textoResultado');

    const numeroLimpo = input.value.replace(/\D/g, '');

    let formatado = '';

    if (numeroLimpo.length === 11) {
        // Verifica se é um celular (começa com DDD + 9)
        if (numeroLimpo.charAt(2) === '9') { 
            formatado = numeroLimpo; // Celular: apenas números, sem formatação
        } else {
            formatado = numeroLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // CPF
        }
    } else if (numeroLimpo.length === 14) {
        formatado = numeroLimpo.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); // CNPJ
    } else if (numeroLimpo.length === 10 || numeroLimpo.length === 11) {
        formatado = numeroLimpo; // Celular: apenas números, sem formatação
    } else {
        formatado = 'Número inválido!';
    }

    textoResultado.textContent = formatado;
    input.value = '';

    if (formatado !== 'Número inválido!') {
        copiarNumero(formatado);
        
        historico.unshift(formatado);
        if (historico.length > 5) {
            historico.pop();
        }
        atualizarHistorico();
    }
}

function atualizarHistorico() {
    const historicoLista = document.getElementById('historicoLista');
    historicoLista.innerHTML = '';

    historico.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = () => {
            copiarNumero(item);
        };
        historicoLista.appendChild(li);
    });

    localStorage.setItem('historico', JSON.stringify(historico));
}

function copiarNumero(numero) {
    const tempInput = document.createElement('input');
    tempInput.value = numero;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Copiado para a área de transferência!';
    feedback.style.display = 'block';
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 2000);
}

function copiarResultado() {
    const textoResultado = document.getElementById('textoResultado');
    const texto = textoResultado.textContent;
    if (texto !== 'Resultado aparecerá aqui...' && texto !== 'Número inválido!') {
        copiarNumero(texto);
    }
}

function toggleHistorico() {
    const historicoWindow = document.getElementById('historicoWindow');
    const overlay = document.getElementById('overlay');
    if (historicoWindow.style.display === 'block') {
        historicoWindow.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        historicoWindow.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function loadTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

function loadHistorico() {
    const historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
        historico = JSON.parse(historicoSalvo);
        atualizarHistorico();
    }
}

loadTheme();
loadHistorico();