// function sayHello(name) {
//  console.log('Hi ' + name);
// }

const sayHello = (name) => {
  console.log(`Hi ${name}`);
}

sayHello();

const sayHello2 = (phrase = "Hello", name) => {
  return `${phrase} ${name}`;
}

console.log(sayHello2());