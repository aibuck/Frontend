//요소 선택 및 배열 선언
const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
let todoArr = [];


//할일 입력 후 제출하면 발생하는 이벤트 핸들링
todoForm.addEventListener('submit', function(e){
  e.preventDefault()
  const added = {
    todoText : todoForm.todo.value,
    todoId : new Date().getTime(),
    todoDone: false
  }
  todoForm.todo.value = ""
  todoArr.push(added)
  displayTodos()
  saveTodos()

})


// displayTodos 함수, 위 submit의 입력값을 받아 화면에 출력함.
function displayTodos(){
  todoList.innerHTML = ""//입력값이 들어올때마다 초기화 후 다시 출력, 이 문장이 존재하지 않으면 1,2,3 처럼 보이는게 아닌 1,12,123 으로 보임
  todoArr.forEach((aTodo) => {
    const todoItem = document.createElement('li')
    const todoDelBtn = document.createElement('span')
    
    todoDelBtn.innerText = 'x'
    todoDelBtn.title = '할일 삭제'

    todoItem.innerText = aTodo.todoText
    todoItem.title = '할일 완료'
    todoItem.classList.add(aTodo.todoDone ? 'done' : 'yet')
    todoItem.appendChild(todoDelBtn)
    todoDelBtn.addEventListener('click', function(){
      handleTodoDelBtnClick(aTodo.todoId)
    })
    todoItem.addEventListener('click', function(){
      handleTodoItemClick(aTodo.todoId)
    })
    todoList.appendChild(todoItem)
  })
}

//handleTodoDelBtnClick 함수
function handleTodoDelBtnClick(clickedId){
  todoArr = todoArr.filter(function(aTodo){
    return aTodo.todoId !== clickedId
  })
  displayTodos()
  saveTodos()
}

//handleTodoItemClick 함수
function handleTodoItemClick(clickedId){
  todoArr = todoArr.map(function(aTodo){
    return aTodo.todoId !== clickedId ? aTodo : {...aTodo, todoDone : !aTodo.todoDone}
  })
  displayTodos()
  saveTodos()
}

//saveTodos 함수
function saveTodos(){
  const todoString = JSON.stringify(todoArr)
  localStorage.setItem('myTodos', todoString)
}

//loadTodos 함수
function loadTodos(){
  const myTodos = localStorage.getItem('myTodos')
  todoArr = myTodos !== null ? JSON.parse(myTodos) : todoArr
  displayTodos()
}

loadTodos() // 시작할때 한번만 실행