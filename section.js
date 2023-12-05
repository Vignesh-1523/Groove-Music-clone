    let atag = document.querySelectorAll("a");

    let home = document.querySelector(".home");
    let music = document.querySelector(".music");
    let video = document.querySelector(".video");
    let playqueue = document.querySelector(".playqueue");
    let playlist = document.querySelector(".playlist");

    let sections = [home, music, video, playqueue, playlist];

    atag.forEach(element => {
        element.addEventListener('click', () => {
            sections.forEach(e => {
                let x = e.getAttribute('id');
                let y = document.getElementById(x);
                x = "#" + x;
                if(element.getAttribute('href') == x){
                    y.style.display = "block";
                } else{
                    y.style.display = "none";
                }
            }); 
        });
    });