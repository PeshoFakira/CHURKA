class Player{
    constructor(x, y, hp, sx, sy, wp, speed){
        this.x = x;
        this.y = y;
        this.sx = sx;
        this.sy = sy;
        this.hp = hp;
        this.wp = wp;
        this.speed = speed;
    }
    update(){
        if(this.x <= 25){this.x = 25;}
        if(this.x >= window.innerWidth - 25 - this.sx){this.x = window.innerWidth - 25 - this.sx;}
        if(this.y <= 25){this.y = 25;}
        if(this.y >= window.innerHeight - 25 - this.sy){this.y = window.innerHeight - 25 - this.sy;}
        if(isKeyPressed[65]){this.x -= this.speed;}
        if(isKeyPressed[68]){this.x += this.speed;}
        if(isKeyPressed[87]){this.y -= this.speed;}
        if(isKeyPressed[83]){this.y += this.speed;}
    }
    draw(){
        context.fillStyle = "red";
        context.lineWidth = "3";
        context.fillRect(this.x + this.sx/2 - this.hp/2, this.y - 50, this.hp, 10);
        context.strokeRect(this.x + this.sx/2 - this.hp/2, this.y - 50, this.hp, 10);
        context.fillStyle = "black";
        context.fillRect(this.x, this.y, this.sx, this.sy);
    }
}
var player = new Player(window.innerWidth/2 - 75/2, window.innerHeight/2 - 75/2, 100, 75, 75, "sword", 5);
function update(){
    player.update();
}
function draw(){
    context.lineWidth = "50";
    context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
    player.draw();
}