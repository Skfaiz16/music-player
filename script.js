var arr = [
    {songname: "pehli si mohabbat", url: "./songs/Pehli Si Muhabbat _ OST _ Ali Zafar _ Sheheryar Munawar _ Maya Ali(MP3_160K).mp3", img: "./images/psm.jpg"  },
    {songname: "Ruposh", url: "./songs/Ruposh _ OST _ Geo Entertainment _ Haroon Kadwani _ Kinza Hashmi _ Wajhi Farooki(MP3_160K).mp3", img: "./images/Ruposh.jpg"},
    {songname: "Shiddat", url: "./songs/Shiddat Title Track (Full Video) _Sunny Kaushal_Radhika Madan_ Mohit Raina_ Diana P _ Manan Bhardwaj(MP3_320K).mp3", img: "./images/Shiddat-5.jpeg"},
    {songname: "Ehd-E-Wafa", url: "./songs/Ehd e Wafa _ Full OST _ Rahat Fateh Ali Khan - Digitally Presented by Master Paints HUM TV Drama(MP3_320K).mp3", img: "./images/EEW.jpg"},
    {songname: "Nazm Nazm", url: "./songs/Nazm Nazm - Lyrical _ Bareilly Ki Barfi _ Kriti Sanon_ Ayushmann Khurrana _ Rajkummar Rao _ Arko(MP3_320K).mp3", img: "./images/nazm-nazm.avif"},
];
var allsongs = document.querySelector("#all-songs")

var poster = document.querySelector("#left")

var play = document.querySelector("#play")

var backward = document.querySelector("#backward")

var forward = document.querySelector("#forward")


var audio = new Audio()

var selectedsong = 0

function mainfunction(){
    var clutter = "";

arr.forEach(function(elem,index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src= ${elem.img} alt="">
    <h2> ${elem.songname}</h2>
    </div>
    <h6>4:30</h6>
</div>`;
  });

  allsongs.innerHTML = clutter

  audio.src = arr[selectedsong].url

  poster.style.backgroundImage = `url(${ arr[selectedsong].img})`
};
mainfunction();

allsongs.addEventListener("click", function(dets){
    selectedsong = dets.target.id
    play.innerHTML = `<i class="ri-pause-line"></i>`
    flag = 1
    mainfunction()
    audio.play()
});

var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`
        mainfunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = ` <i class="ri-play-fill"></i>`
        mainfunction()
        audio.pause()
        flag = 0
    }
});
forward.addEventListener("click", function(){
    if(selectedsong < arr.length - 1 ){
        selectedsong++
    mainfunction()
    audio.play()
    }else{
        forward.style.opacity = 0.4
    }
    
});
backward.addEventListener("click", function(){
    if(selectedsong > 0 ){
        selectedsong--
    mainfunction()
    audio.play()
    }else{
        backward.style.opacity = 0.4
    }
    
});