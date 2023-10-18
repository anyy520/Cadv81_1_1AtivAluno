//Complete o código

canvas = document.getElementById("       ");
ctx= canvas.getContext("      ");

color = "       "; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e)
{
    //obtém a cor da caixa de inserção
    //início da atividade adicional
    color = document.getElementById("color").value;
    console.log(color);
    //fim da atividade adicional
    
     mouseX = e.clientX -          ;
     mouseY = e.clientY -          ;

    console.log("                 " );
    circle(      ,      );    
}

function circle(mouseX , mouseY)
{


  
}

//atividade adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
