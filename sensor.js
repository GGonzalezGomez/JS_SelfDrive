class Sensor{
    constructor(car){
        this.rayCount = 4;
        this.rayLength = 100;
        this.visionRange = Math.PI/4;
        this.car = car;
        
        this.rays = [];
    }

    draw(ctx){
        ctx.BeginPath();
    }

    update(){
        this.rays = [];
        for(let i = 0; i<this.rayCount; i++){
            const rayAngle = interpolate(-this.visionRange/2,
                                         this.visionRange/2,
                                         i/(this.rayCount-1));

            const rayOrigin = {x: this.car.x, y:this.car.y};
            const rayEnd = {x: rayOrigin.x + Math.sin(rayAngle)*this.rayLength,
                            y: rayOrigin.y + Math.cos(rayAngle)*this.rayLength};

            this.rays.push([rayOrigin,rayEnd]);
        }
    }
}