export default function() {
    document.onkeydown = function() {
        const fileName = import.meta.url
        const dirName = fileName.substring(0, fileName.lastIndexOf("/"));
        var audio = new Audio(`${dirName}/audio.mp3`);
        audio.play();

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        document.body.style.background = bgColor;
    }

}