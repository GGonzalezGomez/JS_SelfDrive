const canvas = document.getElementById("MainCanvas");
canvas.width = 300;
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.95);
const car = new Car(road.getLaneCenter(1),window.innerHeight/2,30,50);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y + (canvas.height)*0.7);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();

    requestAnimationFrame(animate);
}