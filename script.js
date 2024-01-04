





//AnimacionBurguer
function BurgerA(){

    const burguer = document.getElementById("burguer");
    
    const en = document.getElementById("enlaces");

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
            aa.style.opacity = "0";
            aa.style.transition = ".5s"
            aa.style.fontSize = "0px";
            aa.style.margin = "0px";
            aa.style.padding = "0px";

            ab.style.opacity = "0";
            ab.style.transition = ".5s"
            ab.style.fontSize = "0px";
            ab.style.margin = "0px";
            ab.style.padding = "0px";

            ac.style.opacity = "0";
            ac.style.transition = ".5s"
            ac.style.fontSize = "0px";
            ac.style.margin = "0px";
            ac.style.padding = "0px";

            ad.style.opacity = "0";
            ad.style.transition = ".5s"
            ad.style.fontSize = "0px";
            ad.style.margin = "0px";
            ad.style.padding = "0px";

            
        }, 300);

        
        
    }else{

        burguer.classList.add(activado)
        burguer.style.transition = "1s"
        burguer.style.transform = "rotate(90deg)";

        setTimeout(() => {
            aa.style.opacity = "1";
            aa.style.transition = "0.5s"
            aa.style.fontSize = "20px"
            aa.style.margin = "0 5px";
            aa.style.padding = "5px";
        
            ab.style.opacity = "1";
            ab.style.transition = "0.5s";
            ab.style.fontSize = "20px"
            ab.style.margin = "0 5px";
            ab.style.padding = "5px";
        
            ac.style.opacity = "1";
            ac.style.transition = "0.5s"
            ac.style.fontSize = "20px"
            ac.style.margin = "0 20px 0 0";
            ac.style.padding = "5px";
        
            ad.style.opacity = "1";
            ad.style.transition = "0.5s"
            ad.style.fontSize = "20px"
            ad.style.margin = "0 5px";
            ad.style.padding = "5px";
            
            
        }, 100);

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










