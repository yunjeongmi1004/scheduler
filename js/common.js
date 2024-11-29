var idPttern = /^[a-zA-Z0-9]{4,20}$/; // 영문과 숫자 조합 4~20자
var pwPttern =  /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()]{4,20}$/; // 영문 + 숫자 필수 특수문자 사용가능 4~20자
var emailPttern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// 이메일 정규표현식
var errMsg = document.querySelectorAll('.errmsg');

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
