const path = document.getElementById("p_path");

//percently value in circum
let circum = 95

function setPathWithCircum(circum){
    const deg = parseInt(360 * circum / 100)
    const rad = deg / 180 * Math.PI
    const toPosX = 100 + Math.cos(rad)*100,toPosY = 100 + Math.sin(rad)*100
    path.setAttribute('d',`M200 100 A 100 100 0 1 1 ${parseInt(toPosX)} ${parseInt(toPosY)}`)
    console.log(`${path.getAttribute('d')} %c`,'color:yellowgreen;')
}