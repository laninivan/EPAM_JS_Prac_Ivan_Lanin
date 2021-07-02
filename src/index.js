console.log('Hello World!')

import './styles/style.scss'


let batAllVoi=document.getElementById('button1')
let batMicro=document.getElementById('button2')
let batStream=document.getElementById('button3')
let InserTxt=document.querySelector('.sum>h1')

batAllVoi.addEventListener('click',function(){
    InserTxt.innerHTML='All voice: Active'
    document.querySelector('#button1').style.backgroundColor="#F0E68C";
    document.querySelector('#button2').style.backgroundColor="white";
    document.querySelector('#button3').style.backgroundColor="white";
})

batMicro.addEventListener('click',function(){
    InserTxt.innerHTML='Microphone: Active'
    document.querySelector('#button2').style.backgroundColor="#F0E68C";
    document.querySelector('#button1').style.backgroundColor="white";
    document.querySelector('#button3').style.backgroundColor="white";
})

batStream.addEventListener('click',function(){
    InserTxt.innerHTML='Stream: Active'
    document.querySelector('#button3').style.backgroundColor="#F0E68C";
    document.querySelector('#button1').style.backgroundColor="white";
    document.querySelector('#button2').style.backgroundColor="white";
})


