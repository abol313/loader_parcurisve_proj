const path = document.getElementById("p_path");

//percently value in circum
let circum = 88
let step = 1
setInterval(
    ()=>{
        if(step>0 && circum<88){
            circum += step
        }else{
            if(step>0)step=-1
            if(step<0 && circum<30)step = 1
            circum += step 
        }
        setPathWithCircum(circum)
}
,100)

function setPathWithCircum(circum){
    const deg = parseInt(360 * circum / 100)
    const rad = deg / 180 * Math.PI
    const toPosX = 100 + Math.cos(rad)*100,toPosY = 100 + Math.sin(rad)*100
    path.setAttribute('d',`M200 100 A 100 100 0 ${circum<50?0:1} 1 ${(toPosX)} ${(toPosY)}`)
    //console.log(`${path.getAttribute('d')} %c`,'color:yellowgreen;')
}