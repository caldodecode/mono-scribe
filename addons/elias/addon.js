
function changeImage() {
    var images = ["url(imagens/sus.gif)", "url(imagens/trollface.gif)", "url(imagens/therock.gif)","url(imagens/amogus-talking.gif)", "url(imagens/amour-amongus.gif)"];
    var imageIndex = 0;
    var col = document.getElementById("body");
    if( imageIndex >= images.length ) {
        imageIndex = 0;
    }
    col.style.backgroundImage = images[imageIndex];
    imageIndex++;
}

export default function () {
    changeImage()
}