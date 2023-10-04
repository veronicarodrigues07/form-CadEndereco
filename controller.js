'use strict'; // Modo restrito
// Consumindo API de CEP, do Viacep
// https://viacep.com.br/

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Verifica se CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa numero informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);//verifica tamanho do cep digitado e executa função de validação do cep eNumero

//função para preencher formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//consumo da API da ViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //esperar
        const addres = await dados.json();
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto')
    }
}
//adiciona evento DOM ao input do CEP para executar função pesquisarCep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);