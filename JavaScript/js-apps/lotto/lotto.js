const now = new Date()
let year = now.getFullYear()
let mon = now.getMonth() + 1
let day = now.getDay()

let dday = `${year}년 ${mon}월 ${day}일 로또번호 추첨`
const nowday = document.querySelector("#head")
// document.textContent.querySelector("#lotto").appendchild(dday)
nowday.textContent = dday


const gobtn = document.querySelector("#go");
const resetbtn = document.querySelector("#rep");
const lottoNumbersDisplay = document.querySelector("#lnum");

gobtn.addEventListener('click', function() {
  const lottoNumbers = [];
  
  while(lottoNumbers.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1;
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran);
    }
  }

  const lottoNumbersText = lottoNumbers.join(', '); // 로또 번호를 쉼표로 구분하여 문자열로 변환
  lottoNumbersDisplay.textContent = lottoNumbersText; // 화면에 출력
});

resetbtn.addEventListener('click', function() {
  lottoNumbersDisplay.textContent = ""; // 번호 출력 부분 초기화
  
});
