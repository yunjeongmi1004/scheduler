var id = document.getElementById("id");
var checkid = document.getElementById("checkid");
var uncheckid = document.getElementById("uncheckid");
var checkemail = document.getElementById("checkemail");
var uncheckemail = document.getElementById("uncheckemail");
var password = document.getElementById("password");
var passwordCheck = document.getElementById("passwordCheck");
var username = document.getElementById("name");
var email = document.getElementById("email");
var department = document.getElementById("department");
var authority = document.getElementById("authority");


id.addEventListener("keyup", checkId);
password.addEventListener("keyup", checkPw);
passwordCheck.addEventListener("keyup", comparePw);
username.addEventListener("keyup", checkName);
email.addEventListener("keyup", checkEmail);
department.addEventListener("keyup", checkDepartment);
authority.addEventListener("keyup", checkAuthority);

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

function checkPw(){
    if (password.value == "") {
        errMsg[1].innerHTML = "비밀번호는 필수 정보입니다.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else if(!pwPttern.test(password.value)){
        errMsg[1].innerHTML = "비밀번호는 4자이상 20자 이하로 영문 + 숫자 필수 포함으로 입력해주세요.";
        errMsg[1].style.display = "block";     
        errMsg[1].classList.remove("success"); 
    }else if(password.value.indexOf(" ") > -1){
        errMsg[1].innerHTML = "공백 없이 입력해주세요.";
        errMsg[1].style.display = "block";
        errMsg[1].classList.remove("success");
    }else{
        errMsg[1].innerHTML = "올바른 비밀번호 양식입니다.";
        errMsg[1].style.display = "block";  
        errMsg[1].classList.add("success"); 
    }
}

function comparePw(){
    if(passwordCheck.value == ""){
        errMsg[2].innerHTML = "비밀번호 입력을 완료해주세요.";
        errMsg[2].style.display = "block"; 
        errMsg[2].classList.remove("success");
    }else if(!errMsg[1].classList.contains("success")){
        errMsg[2].innerHTML = "사용 가능한 비밀번호인지 먼저 체크해주세요.";
        errMsg[2].style.display = "block"; 
        errMsg[2].classList.remove("success");
    }else if(passwordCheck.value !== password.value){
        errMsg[2].innerHTML = "비밀번호가 일치하지 않습니다.";
        errMsg[2].style.display = "block"; 
        errMsg[2].classList.remove("success");
    }else{
        errMsg[2].innerHTML = "비밀번호 확인이 완료되었습니다.";
        errMsg[2].style.display = "block";   
        errMsg[2].classList.add("success");
    }
}

function checkName(){
    if(username.value == ""){
        errMsg[3].innerHTML = "이름은 필수 정보입니다.";
        errMsg[3].style.display = "block";
    }else if(username.value.length > 10){
        errMsg[3].innerHTML = "이름은 10자 이하로 입력해주세요.";
        errMsg[3].style.display = "block";
    }else if(username.value.indexOf(" ") > -1){
        errMsg[3].innerHTML = "공백 없이 입력해주세요.";
        errMsg[3].style.display = "block";
    }else{
        errMsg[3].innerHTML = "올바른 이름 양식입니다.";
        errMsg[3].style.display = "block";   
        errMsg[3].classList.add("success");
    }
    
}

function checkEmail(){
    if(email.value == ""){
        errMsg[4].innerHTML = "이메일 입력은 필수 정보입니다.";
        errMsg[4].style.display = "block";
        errMsg[4].classList.remove("success");
    }else if(!emailPttern.test(email.value)) {
        errMsg[4].innerHTML = "올바른 이메일 양식으로 입력해주세요.";
        errMsg[4].style.display = "block";
        errMsg[4].classList.remove("success");
    }else{
        errMsg[4].innerHTML = "올바른 이메일 양식입니다.";
        errMsg[4].style.display = "block";
        errMsg[4].classList.add("success");
    }
}

function checkDepartment(){
    if(department.value == ""){
        errMsg[5].innerHTML = "부서선택은 필수 정보입니다.";
        errMsg[5].style.display = "block";
    }else{
        errMsg[5].innerHTML = "";
        errMsg[5].style.display = "none";
        errMsg[5].classList.add("success");
    }
}

function checkAuthority(){
    if(authority.value == ""){
        errMsg[6].innerHTML = "권한선택은 필수 정보입니다.";
        errMsg[6].style.display = "block";
    }else{
        errMsg[6].innerHTML = "";
        errMsg[6].style.display = "none";
        errMsg[6].classList.add("success");
    }
}




function signupEvent() {
    if (id.value == "" || username.value == "" || email.value == "" || password.value == "" || department.value == "" || authority.value == "" ) {
        alert("모든 필드는 입력은 필수 입니다.");
    }else if(uncheckid.value == "N"){
        alert('아이디 중복체크를 해주세요 하고 중복체크 action.jsp로 넘기기');
        errMsg[0].style.display = "none";
        errMsg[0].classList.remove("success");
    }else if(uncheckemail.value == "N"){
        alert('이메일 중복체크를 해주세요 하고 중복체크 action.jsp로 넘기기');
        errMsg[4].style.display = "none";
        errMsg[4].classList.remove("success");
    }else{
        if(errMsg[0].classList.contains("success") && errMsg[1].classList.contains("success") && errMsg[2].classList.contains("success") && errMsg[3].classList.contains("success") && errMsg[4].classList.contains("success") && errMsg[5].classList.contains("success")){
            alert("유효성 체크 성공, 회원가입 action.jsp로 넘겨주기");
        }else{
            alert("잘못된 필드 입력을 확인해주세요.")
        }
    }
}


function dbidCheck(){
    // if 사용 가능한 아이디라면(백엔드 통신으로 가능한지 모르겟으나 해볼 예정)
    uncheckid.value = "Y";
    alert("중복체크가 완료되었습니다");
    checkid.value = "중복체크 완료"; 
    errMsg[0].classList.add("success");
}

function dbemailCheck(){
    // if 사용 가능한 이메일 이라면(백엔드 통신으로 가능한지 모르겟으나 해볼 예정)
    uncheckemail.value = "Y";
    alert("중복체크가 완료되었습니다");
    checkemail.value = "중복체크 완료"; 
    errMsg[4].classList.add("success");
}



