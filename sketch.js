//Variáveis
var trex, trexCorrendo;
var chao, chaoImg, chaoInvisivel; 
var canvas;
var gravidade = 0.8; //y positivo é para baixo
var forcaPulo = -13; //y é para cima
var cloud, cloudImage;

//carregar animações
function preload(){ 
  trexCorrendo = loadAnimation("t1.png","t3.png", "t4.png");
  chaoImg = loadImage('ground2.png');
  cloudImage = loadImage('cloud.png');
}

function setup() {
  canvas = createCanvas(600, 200); //larg, alt
  canvas.center();

  //crie um sprite de trex
  trex = createSprite(50,150,20,50);
  trex.addAnimation("correndo", trexCorrendo);
  //adicione dimensão ao trex
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  chao = createSprite(300,170,600,20); //x, y,larg, alt
  chao.addImage("chao", chaoImg); 
  chao.velocityX = -8

  chaoInvisivel = createSprite(60,230)
  chaoInvisivel.visible = false

  var rand = Math.round(random(1,100));
  console.log(rand)


}

function draw() {// desenhar
  background(200); //fundo
  drawSprites(); //desenha os sprite
  frameRate(50);
  
  //console.log(frameCount);
  var noChao = trex.collide(chaoInvisivel)
  
  if (keyDown("space") && noChao) { // E
    trex.velocityY = forcaPulo;
  }

  if(chao.x < 0){ //verifica se saiu da tela esquerda
    chao.x = chao.width/2; 
  }

  trex.velocityY += gravidade;

  //impedir que o trex caia (por conta da gravidade)
  trex.collide(chaoInvisivel);

  spawnClouds();
  
}

function spawnClouds(){
  if(frameCount % 60 === 0){
    cloud = createSprite(650,100,40,10);
    cloud.addImage("nuvem", cloudImage); 
    cloud.y = Math.round(random(10,80))
    cloud.scale = 1
    cloud.velocityX = -3;
  }
  
}
