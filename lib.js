ga.lib.BuilletSystem=function(){

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