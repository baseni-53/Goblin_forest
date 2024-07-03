function preload() {
  playerSheet = loadImage('Tiny Swords (Update 010)/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png')
  enemySheet = loadImage('Tiny Swords (Update 010)/Factions/Goblins/Troops/Torch/Red/Torch_Red.png')
  groundSheet = loadImage('oak_woods_v1.0/oak_woods_tileset.png')
  backgroundSheet = loadImage('oak_woods_v1.0/background/background_layer_1.png')
}

function setup() {
  new Canvas();

  player = new Sprite(canvas.w/2, canvas.h/2);
  player.width = 50;
  player.height = 80;
  player.bounciness = 0;
  player.rotationLock = true;
  player.spriteSheet = playerSheet;
  player.addAnis({
    attack1 : { w: 192, h: 192, row: 2, frames: 6},
    idle : {w: 192, h: 192, row: 0, frames: 6},
    run : {w:192, h:192, row: 1, frames:6},
    attack2 : {w:192, h:192, row:7, frames:6}
  })
  player.anis.offset.y = 7;
  player.anis.offset.x = 6;

  player.changeAni('idle')

  sword = new Sprite()
  sword.width=25;
  sword.height=60;
  sword.collider = 'none';
  sword.spriteSheet = playerSheet;
  sword.addAni({
    normal : { w: 20, h:20, row:1, frames:0}
  })



  goblin = new Sprite();
  goblin.spriteSheet = enemySheet;
  goblin.width = 50;
  goblin.height = 68;
  goblin.bounciness = 0;
  goblin.tile = 'e';
  goblin.rotationLock = true;
  goblin.addAnis({
    idle : {w : 192, h: 192, row:0, frames : 7}
  })
  goblin.anis.offset.y=1;
  goblin.anis.offset.x=-5
  goblin.mirror.x = true;
  goblin.changeAni('idle')

  ground = new Group();
  ground.collider = 'static';
  ground.tile = 'g';
  ground.height = 24;
  ground.width = 24;
  ground.spriteSheet = groundSheet;
  ground.addAni(
    {w : 24, h : 24, row : 0, col :1}
  )

  rock = new Group();
  rock.collider = 'static';
  rock.tile = 'r';
  rock.height = 24;
  rock.width = 24;
  rock.spriteSheet = groundSheet;
  rock.addAni(
    {w : 24, h : 24, row : 1, col :1}
  )

  slope2 = new Group();
  slope2.collider = 'static';
  slope2.tile = '2';
  slope2.height = 24;
  slope2.width = 24;
  slope2.spriteSheet = groundSheet;
  slope2.addAni(
    {w : 24, h : 24, row : 7, col :1}
  )

  slope1 = new Group();
  slope1.collider = 'static';
  slope1.tile = '1';
  slope1.height = 24;
  slope1.width = 24;
  slope1.spriteSheet = groundSheet;
  slope1.addAni(
    {w : 24, h : 24, row : 0, col :6}
  )




  new Tiles(
 ['                                                                                                           e     ',
  '                                                                        111111111111111111       1111111111111111',
  '                                                           e      111111rrrrrrrrrrrrrrrrrr       rrrrrrrrrrrrrrrr',
  '                               gggggggggggg11    11gggggggggggg111rrrrrrrrrrrrrrrrrr            rrrrrrrrrrrrrrrrr',
  '                  e        ggggrrrrrrrrrrrrrr                                                  rrrrrrrrrrrrrrrrrr',
  'gggggggggggggggggggggggggggrrrrrrrrrrrrrrrrrr                                                 rrrrrrrrrrrrrrrrrrr',
  'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                                rrrrrrrrrrrrrrrrrrrr',
  'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                             rrrrrrrrrrrrrrrrrrrrrrr',
  'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'],
   220, 466,
   24, 24,
  )



  world.gravity.y = 9.81;
  allSprites.pixelPerfect = true;
  rock.debug = true;
  ground.debug= true;
  player.debug= true;
  goblin.debug= true;
  sword.debug = true;
}

let canJump = true;
let attacking= false;

async function draw() {
  push()
  scale(4)
  image(backgroundSheet, 0, 0)
  pop()

  if (kb.presses('w') & canJump == true) {
    player.velocity.y = -6;
  } 
  if (kb.pressed('w')) {
    canJump = false;
  }
  if (player.collides(ground)) {
    canJump = true;
  }
  if (player.collides(slope1)) {
    canJump = true;
  }
  if (player.collides(slope2)) {
    canJump = true;
  }
  if (player.collides(rock)) {
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
   attacking =true;
   await player.changeAni('attack1');
   player.changeAni('idle')
   attacking = false;
  } 
  if (player.colliding(goblin) && attacking == true) {

  } 
  if (mouse.presses('right')) {
   await player.changeAni('attack2')
   player.changeAni('idle')
  }

    camera.x = player.x 
   
}


