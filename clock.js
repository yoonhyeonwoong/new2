const date=document.querySelector(".date");
const time=document.querySelector(".time");
const music=document.querySelector(".musicName");
const audio=document.querySelector(".printDate audio");




function Day(){
    const today=new Date();
    const fullYear=String(today.getFullYear()).padStart(4,"0");
    const month=String(today.getMonth()).padStart(2,"0");
    const day=String(today.getDay()).padStart(2,"0");
    date.innerText=`${fullYear}-${month}-${day}`;
    const Hours=String(today.getHours()).padStart(2,"0");
    const minutes=String(today.getMinutes()).padStart(2,"0");
    const second=String(today.getSeconds()).padStart(2,"0");
    time.innerText=`${Hours}:${minutes}:${second}`;
}
Day();
setInterval(Day,1000);


const musics=[
    {
    name:"Unshaken",
    file:"Unshaken.mp3",
},
{
    name:"Moonlight",
    file:"Moonlight.mp3",
},
{
    name:"That's The Way it is",
    file:"That's The Way it is.mp3"
},
{
    name:"Mountain Finale",
    file:"Mountain Finale.mp3",
},
];

const randomms=musics[Math.floor(Math.random()*musics.length)];
music.innerText=randomms.name;
audio.src=`music/${randomms.file}`;





