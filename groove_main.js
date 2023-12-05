let playPauseButton = document.getElementById('play-img');
let audioPlayer = document.getElementById("audioPlayer");
let durationRange = document.getElementById('durationRange');
let progressBar = document.getElementById('progressBar');
let thumb = document.querySelector(".thumb");
let songContainer = document.querySelectorAll(".media-container");

songContainer.forEach(e => {
    e.addEventListener('click', () => {
        audioPlayer.src = e.querySelector('audio').src;
        console.log(audioPlayer);
        playPauseButton.src = "icon-images/play.png";
        play();
    })
})

 // now song functions..
let playingDuration = document.getElementById("playingDuration");
let totalDuration = document.getElementById("totalDuration");

// updateDuration();
audioPlayer.addEventListener('timeupdate', updateDuration);

function updateDuration() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    const percentage = (currentTime / duration) * 100;
    durationRange.value = percentage;

    // Set the width of the progress bar
    progressBar.style.width = (percentage) + '%';
    thumb.style.left = (percentage) + "%";
    // when 100% left it goes little ahead of the durationRange bar because it is placed at the end of the progress bar so to make it end at the range we subract 1.5% left position from it.

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const hours = Math.floor(minutes/3600);

    const min = Math.floor(duration / 60);
    const sec = Math.floor(duration % 60);
    const hr = Math.floor(min/3600);

    totalDuration.innerHTML = 
    `${hr}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;

    playingDuration.innerHTML =   
    `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
} 
durationRange.addEventListener('input', () => {
    const percentage = durationRange.value;
    const duration = audioPlayer.duration;

    const newTime = (percentage / 100) * duration;
    audioPlayer.currentTime = newTime;
    thumb.style.left = (percentage) + "%";
});  

function play() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.src = "icon-images/pause.png";
        playPauseButton.style.width = "24px";
        playPauseButton.style.height = "24px";
    } else {
        audioPlayer.pause();
        playPauseButton.src = "icon-images/play.png";
    }
}
playPauseButton.addEventListener('click', () => {
    play();
});   
