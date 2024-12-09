
//el sprite es sacado de internet por eso los saltos del eje X son variados y no sigue un patrón de distancia
const posiciones = ["0","-55px", "-110px", "-150px","-205px", "-255px", "-310px", "-360px"];

const sprite = document.getElementById("sprite");

let i = 0;
function movimiento(){
if (i == 6 || i == 2) sprite.style.width = "40px";
else sprite.style.width = "55px"
sprite.style.backgroundPositionX = posiciones[i];
i++;
if (i == posiciones.length) i = 0; 
}

setInterval(movimiento, 100);