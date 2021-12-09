
function changeImage() {
    var colors = ["red", "blue", "green"];
    var colorsIndex = 0;
    if( colorsIndex >= colors.length ) {
        colorsIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorsIndex];
    colorsIndex++;
   
    
}

export default function () {
    document.addEventListener("keydown", changeImage);
}