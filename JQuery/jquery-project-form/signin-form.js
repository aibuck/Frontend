let userData = [] // 회원가입하면, 여기다 저장!

function handleData() {

  /*  모든 데이터를 모으기! */
  const id = $('form')[0].id.value
  const password = $('form')[0].pw.value
  const name = $('form')[0].name.value
  const tel = $('form')[0].phone.value
  const addr = $('form')[0].addr.value + " " + $('form')[0].addrdetail.value
  const birth = $('form')[0].birth.value
  const job = $('form')[0].job.value
  const gender = $('form')[0].gender.value
  const email = $('form')[0].email.value
  const intro = $('form')[0].intro.value

  // 회원가입 정보를 나타내는 하나의 객체!
  const userObj = {
    id: id,
    password: password,
    name: name,
    tel: tel,
    addr: addr,
    birth: birth,
    job: job,
    gender: gender,
    email: email,
    intro: intro
  }
  userData.push(userObj) // 배열에 유저 추가!
  console.log(userData)
}

// 주소 찾을 때 주소찾기 모듈 뜨게 하는 함수
// + 다 찾은 다음의 동작도 추가로 정의함
function searchPostcode() {
  $("input[name='addr']").click(function() {

    new daum.Postcode({
      oncomplete: function (data) {
        $("input[name='addr']").val(data.address);
      }
    }).open();

  });
}

// 제이쿼리 UI 를 적용할 요소들에 싹 다 적용하기 파트
function init() {
  $("input[name='birth']").datepicker({
    showButtonPanel: true,
    changeYear: true,
    closeText: "CLOSE"
  });
  $("select").selectmenu();
  $("input[type='radio']").checkboxradio();
  $(".btn").button();
  $(document).tooltip();
}

// 문서가 로드되면 실행될 코드 블록
$(document).ready(function() {
  init(); // 제이쿼리UI 세팅
  searchPostcode(); // 다음(DAUM) 주소찾기 세팅
  $('form').submit(function (e) {
    e.preventDefault() // 제출 되었을 때 기존 기능을 차단!
    handleData()
  })
})




