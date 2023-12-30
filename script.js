
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



