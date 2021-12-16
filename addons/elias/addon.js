export default function() {
    document.onkeydown = function() {
        var audio = new Audio('audio.mp3');
        audio.play();

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        document.body.style.background = bgColor;
    }

}