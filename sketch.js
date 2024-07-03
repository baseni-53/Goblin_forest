function preload() {
  playerSheet = loadImage('Tiny Swords (Update 010)/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png')
  enemySheet = loadImage('TinySwords (Update 010)/Factions/Goblins/Troops/Torch/Red/Torch_Red.png')
}

function setup() {
  new Canvas();

  player = new Sprite(canvas.w/2, canvas.h/2);
  player.width = 100;
  player.height = 100;
  player.bounciness = 0;
  player.rotationLock = true;
  player.spriteSheet = playerSheet;
  player.addAnis({
    attack1 : { w: 192, h: 192, row: 2, frames: 6},
    idle : {w: 192, h: 192, row: 0, frames: 6},
    run : {w:192, h:192, row: 1, frames:6},
    attack2 : {w:192, h:192, row:7, frames:6}
  })
  player.anis.offset.y = 18

  player.changeAni('idle')

  
  ground = new Sprite(canvas.w/2, canvas.h-50);
  ground.width = canvas.w;
  ground.height = 100;
  ground.collider = 'static';
  ground.color = 'white';


  world.gravity.y = 9.81;
  allSprites.pixelPerfect = true
  
}

let canJump = true;

async function draw() {
  background(51);

  if (kb.presses('w') & canJump == true) {
    player.velocity.y = -6;
  } 
  if (kb.pressed('w')) {
    canJump = false;
  }
  if (player.collides(ground)) {
    canJump = true;
  }
  if (keyIsDown('a')) {
    player.velocity.x = -5;
    player.changeAni('run');
    player.mirror.x = true;
  }
  if (kb.released('a')) {
    player.changeAni('idle')
    player.velocity.x = 0
  }

  if (keyIsDown('d')) {
    player.velocity.x = +5;
    player.changeAni('run');
    player.mirror.x = false;
  }
  if (kb.released('d')) {
    player.changeAni('idle');
    player.velocity.x = 0;
  }
  if (mouse.presses('left')) {
   await player.changeAni('attack1');
   player.changeAni('idle')
  }
  if (mouse.presses('right')) {
   await player.changeAni('attack2')
   player.changeAni('idle')
  }

    camera.x = player.x
}


