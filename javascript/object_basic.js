let day = 'Wednesday';
let alarm;

let person = {
    name: 'Josh',
    age: 27,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello() {
        return `Hello, my name is ${this.name}`;
    },
    sayGoodbye() {
        return 'Goodbye!';
    },
};
person.hobbies = ['gymnastics', 'fermentation', 'coding'];

if (day === 'Saturday' || day === 'Sunday') {
    alarm = 'weekendAlarm';
} else {
    alarm = 'weekAlarm';
}
console.log(person.hobbies[0]);
person.sayHello();