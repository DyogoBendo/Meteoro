const playButton = document.querySelector('#play-button')
const audioPlayer = document.querySelector('#player')

document.createElement('audio').paus

const toggleMusic = () => {
    const { paused: status } = audioPlayer

    playButton.textContent = !status ? 'CONTINUAR' : 'PAUSAR'
    
    status && audioPlayer.play()
    status || audioPlayer.pause()
}

playButton.addEventListener('click', toggleMusic)