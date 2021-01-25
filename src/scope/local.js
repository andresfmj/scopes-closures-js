const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
}

helloWorld();

var scope = 'soy global';

const functionScope = () => {
  var scope = 'soy var local'
  const func = () => {
    return scope;
  }
  console.log(func())
}

functionScope();
console.log(scope);
