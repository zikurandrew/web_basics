const car = {
    speedometer: 0
  };
  
  Object.defineProperty(car, 'setSpeed', {
    value: function(newSpeed) {
      this.speedometer = newSpeed;
      console.log(this.speedometer);
      return this; 
    }
  });

  Object.defineProperty(car, 'clearSpeed', {
    value: function() {
      this.speedometer = 0;
      console.log(this.speedometer);
      return this; 
    }
  });
  
  Object.defineProperty(car, 'getSpeed', {
    value: function() {
      console.log(this.speedometer);
      return this; 
    }
  });
    
  car.setSpeed(600).setSpeed(400).getSpeed().clearSpeed();
  