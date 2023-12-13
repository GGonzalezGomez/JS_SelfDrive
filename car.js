class Car {

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = 0;
        this.acceleration = 0.2;
        this.heading = 0;

        this.MAX_SPEED = 3;
        this.MAX_REVERSE_SPEED = -1.5;
        this.FRICTION = 0.05;

        this.controls = new Controls();
    }

    update(){
        this.#move();
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.heading);

        ctx.beginPath();
        ctx.rect(- this.width/2,
                 - this.height/2,
                 this.width,
                 this.height);
        ctx.fill();

        ctx.restore();
    }

    #move(){
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        if(this.speed > this.MAX_SPEED){
            this.speed = this.MAX_SPEED;
        }
        if(this.speed < this.MAX_REVERSE_SPEED){
            this.speed = this.MAX_REVERSE_SPEED;
        }
        this.speed = this.speed > 0 ? this.speed - this.FRICTION : this.speed + this.FRICTION;
        this.speed = Math.abs(this.speed) < this.FRICTION ? 0 : this.speed;

        if(this.speed != 0){
            const flip = this.speed > 0 ? 1 : -1;
            if(this.controls.left){
                this.heading += 0.03 * flip;
            }
            if(this.controls.right){
                this.heading -= 0.03 * flip;
            }
        }

        this.y -= this.speed * Math.cos(this.heading);
        this.x -= this.speed * Math.sin(this.heading);
    }
}