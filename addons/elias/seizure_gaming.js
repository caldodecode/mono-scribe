export default function() {
    alert(
        "WHAT MY ADDON DOES: This addon will change the background to a funny random image every time you type a word"
    );

    alert(
        "* WARNING *\nThis site can trigger seizures for people with photosensitive epilepsy\n* WARNING *"
    );

    const image = [
        "url(addons/elias/imagens/amogus-talking.gif)",
        "url(addons/elias/imagens/amour-amongus.gif)",
        "url(addons/elias/imagens/sus.gif)",
        "url(addons/elias/imagens/therock.gif)",
        "url(addons/elias/imagens/trollface.gif)",
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

    document.addEventListener("update-stats", (ev) => {
        if (event.stats.type == "key") {
            const audio = new Audio(`${dirName}/funny_audios/audio.mp3`);
            audio.play();
            audio.volume = 0.1;
            changeImage();
            return;
        }
    });

    const insaneSoundtrack = new Audio(`${dirName}/funny_audios/realDrip.mp3`);
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