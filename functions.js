function isCollide(a,b) {
    return !(
      ((a.y + a.height) < (b.y)) ||
      (a.y > (b.y + b.height)) ||
      ((a.x + a.width) < b.x) ||
      (a.x > (b.x + b.width))
  );
  }
  
  function isCollideCircle(circle,rect) {
    circleDistanceX = Math.abs(circle.x - rect.x);
    circleDistanceY = Math.abs(circle.y - rect.y);
  
      if (circleDistanceX > (rect.width/2 + circle.r)) { return false; }
      if (circleDistanceY > (rect.height/2 + circle.r)) { return false; }
  
      if (circleDistanceX <= (rect.width/2)) { return true; } 
      if (circleDistanceY <= (rect.height/2)) { return true; }
  
      cornerDistance_sq = (circleDistanceX - rect.width/2)^2 +
                           (circleDistanceY - rect.height/2)^2;
  
      return (cornerDistance_sq <= (circle.r^2));
  }