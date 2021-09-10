const createButton = ({ icon, label }) => `
    <img src=${icon} />
    <span>${label}</span>
`

let lyricsHandler = null
let currentPosition = document.body.clientTop

class AudioPlayer{
    static PLAY_ICON = './assets/play.svg'
    static PAUSE_ICON ='./assets/pause.svg'

    constructor({ audio, trigger }){
        this.audio = audio
        this.trigger = trigger

        this.init()
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

        window.clearInterval(lyricsHandler)
    }

    init(){
        this.trigger.addEventListener('click', () => {
            const { paused: status } = this.audio

            status && this.play()
            status || this.pause()

            setTimeout(() => {
                lyricsHandler = setInterval(() => {
                    currentPosition += 16
                    
                    window.scrollTo({ top: currentPosition, left: 0, behavior: 'smooth' })
                }, 1000)
                
            }, 6000)
        })

        this.audio.addEventListener('ended', () => {
            this.trigger.innerHTML = createButton({ 
                icon: AudioPlayer.PLAY_ICON,
                label: 'Escutar'
            })                        
        })

    }

    static initialize({ audio, trigger }){
        return new AudioPlayer({ audio, trigger })
    }
}
/*
document.createElement('audio').addEventListener('playing', event => {
    document.createElement('audio').currentTime
})*/

export default AudioPlayer