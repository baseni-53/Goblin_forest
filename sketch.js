function preload() {
  playerSheet = loadImage('Tiny Swords (Update 010)/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png')
  enemySheet = loadImage('Tiny Swords (Update 010)/Factions/Goblins/Troops/Torch/Red/Torch_Red.png')
  groundSheet = loadImage('oak_woods_v1.0/oak_woods_tileset.png')
  backgroundSheet = loadImage('oak_woods_v1.0/background/background_layer_1.png')
  moneySheet = loadImage('Tiny Swords (Update 010)/Resources/Resources/G_Idle_(NoShadow).png')
  fenceSheet = loadImage('oak_woods_v1.0/decorations/sign.png')
}

function setup() {
  new Canvas();

  player = new Sprite(250, 300);
  player.width = 50;
  player.height = 80;
  player.bounciness = 0;
  player.rotationLock = true;
  player.spriteSheet = playerSheet;
  player.addAnis({
    attack1: { w: 192, h: 192, row: 2, frames: 6 },
    idle: { w: 192, h: 192, row: 0, frames: 6 },
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack2: { w: 192, h: 192, row: 7, frames: 6 }
  })
  player.anis.offset.y = 7;
  player.anis.offset.x = 6;

  player.changeAni('idle')

  sword = new Sprite()
  sword.width = 60;
  sword.height = 90;
  sword.collider = 'none';
  sword.spriteSheet = playerSheet;
  sword.addAni({
    normal: { w: 20, h: 20, row: 1, frames: 0 }
  })

  txt = new Sprite()
  txt.text = goblinHealth
  txt.textSize = 12
  txt.collider = 'none'
  txt.fill= 'red'
  txt.height = 15

  txt1 = new Sprite()
  txt1.text = goblin1Health
  txt1.textSize = 12
  txt1.collider = 'none'
  txt1.fill= 'red'
  txt1.height = 15

  txt2 = new Sprite()
  txt2.text = goblin2Health
  txt2.textSize = 12
  txt2.collider = 'none'
  txt2.fill= 'red'
  txt2.height = 15

  fences = new Sprite(400, 585)
  fences.height = 40;
  fences.width = 40;
  fences.scale = 2
  fences.collider = 'none'
  fences.spriteSheet = fenceSheet;
  fences.addAni (
    {w:32, h:32, row:0, frames:0},
  )
  
  ftxt = new Sprite()
  ftxt.text = 'Collect all the money to win!'
  ftxt.textSize = 30;
  ftxt.collider = 'none';
  ftxt.fill= 'white';
  ftxt.height = 1;
  ftxt.width = 1;
  ftxt.opacity = 0;

  goblin = new Sprite(600, 500);
  goblin.spriteSheet = enemySheet;
  goblin.width = 50;
  goblin.height = 68;
  goblin.bounciness = 0;
  goblin.rotationLock = true;
  goblin.velocity.x = 4
  goblin.addAnis({
    idle: { w: 192, h: 192, row: 0, frames: 7 },
    run: { w: 192, h: 192, row: 2, frames: 7 }
  })
  goblin.anis.offset.y = 1;
  goblin.anis.offset.x = -5
  goblin.mirror.x = true;
  goblin.changeAni('idle')

  goblin1 = new Sprite(1300, 300);
  goblin1.spriteSheet = enemySheet;
  goblin1.width = 50;
  goblin1.height = 68;
  goblin1.bounciness = 0;
  goblin1.rotationLock = true;
  goblin1.velocity.x = 4
  goblin1.addAnis({
    idle: { w: 192, h: 192, row: 0, frames: 7 },
    run: { w: 192, h: 192, row: 2, frames: 7 }
  })
  goblin1.anis.offset.y = 1;
  goblin1.anis.offset.x = -5
  goblin1.mirror.x = true;
  goblin1.changeAni('idle')

  goblin2 = new Sprite(2000, 300);
  goblin2.spriteSheet = enemySheet;
  goblin2.width = 50;
  goblin2.height = 68;
  goblin2.bounciness = 0;
  goblin2.rotationLock = true;
  goblin2.velocity.x = 4
  goblin2.addAnis({
    idle: { w: 192, h: 192, row: 0, frames: 7 },
    run: { w: 192, h: 192, row: 2, frames: 7 }
  })
  goblin2.anis.offset.y = 1;
  goblin2.anis.offset.x = -5
  goblin2.mirror.x = true;
  goblin2.changeAni('idle')

  moneys = new Group()
  moneys.height = -45;
  moneys.collider= 'static';
  moneys.width = 45
  moneys.tile = 'm';
  moneys.spriteSheet = moneySheet;
  moneys.addAni(
   {w:128, h:128, row:0, col:0}
  )
  moneys.debug = true
  moneys.offset.y = 0

  ground = new Group();
  ground.collider = 'static';
  ground.tile = 'g';
  ground.height = 24;
  ground.width = 24;
  ground.spriteSheet = groundSheet;
  ground.addAni(
    { w: 24, h: 24, row: 0, col: 1 }
  )

  rock = new Group();
  rock.collider = 'static';
  rock.tile = 'r';
  rock.height = 24;
  rock.width = 24;
  rock.spriteSheet = groundSheet;
  rock.addAni(
    { w: 24, h: 24, row: 1, col: 1 }
  )

  slope2 = new Group();
  slope2.collider = 'static';
  slope2.tile = '2';
  slope2.height = 24;
  slope2.width = 24;
  slope2.spriteSheet = groundSheet;
  slope2.addAni(
    { w: 24, h: 24, row: 7, col: 1 }
  )

  slope1 = new Group();
  slope1.collider = 'static';
  slope1.tile = '1';
  slope1.height = 24;
  slope1.width = 24;
  slope1.spriteSheet = groundSheet;
  slope1.addAni(
    { w: 24, h: 24, row: 0, col: 6 }
  )




  new Tiles(
    [ '                                                                                                     m       m   ',
      '                                                                     m                                           ',
      '                                        m                               111111111111111111       1111111111111111',
      '                                                                  111111rrrrrrrrrrrrrrrrrr       rrrrrrrrrrrrrrrr',
      '           m                   gggggggggggg11    11gggggggggggg111rrrrrrrrrrrrrrrrrr            grrrrrrrrrrrrrrrr',
      '                           ggggrrrrrrrrrrrrrr                                                  1rrrrrrrrrrrrrrrrr',
      'gggggggggggggggggggggggggggrrrrrrrrrrrrrrrrrr                                                 grrrrrrrrrrrrrrrrrr',
      'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr              m             m           m       1rrrrrrrrrrrrrrrrrrr',
      'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                             gggrrrrrrrrrrrrrrrrrrrr',
      'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
      'r   rrr    rr  rrr  rrrr     r     rrrrr    rr    rrr    rrrr   r    rr    r    rrrr    rr   r   rrr   r  rr   r ',
      '     r     r   rr     rr            rr r     r     r       rr        r          r r     r         r        r     ',
      '               r       r            r                       r                   r                                '],
    220, 466,
    24, 24,
  )



  world.gravity.y = 9.81;
  allSprites.pixelPerfect = true;
  player.debug = true;
  goblin.debug = true;
  sword.debug = true;
  fences.debug = true;
}

let canJump = true;
let attacking = false;
let goblinHealth = 50;
let goblin1Health = 50;
let goblin2Health = 50;
let hitboxOffset = 55;
let score = 0;

async function draw() {
  push()
  scale(6)
  image(backgroundSheet, 0, 0)
  pop()

  for (let coin of moneys) {
    //6 times
    if (coin.overlaps(player)){
      coin.remove();
      score += 1;
    }
  }

  text('Money :' + score, 8, 12 )

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
  if (player.overlaps(fences)) {
    ftxt.opacity = 100;
  }
  if (keyIsDown('a')) {
    player.velocity.x = -5;
    player.changeAni('run');
    player.mirror.x = true;
    hitboxOffset = -55;
  }
  if (kb.released('a')) {
    player.changeAni('idle');
    player.velocity.x = 0;
  }

  if (keyIsDown('d')) {
    player.velocity.x = +5;
    player.changeAni('run');
    player.mirror.x = false;
    hitboxOffset = 55;
  }
  if (kb.released('d')) {
    player.changeAni('idle');
    player.velocity.x = 0;
  }
  if (mouse.presses('left')) {
    attacking = true;
    await player.changeAni('attack1');
    player.changeAni('idle')
    attacking = false;
  }
  if (sword.overlapping(goblin) && attacking == true) {
    setTimeout(() => {
      if (player.mirror.x == true) {
        goblin.move(2, 'left', 3)
      }
      if (player.mirror.x == false) {
        goblin.move(2, 'right', 3)
      }
    }, 300)
    goblinHealth -=1
    txt.text = goblinHealth               
  }
  if (goblinHealth == 0) {
    goblin.remove()
    txt.remove()
  }
  if (sword.overlapping(goblin1) && attacking == true) {
    setTimeout(() => {
      if (player.mirror.x == true) {
        goblin1.move(2, 'left', 3)
      }
      if (player.mirror.x == false) {
        goblin1.move(2, 'right', 3)
      }
    }, 300)
    goblin1Health -=1
    txt1.text = goblin1Health
  }
  if (goblin1Health == 0) {
    goblin1.remove()
    txt1.remove()
  }
  if (sword.overlapping(goblin2) && attacking == true) {
    setTimeout(() => {
      if (player.mirror.x == true) {
        goblin2.move(2, 'left', 3)
      }
      if (player.mirror.x == false) {
        goblin2.move(2, 'right', 3)
      }
    }, 300)
    goblin2Health -=1
    txt2.text = goblin2Health
  }
  if (goblin2Health == 0) {
    goblin2.remove()
    txt2.remove()
  }
  if (mouse.presses('right')) {
    await player.changeAni('attack2')
    player.changeAni('idle')
  }
  if (score == 10) {
    
  }
  camera.y = player.y
  camera.x = player.x
  sword.x = player.x + hitboxOffset
  sword.y = player.y

  txt.y = goblin.y -50
  txt.x = goblin.x

  txt1.y = goblin1.y -50
  txt1.x = goblin1.x

  txt2.y = goblin2.y -50
  txt2.x = goblin2.x

  ftxt.x = fences.x
  ftxt.y = fences.y -100
}

