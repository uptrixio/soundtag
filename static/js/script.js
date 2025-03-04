let sounds = [
    'static/sound/1.mp3',
    'static/sound/2.mp3',
    'static/sound/3.mp3'
];

let currentSoundIndex = 0;
let audio = new Audio(sounds[currentSoundIndex]);
audio.loop = true;

document.getElementById('image-button-sound').addEventListener('click', () => {
    audio.volume = 1.0;
    audio.play();
});

document.getElementById('mute-button').addEventListener('click', () => {
    audio.pause();
    currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
    audio = new Audio(sounds[currentSoundIndex]);
    audio.loop = true;
    audio.volume = 1.0;
    audio.play();
});
