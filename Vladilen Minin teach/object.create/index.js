const person = Object.create(
    {
        calculateAge() {
            console.log('Age' + new Date().getFullYear() - this.birthYear)
        }
    }, 
    {
    name: {
        value: 'Alexey',
        enumerable: true, // Видимость ключей (по умолчанию false)
        writable: true, //Возможность изменять значение
        configurable: true // позволяет удалять ключ
    },
    birthYear: {
        value: 1994,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age : {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            document.body.style.background = 'red'
            console.log('set age', value)
        }
    }
})

// person.name = 'Maxim'


for(let key in person) {
    if(person.hasOwnProperty(key)){ //hasOwnProperty - метод который не затрагивает прототип,а делает итерацию только на своем объекте
        console.log('key', key, person[key])
    }
    
}