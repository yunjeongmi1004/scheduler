var id = document.getElementById("id");
var email = document.getElementById("email");

id.addEventListener("keyup", checkId);
email.addEventListener("keyup", checkEmail);

function checkId(){
    if (id.value == "") {
        errMsg[0].innerHTML = "아이디는 필수 정보입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");
    }else if(!idPttern.test(id.value)){
        errMsg[0].innerHTML = "아이디는 4자 이상 20자 이하의 영문 or 숫자 or 영문+숫자 조합으로 입력해주세요.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");   
    }else if(id.value.indexOf(" ") > -1){
        errMsg[0].innerHTML = "공백 없이 입력해주세요.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");
    }else{
        errMsg[0].innerHTML = "올바른 아이디 양식입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.add("success");
    }
}

function checkEmail(){
    if(email.value == ""){
        errMsg[1].innerHTML = "이메일 입력은 필수 정보입니다.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else if(!emailPttern.test(email.value)) {
        errMsg[1].innerHTML = "올바른 이메일 양식으로 입력해주세요.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else{
        errMsg[1].innerHTML = "올바른 이메일 양식입니다.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.add("success");
    }
}
function findpwEvent(){
    if (id.value == "" || email.value == "" ) {
        alert("모든 필드는 입력은 필수 입니다.");
    }else{
        if(errMsg[0].classList.contains("success") && errMsg[1].classList.contains("success")){
            alert("아이디 찾기 성공, 비밀번호찾기 action.jsp로 넘겨주기");
        }else{
            alert("잘못된 필드 입력을 확인해주세요.")
        }
    }
}



