





//AnimacionBurguer
function BurgerA(){

    const burguer = document.getElementById("burguer");
    
    const clase = "navA"

    const aa = document.getElementById("Inici");
    const ab = document.getElementById("Sobre");
    const ac = document.getElementById("Edu");
    const ad = document.getElementById("Portfo");

    const activado = "a"
    
    if(burguer.classList.contains(activado)){

        burguer.classList.remove(activado)
        burguer.style.transition = "1s"
        burguer.style.transform = "rotate(0deg)";


        setTimeout(() => {
            aa.classList.remove(clase);
            ab.classList.remove(clase);
            ac.classList.remove(clase);
            ad.classList.remove(clase);

            
        }, 300);
        
        
    }else{

        burguer.classList.add(activado)
        burguer.style.transition = "1s"
        burguer.style.transform = "rotate(90deg)";

        setTimeout(() => {

            aa.classList.add(clase);
            ab.classList.add(clase);
            ac.classList.add(clase);
            ad.classList.add(clase);
            
            
        }, 300);

    }

}


//IconGmail
function ActivarCA(){
    const icon = document.getElementById("iconGmailC")

    const claseA = "iconGmailCA";

    icon.classList.remove(claseA);

    setTimeout(()=>{
        icon.classList.add(claseA);
        
    }, 100)
}

function copiarDireccion(){
    const correo = "agustindelossantos023@gmail.com";
    ActivarCA();

    navigator.clipboard.writeText(correo);

}










