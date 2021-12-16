export default function() {
    let i = 0

    function change() {
        const fileName =
            import.meta.url
        const dirName = fileName.substring(0, fileName.lastIndexOf("/"));
        var color = [`${dirName}/imagens/sus.gif`];
        document.body.style.backgroundImage = color[i];
        i = (i + 1) % color.length;
    }
    setInterval(change, 1000);

    document.onkeydown = function() {
        const fileName =
            import.meta.url
        const dirName = fileName.substring(0, fileName.lastIndexOf("/"));
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
//