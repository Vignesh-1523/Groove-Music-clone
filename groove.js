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

/* js for template in footer section */
let songImage = document.querySelector("#temp_img");
let largeSongName = document.querySelector(".large");
let smallSongName = document.querySelector(".small");

/* js for controls buttons in footer section */
let previous = document.querySelector("#previous-img");
let next = document.querySelector("#next-img");
let suffle = document.querySelector("#suffle-img");
let loop = document.querySelector("#repeat-img");

/* js for home section */
let home_content = document.getElementById("homeContent");

/* js for music section */
let music_content = document.getElementById("musicContent");


/* 1st js section - get song and its data from the popup */
// Declare these variables globally
let selectedFile;
let song_duration;

// let base64Data;

// // Event listener for the song_file input
// song_file.onchange = function () {
//   const files = this.files;
//   selectedFile = files[0];

//   const reader = new FileReader();

//   reader.onload = function (event) {
//     // Store the base64 data in the variable
//     base64Data = event.target.result;
//   };

//   // Read the file as base64 data
//   reader.readAsDataURL(selectedFile);
//   console.log(base64Data);
// };



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

let behind_form = document.querySelector(".masking");

function openPopup() {
  popup.style.transition = "opacity 0.5s";
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
  behind_form.style.display = "block";
}
close.addEventListener('click', () => {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
  popup.style.transition = "0.5s";
  behind_form.style.display = "none";
})

send.addEventListener('click', () => {

  // alert if any input field is left empty.
  /*  if (!image_url.value || !movie_name.value || !artist_name.value) return alert("Please fill out all fields!"); */
    
  let single_song = [];
  single_song.push(selectedFile.name)
  single_song.push(movie_name.value)
  single_song.push(artist_name.value)
  single_song.push(song_duration)
  single_song.push(image_url.value)
    
  // let x = URL.createObjectURL(selectedFile); 
  single_song.push(base64Data);

  console.log(single_song)
  all_songs.push(single_song);
  console.log(all_songs)  

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

    let imageFile = document.createElement('img');
    imageFile.style.display = "none";
    list.appendChild(imageFile);
    imageFile.src = single_song[4];

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
    songImage.src = box.querySelector('img').src;
    largeSongName.innerHTML = box.querySelector('.media-title').innerHTML;
    smallSongName.innerHTML = box.querySelector('.media-title').innerHTML;
    console.log(audioPlayer);
    playsong();
  })

  list.addEventListener('click', () => {
    audioPlayer.src = list.querySelector('audio').src;
    songImage.src = list.querySelector('img').src;
    largeSongName.innerHTML = list.querySelector('span').innerHTML;
    smallSongName.innerHTML = list.querySelector('span').innerHTML;
    console.log(audioPlayer);
    playsong();
  })

  // saveData();
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

function playsong() {
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
  playsong();
});


// Storing data in local storage..

// function saveData() {
//   localStorage.setItem('all_songs', JSON.stringify(all_songs));
// }
// function showData() {
//   let get = localStorage.getItem('all_songs');
//   let getAll_songs = JSON.parse(get);
   
//  getAll_songs.forEach((eachArr, index) => {

//   listCreationAgain();
//  // creating music library containers for each song.
//  var list;

//  var box;
//  var box_card;
//  var box_media;

//  function listCreationAgain() {
//    list = document.createElement('div');

//        // checkBox = document.createElement('i');
//        // checkBox.classList.add('bx bx-square-rounded');

//        // button = document.createElement('i');
//        // button.classList.add("lni lni-play");

//        // list.appendChild(button);
//        // list.appendChild(checkBox);

//    for (let i = 0; i < 4; i++) {
//      list.appendChild(document.createElement('span'));
//    }
//    let audioFile = document.createElement('audio');
//    list.appendChild(audioFile);
//    audioFile.src = eachArr[5];

//    let imageFile = document.createElement('img');
//    imageFile.style.display = "none";
//    list.appendChild(imageFile);
//    imageFile.src = eachArr[4];

//    // here we select all the four span elements created inside the div element..
//    let spanElements = list.querySelectorAll('span');
//    let index = 0;
//    spanElements.forEach(span => {
//      span.innerHTML = eachArr[index];
//      index++;
//    });
       
//    music_content.appendChild(list);

//    // creating home media-container for each song.
//    box = document.createElement('div');
//    box.classList.add("media-container");

//    box_card = document.createElement('div');
//    box_card.classList.add("media-card");

//    let box_img = document.createElement('img');
//    box_card.appendChild(box_img);

//    box_media = document.createElement('div');
//    box_media.classList.add("media-contents");

//    var media_title = document.createElement('p');
//    media_title.classList.add("media-title");

//    var media_artist = document.createElement('span');
//    media_artist.classList.add("media-artist");

//    box_media.appendChild(media_title);
//    box_media.appendChild(media_artist);

//    box.appendChild(box_card);
//    box.appendChild(box_media);
        
//    let audioFile2 = document.createElement('audio');
//    box.appendChild(audioFile2);
//    audioFile2.src = eachArr[5];  

//      /* checkBox = document.createElement('i');
//         checkBox.classList.add('bx bx-square-rounded');

//         button = document.createElement('i');
//         button.classList.add("lni lni-play"); */
         
//    box_img.src = eachArr[4];
//    media_title.innerHTML = eachArr[0];
//    media_artist.innerHTML = eachArr[2];
        
//    home_content.appendChild(box);
//  }

//  // clearing the input fields..
//  movie_name.value = ''
//  artist_name.value = ''
//  image_url.value = ''
//  song_file.value = ''

//  // eventlisteners to add the song source to general audio's source...
//  box.addEventListener('click', () => {
//    audioPlayer.src = box.querySelector('audio').src;
//    songImage.src = box.querySelector('img').src;
//    largeSongName.innerHTML = box.querySelector('.media-title').innerHTML;
//    smallSongName.innerHTML = box.querySelector('.media-title').innerHTML;
//    console.log(audioPlayer);
//    playsong();
//  })

//  list.addEventListener('click', () => {
//    audioPlayer.src = list.querySelector('audio').src;
//    songImage.src = list.querySelector('img').src;
//    largeSongName.innerHTML = list.querySelector('span').innerHTML;
//    smallSongName.innerHTML = list.querySelector('span').innerHTML;
//    console.log(audioPlayer);
//    playsong();
//  })

//   console.log(getAll_songs);

//  })

  
//  }
// showData();
// right now it is incomplete, soon code for local storage will be given..
