function changeBackground() {
    
    var bgColors = [ "#070538", "#280038", "#4F041E", "#380500", "#00381E", "#012738", "#323437"];
    var colorClick = 0;
    if(colorClick < bgColors.leght){
        document.body.style.backgroundColor = bgColors[colorClick];
        colorClick ++;
        if (colorClick >= bgColors.length){
            colorClick = 0;
        }
    }

}

export default function(){
    document.addEventListener("onclick", changeBackground);
}