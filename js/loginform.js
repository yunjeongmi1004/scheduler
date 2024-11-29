var idlogin = document.getElementById("idlogin");
var password = document.getElementById("password");

idlogin.addEventListener("keyup", checkIdlogin);
password.addEventListener("keyup", checkPw);

function checkIdlogin(){
    if (idlogin.value == "") {
        errMsg[0].innerHTML = "아이디는 필수 정보입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");
    }else if(!idPttern.test(idlogin.value)){
        errMsg[0].innerHTML = "아이디는 4자 이상 20자 이하의 영문 or 숫자 or 영문+숫자 조합으로 입력해주세요.";
        errMsg[0].style.display = "block";      
        errMsg[0].classList.remove("success");
    }else if(idlogin.value.indexOf(" ") > -1){
        errMsg[0].innerHTML = "공백 없이 입력해주세요.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.remove("success");
    }else{
        errMsg[0].innerHTML = "올바른 아이디 양식입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.add("success");
    }
    
}

function checkPw(){
    if (password.value == "") {
        errMsg[1].innerHTML = "비밀번호는 필수 정보입니다.";
        errMsg[1].style.display = "block";
    }else if(!pwPttern.test(password.value)){
        errMsg[1].innerHTML = "비밀번호는 4자이상 20자 이하로 영문 + 숫자 필수 포함으로 입력해주세요.";
        errMsg[1].style.display = "block";      
    }else if(password.value.indexOf(" ") > -1){
        errMsg[1].innerHTML = "공백 없이 입력해주세요.";
        errMsg[1].style.display = "block";
    }else{
        errMsg[1].innerHTML = "올바른 비밀번호 양식입니다.";
        errMsg[1].style.display = "block";  
        errMsg[1].classList.add("success"); 
    }
}

function loginEvent(){
    if (idlogin.value == "" || password.value == "" ) {
        alert("모든 필드는 입력은 필수 입니다.");
    }else{
        if(errMsg[0].classList.contains("success") && errMsg[1].classList.contains("success")){
            alert("로그인 성공, 로그인 action.jsp로 넘겨주기");
        }else{
            alert("잘못된 필드 입력을 확인해주세요.")
        }
    }
}



