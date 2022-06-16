const h1Element = document.getElementById('page-title');
const btnElement = document.getElementById('mode-selector');
const footerElement = document.getElementsByTagName('footer')[0];
const bodyElement = document.getElementsByTagName('body')[0];

btnElement.addEventListener('click', mudarModo())

function mudarModo(){
   
    mudarTexto();
    h1Element.classList.toggle("dark-mode")
    btnElement.classList.toggle("dark-mode");
    footerElement.classList.toggle("dark-mode");
    bodyElement.classList.toggle("dark-mode");
    
}



function mudarTexto(){
    if(bodyElement.classList.contains("dark-mode")){
        h1Element.innerHTML="Dark Mode ON";
        btnElement.innerHTML="Light Mode";
        return;
    }

    h1Element.innerHTML="Light Mode ON";
        btnElement.innerHTML="Dark Mode";

}
