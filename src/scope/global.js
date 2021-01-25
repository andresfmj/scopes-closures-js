var hello = 'Hello'; 
// esta variable sera accedida en todo el script
// ya que esta declarada de manera global
var hello = 'Hello +'; // esto reasigna la variable con el nuevo string
console.log(hello);

let world = 'Hello World';
//let world = 'World!!' // no se permite reasignar una variable previamente declarada con let
const HelloWorld = 'Hello World!';
//const HelloWorld = 'Hello 2'; // no se permite reasignar una variable previamente declarada con const


const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(HelloWorld);
  globalVar = 'Soy una variable global';
  // esta variable es accedida de manera global ademas desde el scope de la funcion
  var localVar = globalVar = 'Soy global';
  console.log(globalVar)
  console.log(localVar)
}

anotherFunction();

// console.log(localVar)