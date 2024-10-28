function adicionar(valor) {
    document.getElementById('resultado').value += valor;
}

function calcular() {
    const resultado = eval(document.getElementById('resultado').value);
    document.getElementById('resultado').value = resultado;
}

function limpar() {
    document.getElementById('resultado').value = '';
}
