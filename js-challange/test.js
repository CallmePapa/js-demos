/* console.time('fetching time');


console.log('hello');

console.log('Hello I am a %s string!', '?');

console.warn("OH NOOO!");

console.error('Shit!');

console.info("Crocodiles eat 3-4 people per year");

console.clear(); */

const dogs = [{
    name: 'Snicks',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})


 console.count('Wes');
 console.count('Wes');
 console.count('Steve');
 console.count('Steve');
 console.count('Wes');
 console.count('Steve');
 console.count('Wes');
 console.count('Steve');
 console.count('Steve');
 console.count('Steve');
 console.count('Steve');
 console.count('Steve');

 console.table(dogs);

fetch('https://api.github.com/users/wesbos')
    .then(data => data.json()).then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});
console.log('====================================');
console.log(dogs);
console.log('====================================');