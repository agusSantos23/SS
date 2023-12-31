





//AnimacionBurguer
function BurgerA(){

    const burguer = document.getElementById("burguer");
    
    const aa = document.getElementById("Inici");
    const ab = document.getElementById("Sobre");
    const ac = document.getElementById("Porfolio");
    const ad = document.getElementById("Educacion");

    const activado = "a"

    if(burguer.classList.contains(activado)){

        burguer.classList.remove(activado)
        burguer.style.transition = "1s"
        burguer.style.transform = "rotate(0deg)";


        setTimeout(() => {
            aa.style.opacity = "0";
            aa.style.transition = ".5s"
            aa.style.fontSize = "0px";
            ab.style.opacity = "0";
            ab.style.transition = ".5s"
            ab.style.fontSize = "0px";
            ac.style.opacity = "0";
            ac.style.transition = ".5s"
            ac.style.fontSize = "0px";
            ad.style.opacity = "0";
            ad.style.transition = ".5s"
            ad.style.fontSize = "0px";

        }, 300);

        
        
    }else{

        burguer.classList.add(activado)
        burguer.style.transition = "1s"
        burguer.style.transform = "rotate(90deg)";

        setTimeout(() => {
            aa.style.opacity = "1";
            aa.style.transition = "1s"
            aa.style.fontSize = "20px"
        }, 600);

        setTimeout(() => {
            ab.style.opacity = "1";
            ab.style.transition = "1s";
            ab.style.fontSize = "20px"

        }, 400);

        setTimeout(() => {
            ac.style.opacity = "1";
            ac.style.transition = "1s"
            ac.style.fontSize = "20px"

        }, 200);

        setTimeout(() => {
            ad.style.opacity = "1";
            ad.style.transition = "1s"
            ad.style.fontSize = "20px"

        }, 0);

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










