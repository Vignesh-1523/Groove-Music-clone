    let atag = document.querySelectorAll("a");

    let home = document.querySelector(".home");
    let music = document.querySelector(".music");
    let video = document.querySelector(".video");
    let playqueue = document.querySelector(".playqueue");
    let playlist = document.querySelector(".playlist");

    let search_page = document.getElementById("search-page");

    let sections = [home, music, video, playqueue, search_page, playlist];

    atag.forEach(element => {
        element.addEventListener('click', () => {
            sections.forEach(e => {
                let x = e.getAttribute('id');
                let y = document.getElementById(x);
                x = "#" + x;
                if(element.getAttribute('href') == x){
                    y.style.display = "block";
                    y.classList.add('open'); // actually this one is for search-page ie., when that page loads open class should be add in it and when other pages are open open class should get removed. Right now it add open for whichever page is shown but the action is only taken for search-page only so no worry about other pages open class. You can check that js to see what this exactly doing.
                } else{
                    y.style.display = "none";
                    y.classList.remove('open');
                }
            }); 
        });
    });