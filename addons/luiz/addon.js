const body = document.querySelector("body")

var padrao = document.createElement("img")
padrao.src = "addons/luiz/image/moon.png";
padrao.style.width = "30px";
padrao.style.height = "30px";
padrao.style.marginTop = "250px"

var claro = document.createElement("img")
claro.src = "addons/luiz/image/sun.png";
claro.style.width = "30px";
claro.style.height = "30px";
claro.style.marginLeft = "20px";
claro.style.marginTop = "250px"
     

body.appendChild(padrao)
body.appendChild(claro)


export default function () {
    padrao.onclick = function () {
        document.documentElement.style.setProperty('--bg-color', '#323437');
        document.documentElement.style.setProperty('--sub-color', '#646669');
        document.documentElement.style.setProperty('--text-color', '#d1d0c5');
        document.documentElement.style.setProperty('--error-color', "#ca4754");
    }
    claro.onclick = function () {
        document.documentElement.style.setProperty('--bg-color', '#d1d0c5');
        document.documentElement.style.setProperty('--sub-color', '#494b4b');
        document.documentElement.style.setProperty('--text-color', "black");
        document.documentElement.style.setProperty('--error-color', "#9e2330");
    }
}