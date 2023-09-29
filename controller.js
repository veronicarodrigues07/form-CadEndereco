'use strict'; // Modo restrito
//Consumindo API de CEP, do ViaCep
//https://viacep.com.br/

// Função para limpar o formulário
 const limparFormulario = () => {
document.getElementById('rua').value='';
document.getElementById('bairro').value='';
document.getElementById('cidade').value='';
document.getElementById('estado').value='';
}

//Verifica se CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa número informado com expressão regular
const cepValido =(cep) => cep.length == 8 && eNumero(cep);// Verificar o tamanho do cep digitando e executando sua função de validação do cep eNumero

//Função para preencher formulario 
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endeco.localidade;
    document.getElementById('estado').value = endereco.uf;

}