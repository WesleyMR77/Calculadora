var total = 0;
var parte1 = 0;
var guarda_sinal = '';

function valor_0() {
    document.getElementById('conta').value = document.getElementById('conta').value + '0';
}
function valor_1() {
    document.getElementById('conta').value = document.getElementById('conta').value + '1';
}

function valor_2() {
    document.getElementById('conta').value = document.getElementById('conta').value + '2';
}

function valor_3() {
    document.getElementById('conta').value = document.getElementById('conta').value + '3';
}

function valor_4() {
    document.getElementById('conta').value = document.getElementById('conta').value + '4';
}

function valor_5() {
    document.getElementById('conta').value = document.getElementById('conta').value + '5';
}

function valor_6() {
    document.getElementById('conta').value = document.getElementById('conta').value + '6';
}

function valor_7() {
    document.getElementById('conta').value = document.getElementById('conta').value + '7';
}

function valor_8() {
    document.getElementById('conta').value = document.getElementById('conta').value + '8';
}

function valor_9() {
    document.getElementById('conta').value = document.getElementById('conta').value + '9';
}

function valor_adicao() {
    if(parte1 == 0){
        guarda_sinal = '+';
        parte1 = parseInt(document.getElementById('conta').value);
        document.getElementById('result').value = parte1;
        document.getElementById('conta').value = ''
    } else{ 
        total += parte1 + parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        document.getElementById('conta').value = ''

    }
}
function valor_subtracao() {
    guarda_sinal = '-';
    if(parte1 == 0){
        parte1 = parseInt(document.getElementById('conta').value);
        document.getElementById('result').value = parte1;
        document.getElementById('conta').value = ''
    } else{ 
        total -= parte1 - parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        document.getElementById('conta').value = ''

    }
}


function botao_multiplicacao(){
    guarda_sinal = '*';
    if(parte1 == 0){
        parte1 = parseInt(document.getElementById('conta').value);
        document.getElementById('result').value = parte1;
        document.getElementById('conta').value = ''
    } else{ 
        total *= parte1 * parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        document.getElementById('conta').value = ''

    }
}

function botao_divisao(){
    guarda_sinal = '/';
    if(parte1 == 0){
        parte1 = parseInt(document.getElementById('conta').value);
        document.getElementById('result').value = parte1;
        document.getElementById('conta').value = ''
    } else{ 
        total /= parte1 / parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        document.getElementById('conta').value = ''

    }
}

function verificar(){
    if( guarda_sinal == '+'){
        total += parte1 + parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        guarda_sinal = '+';
        document.getElementById('conta').value = 0;
        parte1 = 0;
    }
    if( guarda_sinal == '-'){
        total -= parte1 - parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        guarda_sinal = '-';
        document.getElementById('conta').value = 0;
        parte1 = 0;
    }
    if( guarda_sinal == '*'){
        total *= parte1 + parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        guarda_sinal = '*';
        document.getElementById('conta').value = 0;
        parte1 = 0;
    }
    if( guarda_sinal == '*'){
        total *= parte1 * parseInt(document.getElementById('conta').value) ;
        document.getElementById('result').value = total;
        guarda_sinal = '*';
        document.getElementById('conta').value = 0;
        parte1 = 0;
    }
}



function limpar() {
    
    total = 0
    document.getElementById('conta').value = 0;
    document.getElementById('result').value = 0;
}

