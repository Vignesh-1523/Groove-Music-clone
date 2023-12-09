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
/* let songDetails = [
    ['Music from the Villain_s Point of View  - Beauty of Our Bane(MP3_160K).mp3', 'The Dark Knight', 'Unknown artist', '4.55', 'songs/Music from the Villain_s Point of View  - Beauty of Our Bane(MP3_160K).mp3', 'https://i.ytimg.com/vi/CunU1BiAv7Q/maxresdefault.jpg'],
    ['Chilla Chilla - Thunivu Lyric Song (Tamil) _ Ajith…umar _ H Vinoth _ Anirudh _ Ghibran(MP3_160K).mp3', 'Thunivu', 'Anirudh ravichander', '3.53', 'songs/Chilla Chilla - Thunivu Lyric Song (Tamil) _ Ajith Kumar _ H Vinoth _ Anirudh _ Ghibran(MP3_160K).mp3', 'https://static.moviecrow.com/gallery/20221212/209569-Thunivu%20Chilla%20Chilla.jpg'],
    ['Anjaan - Kadhal Aasai Video _ Suriya_ Samantha _ Yuvan _ Super Hit Love Song(MP3_160K).mp3', 'Anjaan', 'Yuvan', '5.04', 'songs/Anjaan - Kadhal Aasai Video _ Suriya_ Samantha _ Yuvan _ Super Hit Love Song(MP3_160K).mp3', 'https://i.ytimg.com/vi/UdZzW6QzN-s/maxresdefault.jpg'],
    ['Chammak Challo Telugu Version (Full Video) - Feat. Akon _ Kareena Kapoor _ Shahrukh(MP3_160K).mp3', 'Ra-One', 'Akon', '3.40', 'songs/Chammak Challo Telugu Version (Full Video) - Feat. Akon _ Kareena Kapoor _ Shahrukh(MP3_160K).mp3', 'https://i.ytimg.com/vi/yh2K9VlGj9Q/sddefault.jpg'],
    ['VIKRAM - Porkanda Singam Lyric _ Kamal Haasan _ Vi…upathi _ Lokesh Kanagaraj _ Anirudh(M4A_128K).m4a', 'Vikram', 'Unknown artist', '3.18', 'songs/VIKRAM - Porkanda Singam Lyric _ Kamal Haasan _ Vijay Sethupathi _ Lokesh Kanagaraj _ Anirudh(M4A_128K).m4a', 'https://c.saavncdn.com/342/Porkanda-Singam-Rendition-Tamil-2023-20230117160839-500x500.jpg'],
    ['Amar Theme Video _ Kamal Haasan _ ANIRUDH RAVICHAN…R _ Fahadh Fazil _ Lokesh Kanagaraj(M4A_128K).m4a', 'Vikram', 'Anirudh ravichander', '2.26', 'songs/Amar Theme Video _ Kamal Haasan _ ANIRUDH RAVICHANDER _ Fahadh Fazil _ Lokesh Kanagaraj(M4A_128K).m4a', 'https://c.saavncdn.com/artists/Fahadh_Faasil_002_20200321095850_500x500.jpg'],
    ['Edharkadi Lyrical _ Adithya Varma Songs _ Dhruv Vi…_Banita Sandhu_ Gireesaaya _ Radhan(MP3_160K).mp3', 'Aditya varma', 'Dhruv vikram', '4.13', 'songs/Edharkadi Lyrical _ Adithya Varma Songs _ Dhruv Vikram_Banita Sandhu_ Gireesaaya _ Radhan(MP3_160K).mp3', 'https://i.ytimg.com/vi/VsfYxPqSclE/maxresdefault.jpg'],
    ['Yaen Yennai Pirindhaai Song_Lyrics _ SidSriram _ Adithya Varma _ Full Hd(M4A_128K).m4a', 'Aditya varma', 'Sid sriram', '3.18', 'songs/Yaen Yennai Pirindhaai Song_Lyrics _ SidSriram _ Adithya Varma _ Full Hd(M4A_128K).m4a', 'https://is1-ssl.mzstatic.com/image/thumb/Music113/…5b-922b-24eb-39fe8f19d1a9/cover.jpg/400x400cc.jpg'],
    ['ADITHYA VARMA _ SAD BGM _ WHATSAPP STATUS _ CRACKE…ilure _pain _lonely _whatsappstatus(MP3_160K).mp3', 'Aditya varma', 'Unknown artist', '1.00', 'songs/ADITHYA VARMA _ SAD BGM _ WHATSAPP STATUS _ CRACKER EDITZ _lovefailure _pain _lonely _whatsappstatus(MP3_160K).mp3', 'https://e0.pxfuel.com/wallpapers/421/522/desktop-w…ve-graphy-creative-profile-adithya-varma-love.jpg'],
    ['Aaron Smith - Dancin (KRONO Remix) - Lyrics(M4A_128K).m4a', 'Album', 'Aaron smith', '3.51', 'songs/Aaron Smith - Dancin (KRONO Remix) - Lyrics(M4A_128K).m4a', 'https://i.ytimg.com/vi/Cjp6RVrOOW0/maxresdefault.jpg'],
    ['[Moonknight] - A man without love(M4A_128K).m4a', 'Moon knight', 'Unknown artist', '3.17', 'songs/[Moonknight] - A man without love(M4A_128K).m4a', 'https://www.slashfilm.com/img/gallery/every-song-w…d-in-moon-knight-episode-1/l-intro-1648657429.jpg'],
    ['Cobra - Adheeraa Lyric _ Chiyaan Vikram _ _A. R. R…_ Ajay Gnanamuthu _ 7 Screen Studio(M4A_128K).m4a', 'Cobra', 'Unknown artist', '4.51', 'songs/Cobra - Adheeraa Lyric _ Chiyaan Vikram _ _A. R. Rahman  _ Ajay Gnanamuthu _ 7 Screen Studio(M4A_128K).m4a', 'https://i.ytimg.com/vi/ZQsI6m66Xdo/maxresdefault.jpg'],
    ['Don Omar - Danza Kuduro (Lyrics) ft. Lucenzo(M4A_128K).m4a', 'Fast and Furious', 'Don omar', '3.17', 'songs/Don Omar - Danza Kuduro (Lyrics) ft. Lucenzo(M4A_128K).m4a', 'https://m.media-amazon.com/images/I/612kccwPz-L._UXNaN_FMjpg_QL85_.jpg'],
    ['songs/Full Song_ SAJAN BADE SENTI _ Badhaai Ho _ A…mann K _ Sanya M _ Dev N _ Harjot K(MP3_160K).mp3', 'Badhaai Ho', 'Hajrot k', '2.45', 'songs/Full Song_ SAJAN BADE SENTI _ Badhaai Ho _ Ayushmann K _ Sanya M _ Dev N _ Harjot K(MP3_160K).mp3', 'https://i.ytimg.com/vi/zIezTPSg_Uc/maxresdefault.jpg'],
    ['Mehabooba (Tamil) KGF Chapter 2 _ RockingStar Yash _ Prashanth Neel _ Ravi Basrur(M4A_128K).m4a', 'K G F Chapter-2', 'Unknown artist', '4.02', 'songs/Full Video_ Mehabooba (Tamil) KGF Chapter 2 _ RockingStar Yash _ Prashanth Neel _ Ravi Basrur(M4A_128K).m4a', 'https://i1.sndcdn.com/artworks-2fjnGhnBP5kKQiik-HejZmg-t500x500.jpg'],
    ['Glass Animals - Heat Waves (Lyrics)(M4A_128K).m4a', 'Album-Glass Animals', 'Unknown artist', '3.56', 'songs/Glass Animals - Heat Waves (Lyrics)(M4A_128K).m4a', 'https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg?v=648204f5'],
    ['JAILER - Hukum Lyric Video _ Superstar Rajinikanth _ Sun Pictures _ Anirudh _ Nelson(M4A_128K).m4a', 'Jailer', 'Anirudh ravichander', '3.26', 'songs/JAILER - Hukum Lyric Video _ Superstar Rajinikanth _ Sun Pictures _ Anirudh _ Nelson(M4A_128K).m4a', 'https://i.ytimg.com/vi/1F3hm6MfR1k/sddefault.jpg'],
    ['John Wick Bgm Ringtone __ Ringztube __ [ Download Link -- ](MP3_160K).mp3', 'John wick', 'Unknown artist', '0.35', 'songs/John Wick Bgm Ringtone __ Ringztube __ [ Download Link -- ](MP3_160K).mp3', 'https://images03.military.com/sites/default/files/…05/1time%20john%20wick%205%20announced%201200.jpg'],
    ['Kesariya - Brahmāstra _ Ranbir Kapoor _ Alia Bhatt…Arijit Singh _ Amitabh Bhattacharya(M4A_128K).m4a', 'Brahmastra', 'Unknown artist', '2.52', 'songs/Kesariya - Brahmāstra _ Ranbir Kapoor _ Alia Bhatt _ Pritam _ Arijit Singh _ Amitabh Bhattacharya(M4A_128K).m4a', 'https://upload.wikimedia.org/wikipedia/en/3/3c/Kesariya_song_cover.jpg'],
    ['Malang Sajna [LYRICS]_ Sachet-Parampara _ Adil Shaikh_ Kumaar _ Lyrical India __ _347(MP3_160K).mp3', 'Sachet-parampara', 'Unknown artist', '2.32', 'songs/Malang Sajna [LYRICS]_ Sachet-Parampara _ Adil Shaikh_ Kumaar _ Lyrical India __ _347(MP3_160K).mp3', 'https://www.koimoi.com/wp-content/new-galleries/20…parampara-tease-latest-track-malang-sajna-001.jpg'],
    ['Mallipoo Video Song _ VTK _ HDR _ Silambarasan TR …udev Menon _   _A. R. Rahman _ Vels(MP3_160K).mp3', 'Vendhu Thaninthathu Kaadu', 'Unknown artist', '4.00', 'songs/Mallipoo Video Song _ VTK _ HDR _ Silambarasan TR _ Gautham Vasudev Menon _   _A. R. Rahman _ Vels(MP3_160K).mp3', 'https://i.ytimg.com/vi/MrzkoLKpgLU/maxresdefault.jpg'],
    ['Manase _ Official Music Video _ Dhruv Vikram _ Ujwal Gupta(MP3_160K).mp3', 'Album', 'Dhruv vikram', '4.39', 'songs/Manase _ Official Music Video _ Dhruv Vikram _ Ujwal Gupta(MP3_160K).mp3', 'https://i.ytimg.com/vi/ggjfqDPqLAk/mqdefault.jpg'],
    ['Maroon 5 - Animals (Lyrics)(M4A_128K).m4a', 'Album Maroon-5', 'Maroon', '4.24', 'songs/Maroon 5 - Animals (Lyrics)(M4A_128K).m4a', 'https://storage.googleapis.com/c.directlyrics.com/img/upload/maroon-5-animals-2.jpg'],
    ['Megham Karukatha - Official Lyric Video _ Thiruchi… _ Dhanush _ Anirudh _ Sun Pictures(MP3_160K).mp3', 'Thiruchitrambalam', 'Dhanush', '4.50', 'songs/Megham Karukatha - Official Lyric Video _ Thiruchitrambalam _ Dhanush _ Anirudh _ Sun Pictures(MP3_160K).mp3', 'https://i.ytimg.com/vi/hcJAgXUgFLY/maxresdefault.j…GEgSChlMA8=&rs=AOn4CLBcrIJzxlY_MKyQvhNT9Za3gH5Diw'],
    ['mudhal nee mudivum nee lyrics _ darbuka siva _ _ki… sriram _ meetha raghunath _ Harish(M4A_128K).m4a', 'Mudhal nee mudivum nee', 'Sid sriram', '5.08', 'songs/mudhal nee mudivum nee lyrics _ darbuka siva _ _kishen das _ Sid sriram _ meetha raghunath _ Harish(M4A_128K).m4a', 'https://i.ytimg.com/vi/uZ3OklmL0QE/maxresdefault.jpg'],
    ['Hey Baby Video Song _ Raja Rani _ Aarya_ Jai_ Nayanthara_ Nazriya Nazim(M4A_128K).m4a', 'Raja rani', 'Unknown artist', '2.54', 'songs/Official _ Hey Baby Video Song _ Raja Rani _ Aarya_ Jai_ Nayanthara_ Nazriya Nazim(M4A_128K).m4a', 'https://i.ytimg.com/vi/REg_fqqzt_E/mqdefault.jpg'],
    ['Pouraadalaam Full Video Song _ M.S.Dhoni-Tamil _ Sushant Singh Rajput_ Kiara Advani(M4A_128K).m4a', 'M.S.Dhoni', 'Unknown artist', '3.30', 'songs/Pouraadalaam Full Video Song _ M.S.Dhoni-Tamil _ Sushant Singh Rajput_ Kiara Advani(M4A_128K).m4a', 'https://i.ytimg.com/vi/ve2xFAxViuw/maxresdefault.jpg'],
    ['Rolex Entry Bgm _ Rolex Entry Full Bgm _ Lokiverse Bgm _ [Download Link](MP3_320K).mp3', 'Vikram', 'Unknown artist', '3.20', 'songs/Rolex Entry Bgm _ Rolex Entry Full Bgm _ Lokiverse Bgm _ [Download Link](MP3_320K).mp3', 'https://i.ytimg.com/vi/iCcPbnYF22w/maxresdefault.jpg'],
    ['Teddy _ En Iniya Thanimaye Song Lyric Video _ Arya(MP3_160K).mp3', 'Teddy', 'Sid sriram', '4.47', 'songs/Teddy _ En Iniya Thanimaye Song Lyric Video _ Arya(MP3_160K).mp3', 'https://m.timesofindia.com/photo/81292001/size-143830/81292001.jpg'],
    ['Thani Oruvan - Kadhal Cricket Lyric _ Jayam Ravi_ Nayanthara _ Hiphop Tamizha(MP3_160K).mp3', 'Thani Oruvan', 'Hip hop Tamizha', '3.34', 'songs/Thani Oruvan - Kadhal Cricket Lyric _ Jayam Ravi_ Nayanthara _ Hiphop Tamizha(MP3_160K).mp3', 'https://i.ytimg.com/vi/xzxr6fxdI_E/maxresdefault.jpg'],
    ['Yelo Pullelo - Kannum Kannum Kollaiyadithaal _ Dul…Rakshan_Niranjani A _ Masala Coffee(M4A_128K).m4a', 'Kannum Kannum kollayadithal', 'Anirudh ravichander', '3.16', 'songs/Yelo Pullelo - Kannum Kannum Kollaiyadithaal _ Dulquer S_ Ritu V_Rakshan_Niranjani A _ Masala Coffee(M4A_128K).m4a', 'https://i.ytimg.com/vi/QDuGeXJdyd0/maxresdefault.jpg'],
    ['Sia- Never give up (music video)(MP3_160K).mp3', 'Album-Sia', 'Sia', '3.38', 'songs/Sia- Never give up (music video)(MP3_160K).mp3', 'https://i.ytimg.com/vi/FvRiOGRty9I/maxresdefault.jpg'],
    ['Sandhanam Theme Video - Vikram _ Kamal Haasan _ ANIRUDH RAVICHANDER _ Lokesh Kanagaraj(M4A_128K).m4a', 'Vikram', 'Anirudh ravichander', '1.43', 'songs/Sandhanam Theme Video - Vikram _ Kamal Haasan _ ANIRUDH RAVICHANDER _ Lokesh Kanagaraj(M4A_128K).m4a', 'https://i.ytimg.com/vi/SRoipNO7IoI/maxresdefault.jpg']
];  */

var currentSongIndex = 0;
var list;
songContainer.forEach((e, index) => {
    const audioSrc = e.querySelector('audio').src;
    songArray.push(audioSrc);
        e.addEventListener('click', () => {
        songImage.src = e.querySelector('img').src;
        largeSongName.innerHTML = e.querySelector('p').innerHTML;
        smallSongName.innerHTML = e.querySelector('p').innerHTML;
        audioPlayer.src = audioSrc;
        
        playSong();
        currentSongIndex = index;
    }); 
//  I commented this because in live server it works properly but from github live link it doesn't because song loading is not proper...
 
/* listCreation();

 
function listCreation() {
    list = document.createElement('div');

    for (let i = 0; i < 4; i++) {
      list.appendChild(document.createElement('span'));
    }

    let audioFile = document.createElement('audio');
    list.appendChild(audioFile);
    audioFile.src = songDetails[index][4];

    let imageFile = document.createElement('img');
    imageFile.style.display = "none";
    list.appendChild(imageFile);
    imageFile.src = e.querySelector('img').src;

    // here we select all the four span elements created inside the div element..
    let spanElements = list.querySelectorAll('span');
    let x = 0;
    spanElements.forEach(span => {
      span.innerHTML = songDetails[index][x];
      x++;
    });
    
    music_content.appendChild(list);
  }   */
}); 

// console.log(songDetails);


  // this has all created div elements - lists in it.
  let totalList = music_content.querySelectorAll('div');

  totalList.forEach((list, index) => {
    list.addEventListener('click', () => {
        songImage.src = list.querySelector('img').src;
        // queryselectorAll get all span elements but simply querySelector will point the first span element.
        largeSongName.innerHTML = list.querySelector('span').innerHTML;
        smallSongName.innerHTML = list.querySelector('span').innerHTML;
        audioPlayer.src = list.querySelector('audio').src;
        console.log(audioPlayer);
        playSong();
        currentSongIndex = index;
      })    
  }) 

/*function changeDatasForList() {
    songImage.src = totalList[currentSongIndex].querySelector('img').src;
    largeSongName.innerHTML = totalList[currentSongIndex].querySelector('span').innerHTML;
    smallSongName.innerHTML = totalList[currentSongIndex].querySelector('span').innerHTML;
}  */

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
    // changeDatasForList();
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


