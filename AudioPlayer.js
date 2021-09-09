class AudioPlayer{
    constructor({ audio, trigger }){
        this.audio = audio
        this.trigger = trigger

        this.trigger.addEventListener('click', () => {
            const { paused: status } = this.audio

            status && this.play()
            status || this.pause()
        })

        this.audio.addEventListener('ended', () => this.trigger.textContent = 'ESCUTAR')
    }

    play(){
        this.audio.play()
        this.trigger.textContent = 'PAUSAR'
    }

    pause(){
        this.audio.pause()
        this.trigger.textContent = 'CONTINUAR'
    }

    static initialize({ audio, trigger }){
        return new AudioPlayer({ audio, trigger })
    }
}

export default AudioPlayer