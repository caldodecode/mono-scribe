export default function() {
    setInterval(
        function() {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        }, 1000);

    document.onkeydown = function() {
        const fileName =
            import.meta.url
        const dirName = fileName.substring(0, fileName.lastIndexOf("/"))
        var audio = new Audio(`${dirName}/audio.mp3`);
        audio.play();
    }
}

// CHANGE COLOR WHEN YOU TYPE

//     // var x = Math.floor(Math.random() * 256);
//     // var y = Math.floor(Math.random() * 256);
//     // var z = Math.floor(Math.random() * 256);
//     // var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     // console.log(bgColor);
//     // document.body.style.background = bgColor;