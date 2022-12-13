var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
}

function setup() {
  createCanvas(600,600);
  
}


function draw() {
  background(255);
  
  
  if (gameState === PLAY) {
    
    if(keyDown("")){
  
      // escreva o código para mover para a esquerda quando a seta para a esquerda for pressionada
    }
    if(keyDown("")){
  
    
      // escreva o código para mover para a esquerda quando a seta para a direita for pressionada
      
    }
    if(keyDown("")){
  
   
      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
  
   
  //escreva uma condição para a torre de rolagem infinita
    
  spawnDoors();

  
  //escrever um código para fazer o climbersGroup (grupo de escaladores) colidir com o fantasma alterar a velocidade do fantasma  
  //escreva um código para fazer o fantasma colidir com os obstáculos, destruir o fantasma e mudar o estado de jogo para end.
  
  drawSprites();
}
  if (gameState === END){
    
  }
}

function spawnDoors()
{
  //escreva o código aqui para gerar as portas a cada 240 quadros do jogo (frames)
  
  
}

