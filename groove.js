/* popup form js section */
let movie_name = document.getElementById("movie");
let artist_name = document.getElementById("artist");
let image_url = document.getElementById("url");
let song_file = document.getElementById("song-file");


/* js for a common audio player from footer */
let audioPlayer = document.getElementById("audioPlayer");
let durationRange = document.getElementById('durationRange');
let progressBar = document.getElementById('progressBar');
let thumb = document.querySelector(".thumb");
let playPauseButton = document.getElementById('play-img');


/* js for home section */
let home_content = document.getElementById("homeContent");


/* js for music section */
let music_content = document.getElementById("musicContent");


/* 1st js section - get song and its data from the popup */
// Declare these variables globally
let selectedFile;
let song_duration;

song_file.onchange = function() {
  var files = this.files;
  selectedFile = files[0];
  let x = URL.createObjectURL(files[0]);
    
  // temportary audio tag to get song duration.
  let aud = document.createElement('audio');
  aud.src = x;
  aud.addEventListener('loadedmetadata', function () {
    console.log(this.duration);
    song_duration = (this.duration / 60).toFixed(2);
  })
}

/* 2nd js section - create music-contents and home-contents for each song */
let all_songs = [];
let send = document.getElementById("send");
let popup = document.querySelector("#form");
let close = document.querySelector("#close");

function openPopup() {
  popup.style.transition = "opacity 0.5s";
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
}
close.addEventListener('click', () => {
    
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
  popup.style.transition = "0.5s";

  // alert if any input field is left empty.
  /*  if (!image_url.value || !movie_name.value || !artist_name.value) return alert("Please fill out all fields!"); */
    
  let single_song = [];
  single_song.push(selectedFile.name)
  single_song.push(movie_name.value)
  single_song.push(artist_name.value)
  single_song.push(song_duration)
  single_song.push(image_url.value)
    
  let x = URL.createObjectURL(selectedFile); 
  single_song.push(x);

  /* console.log(single_song)
  all_songs.push(single_song);
  console.log(all_songs)  */

  // creating music library containers for each song.
  var list;

  var box;
  var box_card;
  var box_media;

  listCreation();

  function listCreation() {
    list = document.createElement('div');

        // checkBox = document.createElement('i');
        // checkBox.classList.add('bx bx-square-rounded');

        // button = document.createElement('i');
        // button.classList.add("lni lni-play");

        // list.appendChild(button);
        // list.appendChild(checkBox);

    for (let i = 0; i < 4; i++) {
      list.appendChild(document.createElement('span'));
    }
    let audioFile = document.createElement('audio');
    list.appendChild(audioFile);
    audioFile.src = single_song[5];

    // here we select all the four span elements created inside the div element..
    let spanElements = list.querySelectorAll('span');
    let index = 0;
    spanElements.forEach(span => {
      span.innerHTML = single_song[index];
      index++;
    });
        
    music_content.appendChild(list);

    // creating home media-container for each song.
    box = document.createElement('div');
    box.classList.add("media-container");

    box_card = document.createElement('div');
    box_card.classList.add("media-card");

    let box_img = document.createElement('img');
    box_card.appendChild(box_img);

    box_media = document.createElement('div');
    box_media.classList.add("media-contents");

    var media_title = document.createElement('p');
    media_title.classList.add("media-title");

    var media_artist = document.createElement('span');
    media_artist.classList.add("media-artist");

    box_media.appendChild(media_title);
    box_media.appendChild(media_artist);

    box.appendChild(box_card);
    box.appendChild(box_media);
         
    let audioFile2 = document.createElement('audio');
    box.appendChild(audioFile2);
    audioFile2.src = single_song[5];  

      /* checkBox = document.createElement('i');
         checkBox.classList.add('bx bx-square-rounded');
 
         button = document.createElement('i');
         button.classList.add("lni lni-play"); */
          
    box_img.src = single_song[4];
    media_title.innerHTML = single_song[0];
    media_artist.innerHTML = single_song[2];
         
    home_content.appendChild(box);
  }

  // clearing the input fields..
  movie_name.value = ''
  artist_name.value = ''
  image_url.value = ''
  song_file.value = ''

  // eventlisteners to add the song source to general audio's source...
  box.addEventListener('click', () => {
    audioPlayer.src = box.querySelector('audio').src;
    console.log(audioPlayer);
  })

  list.addEventListener('click', () => {
    audioPlayer.src = list.querySelector('audio').src;
    console.log(audioPlayer);
  })

})
    
// song timeLine in footer..
let playingDuration = document.getElementById("playingDuration");
let totalDuration = document.getElementById("totalDuration");

// updating the duration of song in timeLine..
audioPlayer.addEventListener('timeupdate', updateDuration);
function updateDuration() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  const percentage = (currentTime / duration) * 100;
  durationRange.value = percentage;

  // Setting the width of the progress bar..
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


  playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.src = "icon-images/pause.png";
      playPauseButton.style.width = "24px";
      playPauseButton.style.height = "24px";
    } else {
      audioPlayer.pause();
      playPauseButton.src = "icon-images/play.png";
    }
  });

// Storing data in local storage..
localStorage.setItem('all_songs', JSON.stringify(all_songs));
// right now it is incomplete, soon code for local storage will be given..
