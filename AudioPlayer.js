const createButton = ({ icon, label }) => `
    <img src=${icon} />
    <span>${label}</span>
`

class AudioPlayer{
    static PLAY_ICON = './assets/play.svg'
    static PAUSE_ICON ='./assets/pause.svg'

    constructor({ audio, trigger }){
        this.audio = audio
        this.trigger = trigger

        this.trigger.addEventListener('click', () => {
            const { paused: status } = this.audio

            status && this.play()
            status || this.pause()
        })


        this.audio.addEventListener('ended', () => {
            this.trigger.innerHTML = createButton({ 
                icon: AudioPlayer.PLAY_ICON,
                label: 'Escutar'
            })
        })
    }
    
    play(){
        this.audio.play()

        this.trigger.innerHTML = createButton({
            icon: AudioPlayer.PAUSE_ICON,
            label: 'Pausar'
        })
    }

    pause(){
        this.audio.pause()
        
        this.trigger.innerHTML = createButton({
            icon: AudioPlayer.PLAY_ICON,
            label: 'Continuar'
        })
    }


    static initialize({ audio, trigger }){
        return new AudioPlayer({ audio, trigger })
    }
}

export default AudioPlayer