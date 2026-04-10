var time = new Date()
var hours = time.getHours()
var bd = document.getElementById("h1#bd")


function hora() {
    if (hours >= 12 && hours < 24){
        bd.innerHTML("<h1>Bom dia</h1>")
    }
        
}