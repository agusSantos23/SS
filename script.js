









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
        burguer.style.transform = "rotate(0deg)";


        setTimeout(() => {
            aa.style.opacity = "0";
            aa.style.transition = ".5s"
        }, 300);

        setTimeout(() => {
            ab.style.opacity = "0";
            ab.style.transition = ".5s"
        }, 600);

        setTimeout(() => {
            ac.style.opacity = "0";
            ac.style.transition = ".5s"
        }, 900);

        setTimeout(() => {
            ad.style.opacity = "0";
            ad.style.transition = ".5s"
        }, 1200);
        
    }else{

        burguer.classList.add(activado)
        burguer.style.transition = "1s"
        burguer.style.transform = "rotate(90deg)";

        setTimeout(() => {
            aa.style.opacity = "1";
            aa.style.transition = "1s"
        }, 1200);

        setTimeout(() => {
            ab.style.opacity = "1";
            ab.style.transition = "1s"
        }, 900);

        setTimeout(() => {
            ac.style.opacity = "1";
            ac.style.transition = "1s"
        }, 600);

        setTimeout(() => {
            ad.style.opacity = "1";
            ad.style.transition = "1s"
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










