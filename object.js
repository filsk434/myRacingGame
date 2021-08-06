player = {
  height:30,
  jumping:true,
  width:30,
  x:350, // center of the canvas
  x_velocity:0,
  y:100,
  y_velocity:0
};

enemy = {
  height:30,
  jumping:true,
  width:30,
  x:350, // center of the canvas
  x_velocity:0,
  y:150,
  y_velocity:0.5
};

car = {
  height:30,
  jumping:true,
  width:30,
  x:350, // center of the canvas
  x_velocity:0,
  y:250,
  y_velocity:0.5
};

circle = {
  x: context.canvas.width/2,
  y: context.canvas.height/2,
  r: 80,
  d: 160
}

bigCircle = {
  x: 400*Math.cos(Math.PI*2),
  y: 300*Math.cos(Math.PI*2), 
  r: 120,
  d: 240
}

goal_line = {
  x: 400,
  y: 60,
  width: 2,
  height: 160
}

square = {
  height: 500,
  width: 500,
  x: 150,
  y: 50
}