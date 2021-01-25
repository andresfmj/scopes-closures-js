const fruits = () => {
  if (true) {
    var fruit1 = 'apple';
    // let y const son solo declaraciones 
    // del scope del if en este caso
    let fruit2 = 'banana';
    const fruit3 = 'pineapple';
  }
  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

fruits()


let x = 1;
{
  let x = 2;
  console.log('dentro: ', x);
}
console.log(x);



const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

anotherFunction()
