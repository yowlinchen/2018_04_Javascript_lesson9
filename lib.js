ga.lib.BulletSystem = function(color){
    this.bullets=[];
    this.color=color;
    this.update=function(){
        if (ga.data.circle%4==0){
            this.bullets.push(new ga.lib.Bullet(this.color));
        }
        // update each bullet
        for(var i=0;i<this.bullets.length;i++){
            var die = this.bullets[i].update();
            if(die){
                this.bullets.splice(i,1);
                i--;
            }
        }
    };
    this.draw=function(){
        // draw each bullet
        for(var i=0; i<this.bullets.length;i++){
            this.bullets[i].draw();
        }
    };
};

ga.lib.Bullet=function(color){
    this.x = 0;
    this.y = Math.random()*ga.ctx.canvas.height;
    this.vx = Math.random()*1+0.5 // 0.5~2.5 
    this.vy = 0;
    this.size = 1;
    this.color = color;
    this.update = function(){
        this.x += this.vx;
        this.y += this.vy;
        return this.x > ga.ctx.canvas.width;
    };
    this.draw = function(){
        ga.ctx.save();
        ga.ctx.fillStyle=this.color;
        ga.ctx.beginPath();
        ga.ctx.arc(this.x, this.y, this.size,0,2*Math.PI);
        ga.ctx.fill();
        ga.ctx.restore();
    };
};

ga.lib.Plane=function(){
    this.x=ga.ctx.canvas.width/2;
    this.y=ga.ctx.canvas.height/2;
    this.size=20;
    this.update=function(){
        var speed = 1;
        if(ga.data.key.left) {
            this.x-=speed;
        }
        if(ga.data.key.top) {
            this.y-=speed;
        }
        if(ga.data.key.right) {
            this.x+=speed;
        }
        if(ga.data.key.bottom) {
            this.y+=speed;
        }
        return false;
    };
    this.draw=function(){
        // savae current canvas seting
        ga.ctx.save();
        ga.ctx.drawImage(ga.res.imgs.plane,
        this.x-this.size/2, this.y-this.size/2,
        this.size,this.size);
        // restore above saved canvas setting
        ga.ctx.restore();
    };
} 