function getElementValue(id) {
    return document.getElementById(id).value;
}

function calcularNota() {
    var nomeCliente = getElementValue("nomeCliente");
    var dataEmissao = new Date(getElementValue("dataEmissao") + 'T00:00');
    dataEmissao = dataEmissao.toLocaleDateString('pt-BR');
    var descricaoServico = getElementValue("descricaoServico");
    var valorServico = parseFloat(getElementValue("valorServico"));
    var taxaImposto = parseFloat(getElementValue("taxaImposto"));

    var imposto = (taxaImposto / 100) * valorServico;
    var total = valorServico + imposto;

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h2>Nota Fiscal Gerada:</h2>
                              <p>Data de Emissão: ${dataEmissao}</p>
                              <p>Nome do Cliente: ${nomeCliente}</p>
                              <p>Descrição do Serviço: ${descricaoServico}</p>
                              <p>Valor do Serviço: R$ ${valorServico.toFixed(2)}</p>
                              <p>Imposto: R$ ${imposto.toFixed(2)}</p>
                              <p>Total: R$ ${total.toFixed(2)}</p>`;
    return false;
}
