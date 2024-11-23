var id = document.getElementById("id");
var idlogin = document.getElementById("idlogin");
var getcheckid = document.getElementById("checkid");
var uncheckid = document.getElementById("uncheckid");
var password = document.getElementById("password");
var passwordCheck = document.getElementById("passwordCheck");
var username = document.getElementById("name");
var email = document.getElementById("email");
var department = document.getElementById("department");
var authority = document.getElementById("authority");

var errMsg = document.querySelectorAll('.errmsg');
var idPttern = /^[a-zA-Z0-9]{4,20}$/; // 영문과 숫자 조합 4~20자
var pwPttern =  /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()]{4,20}$/; // 영문 + 숫자 필수 특수문자 사용가능 4~20자
var emailPttern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// 이메일 정규표현식


id.addEventListener("focusout", checkId);
password.addEventListener("focusout", checkPw);
passwordCheck.addEventListener("focusout", comparePw);
username.addEventListener("focusout", checkName);
email.addEventListener("focusout", checkEmail);
department.addEventListener("focusout", checkDepartment);
authority.addEventListener("focusout", checkAuthority);
idlogin.addEventListener("focusout", checkIdlogin);

function checkId(){
    if (id.value == "") {
        errMsg[0].innerHTML = "아이디는 필수 정보입니다.";
        errMsg[0].style.display = "block";
    }else if(!idPttern.test(id.value)){
        errMsg[0].innerHTML = "아이디는 4자 이상 20자 이하의 영문 or 숫자 or 영문+숫자 조합으로 입력해주세요.";
        errMsg[0].style.display = "block";      
    }else if(id.value.indexOf(" ") > -1){
        errMsg[0].innerHTML = "공백 없이 입력해주세요.";
        errMsg[0].style.display = "block";
    }else if(uncheckid.value == "N"){
        alert('아이디 중복체크를 해주세요 하고 중복체크 action.jsp로 넘기기');
        errMsg[0].style.display = "none";
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
        password.focus();
        errMsg[1].innerHTML = "비밀번호는 4자이상 20자 이하로 영문 + 숫자 필수 포함으로 입력해주세요.";
        errMsg[1].style.display = "block";      
    }else if(password.value.indexOf(" ") > -1){
        password.focus();
        errMsg[1].innerHTML = "공백 없이 입력해주세요.";
        errMsg[1].style.display = "block";
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
    }else if(passwordCheck.value !== password.value){
        passwordCheck.focus();
        errMsg[2].innerHTML = "비밀번호가 일치하지 않습니다.";
        errMsg[2].style.display = "block"; 
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
    }else if(!emailPttern.test(email.value)) {
        email.focus();
        errMsg[4].innerHTML = "올바른 이메일 양식으로 입력해주세요.";
        errMsg[4].style.display = "block";
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


function checkIdlogin(){
    if (idlogin.value == "") {
        errMsg[0].innerHTML = "아이디는 필수 정보입니다.";
        errMsg[0].style.display = "block";
    }else if(!idPttern.test(idlogin.value)){
        errMsg[0].innerHTML = "아이디는 4자 이상 20자 이하의 영문 or 숫자 or 영문+숫자 조합으로 입력해주세요.";
        errMsg[0].style.display = "block";      
    }else if(idlogin.value.indexOf(" ") > -1){
        errMsg[0].innerHTML = "공백 없이 입력해주세요.";
        errMsg[0].style.display = "block";
    }else{
        errMsg[0].innerHTML = "올바른 아이디 양식입니다.";
        errMsg[0].style.display = "block";
        errMsg[0].classList.add("success");
    }
}


function signupEvent() {
    if (id.value == "" || username.value == "" || email.value == "" || password.value == "" || department.value == "" || authority.value == "" ) {
        alert("모든 필드는 입력은 필수 입니다.");
    }else{
        checkId();
        checkPw();
        comparePw();
        checkName();
        checkEmail();
        checkDepartment();
        checkAuthority();

        if(errMsg[0].classList.contains("success") && errMsg[1].classList.contains("success") && errMsg[2].classList.contains("success") && errMsg[3].classList.contains("success") && errMsg[4].classList.contains("success") && errMsg[5].classList.contains("success")){
            alert("유효성 체크 성공, 회원가입 action.jsp로 넘겨주기");
        }else{
            alert("잘못된 필드 입력을 확인해주세요.")
        }
    }
}

function loginEvent(){
    if (id.value == "" || password.value == "" ) {
        alert("모든 필드는 입력은 필수 입니다.");
    }else{
        checkIdlogin();
        checkPw();
        if(errMsg[0].classList.contains("success") && errMsg[1].classList.contains("success")){
            alert("로그인 성공, 로그인 action.jsp로 넘겨주기");
        }else{
            alert("잘못된 필드 입력을 확인해주세요.")
        }
    }
}


function loginPageEvent(){
    location.href = '../page/loginPage.jsp'
}

function signupPageEvent(){
    location.href = '../page/signupPage.jsp'
}

function findidPageEvent(){
    location.href = '../page/findidPage.jsp'
}

function findpwPageEvent(){
    location.href = '../page/findpwPage.jsp'
}

function dbidCheck(){
    // if 사용 가능한 아이디라면(백엔드 통신으로 가능한지 모르겟으나 해볼 예정)
    uncheckid.value = "Y";
    alert("중복체크가 완료되었습니다");
    checkid.value = "중복체크 완료"; 
    errMsg[0].classList.add("success");
}

