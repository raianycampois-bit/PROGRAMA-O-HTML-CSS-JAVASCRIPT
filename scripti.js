// Captura os elementos do HTML pelo seu ID
const formSimulador = document.getElementById('form-simulador');
const resultadoDiv = document.getElementById('resultado');

// Escuta o evento de 'submit' (envio) do formulário
formSimulador.addEventListener('submit', function(event) {
    // Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    // Cria variáveis para armazenar as informações digitadas pelo usuário
    const nome = document.getElementById('nome').value;
    const areaTotal = parseFloat(document.getElementById('area-total').value);
    const areaPreservada = parseFloat(document.getElementById('area-preservada').value);

    // Processamento: Calcula a porcentagem de área protegida
    const percentualPreservado = (areaPreservada / areaTotal) * 100;
    
    // Considera 20% como um valor representativo mínimo (Reserva legal básica)
    const minimoExigido = 20; 

    // Limpa classes anteriores da div de resultado antes de exibir o novo
    resultadoDiv.classList.remove('escondido', 'sucesso', 'alerta');

    // Variável de texto que manipula o DOM (HTML) com mensagens personalizadas
    let mensagemHTML = `<h3>Diagnóstico de ${nome}</h3>`;

    // Lógica condicional que traz a visão crítica para a realidade local do noroeste do PR
    if (percentualPreservado >= minimoExigido) {
        mensagemHTML += `<p><strong>Aprovação Ambiental!</strong> Sua propriedade preserva <strong>${percentualPreservado.toFixed(1)}%</strong> da área total. Você entende que proteger matas ciliares e nascentes é vital para o ecossistema e para a manutenção das chuvas na nossa região. Esse é o caminho para um agro verdadeiramente forte!</p>`;
        
        // Aplica estilização visual de sucesso
        resultadoDiv.classList.add('mostrar', 'sucesso');
    } else {
        mensagemHTML += `<p><strong>Alerta Vermelho!</strong> Apenas <strong>${percentualPreservado.toFixed(1)}%</strong> da sua área está preservada. No noroeste do Paraná, o desmatamento das beiras de rio causa erosão severa e secas prolongadas. Expandir a lavoura destruindo a natureza trará prejuízos enormes na próxima estiagem. É preciso reequilibrar!</p>`;
        
        // Aplica estilização visual de alerta
        resultadoDiv.classList.add('mostrar', 'alerta');
    }

    // Insere o texto gerado de volta no HTML e exibe na tela
    resultadoDiv.innerHTML = mensagemHTML;
});


