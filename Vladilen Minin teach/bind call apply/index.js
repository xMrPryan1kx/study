function hello() {
    console.log('Hello ', this)
}

const person = {
    name: 'Alex',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info :`);
        console.log(`Name is ${this.name}`);
        console.log(`age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

person.logInfo.bind(lena,'Front', '89478439373')();
person.logInfo.call(lena,'Front', '89478439373')
person.logInfo.apply(lena, ['Front', '89478439373'])


const array = [1, 2, 3, 4, 5];

// function sum(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

Array.prototype.sum = function(n) {
    return this.map(function(i) {
        return i * n
    });

}

console.log(array.sum(2));
