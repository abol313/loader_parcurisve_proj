/*<!--In the name of kindly generous ALLAH-->
<!--Thanks ALLAH-->
 */

alert("you will b😮️😮️mmmmmmmm....");


const path = document.getElementById("p_path");

//percently value in circum
const maxCircum = 99, minCircum = 30
let circum = minCircum
let step = .5

const maxStrokeWidth=40,minStrokeWidth=15
let strokeWidth = maxStrokeWidth

let startedAnimation = false


setInterval(
    ()=>{
        if(step>0 && circum<maxCircum){
            circum += step
            strokeWidth = Math.max(minStrokeWidth,Math.min(maxStrokeWidth,strokeWidth - (maxStrokeWidth-minStrokeWidth) * step/(maxCircum-minCircum)))
        }else{
            if(!startedAnimation){
                startedAnimation = true
                document.getElementsByTagName("svg")[0].style.animation = "rotate_anim 3s alternate infinite"
            }
            if(step>0)step=-.5
            if(step<0 && circum<minCircum)step = .5
            circum += step 
            strokeWidth = Math.max(minStrokeWidth,Math.min(maxStrokeWidth,strokeWidth - (maxStrokeWidth-minStrokeWidth) * step/(maxCircum-minCircum)))
        }
        setPathWithCircum(circum)
        path.setAttribute("stroke-width",""+strokeWidth)
}
,50)

function setPathWithCircum(circum){
    const deg = parseInt(360 * circum / 100)
    const rad = deg / 180 * Math.PI
    const toPosX = 100 + Math.cos(rad)*100,toPosY = 100 + Math.sin(rad)*100
    path.setAttribute('d',`M200 100 A 100 100 0 ${circum<50?0:1} 1 ${(toPosX)} ${(toPosY)}`)
    //console.log(`${path.getAttribute('d')} %c`,'color:yellowgreen;')
}