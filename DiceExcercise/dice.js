var dice = {
  sides: 6,    
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
    alert("hello"); //will not get executed
  }
}

