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

let music_content = document.getElementById("musicContent");


let songArray = [];
let songDetails = [];
let details = [];

let audDuration;
var currentSongIndex = 0;
songContainer.forEach((e, index) => {
    const audioSrc = e.querySelector('audio').src;
    songArray.push(audioSrc);

    // temportary audio tag to get song duration.
    let aud = document.createElement('audio');
    aud.src = audioSrc;
    aud.addEventListener('loadedmetadata', function () {
        console.log(this.duration);
        audDuration = (this.duration / 60).toFixed(2);
        console.log(audDuration);

    // I push details into the array once the audio is loaded because if I give this outside the "audDuration" will not work because before song loads it tries to take value, at that time it is undefined so undefined will added into it.
    details.push(e.querySelector('p').innerHTML);
    details.push("unknown movie");
    details.push(e.querySelector('span').innerHTML);
    details.push(audDuration);
    details.push(audioSrc);
    details.push(e.querySelector('img').src);
    songDetails.push(details);
    
    // I called this creation function because it depends on audDuration here. If I call this outside then undefined will store as duration.
    listCreation();
    })

        e.addEventListener('click', () => {
        songImage.src = e.querySelector('img').src;
        largeSongName.innerHTML = e.querySelector('p').innerHTML;
        smallSongName.innerHTML = e.querySelector('p').innerHTML;
        audioPlayer.src = audioSrc;

        playSong();
        currentSongIndex = index;
    }); 
});

console.log(songDetails);
var list;

  function listCreation() {
    list = document.createElement('div');

    for (let i = 0; i < 4; i++) {
      list.appendChild(document.createElement('span'));
    }

    let audioFile = document.createElement('audio');
    list.appendChild(audioFile);
    audioFile.src = details[4];

    let imageFile = document.createElement('img');
    imageFile.style.display = "none";
    list.appendChild(imageFile);
    imageFile.src = details[5];

    // here we select all the four span elements created inside the div element..
    let spanElements = list.querySelectorAll('span');
    let index = 0;
    spanElements.forEach(span => {
      span.innerHTML = details[index];
      index++;
    });
        
    music_content.appendChild(list);
    details = []; // once updated details get removed.
  }

  // this has all created div elements - lists in it.
  let totalList = music_content.querySelectorAll('div');

  totalList.forEach((list, index) => {
    list.addEventListener('click', () => {
        songImage.src = list.querySelector('img').src;
        // queryselectorAll get all span elements but simply querySelector will point the first span element.
        largeSongName.innerHTML = list.querySelector('span').innerHTML;
        smallSongName.innerHTML = list.querySelector('span').innerHTML;
        audioPlayer.src = list.querySelector('audio').src;
    
        playSong();
        currentSongIndex = index;
      })    
  })

function changeDatasForList() {
    songImage.src = totalList[currentSongIndex].querySelector('img').src;
    largeSongName.innerHTML = totalList[currentSongIndex].querySelector('span').innerHTML;
    smallSongName.innerHTML = totalList[currentSongIndex].querySelector('span').innerHTML;
}

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
        suffledSongIndex.unshift(currentSongIndex);
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
        currentSongIndex = suffledSongIndex[ (i + suffledSongIndex.length) % suffledSongIndex.length] ;
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
        suffle.style.backgroundColor = "#353535";
        suffle.style.padding = "2px";
        suffle.style.borderRadius = "5px";
    } else{
        isSuffle = false;
        suffle.style.backgroundColor = "transparent";
        suffle.style.padding = "0px";
       // clearing all song index from the array so that completely new elements will add from first when suffle enabled.
       suffledSongIndex = [];
       console.log(suffledSongIndex);
    }
}
// To loop the songs...
let loopStatus = 'off';
// It gives a dom exception to handle the song at this point because play() pause() exception occurs again here. It also occurs in some places in the above codes and thoes were cleared and handled successfully. Now here we are going to clear that issue by make sure that one eventlistener doesn't affect the other. So, that we remove previously set eventlisteners in loop function. By this everytime when the loop button gets clicked old eventlisteners removed first.

// function to handle song end for looping
function handleSongEndForLoop() {
    console.log(loopStatus);
    playCurrentSong();
}
// function to handle song end for playing next
function handleSongEndForNext() {
    console.log(loopStatus);
    playNext();
}

function loopSong() {
    // Remove any previously set event listeners
    audioPlayer.removeEventListener('ended', handleSongEndForLoop);
    audioPlayer.removeEventListener('ended', handleSongEndForNext);

    if (loopStatus == 'off') {
        loopStatus = 'on';
        // Set new event listener for looping
        audioPlayer.addEventListener('ended', handleSongEndForLoop);
        loop.style.backgroundColor = "#353535";
        loop.style.padding = "2px";
        loop.style.borderRadius = "5px";
    } else {
        loopStatus = 'off';
        // Set new event listener for playing next
        audioPlayer.addEventListener('ended', handleSongEndForNext);
        loop.style.backgroundColor = "transparent";
        loop.style.padding = "0px";
    }
}

function playCurrentSong() {
    audioPlayer.pause();
    audioPlayer.src = songArray[currentSongIndex];
    changeDatas();
    changeDatasForList();
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
        playPauseButton.style.marginRight = "19px";
    } else {
        audioPlayer.pause();
        playPauseButton.src = "icon-images/play.png"; 
        playPauseButton.style.width = "28px";
        playPauseButton.style.height = "28px";
        playPauseButton.style.marginRight = "15px"; 
        // to avoid icons place shift (little) I give this margin and diff size for both play and pause.
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
loop.addEventListener('click', loopSong);


