'use strict';
function Transport(transportName, numberOfSeats, speed) {
    this.transportName = transportName; 
    this.numberOfSeats = numberOfSeats;
    this.speed = speed;
    this.isCanFly = false;
    this.IsEngineOn = false;
    
    
}
Transport.prototype.information = function() {
    return 'Название транспортного средства : ' + this.transportName + ', Количество мест : ' + this.numberOfSeats;
}
Transport.prototype.timeToOneThousandMeters = function() {
    return (1000 / this.speed).toFixed(2);
}
Transport.prototype.maxSpeed = function() {
    return 'Максимальная скорость ' + this.suffix + ' ' + this.transportName + ' равна : ' + this.speed + ' км/ч';
}
Transport.prototype.engineOn = function() {
    if(!this.IsEngineOn) {
        alert('Двигатель выключен!')
    } else {
        alert('Двигатель включен')
    };
}


function Car (transportName, numberOfSeats, speed) {
    this.suffix = 'Машины';
    Transport.apply(this, arguments);
};

Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;


function Ship (transportName, numberOfSeats, speed) {
    this.suffix = 'Корабля';
    Transport.apply(this, arguments);
}

Ship.prototype = Object.create(Transport.prototype);
Ship.prototype.constructor = Ship;

function Plane () {
    this.suffix = 'Самолета';
    Transport.apply(this, arguments);
    this.isCanFly = true;
    this.IsEngineOn = true;
    let parentMaxSpeed = this.maxSpeed;
    this.maxSpeed = function() {
        parentMaxSpeed.call(this);
        console.log('Метод был переопределен!');
    }
    
}   



Plane.prototype = Object.create(Transport.prototype);
Plane.prototype.constructor = Plane;

let car = new Car('Lada', '5', '150');
let ship = new Ship('Garanec', '150', '100');
let plane = new Plane('TU', '50', '700');





