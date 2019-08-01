function makeGreeting() {
    var test = 0;

    return function greeting() {
        return test++;
    }
}
var counter = makeGreeting();