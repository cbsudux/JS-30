const aKey = document.querySelector('.a-key')
console.log(aKey)

keys = {}
const keyElements = document.querySelectorAll('.beat-box')

// {KeyA: div.beat-box.a-key, KeyS: div.beat-box.s-key, KeyD: div.beat-box.d-key, KeyF: div.beat-box.f-key, KeyG: div.beat-box, …}
keyElements.forEach(element => {
    keyAlphabet = element.innerText[0]
    keys['Key' + keyAlphabet] = element
})

const getAudio = (name) => {
    switch (name) {
        case 'a':
            audioFileName = `clap.wav`;
            break;
        case 's':
            audioFileName = `hihat.wav`;
            break;
        case 'd':
            audioFileName = `kick.wav`;
            break;
        case 'f':
            audioFileName = `openhat.wav`;
            break;
        case 'g':
            audioFileName = `boom.wav`;
            break;
        case 'h':
            audioFileName = `ride.wav`;
            break;
        case 'j':
            audioFileName = `snare.wav`;
            break;
        case 'k':
            audioFileName = `tom.wav`;
            break;
        case 'l':
            audioFileName = `tink.wav`;
            break;


    }

    audioFileName = `sounds/${audioFileName}`
    return new Audio(audioFileName)
}


document.addEventListener('keydown', (event) => {
    // add pressed class to get shadow
    var name = event.key;
    var code = event.code;
    console.log(name)
    // Alert the key name and key code on keydown
    console.log(`Key pressed ${name} \r\n Key code value: ${code}`);

    keys[String(code)].classList.add('pressed')

    // Play Kick sound
    getAudio(name).play()

})


document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;

    keys[String(code)].classList.remove('pressed')


})