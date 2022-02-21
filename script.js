//ApriOpera

var menu = 0

function ApriOpera(){
    var pagina = document.getElementById("opera")
    
    if(menu==0){
        pagina.style.display = "flex"
        menu++
    } else {
        pagina.style.display = "none"
        menu--
    }
}