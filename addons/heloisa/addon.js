export default function() {

    let qtd = 0

    document.addEventListener("keydown", ev => {
        qtd++
        
        if (ev.key == "Shift"
            || ev.key == "Control"
            || ev.key == "Escape"
            || ev.key == "AltGraph"
            || ev.key == "ContextMenu"
            || ev.key == "Tab"
            || ev.key == "Backspace"){
            qtd = qtd - 1
        }

        if (qtd == 15) {
            document.body.style.backgroundColor = "#BFA39D";
            return
        }

        if (qtd == 30) {
            document.body.style.backgroundColor = "#9E7888";
            return
        }

        if (qtd == 45) {
            document.body.style.backgroundColor = "#B591C2";
            return
        }

        if (qtd == 60) {
            document.body.style.backgroundColor = "#7F78AB";
            return
        }

        if (qtd == 75) {
            document.body.style.backgroundColor = "#8FA8CC";
            qtd = 0;
            return
        }

    })
}