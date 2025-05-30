const titulo = "Novas Tendências do Marketing Digital para 2025";
var index = 0;
var del = false;
const digit = 150; /*Tempo de digitação */
const exclu = 75; /*Tempo de exclusão*/
const tempApagar = 1500; /*Tempo para apagar */
const tempDigit = 500; /*Tempo para começar a digitar */

h1 = document.getElementById("titulo-h1")

function efeito(){
    if(del){
        h1.textContent = titulo.substring(0, index - 1);
        index--
        if (index === 1){
            del = false;
            setTimeout(efeito, tempDigit)
        }else{
            setTimeout(efeito, exclu)
        }
    }else{
        h1.textContent = titulo.substring(0, index + 1);
        index++;
        if(index === titulo.length){
            del = true;
            setTimeout(efeito, tempApagar);
        }else{
            setTimeout(efeito, digit)
        }
    }
}

document.addEventListener('DOMContentLoaded', efeito);