const anotherFunction = () => {
  // utilizar var en este caso es ineficiente 
  // ya que redefine la variable del ciclo a un ambito mas externo

  // mientras que utilizar let solo permite redifinir 
  // en el ambito del ciclo
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

anotherFunction()
