


import './styles/style.scss'
import './microphoneServ'
import './allvoicesserver'
import './streamserver'
import {handleMicrophoneClick} from "./microphoneServ";
import {stream} from "./streamserver";
import {allVoice} from "./allvoicesserver";


let batAllVoi=document.getElementById('button1')
let batMicro=document.getElementById('button2')
let batStream=document.getElementById('button3')
let InserTxt=document.querySelector('.sum>h1')
let recordBut=document.getElementById('recordBtID')



batAllVoi.addEventListener('click',function(){
    InserTxt.innerHTML='All voice: Active'
    document.querySelector('#button1').style.backgroundColor="#F0E68C";
    document.querySelector('#button2').style.backgroundColor="white";
    document.querySelector('#button3').style.backgroundColor="white";
    allVoice();
    document.querySelector('#recordBtID').style.display='none';
    var container = document.getElementById('allVoicesList');
    while (container.firstChild) {container.removeChild(container.firstChild);}
})

batMicro.addEventListener('click',function(){
    InserTxt.innerHTML='Microphone: Active'
    document.querySelector('#button2').style.backgroundColor="#F0E68C";
    document.querySelector('#button1').style.backgroundColor="white";
    document.querySelector('#button3').style.backgroundColor="white";


    var container = document.getElementById('allVoicesList');
    while (container.firstChild) {container.removeChild(container.firstChild);}
    document.querySelector('#recordBtID').style.display='inline-block';

})

batStream.addEventListener('click',function(){
    InserTxt.innerHTML='Stream: Active'
    document.querySelector('#button3').style.backgroundColor="#F0E68C";
    document.querySelector('#button1').style.backgroundColor="white";
    document.querySelector('#button2').style.backgroundColor="white";

    var container = document.getElementById('allVoicesList');
    while (container.firstChild) {container.removeChild(container.firstChild);}
    document.querySelector('#recordBtID').style.display='none';
    stream();
})

 recordBut.addEventListener('click',function() {
     handleMicrophoneClick();
 })

