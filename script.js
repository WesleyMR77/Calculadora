onload = () => {
document.querySelector('#botao0').onclick = () => digito(0);
 document.querySelector('#botao1').onclick = () => digito(1);
 document.querySelector('#botao2').onclick = () => digito(2);
 document.querySelector('#botao3').onclick = () => digito(3);
 document.querySelector('#botao4').onclick = () => digito(4);
 document.querySelector('#botao5').onclick = () => digito(5);
 document.querySelector('#botao6').onclick = () => digito(6);
 document.querySelector('#botao7').onclick = () => digito(7);
 document.querySelector('#botao8').onclick = () => digito(8);
 document.querySelector('#botao9').onclick = () => digito(9);
 document.querySelector('#botao-virgula').onclick = virgula;
 document.querySelector('#botao-limpar').onclick =  limpa;
 document.querySelector('#botao-adicao').onclick = () => operador('+');
 document.querySelector('#botao-subtracao').onclick = () => operador('-');
 document.querySelector('#botao-multiplicacao').onclick = () => operador('*');
 document.querySelector('#botao-divisao').onclick = () => operador('/');
 document.querySelector('#botao-porcentagem').onclick = () => operador('%');
 document.querySelector('#botao-igual').onclick = calcula;
}

let vValor = '';
let ehNovoNumero = true;
let valorAnterior = 0;
let operacaoPendente = null;

const atualizaVisor = () => {
    let [parteInteira, parteDecimal] = vValor.split(',');
    let v = '';
    c=0;
    for(let i = parteInteira.length -1; i >= 0; i--){
        if(++c > 3){
            v = '.' + v;
            c = 1;
        }
        v = parteInteira[i] + v;
    }
    v = v + (parteDecimal ? ',' + parteDecimal : '');

    document.querySelector('#result').value = v;
}

const digito = (n) => {
    if(ehNovoNumero){
        vValor = '' + n;
        ehNovoNumero = false;
    } else{ vValor += n;
    }
    atualizaVisor();
    
}


const virgula = () => {
    if(ehNovoNumero){
        vValor = '0,';
        ehNovoNumero = false;
    } else if(vValor.indexOf(',') == -1){
        vValor += ',';
    }
    atualizaVisor();
}

const limpa = () => {
    ehNovoNumero = true;
    valorAnterior = 0;
    vValor = '0';
    operacaoPendente = null;
    atualizaVisor()
}

const valorAtual = () => parseFloat(vValor.replace(',', '.'));

const operador = (op) => {
    calcula();
    valorAnterior = valorAtual();
    operacaoPendente = op;
    ehNovoNumero = true;
}


const calcula = () => {
    if(operacaoPendente != null){
        let resultado;
        switch(operacaoPendente){
            case '+': 
                resultado = valorAnterior + valorAtual(); 
                break;
            case '-': 
                resultado = valorAnterior - valorAtual(); 
                break;
            case '*': 
                resultado = valorAnterior * valorAtual(); 
                break;
            case '/':
                resultado = valorAnterior / valorAtual(); 
                break;
                case '%':
                    resultado = valorAtual() * (valorAnterior/100); 
                    break;                
        }
        vValor = resultado.toString().replace('.', ',');
    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
}