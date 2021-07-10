import io from "socket.io-client";

export function stream(){
    const socket = io.connect('https://voicy-speaker.herokuapp.com')
    const InserTxt=document.querySelector('.sum>h1')

    socket.on("audioMessage", function (audioChunks){
        if (InserTxt.innerText === 'Stream: Active'){
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        }
        else return;
    })
}