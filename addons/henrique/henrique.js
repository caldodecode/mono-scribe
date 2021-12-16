export default function () {
    var keyLeft = [65,83,68,81,87,69,90]
    //asdqwezxc, fghjrtyuvbnm, kliop

    document.addEventListener("update-stats", ev => {
        
        const grupo = ["a", "b", "c"]
        
        if (grupo.includes(ev.key)) {
            console.log("aewww")
            return
        }
        
        console.log("não tem grupo") 
    })

}