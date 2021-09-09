import AudioPlayer from './AudioPlayer.js'

const playButton = document.querySelector('#play-button')
const audiotag = document.querySelector('#player')

AudioPlayer.initialize({ audio: audiotag, trigger: playButton })