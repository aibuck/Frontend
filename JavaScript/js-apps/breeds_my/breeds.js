const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const dogList = document.getElementById("dog-list")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")

const more = document.querySelector(".more")
const tothetop = document.querySelector(".tothetop")

const currentDogs = []


function displayDogs(item){
  const dogImgDiv = document.createElement("div")
  dogImgDiv.classList.add("flex-item")
  dogImgDiv.innerHTML = `
    <img src=${item}>
  `
  dogList.appendChild(dogImgDiv)
}

addEventListener("load", function(){

  //강아지 사진 뿌리기
  request1.open("GET", apiRandomDogs)
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
      currentDogs.push(item)
      displayDogs(item)
    })
  })
  request1.send()
})



//견종 텍스트 뿌리기
request2.open("get", apiAllBreeds)
request2.addEventListener('load', function(){
  const response = JSON.parse(request2.response)
  Object.keys(response.message).forEach(function(item){
    const option = document.createElement('option')
    option.textContent = item
    option.value = item
    select.appendChild(option)
  })
})

button.addEventListener("click", function(){
  dogList.innerHTML = ""
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(input.value) !== -1
  })
  input.value = ""
  filteredDogs.forEach(function(item){
    displayDogs(item)
  })
})

select.addEventListener("change", function(){
  dogList.innerHTML = ""
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(select.value) !== -1
  })
  
  filteredDogs.forEach(function(item){
    displayDogs(item)
  })
})

more.addEventListener("click", function(){
  // 강아지 사진 더 불러와서 추가하고 뿌리기
  request1.open("GET", apiRandomDogs)
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
      currentDogs.push(item)
      displayDogs(item)
    });
  })
  request1.send()
})

tothetop.addEventListener("click", function(){
  window.scrollTo({ top: 0 })
})