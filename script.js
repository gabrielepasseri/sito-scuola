const home=document.getElementById("home");
const prodotti=document.getElementById("prodotti");
const servizi=document.getElementById("servizi");
const contatti=document.getElementById("contatti");

const homebtn=document.getElementById("homebtn")
const prodottibtn=document.getElementById("prodottibtn")
const servizibtn=document.getElementById("servizibtn")
const contattibtn=document.getElementById("contattibtn")
const graficabtn=document.getElementById("graficabtn")


function cambio_sezione_home(){
    home.style.display="flex";   
    prodotti.style.display="none";    
    servizi.style.display="none";   
    contatti.style.display="none";  
}

function cambio_sezione_prodotti(){
    home.style.display="none";   
    prodotti.style.display="flex";    
    servizi.style.display="none";   
    contatti.style.display="none";  
}

function cambio_sezione_servizi(){
    home.style.display="none";   
    prodotti.style.display="none";    
    servizi.style.display="flex";   
    contatti.style.display="none";  
}

function cambio_sezione_contatti(){
    home.style.display="none";   
    prodotti.style.display="none";    
    servizi.style.display="none";   
    contatti.style.display="flex";  
}


homebtn.addEventListener("click", cambio_sezione_home)
prodottibtn.addEventListener("click", cambio_sezione_prodotti)
servizibtn.addEventListener("click", cambio_sezione_servizi)
contattibtn.addEventListener("click", cambio_sezione_contatti)