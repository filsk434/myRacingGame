var context, controller, player, enemy, circle, loop;

context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 600;
context.canvas.width = 800;

window.addEventListener("keypress", controller.keyListener);
window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);