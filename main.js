
loop = function() {
    if(highscore !== null){
      if (score > highscore) {
          localStorage.setItem("highscore", score);      
      }
  }
  else{
      localStorage.setItem("highscore", score);
  }
  
  /*  if(isCollideCircle(circle,player)) {
      gameOver();
    }
  */
    if(isCollide(player,enemy)) {
      gameOver();
    }
  
    if(!isCollide(player,goal_line) && player.x_velocity>0){
      score += 1;
    }
  
    //Enemy movement
    if(enemy.x >= 0 && enemy.x != 500 && enemy.y == 150) {
      enemy.x += 0.5;
    }
    if(enemy.x == 500 && enemy.y != 417) {
      enemy.y += 0.5;
    }
    if(enemy.y == 417 && enemy.x != 230) {
      enemy.x -=0.5
    }
    if(enemy.x == 230 && enemy.y != 150) {
      enemy.y -=0.5
    }
    
  //Player movement
    if (controller.up) {
      player.y_velocity -= 0.5;
    }
    if (controller.left) {
      player.x_velocity -= 0.5;
    }
    if (controller.right) {
      console.log("x:", player.x)
      console.log("y", player.y)
      console.log("circle y: ", bigCircle.y)
      console.log("circle x", bigCircle.x)
      console.log("circle d", bigCircle.d)
      player.x_velocity += 0.5;
      }
    if(controller.down) {
      player.y_velocity += 0.5;
    }
    if(controller.space) {
      player.rotate(deg * Math.PI/180);
      player.rotate(20 * Math.PI/180)
    }
  
    player.x += player.x_velocity;
    player.y += player.y_velocity;
    player.x_velocity *= 0.9;// friction
    player.y_velocity *= 0.9;// friction
  
    // if rectangle is out of bounds
    if (player.y > context.canvas.height - player.height) {
      player.y = context.canvas.height - player.height
    }
    if(player.x > context.canvas.width - player.width) {
      player.x = context.canvas.width - player.width
    }
  
    if(player.y < 0 ) {
      player.y = 0 
    }
    if(player.x < 0 ) {
      player.x = 0
    }
  
    function gameOver() {
      player.y = 100;
      player.x = 350;
      player.y_velocity = 0;
      player.x_velocity = 0;
      window.alert("Score: "+ score+ '\n'+ "high score: " + highscore);
      location.reload();
    }
  
    // if crash in pink rectangle
    if ( player.y< square.y || player.x<square.x ) {
      gameOver();
    }
  
    if (player.y > square.height +square.y - player.height) {
      gameOver();
    }
    if(player.x > square.width + square.x - player.width) {
      gameOver();
    }
  
    var carImg = new Image();   // Create new img element
    var carImgTwo = new Image();
    carImg.src = 'car1.png'; // Set source path
    carImgTwo.src = 'car2.png';
   
   //Draw out graphics
    context.fillStyle = "#202020"; //Background
    context.fillRect(0, 0, 800, 600);// x, y, width, height
  
  //Player
    context.beginPath();
    context.drawImage(carImg, player.x,player.y,player.width, player.height);
    context.fill();
    
  //Enemy
    context.beginPath();
    context.drawImage(carImgTwo, enemy.x, enemy.y, enemy.width, enemy.height);
    context.fill();
  
  //Line  
    context.beginPath();
    context.rect(goal_line.x,goal_line.y,goal_line.width,goal_line.height);
    context.lineWidth = goal_line.width;
    context.strokeStyle = 'ff9800';
    context.stroke();
  
  //inner Circle
    context.beginPath();
    context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
    context.lineWidth = 3;
    context.strokeStyle = '#FF0000';
    context.stroke();
  
  //outer circle
    context.beginPath();
    context.arc(bigCircle.x, bigCircle.y, bigCircle.r*2, 0, 2 * Math.PI, false);
    context.lineWidth = 8;
    context.strokeStyle = '#FF0000';
    context.stroke();
  
  //outer square
  context.beginPath();
  context.rect(square.x,square.y,square.height,square.width)
  context.lineWidth = 8;
  context.strokeStyle = '#DEB0DE';
  context.stroke();
  
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
  
  };