function preload() {
  playerSheet = loadImage('Tiny Swords (Update 010)/Factions/Knights/Troops/Warrior/Blue/Warrior_Blue.png')
  enemySheet = loadImage('Tiny Swords (Update 010)/Factions/Goblins/Troops/Torch/Red/Torch_Red.png')
  groundSheet = loadImage('oak_woods_v1.0/oak_woods_tileset.png')
  backgroundSheet = loadImage('oak_woods_v1.0/background/background_layer_1.png')
  moneySheet = loadImage('Tiny Swords (Update 010)/Resources/Resources/G_Idle_(NoShadow).png')
  fenceSheet = loadImage('oak_woods_v1.0/decorations/sign.png')
  foodSheet = loadImage('Tiny Swords (Update 010)/Resources/Resources/M_Idle_(NoShadow).png')
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
  player.dead = false;
  player.anis.offset.y = 7;
  player.anis.offset.x = 6;

  player.changeAni('idle')

  sword = new Sprite()
  sword.width = 60;
  sword.height = 80;
  sword.collider = 'none';
  sword.spriteSheet = playerSheet;
  sword.addAni({
    normal: { w: 20, h: 20, row: 1, frames: 0 }
  })

  fire = new Sprite()
  fire.width = 60;
  fire.height = 80;
  fire.collider = 'none';
  fire.spriteSheet = playerSheet;
  fire.addAni({
    normal: { w: 20, h: 20, row: 1, frames: 0 }
  })

  fire1 = new Sprite()
  fire1.width = 60;
  fire1.height = 80;
  fire1.collider = 'none';
  fire1.spriteSheet = playerSheet;
  fire1.addAni({
    normal: { w: 20, h: 20, row: 1, frames: 0 }
  })

  fire2 = new Sprite()
  fire2.width = 60;
  fire2.height = 80;
  fire2.collider = 'none';
  fire2.spriteSheet = playerSheet;
  fire2.addAni({
    normal: { w: 20, h: 20, row: 1, frames: 0 }
  })

  txt = new Sprite()
  txt.text = goblinHealth
  txt.textSize = 12
  txt.collider = 'none'
  txt.fill = 'red'
  txt.height = 15

  txt1 = new Sprite()
  txt1.text = goblin1Health
  txt1.textSize = 12
  txt1.collider = 'none'
  txt1.fill = 'red'
  txt1.height = 15

  txt2 = new Sprite()
  txt2.text = goblin2Health
  txt2.textSize = 12
  txt2.collider = 'none'
  txt2.fill = 'red'
  txt2.height = 15

  fences = new Sprite(400, 585)
  fences.height = 40;
  fences.width = 40;
  fences.scale = 2
  fences.collider = 'none'
  fences.spriteSheet = fenceSheet;
  fences.addAni(
    { w: 32, h: 32, row: 0, frames: 0 },
  )

  ftxt = new Sprite()
  ftxt.text = 'Collect all the money to win!'
  ftxt.textSize = 30;
  ftxt.collider = 'none';
  ftxt.fill = 'white';
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
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack: { w: 192, h: 192, row: 2, frames: 6 }
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
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack: { w: 192, h: 192, row: 2, frames: 6 }
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
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack: { w: 192, h: 192, row: 2, frames: 6 }
  })
  goblin2.anis.offset.y = 1;
  goblin2.anis.offset.x = -5
  goblin2.mirror.x = true;
  goblin2.changeAni('idle')

  moneys = new Group()
  moneys.height = -45;
  moneys.collider = 'static';
  moneys.width = 45
  moneys.tile = 'm';
  moneys.spriteSheet = moneySheet;
  moneys.addAni(
    { w: 128, h: 128, row: 0, col: 0 }
  )
 

  food = new Group()
  food.height = -45;
  food.collider = 'static';
  food.width = 45
  food.tile = 'f';
  food.spriteSheet = foodSheet;
  food.addAni(
    { w: 128, h: 128, row: 0, col: 0 }
  )
  


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

  path = new Group();
  path.collider = 'static';
  path.tile = '1';
  path.height = 24;
  path.width = 24;
  path.spriteSheet = groundSheet;
  path.addAni(
    { w: 24, h: 24, row: 0, col: 6 }
  )


  //new Tiles(
   map1 = 
   [  '                                                                           m                         m       m   ',
      '                                                                                                                 ',
      '                                  f     m                               gggggggggggggggggg       gggggggggggggggg',
      '                                                                  ggggggrrrrrrrrrrrrrrrrrr       rrrrrrrrrrrrrrrr',
      '           m                   gggggggggggggg    gggggggggggggggggrrrrrrrrrrrrrrrrrr            grrrrrrrrrrrrrrrr',
      '                           ggggrrrrrrrrrrrrrr                                                  grrrrrrrrrrrrrrrrr',
      'gggggggggggggggggggggggggggrrrrrrrrrrrrrrrrrr                                                 grrrrrrrrrrrrrrrrrr',
      'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr              m       f     m      f    m       grrrrrrrrrrrrrrrrrrr',
      'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr                                             gggrrrrrrrrrrrrrrrrrrrr',
      'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
      'r   rrr    rr  rrr  rrrr     r     rrrrr    rr    rrr    rrrr   r    rr    r    rrrr    rr   r   rrr   r  rr   r ',
      '     r     r   rr     rr            rr r     r     r       rr        r          r r     r         r        r     ',
      '               r       r            r                       r                   r                                ']
    //220, 466,
    //24, 24,
 // )

map2 =
[' m     m                          m                                                      f    m                     m ',
 '                                                                                                                      ',
 '111111111111                    1111                         111                      1111111111                  1111',
 'rrrrrrrrrrrr1                  1rrrr1                       1rrr1                    1rrrrrrrrrr1            f   1rrrr',
 'rrrrrrrrrrrrr1                1rrrrrr1                     1rrrrr1         m        1rrrrrrrrrrrr1              1rrrrr',
 'rrrrrrrrrrrrrr1              1rrrrrrrr1                   1rrrrrrr1                1rrrrrrrrrrrrrr1            1rrrrrr',
 'rrrrrrrrrrrrrrr11111111111111rrrrrrrrrr111               1rrrrrrrrr1111111111111111rrrrrrrrrrrrrrrr1          1rrrrrrr',
 'rrrrrr                                                  1rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr               1rrrrrrrr',
 'rrrrrr                                          f      1rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr              1rrrrrrrrr',
 'rrrrrr      m         m        m                      1rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr   m         1rrrrrrrrrr',
 'rrrrrr                                               1rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr             rrrrrrrrrrr',
 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
 'rrrrr      rrrr      rr       r       rrrrrrrrr     rrrrr        rrrrrr      rrr     rrrrr      rrrrrrrr  r     rr    ',
 ' rrr       rrr        r                rr   rrr      rr          r   rr       r      r  r        rrrrrr          r    ',
 '  r         rr                         r    rr        r              r                            rr  r               ',
 '             r                              r                                                      r                  '
]

 tiles = new Tiles(map1,
  220, 466,
  24, 24
);


  world.gravity.y = 9.81;
  allSprites.pixelPerfect = true;
}

let canJump = true;
let attacking = false;
let goblinHealth = 23;
let goblin1Health = 23;
let goblin2Health = 23;
let hitboxOffset = 55;
let score = 0;
let health = 3;
let lvl1 = 1;
let gobatck = false;

async function enemyAttack() {
  gobatck = true;
  await goblin.changeAni('attack')
  goblin.changeAni('idle')
  gobatck = false;
}

async function enemyAttack1() {
  gobatck = true;
  await goblin1.changeAni('attack')
  goblin1.changeAni('idle')
  gobatck = false;
}

async function enemyAttack2() {
  gobatck = true;
  await goblin2.changeAni('attack')
  goblin2.changeAni('idle')
  gobatck = false;
}

async function draw() {
  push()
  scale(6)
  image(backgroundSheet, 0, 0)
  pop()

  if (player.dead == true) {
    await gameOver()
    return;
  }

  for (let coin of moneys) {
    //6 times
    if (coin.overlaps(player)) {
      coin.remove();
      score += 1;
    }
  }

  for (let meat of food) {
    //6 times
    if (meat.overlaps(player)) {
      meat.remove();
      health += 1;
    }
  }

  text('Money :' + score, 8, 12)
  text('Health :' + health, 8, 24)


  if (kb.presses('w') & canJump == true) {
    player.velocity.y = -6;
  }
  if (kb.pressed('w')) {
    canJump = false;
  }
  if (player.collides(ground)) {
    canJump = true;
  }
  if (player.collides(path)) {
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
    goblinHealth -= 1
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
    goblin1Health -= 1
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
    goblin2Health -= 1
    txt2.text = goblin2Health
  }
  if (goblin2Health == 0) {
    goblin2.remove()
    txt2.remove()
    fire.remove()
  }
  if (mouse.presses('right')) {
    await player.changeAni('attack2')
    player.changeAni('idle')
  }
  if (health == 0) {
  player.dead = true;
  }
  if (sword.overlapping(goblin)) {
    enemyAttack()
  }
  if (fire.overlaps(player) && gobatck == true) {
    health -= 1;
  }
  if (fire.mirror.x == false) {
   goblin.mirror.x =true
  }
  if (player.mirror.x == true) {
    goblin.mirror.x = false
  }

  if (sword.overlapping(goblin1)) {
    enemyAttack1()
  }
  if (fire1.overlaps(player) && gobatck == true) {
    health -= 1;
  }
  if (fire1.mirror.x == false) {
   goblin1.mirror.x =true
  }
  if (player.mirror.x == true) {
    goblin1.mirror.x = false
  }

  if (sword.overlapping(goblin2) ) {
    enemyAttack2()
  }
  if (fire2.overlaps(player) && gobatck == true) {
    health -= 1;
  }
  if (fire2.mirror.x == false) {
   goblin2.mirror.x =true
  }
  if (player.mirror.x == true) {
    goblin2.mirror.x = false
  }
  if (player.dead == true) {
    gameOver()
  }
  if (score == 8 && lvl1 == 1) {
    tiles.remove()
    player.moveTo(250, 300)
    health = 3;
    score = 0;
    lvl1 = 0;
    ftxt.remove()
    goblin.remove()
    goblin1.remove()
    goblin2.remove()
    goblin = new Sprite(600, 500);

  goblin.spriteSheet = enemySheet;
  goblin.width = 50;
  goblin.height = 68;
  goblin.bounciness = 0;
  goblin.rotationLock = true;
  goblin.velocity.x = 4
  goblin.addAnis({
    idle: { w: 192, h: 192, row: 0, frames: 7 },
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack: { w: 192, h: 192, row: 2, frames: 6 }
  })
  goblin.anis.offset.y = 1;
  goblin.anis.offset.x = -5
  goblin.mirror.x = true;
  goblin.changeAni('idle')

  goblin1 = new Sprite(600, 500);
  goblin1.spriteSheet = enemySheet;
  goblin1.width = 50;
  goblin1.height = 68;
  goblin1.bounciness = 0;
  goblin1.rotationLock = true;
  goblin1.velocity.x = 4
  goblin1.addAnis({
    idle: { w: 192, h: 192, row: 0, frames: 7 },
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack: { w: 192, h: 192, row: 2, frames: 6 }
  })
  goblin1.anis.offset.y = 1;
  goblin1.anis.offset.x = -5
  goblin1.mirror.x = true;
  goblin1.changeAni('idle')

  goblin2 = new Sprite(600, 500);
  goblin2.spriteSheet = enemySheet;
  goblin2.width = 50;
  goblin2.height = 68;
  goblin2.bounciness = 0;
  goblin2.rotationLock = true;
  goblin2.velocity.x = 4
  goblin2.addAnis({
    idle: { w: 192, h: 192, row: 0, frames: 7 },
    run: { w: 192, h: 192, row: 1, frames: 6 },
    attack: { w: 192, h: 192, row: 2, frames: 6 }
  })
  goblin2.anis.offset.y = 1;
  goblin2.anis.offset.x = -5
  goblin2.mirror.x = true;
  goblin2.changeAni('idle')

    goblinHealth = 23;
    goblin1Health = 23;
    goblin2Health = 23;
    tiles = new Tiles(map2,
      220, 466,
      24, 24
    )
  }
  if (score == 10 && lvl1 == 0) {
    win()
  }

  camera.y = player.y
  camera.x = player.x
  sword.x = player.x + hitboxOffset
  sword.y = player.y

  txt.y = goblin.y - 50
  txt.x = goblin.x

  txt1.y = goblin1.y - 50
  txt1.x = goblin1.x

  txt2.y = goblin2.y - 50
  txt2.x = goblin2.x

  ftxt.x = fences.x
  ftxt.y = fences.y - 100

  fire.x = goblin.x - hitboxOffset
  fire.y = goblin.y

  fire1.x = goblin1.x - hitboxOffset
  fire1.y = goblin1.y

  fire2.x = goblin2.x - hitboxOffset
  fire2.y = goblin2.y
}

if (player.collides(ground)) {
  canJump = true;
}
 async function gameOver() {
  background(0);

  player.remove()
  goblin.remove()
  goblin1.remove()
  goblin2.remove()
  txt.remove()
  txt1.remove()
  txt2.remove()
  tiles.remove()
  fences.remove()
  sword.remove()
  fire.remove()
  fire1.remove()
  fire2.remove()
  ftxt.remove()

  fill(255)
  text('💀 GAME OVER 💀', 600, 300)
  textSize(20)
 }

 async function win() {
  background(230);

  player.remove()
  goblin.remove()
  goblin1.remove()
  goblin2.remove()
  txt.remove()
  txt1.remove()
  txt2.remove()
  tiles.remove()
  fences.remove()
  sword.remove()
  fire.remove()
  fire1.remove()
  fire2.remove()
  ftxt.remove()

  fill(0)
  text('🎉 YOU WIN 🎉', 600, 300)
  textSize(20)
 }