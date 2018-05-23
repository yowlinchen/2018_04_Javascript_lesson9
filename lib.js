ga.lib.Plane=function(){
    this.x=ga.ctx.canvas.width/2;
    this.y=ga.ctx.canvas.height/2;
    this.size=20;
    this.update=function(){
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