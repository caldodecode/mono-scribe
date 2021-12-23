export default function() {
    alert(
        "Merry christmas !!!!!!!!!!!!!!!!"
    );

    const image = [
        "url(addons/elias/imagens/therock_natal.jpg)",
        "url(addons/elias/imagens/therock_natal2.png)",
        "url(addons/elias/imagens/therock_natal3.jpg)",
        "url(addons/elias/imagens/therock_natal4.jpeg)",
        "url(addons/elias/imagens/therock_natal5.jpg)",
    ];
    const fileName =
        import.meta.url;
    const dirName = fileName.substring(0, fileName.lastIndexOf("/"));

    var i = 0;

    function changeImage() {
        var doc = document.body.style;
        if (i >= image.length) {
            i = 0;
        }

        doc.backgroundImage = image[i];
        doc.backgroundRepeat = "no-repeat";
        doc.backgroundSize = "cover";
        doc.backgroundPosition = "center";

        i++;
        console.log(i);
    }

    setInterval(changeImage, 2000)

    document.addEventListener("update-stats", (ev) => {
        if (event.stats.type == "key") {
            const audio = new Audio(`${dirName}/funny_audios/audio.mp3`);
            audio.play();
            audio.volume = 0.1;
            return;
        }
    });

    const insaneSoundtrack = new Audio(`${dirName}/funny_audios/the_rock_natal.mp3`);
    if (typeof insaneSoundtrack.loop == "boolean") {
        insaneSoundtrack.loop = true;
    } else {
        insaneSoundtrack.addEventListener(
            "ended",
            function() {
                this.currentTime = 0;
                this.play();
            },
            false
        );
    }
    insaneSoundtrack.play();
    insaneSoundtrack.volume = 0.3;

}