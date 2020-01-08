function Transport (transportName, numberOfSeats) {
    var transportName = prompt('Введите название' + ' ' + suffix);
    var numberOfSeats = prompt('Введите максимальное количество мест');
    this.transportName = transportName; 
    this.numberOfSeats = numberOfSeats;
    
}

Transport.prototype.information = function () {
        return this.transportName + ' ' + this.numberOfSeats;
    }




function Car (transportName, numberOfSeats) {
    suffix = 'Машины';
    Transport.apply(this, arguments);    
}

function Ship (transportName, numberOfSeats) {
    suffix = 'Корабля';
    Transport.apply(this, arguments);
}

function Plane (transportName, numberOfSeats) {
    suffix = 'Самолета';
    Transport.apply(this, arguments);
}   





