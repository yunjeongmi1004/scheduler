var username = document.getElementById("name");
var email = document.getElementById("email");

username.addEventListener("keyup", checkName);
email.addEventListener("keyup", checkEmail);

function checkName(){
    if(username.value == ""){
        errMsg[1].innerHTML = "이름은 필수 정보입니다.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else if(username.value.length > 10){
        errMsg[1].innerHTML = "이름은 10자 이하로 입력해주세요.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else if(username.value.indexOf(" ") > -1){
        errMsg[1].innerHTML = "공백 없이 입력해주세요.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else{
        errMsg[1].innerHTML = "올바른 이름 양식입니다.";
        errMsg[1].style.display = "block";   
        errMsg[1].classList.add("success");
    }
    
}

function checkEmail(){
    if(email.value == ""){
        errMsg[0].innerHTML = "이메일 입력은 필수 정보입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");
    }else if(!emailPttern.test(email.value)) {
        errMsg[0].innerHTML = "올바른 이메일 양식으로 입력해주세요.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");
    }else{
        errMsg[0].innerHTML = "올바른 이메일 양식입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.add("success");
    }
}
function findidEvent(){
    if (username.value == "" || email.value == "" ) {
        alert("모든 필드는 입력은 필수 입니다.");
    }else{
        if(errMsg[0].classList.contains("success") && errMsg[1].classList.contains("success")){
            alert("아이디 찾기 성공, 아이디찾기 action.jsp로 넘겨주기");
        }else{
            alert("잘못된 필드 입력을 확인해주세요.")
        }
    }
}



