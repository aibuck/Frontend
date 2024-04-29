const sayHello = () => {
  console.log("Hello ;)")  
}

const sayGoodbye = () => {
  console.log("Good bye x(")
}

//exports라는 이름은 하나의 변수이므로
//여러개를 넣으려면 동시에 묶어서 해야한다!

module.exports = {//인헨서드 객체 리터럴
  sayHello,
  sayGoodbye
}