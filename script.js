"use sctick";

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

var x = 80, y = 50, larg = 90, alt = 50;
var ang = 0;
var speed = 1;

var teclas = [];




//Função que desenha objetos
function desenhar(){
    tratamentoTeclas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //backup do contexto
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(ang);
    //desenha o carro
    carro(ctx);

    ctx.restore();
    requestAnimationFrame(desenhar);
}

function tratamentoTeclas(){
    if(teclas["ArrowUp"] ){//frente
        speed = 3;
        x += speed * Math.cos(ang);
        y += speed * Math.sin(ang);
    }if(teclas["ArrowDown"]){//ré
        speed = 1;
        x -= speed * Math.cos(ang);
        y -= speed * Math.sin(ang);
    }if((teclas["ArrowRight"] && teclas["ArrowUp"]) || (teclas["ArrowRight"] && teclas["ArrowDown"])){//direita
        ang += Math.PI /90;
    }if((teclas["ArrowLeft"] && teclas["ArrowUp"]) || (teclas["ArrowLeft"] && teclas["ArrowDown"])){//esquerda
        ang -= Math.PI / 90;
    }

}

//Função que desenha o carro
function carro(ctx){
    ctx.fillStyle = "rgb(255,188,0)";
    //ctx.translate(x,y);
    ctx.fillRect(-larg/2, -alt/2, larg, alt);

    //parte superior do carro
    ctx.fillStyle = "rgba(255,255,0,0.5)";
    ctx.fillRect(-larg/6, -alt/2.5, larg/3, alt-10);

    //vidro frontal
    ctx.fillStyle = "black";
    ctx.fillRect(-larg/3+7, -alt/2.5, 7, alt-10);

    //video traseiro
    ctx.fillStyle = "black";
    ctx.fillRect(larg/4-7, -alt/2.5, 12, alt-10);

    //farois frontais - esq
    ctx.fillStyle = "white";
    ctx.fillRect(larg*0.5, alt/4, 4, alt/6);

    //farois frontais - dir
    ctx.fillStyle = "white";
    ctx.fillRect(larg*0.5, -alt/2.5, 4, alt/6);

    //farois traseiros - esq
    ctx.fillStyle = "red";
    ctx.fillRect(larg*-0.5, alt/4, 3, alt/6);

    //farois traseiros - dir
    ctx.fillStyle = "red";
    ctx.fillRect(larg*-0.5, -alt/2.5, 3, alt/6);

    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.fillText("B", -12, -4);

    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.fillText("e", -8, 7);

    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.fillText("e", -6, 19);
}


document.onkeydown = function(evt){
    teclas[evt.key] = true;
}

document.onkeyup = function(evt){
    teclas[evt.key] = false;
}

//Invocando a função de desenhar
requestAnimationFrame(desenhar);
