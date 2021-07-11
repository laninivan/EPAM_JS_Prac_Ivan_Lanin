import io from 'socket.io-client'

let mediaRec = ""

export function handleMicrophoneClick() {
    let elems = document.getElementsByClassName('recording')
    const recordBtn = document.getElementById('recordBtID')


    if (elems.length ==0){
        console.log(1)
        recordBtn.style.color = 'red'
        recordMessage()
        recordBtn.classList.toggle('recording')

    }
    else{
        console.log(2)
        closeRecorder();
        recordBtn.classList.toggle('recording')
        recordBtn.style.color = 'dimgray'

    }
}

function recordMessage() {
    const socket = io.connect('https://voicy-speaker.herokuapp.com');

    socket.on('connect', function(){
        console.log(socket.connected)
    })

    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream);
            mediaRec = mediaRecorder;
            mediaRecorder.start();

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                socket.emit('audioMessage', audioChunks);
            });

            setTimeout(() => {
                mediaRecorder.stop();
            }, 5000);
        });
}

function closeRecorder(){
    mediaRec.stop();
}