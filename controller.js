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

//Consumo da API da ViaCEP
 const pesquisarCep = async()=>{
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados =await fetch(url); //aguardar
        const addres = await dados.json(); 
        //has0wnProperty retorna um booleano indicando se o objeto possui a propriedade especifica como uma propriedade definida no proprio objeto em questao
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres); 
        }
    }else{
        alert('CEP Incorreto');
    }
 }
 //Adicona evento DOM ao input do CEP para executar função pesquisarCep
 document.getElementById('cep').addEventListener('focusout',pesquisarCep);