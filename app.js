const display = document.getElementById('display');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stopt = document.getElementById('stop');
const reset = document.getElementById('reset');
const result = document.getElementById('contresult');

let contador = 0;
let position = 0;
let chronometer;
let btn = '';

document.addEventListener('DOMContentLoaded',()=>{
    start.addEventListener('click', ()=> startTimer());
    pause.addEventListener('click', ()=> pauseTimer());
    stopt.addEventListener('click', ()=> stopTimer());
    reset.addEventListener('click', ()=> resetTimer());
})

function startTimer(){
    if(btn == 'start') return
    chronometer = setInterval(()=>{
        contador++;
        display.value = contador;
    },1000);
    btn = 'start';
    if(display.classList.contains('strove'))
    display.classList.remove('strove');
}

function pauseTimer(){
    if(btn == 'stop'  || btn == 'reset' || btn=='') return
    display.value = 'pause: '+ contador;
    if(!display.classList.contains('strove'))
    display.classList.add('strove');
    clearInterval(chronometer);
    btn = 'pause';
}

function stopTimer(){
    if(btn == 'stop' || btn == '') return;
    clearInterval(chronometer);
    nodos(contador, position);
    display.value = '0';
    contador = 0;
    btn = 'stop';
    if(display.classList.contains('strove'))
    display.classList.remove('strove');
}

function resetTimer(){
if(btn=='reset' || btn == '') return
clearInterval(chronometer);
    while(result.hasChildNodes()){
        result.removeChild(result.lastChild);
    }
    display.value = '0';
    contador = 0;
    btn = 'reset';
    if(display.classList.contains('strove'))
    display.classList.remove('strove');
}

function nodos(valor){
    position++;
    let p = document.createElement('p');
    p.setAttribute('id','result');
    p.innerHTML = 'Record '+position+':  '+ valor;
    result.appendChild(p);
    if(result.hasChildNodes) result.insertBefore(p, result.lastChild);
}