class Road {
    constructor(x, width, lanes=3){
        this.x = x;
        this.width = width;
        this.lanes = lanes;

        this.top = 1000000;
        this.bottom = -1000000;

        const topLeft = {x:this.x - this.width/2, y: this.top};
        const bottomLeft = {x:this.x - this.width/2, y: this.bottom};
        const topRight = {x:this.x + this.width/2, y: this.top};
        const bottomRight = {x:this.x + this.width/2, y: this.bottom};

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];

    }

    getLaneCenter(lane){
        const laneWidth = this.width/this.lanes;
        return this.x - this.width/2 + laneWidth/2 + laneWidth*lane;
    }

    draw(ctx){
        const lineWidth = 5;

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = "white";

        for(let i = 1; i<=this.lanes-1; i++){
            const x = interpolate(this.x - this.width/2,
                                  this.x + this.width/2,
                                  i/this.lanes);

            ctx.beginPath();
            ctx.setLineDash([20,20]);
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.setLineDash([]);
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }
}