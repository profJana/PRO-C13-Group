# PRO-C13-Group

1: var rand = Math.round(randon(1,100));
  console.log(rand)

2: criar o function spawnClouds() fora do draw, e já "chamar" ela dentro do draw()

3: dentro do spawnClouds: cloud = createSprite(600,100,40,10);
  cloud.velocityX = -3;

4: console.log(frameCount); dentro do draw()

5: dentro de spawnClouds() ajustar: if(frameCount % 60 === 0){
    cloud = createSprite(600,100,40,10);
    cloud.velocityX = -3;
  }

6: cloudImage = loadImage('cloud.png');

7: acrescentar no spawnClouds() cloud.addImage("nuvem", cloudImage); 
    cloud.scale = 1

8: cloud.y = Math.round(random(10,80))

9: 
