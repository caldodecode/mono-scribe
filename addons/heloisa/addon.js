export default function() {

    let qtd = 0

    document.addEventListener("keydown", ev => {
        qtd++

        if (qtd == 15) {
            document.body.style.backgroundColor = "#F6AE9D";
            return
        }

        if (qtd == 30) {
            document.body.style.backgroundColor = "#D494AF";
            return
        }

        if (qtd == 45) {
            document.body.style.backgroundColor = "#DCB1EB";
            return
        }

        if (qtd == 60) {
            document.body.style.backgroundColor = "#9E94D4";
            return
        }

        if (qtd == 75) {
            document.body.style.backgroundColor = "#ACCBF6";
            qtd = 0;
            return
        }

    })
}