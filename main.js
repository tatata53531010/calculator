'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const symbol = document.getElementById('symbol');
const resultArea = document.getElementById('result');
const buttons = document.getElementsByTagName('button');

//受け取った値を数値に変換して計算する関数
const calculate = (getNum1, getNum2) => {
    const num1 = Number.parseFloat(getNum1); //数値に変換
    const num2 = Number.parseFloat(getNum2);
    const getSymbol = symbol.value; //現在入力されている四則演算子を取得
    let result;
    console.log(num1);
    console.log(num2);

    if (getSymbol === '+') {
        result = num1 + num2;
    } else if (getSymbol === '−') {
        result = num1 - num2;
    } else if (getSymbol === '×') {
        result = num1 * num2;
    } else if (getSymbol === '÷') {
        result = num1 / num2;
    }
    return result;
}

//何かのボタンがクリックされると呼び出される関数
const getInputValue = () => {
    const inputValue = event.target.innerText;  //クリックされたボタンの値を取得
    const getAttr = event.target.getAttribute('class');  //クリックされたボタンのclass属性値を取得
    //クリックされたボタンの値と属性値を表示
    console.log(inputValue);
    console.log(getAttr);

    if (symbol.value === '' && getAttr === 'btn-number') {
        //+や-などの記号が入力されていない、かつ、クリックされたものが数字であればnum1に値を出力
        if (num1.value.length < 10) {  //出力される数字は１０桁までに制御
            num1.value += inputValue;
        }
    } else if (symbol.value !== '' && getAttr === 'btn-number') {
        //+や-などの記号が入力されていて、かつ、クリックされたものが数字であればnum2に値を出力
        if (num2.value.length < 10) {  //出力される数字は１０桁までに制御
            num2.value += inputValue;
        }
    } else if (num1.value !== '' && (inputValue === '+' || inputValue === '−' || inputValue === '×' || inputValue === '÷')) {
        //入力されたものが四則演算子であればsymbolに記号を出力
        symbol.value = inputValue;
    } else if (inputValue === '=' && num1.value != '' && num2.value != '' && symbol.value != '') {
        const getNum1 = num1.value;
        const getNum2 = num2.value;
        const result = calculate(getNum1, getNum2); //渡した引数を数値に変換させて計算させる関数を呼び出す
        resultArea.innerText = result; //計算した結果の値を出力
    } else if (inputValue === '%') {
        const resultVal = resultArea.innerText;
        resultArea.innerText = resultVal / 100; 
    } else if (inputValue === 'AC') {
        num1.value = '';
        num2.value = '';
        symbol.value = '';
        resultArea.innerText = 0;
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('onclick', 'getInputValue()');
}