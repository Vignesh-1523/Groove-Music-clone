let playPauseButton = document.getElementById('play-img');
let audioPlayer = document.getElementById("audioPlayer");
let durationRange = document.getElementById('durationRange');
let progressBar = document.getElementById('progressBar');
let thumb = document.querySelector(".thumb");

let songContainer = document.querySelectorAll(".media-container");
let songImage = document.querySelector("#temp_img");
let largeSongName = document.querySelector(".large");
let smallSongName = document.querySelector(".small");


let previous = document.querySelector("#previous-img");
let next = document.querySelector("#next-img");
let suffle = document.querySelector("#suffle-img");
let loop = document.querySelector("#repeat-img");

let songArray = [];
var currentSongIndex = 0;
var loopFunc;
songContainer.forEach((e, index) => {
    const audioSrc = e.querySelector('audio').src;
   /* loopFunc = () => {
        audioSrc.loop = true;
    } */
 /*  loopFunc = () => {
        const audioElement = e.querySelector('audio');
        audioElement.setAttribute('loop', true);
        console.log(audioElement);
    } */
    
    songArray.push(audioSrc);
        e.addEventListener('click', () => {
        songImage.src = e.querySelector('img').src;
        largeSongName.innerHTML = e.querySelector('p').innerHTML;
        smallSongName.innerHTML = e.querySelector('p').innerHTML;
        audioPlayer.src = audioSrc;

        playSong();
        currentSongIndex = index;
    }); 
});
function changeDatas() {
    songImage.src = songContainer[currentSongIndex].querySelector('img').src;
    largeSongName.innerHTML = songContainer[currentSongIndex].querySelector('p').innerHTML;
    smallSongName.innerHTML = songContainer[currentSongIndex].querySelector('p').innerHTML;
}

console.log(songArray);

var isSuffle = false;
var suffledSongIndex = [];
var i = 1; 
function playNext() {  
    if(isSuffle == true){
        let suffleIndex = Math.floor(Math.random() * songArray.length);
        currentSongIndex = suffleIndex;
        suffledSongIndex.push(currentSongIndex);
        playCurrentSong();
        console.log(currentSongIndex);
        console.log(suffledSongIndex);
    } else{
        currentSongIndex = (currentSongIndex + 1) % songArray.length;
        playCurrentSong();
        console.log(currentSongIndex);
    }  
}

function playPrevious() {
    if(isSuffle == true){
        currentSongIndex = suffledSongIndex[((suffledSongIndex.length - i - 1) + suffledSongIndex.length) % suffledSongIndex.length] ;
        playCurrentSong();
        i++;
        console.log(currentSongIndex);
    } else{
        currentSongIndex = (currentSongIndex - 1 + songArray.length) % songArray.length;
        playCurrentSong();
        console.log(currentSongIndex);
    }
}

function suffleSong() {
    if(isSuffle == false){
        isSuffle = true;
        suffle.style.backgroundColor = "grey";
        suffle.style.padding = "2px";
        suffle.style.borderRadius = "5px";
    } else{
        isSuffle = false;
        suffle.style.backgroundColor = "transparent";
    }
}

function playCurrentSong() {
    audioPlayer.pause();
    audioPlayer.src = songArray[currentSongIndex];
    changeDatas();
    playSong();
}

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

function playSong() {
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            console.log("Playback started successfully");
        }).catch(e => {
            console.error("Error playing audio:", e);
        });
        playPauseButton.src = "icon-images/pause.png";
        playPauseButton.style.width = "24px";
        playPauseButton.style.height = "24px";
    } else {
        audioPlayer.pause();
        playPauseButton.src = "icon-images/play.png"; 
    }
  }

// Event listener for play/pause button
playPauseButton.addEventListener('click', () => {
    playSong();
});   

// Event listeners for next and previous buttons
next.addEventListener('click', playNext);
previous.addEventListener('click', playPrevious);

// Event listener for suffle button
suffle.addEventListener('click', suffleSong);

// Event listener for loop button
// loop.addEventListener('click', loopFunc());

// Event listener to stop the song once it finishes
audioPlayer.addEventListener('ended', () => {
    playNext();
});
