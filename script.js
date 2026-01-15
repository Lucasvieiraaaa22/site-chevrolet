let cont = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    cont++;
    if(cont > 3) { 
         cont = 1;
}
    document.getElementById("radio"+cont).checked = true;
}

const btn = document.getElementById("btnVerMais");
const extras = document.querySelectorAll(".card-extra");
let aberto = false;

btn.addEventListener("click", () => {
  aberto = !aberto;
  extras.forEach(card => {
    card.style.display = aberto ? "block" : "none";
  });
  btn.innerText = aberto ? "Ver menos" : "Ver mais";
});


